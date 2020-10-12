import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { Button, Modal, Form } from "react-bootstrap";
import Register from "./Register";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* pop toggle button */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={handleShow}>Login</a>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        {/* modal header */}
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        {/* modal body */}
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

const LoginForm = () => {
  // setup form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  // yup schema for validation
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        {
          message: "Please Enter a valid Email",
          excludeEmptyString: true,
        }
      )
      .required(),
    password: yup
      .string()
      .required()
      .min(6, "Password cannot be less than 6 characters"),
  });

  // get what we need from useform()
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // execute here when form is submitted
  const onSubmit = (data) => {
    setLogin(true);

    const method = "post",
      url = "https://ideas-app-api.herokuapp.com/users/read",
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

    // login
    axios({ url, method, headers, data })
      .then((result) => {
        console.log(result.data.token);
        // create cookie with the token returned
        cookies.set("ONYE-NA-ENYO-ISI-YA-ANA-APUTA", result.data.token, {
          path: "/",
        });
        // redirect user to the feeds page
        window.location.href = "/dashboard";

        setLogin(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLogin(false);
      });
  };

  if (login) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <Form.Group controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={email}
            ref={register}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />

          {/* error message for email */}
          <p className="text-danger">
            <b>
              <i>{errors.email?.message}</i>
            </b>
          </p>
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            name="password"
            ref={register}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password not less than 6 characters"
          />

          {/* error message for password */}
          <p className="text-danger">
            <b>
              <i>{errors.password?.message}</i>
            </b>
          </p>
        </Form.Group>

        <p>
          Don't have an account? <Register />
        </p>

        <Button type="submit">Login</Button>
      </Form>
    </>
  );
};
