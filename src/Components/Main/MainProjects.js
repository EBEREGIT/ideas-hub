// external imports
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

// local imports
import SingleProject from "./SingleProject";
import formatDate from "../Helpers/FormatDate";
import LoadingSpinner from "../Helpers/LoadingSpinner";

export default function MainProjects() {
  // set initial state
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  // make API call
  useEffect(() => {
    const method = "get",
      url = "https://ideas-app-api.herokuapp.com/projects/";

    // get projects
    axios({ url, method })
      .then((result) => {
        setProjects(result.data.result);
        setProjectsLoading(false);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  // render here if projects are not retrieved from the DB yet
  if (projectsLoading) {
    return <LoadingSpinner message="Projects Loading..." />;
  }

  // render this if projects have been retrieved from the DB
  return (
    <>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h3 className="headings">PORTFOLIO-WORTHY-PROJECTS</h3>
      </Col>

      {/* all projects */}
      <Row>
        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <SingleProject
              projectTitle={project.projectName}
              userName={project.userName}
              createdAt={formatDate(project.createdAt)}
              updatedAt={formatDate(project.updatedAt)}
              // this is for the see more button
              instructionURL={project.instructionURL}
              otherDetails={project.otherDetails}
              sampleURL={project.sampleURL}
              seniority={project.seniority}
            />
          ))}

        {/* see all button */}
        <Col xs={12} sm={12} md={12} lg={12}>
          <a href="/projects" className="see-all-btn">
            See All Projects
          </a>
        </Col>
      </Row>
    </>
  );
}
