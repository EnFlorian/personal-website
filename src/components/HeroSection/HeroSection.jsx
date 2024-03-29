import React from "react";
import "./HeroSection.scss";
import JumpingDownArrow from "../JumpingDownArrow/JumpingDownArrow";
import Typewriter from "../Typewriter/Typewriter";
import { socialsItems } from "../../data";

const HeroSection = () => {
  const typewriterContent = "I'm a Software Developer based in Linz, Austria.";
  const socialsLinks = socialsItems.map((item) => {
    const { id, icon, link } = item;
    return (
      <li key={id} className="hero__socials-item">
        <a className="hero__socials-link" href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      </li>
    );
  });

  const hideScrollIndicator = () => {
    const scrollIndicator = document.querySelector(".hero__arrow");
    if (document.documentElement.scrollTop > 20) {
      scrollIndicator.classList.add("hero__arrow--hidden");
    } else {
      scrollIndicator.classList.remove("hero__arrow--hidden");
    }
  };

  window.onscroll = hideScrollIndicator;

  return (
    <section id="hero" className="hero">
      <h1 className="hero__title">Florian Engertsberger</h1>
      <div className="hero__typewriter">
        <Typewriter content={typewriterContent} />
      </div>
      <div className="hero__arrow">
        <JumpingDownArrow />
      </div>

      <ul className="hero__socials">{socialsLinks}</ul>
      <p className="hero__name">Florian Engertsberger</p>
    </section>
  );
};

export default HeroSection;
