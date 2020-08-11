import React from "react";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function SingleProject() {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          {/* title */}
          <Card.Title>Project Title</Card.Title>
          {/* username of uploader */}
          <Card.Subtitle className="mb-2 text-muted">
            @ebereplenty
          </Card.Subtitle>
        </Card.Body>

        {/* Date created and editted */}
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <span>Cr:</span> 11 Aug, 2020 | <span>Ed:</span> 12 Nov, 2020
          </ListGroupItem>
        </ListGroup>

        {/* more details */}
        <Card.Body>
          <Card.Link href="#">See Full Details</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
