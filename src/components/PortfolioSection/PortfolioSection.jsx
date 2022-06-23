import React from "react";
import { projectItems } from "../../data";
import Card from "../Card/Card";
import "./PortfolioSection.scss";

const PortfolioSection = () => {
  const cards = projectItems.map(({ id, title, description, tags, websiteLink, codeLink }) => (
    <li key={id}>
      <Card title={title} description={description} tags={tags} codeLink={codeLink} websiteLink={websiteLink} />
    </li>
  ));

  return (
    <article id="portfolio" className="portfolio">
      <p className="portfolio__subheading">Check out my work</p>
      <h2 className="portfolio__heading">My Projects</h2>
      <ul className="portfolio__cards">
        {cards}
        <Card />
      </ul>
    </article>
  );
};

export default PortfolioSection;
