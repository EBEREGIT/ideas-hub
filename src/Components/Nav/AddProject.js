import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* pop toggle button */}
      <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

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
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Project Title</Form.Label>
          <Form.Control type="text" placeholder="Project Title" />
        </Form.Group>

        {/* seniority */}
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Seniority</Form.Label>
          <Form.Control as="select">
            <option>Select Seniority</option>
            <option>Beginner/Junior</option>
          </Form.Control>
        </Form.Group>

        {/* Sample Project URL */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Sample Project URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter a URL to an already existing project as a sample"
          />
        </Form.Group>

        {/*  Project Instruction URL */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Project Instruction URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter a URL to instructions on how to carry out the project. It can be a google drive link"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Other Details</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Enter any other details you think begginners should know. This could also be the instructions"
          />
        </Form.Group>

        <Button>Add Project</Button>
      </Form>
    </>
  );
};
