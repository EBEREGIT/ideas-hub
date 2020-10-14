import React from "react";
import { Spinner } from "react-bootstrap";

export default function ButtonSpinner(props) {
  return (
    <section id="btn-spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <span>{props.message}</span>
    </section>
  );
}
