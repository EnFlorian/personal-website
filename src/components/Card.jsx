import React from "react";
import "./Card.scss";
import { FaFolder } from "react-icons/fa";

const Card = ({ title, description, tags, previewLink, codeLink }) => {
  return (
    <section className="card">
      <div className="card__icon">
        <FaFolder />
      </div>
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
        <ul className="card__tags">
          {tags.map((tag) => (
            <li key={tag} className="card__tag">
              {tag}
            </li>
          ))}
        </ul>
        <div className="card__links">
          <a className="card__link" href={previewLink}>
            Preview
          </a>
          <a className="card__link" href={codeLink}>
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
