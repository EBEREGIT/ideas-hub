import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* pop toggle button */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={handleShow}>
        Register
      </a>

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
  return (
    <>
      <Form>
        {/* username */}
        <Form.Group controlId="username">
          <Form.Label>Username </Form.Label>
          <Form.Control type="text" placeholder="Username not less than 3 characters" />
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control type="password" placeholder="Password not less than 6 characters" />
        </Form.Group>

        <Button>Register</Button>
      </Form>
    </>
  );
};
