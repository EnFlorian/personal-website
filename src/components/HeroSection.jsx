import React from "react";
import { socialsItems } from "../data";
import "./HeroSection.scss";
import Typewriter from "./Typewriter";

const HeroSection = () => {
  const typewriterContent = "I'm a Software Developer based in Linz, Austria.";
  const socialsLinks = socialsItems.map((item) => {
    const { id, icon, link } = item;
    return (
      <li key={id} className="hero__socials-item">
        <a className="hero__socials-link" href={link}>
          {icon}
        </a>
      </li>
    );
  });

  return (
    <section className="hero">
      <h1 className="hero__title">Florian Engertsberger</h1>
      <Typewriter content={typewriterContent} />
      <ul className="hero__socials">{socialsLinks}</ul>
    </section>
  );
};

export default HeroSection;
