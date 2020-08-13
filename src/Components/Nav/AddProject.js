import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import InstructionURLToolTip from "../Helpers/InstructionURLToolTip";
import SampleURLToolTip from "../Helpers/SampleURLTooltip";
import OtherDetailsToolTip from "../Helpers/OtherDetailsToolTip";

export default function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* pop toggle button */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={handleShow}>
        Add_Project
      </a>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        {/* modal header */}
        <Modal.Header closeButton>
          <Modal.Title>Add a Project</Modal.Title>
        </Modal.Header>

        {/* modal body */}
        <Modal.Body>
          <AddProjectForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

const AddProjectForm = () => {
  return (
    <>
      <Form>
        {/* project title */}
        <Form.Group controlId="projectTitle">
          <Form.Label>Project Title </Form.Label>
          <Form.Control type="text" placeholder="Project Title" />
        </Form.Group>

        {/* seniority */}
        <Form.Group controlId="seniority">
          <Form.Label>Seniority</Form.Label>
          <Form.Control as="select">
            <option>Select Seniority</option>
            <option>Beginner/Junior</option>
          </Form.Control>
        </Form.Group>

        {/* Sample Project URL */}
        <Form.Group controlId="sampleURL">
          <Form.Label>Sample Project URL</Form.Label>
          <SampleURLToolTip />
          <Form.Control
            type="url"
            placeholder="Enter a URL to an already existing project as a sample"
          />
        </Form.Group>

        {/*  Project Instruction URL */}
        <Form.Group controlId="InstructionURL">
          <Form.Label>Project Instruction URL</Form.Label>
          <InstructionURLToolTip />
          <Form.Control
            type="url"
            placeholder="Enter a URL to instructions on how to carry out the project."
          />
        </Form.Group>

        {/* other Details */}
        <Form.Group controlId="otherDetails">
          <Form.Label>Other Details</Form.Label>
          <OtherDetailsToolTip />
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Enter any other details you think beginners should know."
          />
        </Form.Group>

        <Button className="custom-btn">Add Project</Button>
      </Form>
    </>
  );
};
