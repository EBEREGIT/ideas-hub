import React, { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import { IoIosHelpCircle } from "react-icons/io";

export default function SampleURLToolTip() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a ref={target} onClick={() => setShow(!show)}>
        <IoIosHelpCircle />
      </a>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            This is a URL of an example of the project you want the beginner to
            build. This will guide the beginner better
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
