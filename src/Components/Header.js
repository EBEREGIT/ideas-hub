import React from "react";
import { Carousel } from "react-bootstrap";

export default function Header() {
  return (
    <header className="spikes">
      <h1>Ideas. Hub.</h1>

      {/* slider */}
      <Carousel>
        {/* item 1 */}
        <Carousel.Item>
          <h4>
            Find Portfolio-Worthy-Project That Will Attract Recruiters, Dear
            Begginers
          </h4>
        </Carousel.Item>

        {/* item 2 */}
        <Carousel.Item>
          <h4>
            Suggest a Portfolio-Worthy-Project, Dear Recruiters and advanced
            Developers
          </h4>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}
