// external imports
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

// internal imports
import Login from "./Login";
import ButtonSpinner from "../Helpers/ButtonSpinner";

// initializations
const cookies = new Cookies();

export default function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* pop toggle button */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={handleShow}>Register</a>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        {/* modal header */}
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>

        {/* modal body */}
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

const RegisterForm = () => {
  // setup form fields
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);

  // yup schema for validation
  const schema = yup.object().shape({
    userName: yup
      .string()
      .required(),
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
    setRegistering(true);

    const method = "post",
      url = "https://ideas-app-api.herokuapp.com/users/create",
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

    // register
    axios({ url, method, headers, data })
      .then(() => {
        // login parameters
        const loginURL = "https://ideas-app-api.herokuapp.com/users/read",
          loginData = {
            email: data.email,
            password: data.password,
          };

        // login
        axios({ url: loginURL, method, headers, data: loginData })
          .then((loginResult) => {
            // create cookie with the token returned
            cookies.set(
              "ONYE-NA-ENYO-ISI-YA-ANA-APUTA",
              loginResult.data.token,
              {
                path: "/",
              }
            );
            // redirect user to the feeds page
            window.location.href = "/dashboard";
          })

          // login error
          .catch((error) => {
            error = new Error();
            setRegistering(false);
          });
      })

      // register error
      .catch((error) => {
        error = new Error();
        setRegistering(false);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* userName */}
        <Form.Group controlId="userName">
          <Form.Label>userName </Form.Label>
          <Form.Control
            type="text"
            name="userName"
            value={userName}
            ref={register}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="userName"
          />

          {/* error message for userName */}
          <p className="text-danger">
            <b>
              <i>{errors.userName?.message}</i>
            </b>
          </p>
        </Form.Group>

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
          Already Registered? <Login />
        </p>

        <Button type="submit">
          {registering ? <ButtonSpinner message="Registering..." /> : "Register"}
        </Button>
      </Form>
    </>
  );
};
