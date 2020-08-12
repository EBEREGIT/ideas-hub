import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* pop toggle button */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={handleShow}>
        Login
      </a>

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
  return (
    <>
      <Form>
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

        <Button>Login</Button>
      </Form>
    </>
  );
};
