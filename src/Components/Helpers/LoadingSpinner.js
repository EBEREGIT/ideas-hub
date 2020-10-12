import React from "react";
import { Row, Spinner } from "react-bootstrap";

export default function LoadingSpinner(props) {
  return (
    <section id="loading-spinner">
      {/* spinner */}
      <Row id="spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">{props.message}</span>
        </Spinner>
      </Row>

      {/* spinner message */}
      <Row id="loading-text">
        <h3 className="text-center">{props.message}</h3>
      </Row>
    </section>
  );
}
