import React, { useEffect } from "react";
import "./Typewriter.scss";

const Typewriter = ({ content }) => {
  useEffect(() => {
    const typeWriter = document.getElementById("typewriter-text");
    if (typeWriter) {
      typeWriter.innerHTML = content;
      typeWriter.style.setProperty("--characters", content.length);
    }
  }, [content]);

  return (
    <div className="typewriter-effect">
      <div className="text" id="typewriter-text"></div>
    </div>
  );
};

export default Typewriter;
