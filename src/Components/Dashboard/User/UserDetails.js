import React from "react";
import { Row } from "react-bootstrap";
import Cookies from "universal-cookie";

// internal imports
import EachDetail from "./EachDetail";

// initialization
const cookies = new Cookies();

export default function UserDetails(props) {
  // get cookie from browser if logged in
  const token = cookies.get("ONYE-NA-ENYO-ISI-YA-ANA-APUTA");

  // decode the logged in user
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  // loggedin user
  const user = parseJwt(token)

  return (
    <Row>
      <EachDetail title="Username" body={user.userName} />
      <EachDetail title="Email" body={user.userEmail} />
      <EachDetail title="Total Projects Uploaded" body={props.totalProjectsUploaded} />
    </Row>
  );
}
