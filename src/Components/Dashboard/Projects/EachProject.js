import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import EditProject from "./EditProject";
import ProjectDetails from "../../../ProjectDetails";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function EachProject(props) {
  // delete project here
  const deleteProject = (id) => {
    // get cookie from browser if logged in
    const token = cookies.get("ONYE-NA-ENYO-ISI-YA-ANA-APUTA"),
      method = "delete",
      url = `https://ideas-app-api.herokuapp.com/projects/delete/${id}`,
      headers = {
        Authorization: `Bearer ${token}`,
      };

    // delete 
    axios({ url, method, headers })
      .then((result) => {
        console.log(result);
        // redirect user to the dashboard page
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
            <Button onClick={() => deleteProject(props.id)}>
              <RiDeleteBin5Line />
            </Button>
          </IconContext.Provider>
        </Card.Body>
      </Card>
    </Col>
  );
}
