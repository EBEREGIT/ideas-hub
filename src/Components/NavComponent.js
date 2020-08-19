import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import IsLoggedIn from "./Helpers/IsLoggedIn";

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
          <Button>
            <FaSearch />
          </Button>
        </Form>

        {/* toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* collapseable menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <IsLoggedIn />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
