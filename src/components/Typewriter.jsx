import React from "react";
import "./Typewriter.scss";

const Typewriter = ({ content }) => {
  return (
    <div className="typewriter">
      <span className="type">
        <span> {content}</span>
      </span>
    </div>
  );
};

export default Typewriter;
