import React from "react";
import "./Card.scss";
import { FaFolder } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Card = ({ title, description, tags, websiteLink, codeLink }) => {
  return (
    <section className="card">
      {title && (
        <>
          <div className="card__icon">
            <FaFolder />
          </div>
          <div className="card__content">
            <h1 className="card__title">{title}</h1>
            <p className="card__description">{description}</p>
            <ul className="card__tags">
              {tags?.map((tag) => (
                <li key={tag} className="card__tag">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="card__links">
              <a className="card__link" href={websiteLink} target="_blank" rel="noopener noreferrer">
                Preview
              </a>
              <a className="card__link" href={codeLink} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
          </div>
        </>
      )}
      {!title && (
        <>
          <div className="card__content">
            <p className="card__title">More on Github</p>
            <a
              className="card__more-icon-link"
              href="https://github.com/EnFlorian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal className="card__more-icon" />
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Card;
