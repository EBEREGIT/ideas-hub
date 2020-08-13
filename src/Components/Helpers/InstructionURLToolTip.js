import React, { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import { IoIosHelpCircle } from "react-icons/io";

export default function InstructionURLToolTip() {
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
            It can be a link to a PDF document in a google drive. If you don't
            have this, please enter any other relevant link
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
