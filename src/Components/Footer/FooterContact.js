import React from "react";
import { Col, Form, Button } from "react-bootstrap";

export default function FooterContact() {
  return (
    <Col xs={12} sm={12} md={4} lg={4}>
      <h4 className="footer-headings">Contact</h4>

      <Form>
        {/* email */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        {/* message */}
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="5" />
        </Form.Group>

        <Button>Submit</Button>
      </Form>
    </Col>
  );
}
