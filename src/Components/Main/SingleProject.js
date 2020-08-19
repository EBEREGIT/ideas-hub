import React from "react";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ProjectDetails from "../../ProjectDetails";

export default function SingleProject(props) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          {/* title */}
          <Card.Title>{props.projectTitle}</Card.Title>
          {/* username of uploader */}
          <Card.Subtitle className="mb-2 text-muted">
            @{props.userName}
          </Card.Subtitle>
        </Card.Body>

        {/* Date created and editted */}
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <span>Cr:</span> {props.createdAt} | <span>Ed:</span> {props.updatedAt}
          </ListGroupItem>
        </ListGroup>

        {/* more details */}
        <Card.Body>
          <ProjectDetails />
        </Card.Body>
      </Card>
    </Col>
  );
}
