import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import EditProject from "./EditProject";
import ProjectDetails from "../../../ProjectDetails";

export default function EachProject(props) {
  return (
    <Col xs={12} sm={6} md={4} lg={4}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          {/* title */}

          <Card.Title>{props.projectTitle}</Card.Title>
          {/* more details */}
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

        {/* buttons */}
        <Card.Body>
          {/* edit */}
          <IconContext.Provider
            value={{ style: { color: "orange", fontSize: "1.5em" } }}
          >
            <Button>
              <EditProject
                editId={props.id}
                projectTitle={props.projectTitle}
                instructionURL={props.instructionURL}
                otherDetails={props.otherDetails}
                sampleURL={props.sampleURL}
                seniority={props.seniority}
              />
            </Button>
          </IconContext.Provider>

          {/* delete */}
          <IconContext.Provider
            value={{ style: { color: "red", fontSize: "1.5em" } }}
          >
            <Button>
              <RiDeleteBin5Line />
            </Button>
          </IconContext.Provider>
        </Card.Body>
      </Card>
    </Col>
  );
}
