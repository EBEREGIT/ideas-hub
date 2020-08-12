import React, { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import { IoIosHelpCircle } from "react-icons/io"

export default function OtherDetailsToolTip() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a ref={target} onClick={() => setShow(!show)}>
        <IoIosHelpCircle/>
      </a>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            This could also be the instructions if you don't have a link to the instructions, please fill the instructions here
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
