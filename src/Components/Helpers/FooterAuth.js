// external imports
import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import Cookies from "universal-cookie";

// internal imports
import AddProject from "../Nav/AddProject";
import Login from "../Account/Login";
import Register from "../Account/Register";
import Logout from "../Account/Logout";

// initialization
const cookies = new Cookies();

export default function FooterAuth() {
  // get cookie from browser if logged in
  const token = cookies.get("ONYE-NA-ENYO-ISI-YA-ANA-APUTA");

  //   check if logged in
  if (token) {
    //   display these if logged in
    return (
      <>
        <ListGroup.Item><AddProject /></ListGroup.Item>

        <ListGroup.Item id="footer-dashboard"><Nav.Link href="/dashboard" className="auth_links">Dashboard</Nav.Link></ListGroup.Item>

        <ListGroup.Item><Logout /></ListGroup.Item>
      </>
    );
  } else {
    //   display these if not logged in
    return (
      <>
        <ListGroup.Item><Register /></ListGroup.Item>
        <ListGroup.Item><Login /></ListGroup.Item>
      </>
    );
  }
}
