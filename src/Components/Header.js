import React from "react";
import { Carousel } from "react-bootstrap";

export default function Header() {
  return (
    <header className="spikes">
      <h1>Ideas.  Repo.</h1>

      {/* slider */}
      <Carousel>
        {/* item 1 */}
        <Carousel.Item>
          <h4>Find Portfolio-Worthy-Project That Will Attract Recruiters</h4>
          <p>Dear Begginers</p>
        </Carousel.Item>

        {/* item 2 */}
        <Carousel.Item>
          <h4>Suggest a Portfolio-Worthy-Project</h4>
          <p>Dear Recruiters and advanced Developers</p>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}
