import React from "react";
import Card from "./Card";
import "./PortfolioSection.scss";

const PortfolioSection = () => {
  return (
    <article id="portfolio" className="portfolio">
      <p className="portfolio__subheading">Check out my work</p>
      <h2 className="portfolio__heading">My Projects</h2>

      <div className="portfolio__cards">
        <Card
          title="Portfolio"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
          tags={["React", "SCSS", "HTML"]}
          previewLink="https://florianengertsberger.com"
          codeLink=""
        />

        <Card
          title="Portfolio"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
          tags={["React", "SCSS"]}
          previewLink="https://florianengertsberger.com"
          codeLink=""
        />

        <Card
          title="Portfolio"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
          tags={["React", "SCSS"]}
          previewLink="https://florianengertsberger.com"
          codeLink=""
        />

        <Card
          title="Portfolio"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
          tags={["React", "SCSS"]}
          previewLink="https://florianengertsberger.com"
          codeLink=""
        />

        <Card
          title="Portfolio"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elitQuisquam, quidem."
          tags={["React", "SCSS"]}
          previewLink="https://florianengertsberger.com"
          codeLink=""
        />
        <Card />
      </div>
    </article>
  );
};

export default PortfolioSection;
