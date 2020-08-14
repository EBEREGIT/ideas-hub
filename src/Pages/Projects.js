import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleProject from "../Components/Main/SingleProject";

let projects = [];

for (let project = 0; project < 20; project++) {
  projects.push(<SingleProject />);
}

export default function Projects() {
  return (
    <main className="wrapper">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1 className="headings">Portfolio-Worthy-Project</h1>
        </Col>
      </Row>

      <Row>{projects}</Row>
    </main>
  );
}
