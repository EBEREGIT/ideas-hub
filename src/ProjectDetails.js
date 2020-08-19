import React, { useState } from "react";
import { ListGroup, Modal } from "react-bootstrap";

export default function ProjectDetails(props) {
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
          <Modal.Title>{props.projectTitle}</Modal.Title>
        </Modal.Header>

        {/* modal body */}
        <Modal.Body>
          <Details
            instructionURL={props.instructionURL}
            otherDetails={props.otherDetails}
            sampleURL={props.sampleURL}
            seniority={props.seniority}
          />
        </Modal.Body>

        {/* modal footer */}
        <Modal.Footer>
          <p>
            @{props.userName} || <span>Cr:</span> {props.createdAt} || {" "}
            <span>Ed:</span> {props.updatedAt}
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const Details = (props) => {
  return (
    <>
      <ListGroup variant="flush">
        {/* seniority */}
        <ListGroup.Item>
          <h5>Seniority</h5>
          <p>{props.seniority}</p>
        </ListGroup.Item>

        {/* sample URL */}
        <ListGroup.Item>
          <h5>Sample Project</h5>
          <a href={props.sampleURL} target="_blank" rel="noopener noreferrer">
            {props.sampleURL}
          </a>
        </ListGroup.Item>

        {/* instructions url */}
        <ListGroup.Item>
          <h5>Project Instruction</h5>
          <a
            href={props.instructionURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.instructionURL}
          </a>
        </ListGroup.Item>

        {/* other details */}
        <ListGroup.Item>
          <h5>Other Details</h5>
          <p>{props.otherDetails}</p>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
