import React from "react";
import "./JumpingDownArrow.scss";
import { Link as ScrollLink } from "react-scroll";

const JumpingDownArrow = () => {
  return (
    <ScrollLink to="about" smooth={true} class="arrow-wrap">
      <p class="arrow-title">Scroll</p>
      <div class="arrow-down arrow"></div>
    </ScrollLink>
  );
};

export default JumpingDownArrow;
