// external imports
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

// internal imports
import SingleProject from "../Components/Main/SingleProject";

// let projects = [];

// for (let project = 0; project < 20; project++) {
//   projects.push(<SingleProject />);
// }

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
        console.log(result.data.result);
        setProjects(result);
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

      {/* <Row>{projects}</Row> */}
    </main>
  );
}
