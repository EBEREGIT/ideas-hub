import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import AddProject from "./Nav/AddProject";

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
          <Button>Search</Button>
        </Form>

        {/* toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* collapseable menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* menu */}
            <AddProject />

            {/* Account */}
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
