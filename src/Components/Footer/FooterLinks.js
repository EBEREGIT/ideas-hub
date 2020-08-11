import React from "react";
import { Col, ListGroup } from "react-bootstrap";

export default function FooterLinks() {
  return (
    <Col xs={12} sm={12} md={3} lg={3}>
        <h4 className="footer-headings"><span>Shortcuts</span></h4>
      <ListGroup variant="flush">
        <ListGroup.Item><a href="/">Projects</a></ListGroup.Item>
        <ListGroup.Item><a href="/">Add Project</a></ListGroup.Item>
        <ListGroup.Item><a href="/">Register</a></ListGroup.Item>
        <ListGroup.Item><a href="/">Login Shop</a></ListGroup.Item>
      </ListGroup>
    </Col>
  );
}
