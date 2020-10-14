// external imports
import React from "react";
import { Row, Col } from "react-bootstrap";

// internal imports
import SingleProject from "../Main/SingleProject";
import formatDate from "../Helpers/FormatDate";

export default function ProjectTitleResult(props) {
  // get props from parent
  const projectTitleResult = props.projectTitleResult;
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h4 className="search_result">
            Results from Project Title:
            <span className="text-danger">
              {props.total ? (
                <strong> {props.total}</strong>
              ) : (
                " No Match Found"
              )}
            </span>
          </h4>
        </Col>
      </Row>

      <Row>
        {projectTitleResult &&
          projectTitleResult.length > 0 &&
          projectTitleResult.map((project) => (
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
    </>
  );
}
