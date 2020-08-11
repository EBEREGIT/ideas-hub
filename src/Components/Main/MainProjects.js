import React from "react";
import SingleProject from "./SingleProject";
import { Col, Row, Pagination } from "react-bootstrap";

let projects = [];

for (let project = 0; project < 20; project++) {
  projects.push(<SingleProject />);
}

export default function MainProjects() {
  return (
    <>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h3 className="headings">PORTFOLIO-WORTHY-PROJECTS</h3>
      </Col>

      <Row>
        {projects}
        <Col xs={12} sm={12} md={12} lg={12} >
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} >
            <a href="#projects" className="see-all-btn">See All Projects</a>
        </Col>
      </Row>
    </>
  );
}
