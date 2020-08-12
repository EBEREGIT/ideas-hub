import React from "react";
import { Row, Col } from "react-bootstrap";
import EachProject from "./EachProject";

let projects = [];

for (let project = 0; project < 12; project++) {
    projects.push(<EachProject />)
}

export default function DashboardProjects() {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h3>Projects</h3>
      </Col>

      {projects}
    </Row>

    
  );
}
