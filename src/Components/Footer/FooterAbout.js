import React from "react";
import { Col } from "react-bootstrap";

export default function FooterAbout() {
  return (
    <Col xs={12} sm={12} md={5} lg={5}>
      <h4 className="footer-headings">About</h4>
      <p>
        Recruiters always complain that they don’t see portfolio-worthy-projects
        in most junior portfolio and so can't employ them.
      </p>

      <p>
        Beginners/juniors are always confused as to what projects they should do
        as beginners that can attract recruiters.
      </p>

      <p>
        Ideas Hub solves this problem as Recruiters and other advanced
        developers/designers can upload the kind of project that can make junior
        developers/designers employable.
      </p>
    </Col>
  );
}
