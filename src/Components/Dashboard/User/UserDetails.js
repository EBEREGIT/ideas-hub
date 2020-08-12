import React from "react";
import { Row } from "react-bootstrap";
import EachDetail from "./EachDetail";

export default function UserDetails() {
  return (
    <Row>
      <EachDetail title="Username" body="ebereplenty" />
      <EachDetail title="Email" body="ebere@plenty.com" />
      <EachDetail title="Total Projects Uploaded" body="15" />
    </Row>
  );
}
