import React from "react";
import "./Typewriter.scss";

const Typewriter = ({ content }) => {
  const typeWriter = document.getElementById("typewriter-text");
  typeWriter.innerHTML = content;
  typeWriter.style.setProperty("--characters", content.length);

  return (
    <div class="typewriter-effect">
      <div class="text" id="typewriter-text"></div>
    </div>
  );
};

export default Typewriter;
