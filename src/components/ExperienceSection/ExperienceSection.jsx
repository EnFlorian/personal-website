import React from "react";
import { languageItems, technologyItems } from "../../data";
import "./ExperienceSection.scss";

const ExperienceSection = () => {
  const languages = languageItems.map(({ id, title, description }) => {
    return (
      <li key={id} className="experience__item">
        <p className="experience__item-title">{title}</p>
        <p className="experience__item-description">{description}</p>
      </li>
    );
  });

  const technologies = technologyItems.map(({ id, title, description }) => {
    return (
      <li key={id} className="experience__item">
        <p className="experience__item-title">{title}</p>
        <p className="experience__item-description">{description}</p>
      </li>
    );
  });

  return (
    <article id="experience" className="experience">
      <p className="experience__subheading">What I can do</p>
      <h2 className="experience__heading">My Experience</h2>
      <div className="experience__container">
        <div className="experience__left-content">
          <h3 className="experience__title">Languages</h3>
          <ul className="experience__list">{languages}</ul>
        </div>
        <div className="experience__right-content">
          <h3 className="experience__title">Technologies</h3>
          <ul className="experience__list">{technologies}</ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceSection;
