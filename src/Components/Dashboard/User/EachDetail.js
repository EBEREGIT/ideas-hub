import React from "react";
import { Col, Card } from "react-bootstrap";

export default function EachDetail(props) {
  return (
    <Col xs={12} sm={6} md={4} lg={4}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          {/* body */}
          <Card.Title>{props.body}</Card.Title>
          {/* title */}
          <Card.Subtitle className="mb-2 text-muted">
            {props.title}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}
