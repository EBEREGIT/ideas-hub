import React from "react";
import { Navbar, Nav, } from "react-bootstrap";
import IsLoggedIn from "./Helpers/IsLoggedIn";
import SearchForm from "./Nav/SearchForm";

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
        <SearchForm />

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
