import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UserDetails from "../Components/Dashboard/User/UserDetails";
import DashboardProjects from "../Components/Dashboard/Projects/DashboardProjects";

export default function Dashboard() {
  return (
    <main className="wrapper dashboard">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1>Dashboard</h1>
          </Col>
        </Row>

        <UserDetails />
        <DashboardProjects />
      </Container>
    </main>
  );
}
