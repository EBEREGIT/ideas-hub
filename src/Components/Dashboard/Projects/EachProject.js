import React from "react";
import { Col, Card, Button } from "react-bootstrap";

export default function SingleProject() {
  return (
    <Col xs={12} sm={6} md={4} lg={4}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          {/* title */}
          <Card.Title>Project Title</Card.Title>
          {/* more details */}
          <Card.Link href="#">See Full Details</Card.Link>

          <Button>Edit</Button>
          <Button>Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
