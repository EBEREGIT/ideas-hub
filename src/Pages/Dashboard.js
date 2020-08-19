// external imports
import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import UserDetails from "../Components/Dashboard/User/UserDetails";
import DashboardProjects from "../Components/Dashboard/Projects/DashboardProjects";
import axios from "axios";
import Cookies from "universal-cookie";

// initialization
const cookies = new Cookies();

export default function Dashboard() {
  // set state
  const [projects, setProjects] = useState([]);

  // make API call
  useEffect(() => {
    // get cookie from browser if logged in
    const token = cookies.get("ONYE-NA-ENYO-ISI-YA-ANA-APUTA"),
      method = "get",
      url = "https://ideas-app-api.herokuapp.com/projects/user",
      headers = {
        Authorization: `Bearer ${token}`,
      };

    // login
    axios({ url, method, headers })
      .then((result) => {
        setProjects(result.data.result);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <main className="wrapper dashboard">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1>Dashboard</h1>
          </Col>
        </Row>

        <UserDetails totalProjectsUploaded={projects.length}/>
        <DashboardProjects projects={projects} />
      </Container>
    </main>
  );
}
