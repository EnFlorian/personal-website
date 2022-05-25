import React from "react";
import "./Typewriter.scss";

const Typewriter = ({ content }) => {
  return (
    <div className="typewriter">
      <span class="type">
        <span> {content}</span>
      </span>
    </div>
  );
};

export default Typewriter;
