import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import EditProject from "./EditProject";

export default function EachProject() {
  return (
    <Col xs={12} sm={6} md={4} lg={4}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          {/* title */}

          <Card.Title>Project Title</Card.Title>
          {/* more details */}
          <Card.Link href="#">See Full Details</Card.Link>
        </Card.Body>

        {/* buttons */}
        <Card.Body>
          {/* edit */}
          <IconContext.Provider
            value={{ style: { color: "orange", fontSize: "1.5em" } }}
          >
            <Button>
            <EditProject />
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
