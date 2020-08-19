// external imports
import React, { useEffect, useState } from "react";
import { Col, Row, Pagination } from "react-bootstrap";
import axios from "axios";

// local imports
import SingleProject from "./SingleProject";
import formatDate from "../Helpers/FormatDate";

export default function MainProjects() {
  // set initial state
  const [projects, setProjects] = useState([]);

  // make API call
  useEffect(() => {
    const method = "get",
      url = "https://ideas-app-api.herokuapp.com/projects/";

    // get projects
    axios({ url, method })
      .then((result) => {
        console.log(result.data.result)
        setProjects(result.data.result);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h3 className="headings">PORTFOLIO-WORTHY-PROJECTS</h3>
      </Col>

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
        <Col xs={12} sm={12} md={12} lg={12}>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12}>
          <a href="#projects" className="see-all-btn">
            See All Projects
          </a>
        </Col>
      </Row>
    </>
  );
}
