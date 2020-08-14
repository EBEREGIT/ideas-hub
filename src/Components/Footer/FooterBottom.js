import React from "react";
import { Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  FaDev,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

export default function FooterBottom() {
  return (
    <Col xs={12} sm={12} md={12} lg={12} id="lower-footer">
      <h5>
        Designed and Developed by
        <a href="https://twitter.com/eberetwit"> Njoku S. E.</a>
      </h5>

      <IconContext.Provider
        value={{ style: { fontSize: "30px", marginRight: "2%" } }}
      >
        <p>
          {/* website */}
          <a href="https://github.com/EBEREGIT">
            <FaGlobe />
          </a>

          {/* devto */}
          <a href="https://dev.to/ebereplenty">
            <FaDev />
          </a>

          {/* twitter */}
          <a href="https://twitter.com/eberetwit">
            <FaTwitter />
          </a>

          {/* linkedin */}
          <a href="https://www.linkedin.com/in/samson-ebere-njoku-profile/">
            <FaLinkedin />
          </a>

          {/* github */}
          <a href="https://github.com/EBEREGIT">
            <FaGithub />
          </a>
        </p>
      </IconContext.Provider>
    </Col>
  );
}
