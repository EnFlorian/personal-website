import React from "react";
import { socialsItems } from "../data";
import "./HeroSection.scss";
import Typewriter from "./Typewriter";

const HeroSection = () => {
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

  console.log(socialsLinks);

  return (
    <section className="hero">
      <h1 className="hero__title">Florian Engertsberger</h1>
      {/* <h2 className="hero__subtitle">I'm a software engineer based Linz, austria.</h2> */}
      <Typewriter content="I'm a software engineer based Linz, austria." />
      <ul className="hero__socials">{socialsLinks}</ul>
    </section>
  );
};

export default HeroSection;
