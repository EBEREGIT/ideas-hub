import React from "react";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ProjectDetails from "../../ProjectDetails";

export default function SingleProject(props) {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
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
            <span>Cr:</span> {props.createdAt} | <span>Ed:</span>{" "}
            {props.updatedAt}
          </ListGroupItem>
        </ListGroup>

        {/* more details */}
        <Card.Body>
          <ProjectDetails
            projectTitle={props.projectTitle}
            userName={props.userName}
            createdAt={props.createdAt}
            updatedAt={props.updatedAt}
            instructionURL={props.instructionURL}
            otherDetails={props.otherDetails}
            sampleURL={props.sampleURL}
            seniority={props.seniority}
          />
        </Card.Body>
      </Card>
    </Col>
  );
}
