// external imports
import React from "react";
import { Row, Col } from "react-bootstrap";

// internal imports
import EachProject from "./EachProject";

export default function DashboardProjects(props) {
  // receive the projects from the parent (Dashboard)
  const projects = props.projects
  
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h3>Projects</h3>
      </Col>

      {/* all projects by a specific user */}
      {projects &&
        projects.length > 0 &&
        projects.map((project) => (
          <EachProject projectName={project.projectName} />
        ))}
    </Row>
  );
}
