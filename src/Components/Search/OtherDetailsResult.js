// external imports
import React from "react";
import { Row, Col } from "react-bootstrap";

// internal imports
import SingleProject from "../Main/SingleProject";
import formatDate from "../Helpers/FormatDate";

export default function OtherDetailsResult(props) {
  // get props from parent
  const otherDetailsResult = props.otherDetailsResult;
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h4 className="search_result">
            Results from Other Details:
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
        {otherDetailsResult &&
          otherDetailsResult.length > 0 &&
          otherDetailsResult.map((project) => (
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
