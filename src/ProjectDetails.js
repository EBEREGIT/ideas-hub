import React, { useState } from "react";
import { ListGroup, Modal } from "react-bootstrap";

export default function ProjectDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* pop toggle button */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={handleShow}>See Full Details</a>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        {/* modal header */}
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>

        {/* modal body */}
        <Modal.Body>
          <Details />
        </Modal.Body>

        {/* modal footer */}
        <Modal.Footer>
          <p>
            @ebereplenty | <span>Cr:</span> 11 Aug, 2020 | <span>Ed:</span> 12
            Nov, 2020
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const Details = () => {
  return (
    <>
      <ListGroup variant="flush">
        {/* seniority */}
        <ListGroup.Item>
          <h5>Seniority</h5>
          <p>Beginner/Junior</p>
        </ListGroup.Item>

        {/* sample URL */}
        <ListGroup.Item>
          <h5>Sample Project</h5>
          <a href="https://ideas-hub.netlify.app/">
            https://ideas-hub.netlify.app/
          </a>
        </ListGroup.Item>

        {/* instructions url */}
        <ListGroup.Item>
          <h5>Project Instruction</h5>
          <a href="https://ideas-hub.netlify.app/">
            https://ideas-hub.netlify.app/
          </a>
        </ListGroup.Item>

        {/* other details */}
        <ListGroup.Item>
          <h5>Other Details</h5>
          <p>
            Ideas Hub solves this problem as Recruiters and other advanced
            developers/designers can upload the kind of project that can make
            junior developers/designers employable.
          </p>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
