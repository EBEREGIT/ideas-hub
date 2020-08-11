import React from "react";
import { Row, Col } from "react-bootstrap";
import FooterLinks from "./Footer/FooterLinks";
import FooterAbout from "./Footer/FooterAbout";
import FooterContact from "./Footer/FooterContact";

export default function Footer() {
  return (
    <footer className="wrapper">
      {/* Top Footer */}
      <Row>
        <FooterLinks />
        <FooterAbout />
        <FooterContact />
      </Row>

      {/* Lower Footer */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center lower-footer">
          <h5>
            Designed and Developed by
            <a href="https://twitter.com/eberetwit"> Njoku Samson Ebere</a>
          </h5>
        </Col>
      </Row>
    </footer>
  );
}
