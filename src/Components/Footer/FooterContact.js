import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Col, Form, Button, Toast } from "react-bootstrap";
import ButtonSpinner from "../Helpers/ButtonSpinner";

export default function FooterContact() {
  // button loading
  const [loading, setLoading] = useState(false);
  // determines when to show success message
  const [feedback, setFeedback] = useState(false);

  // enables user to show or close message
  const [showMessage, setshowMessage] = useState(true);
  const toggleShowMessage = () => setshowMessage(!showMessage);

  // send email function
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_7m4bFXlR",
        e.target,
        "user_KSt383Tm21EIT8Cx4AoQI"
      )
      .then(
        () => {
          setLoading(false);
          setFeedback(true);
        },
        (error) => {
          error = new Error();
          setLoading(false);
        }
      );
  };

  return (
    <Col xs={12} sm={12} md={5} lg={5}>
      <h4 className="footer-headings">Leave a Message</h4>

      <Form onSubmit={sendEmail}>
        <Form.Row>
          {/* name */}
          <Form.Group as={Col} controlId="exampleForm.ControlInput1">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Your Name" />
          </Form.Group>

          {/* email */}
          <Form.Group as={Col} controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email Address"
            />
          </Form.Group>
        </Form.Row>

        {/* subject */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Subject of your message"
          />
        </Form.Group>

        {/* message */}
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message_body" rows="5" />
        </Form.Group>

        {/* feedback */}
        {feedback ? (
          <Toast show={showMessage} onClose={toggleShowMessage}>
            <Toast.Header>
              <strong className="mr-auto text-danger">
                Message Sent Successfully
              </strong>
            </Toast.Header>
          </Toast>
        ) : (
          ""
        )}

        <Button type="submit">
          {loading ? <ButtonSpinner message="Sending..." /> : "Send"}
        </Button>
      </Form>
    </Col>
  );
}
