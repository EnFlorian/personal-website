import React from "react";
import "./JumpingDownArrow.scss";
import { Link as ScrollLink } from "react-scroll";

const JumpingDownArrow = () => {
  return (
    <ScrollLink to="about" smooth={true} className="arrow-wrap">
      <p className="arrow-title">Scroll</p>
      <div className="arrow-down arrow"></div>
    </ScrollLink>
  );
};

export default JumpingDownArrow;
