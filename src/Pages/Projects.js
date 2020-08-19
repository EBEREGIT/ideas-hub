// external imports
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

// internal imports
import SingleProject from "../Components/Main/SingleProject";
import formatDate from "../Components/Helpers/FormatDate";

export default function Projects() {
  // set initial state
  const [projects, setProjects] = useState([]);

  // make API call
  useEffect(() => {
    const method = "get",
      url = "https://ideas-app-api.herokuapp.com/projects/";

    // get projects
    axios({ url, method })
      .then((result) => {
        setProjects(result.data.result);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <main className="wrapper">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1 className="headings">Portfolio-Worthy-Project</h1>
        </Col>
      </Row>

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
      </Row>
    </main>
  );
}
