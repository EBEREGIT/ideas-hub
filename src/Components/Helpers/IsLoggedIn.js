// external imports
import React from "react";
import { Nav } from "react-bootstrap";
import Cookies from "universal-cookie";

// internal imports
import AddProject from "../Nav/AddProject";
import Logout from "../Account/Logout";
import Login from "../Account/Login";
import Register from "../Account/Register";

// initialization
const cookies = new Cookies();

export default function IsLoggedIn() {
  // get cookie from browser if logged in
  const token = cookies.get("ONYE-NA-ENYO-ISI-YA-ANA-APUTA");

  //   check if logged in
  if (token) {
    //   display these if logged in
    return (
      <>
        <Nav.Link href="/dashboard" className="auth_links">Dashboard</Nav.Link>
        <AddProject />
        <Logout />
      </>
    );
  } else {
    //   display these if not logged in
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}
