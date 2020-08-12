import React from "react";
import { Row } from "react-bootstrap";
import FooterLinks from "./Footer/FooterLinks";
import FooterAbout from "./Footer/FooterAbout";
import FooterContact from "./Footer/FooterContact";
import FooterBottom from "./Footer/FooterBottom";

export default function Footer() {
  return (
    <footer className="wrapper">
      {/* Top Footer */}
      <Row id="footer-top">
        <FooterLinks />
        <FooterAbout />
        <FooterContact />
      </Row>

      {/* Lower Footer */}
      <Row>
        <FooterBottom />
      </Row>
    </footer>
  );
}
