import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import FooterAuth from "../Helpers/FooterAuth";

export default function FooterLinks() {
  return (
    <Col xs={12} sm={12} md={3} lg={3}>
      <h4 className="footer-headings">
        <span>Shortcuts</span>
      </h4>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <a href="/projects">Projects</a>
        </ListGroup.Item>
        <FooterAuth />
      </ListGroup>
    </Col>
  );
}
