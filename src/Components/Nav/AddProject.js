import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import InstructionURLToolTip from "../Helpers/InstructionURLToolTip";
import SampleURLToolTip from "../Helpers/SampleURLTooltip";
import OtherDetailsToolTip from "../Helpers/OtherDetailsToolTip";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* pop toggle button */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={handleShow}>Add_Project</a>

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
  // set initial state here
  const [projectName, setProjectName] = useState(""),
    [seniority, setSeniority] = useState(""),
    [sampleURL, setSampleURL] = useState(""),
    [instructionURL, setInstructionURL] = useState(""),
    [otherDetails, setOtherDetails] = useState("");

  // validation schema
  const schema = yup.object().shape({
    projectName: yup.string().required().min(4),
    seniority: yup.string().required().min(4),
    sampleURL: yup
      .string()
      .required()
      .url(),
    instructionURL: yup
      .string()
      .required()
      .url(),
    otherDetails: yup.string().required(),
  });

  // get what we need from useform()
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // execute here when form is submitted
  const onSubmit = (data) => {
    // get cookie from browser if logged in
    const token = cookies.get("ONYE-NA-ENYO-ISI-YA-ANA-APUTA"),
      method = "post",
      url = "https://ideas-app-api.herokuapp.com/projects/create",
      headers = {
        Authorization: `Bearer ${token}`,
      };

      // login
    axios({ url, method, headers, data })
    .then((result) => {
      console.log(result);
      // redirect user to the feeds page
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* project title */}
        <Form.Group controlId="projectTitle">
          <Form.Label>Project Title </Form.Label>
          <Form.Control
            type="text"
            name="projectName"
            val={projectName}
            ref={register}
            placeholder="Project Title"
            onChange={(e) => setProjectName(e.target.value)}
          />

          {/* error message */}
          <p className="text-danger">
            <b>
              <i>{errors.projectName?.message}</i>
            </b>
          </p>
        </Form.Group>

        {/* seniority */}
        <Form.Group controlId="seniority">
          <Form.Label>Seniority</Form.Label>
          <Form.Control
            as="select"
            name="seniority"
            value={seniority}
            ref={register}
            onChange={(e) => setSeniority(e.target.value)}
          >
            <option>Select Seniority</option>
            <option>Beginner/Junior</option>
          </Form.Control>

          {/* error message */}
          <p className="text-danger">
            <b>
              <i>{errors.seniority?.message}</i>
            </b>
          </p>
        </Form.Group>

        {/* Sample Project URL */}
        <Form.Group controlId="sampleURL">
          <Form.Label>Sample Project URL</Form.Label>
          <SampleURLToolTip />
          <Form.Control
            type="text"
            name="sampleURL"
            valur={sampleURL}
            ref={register}
            placeholder="Enter a URL to an already existing project as a sample"
            onChange={(e) => setSampleURL(e.target.value)}
          />

          {/* error message */}
          <p className="text-danger">
            <b>
              <i>{errors.sampleURL?.message}</i>
            </b>
          </p>
        </Form.Group>

        {/*  Project Instruction URL */}
        <Form.Group controlId="InstructionURL">
          <Form.Label>Project Instruction URL</Form.Label>
          <InstructionURLToolTip />
          <Form.Control
            type="text"
            name="instructionURL"
            value={instructionURL}
            ref={register}
            placeholder="Enter a URL to instructions on how to carry out the project."
            onChange={(e) => setInstructionURL(e.target.value)}
          />

          {/* error message */}
          <p className="text-danger">
            <b>
              <i>{errors.instructionURL?.message}</i>
            </b>
          </p>
        </Form.Group>

        {/* other Details */}
        <Form.Group controlId="otherDetails">
          <Form.Label>Other Details</Form.Label>
          <OtherDetailsToolTip />
          <Form.Control
            as="textarea"
            name="otherDetails"
            value={otherDetails}
            ref={register}
            rows="3"
            placeholder="Enter any other details you think beginners should know."
            onChange={(e) => setOtherDetails(e.target.value)}
          />

          {/* error message */}
          <p className="text-danger">
            <b>
              <i>{errors.otherDetails?.message}</i>
            </b>
          </p>
        </Form.Group>

        <Button className="custom-btn" type="submit">
          Add Project
        </Button>
      </Form>
    </>
  );
};
