import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown
} from "react-bootstrap";
import AddProject from "./Nav/AddProject";
import Login from "./Account/Login";
import Register from "./Account/Register";
import { FaSearch } from "react-icons/fa";

export default function NavComponent() {
  return (
    <>
      <Navbar expand="lg" className="wrapper" sticky="top">
        {/* logo */}
        <Navbar.Brand href="/">
          <img
          src="https://res.cloudinary.com/dunksyqjj/image/upload/v1597094132/LogoMakr_6cGYpQ_h58asa.png"
          width="35"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        </Navbar.Brand>

        {/* search form */}
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 shadow-none"
          />
          <Button><FaSearch /></Button>
        </Form>

        {/* toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* collapseable menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {/* menu */}
            <AddProject />

            {/* Account */}
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <Login />
              <Dropdown.Divider />
              <Register />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
