import React from "react";
import "./ExperienceSection.scss";

const ExperienceSection = () => {
  return (
    <article id="experience" className="experience">
      <p className="experience__subheading">What I can do</p>
      <h2 className="experience__heading">My Experience</h2>
      <div className="experience__container">
        <div className="experience__left-content">
          <h3 className="experience__title">Programming Languages</h3>
          <ul className="experience__list">
            <li className="experience__item">
              <p className="experience__item-title">Typescript</p>
              <p className="experience__item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae fuga aliquid porro,
                laboriosam libero sed molestiae.
              </p>
            </li>
            <li className="experience__item">
              <p className="experience__item-title">Javascript</p>
              <p className="experience__item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae fuga aliquid porro,
                laboriosam libero sed molestiae.
              </p>
            </li>
            <li className="experience__item">
              <p className="experience__item-title">HTML5 / CSS</p>
              <p className="experience__item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae fuga aliquid porro,
              </p>
            </li>
            <li className="experience__item">
              <p className="experience__item-title">React.js</p>
              <p className="experience__item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae fuga aliquid porro,
                laboriosam libero sed molestiae.
              </p>
            </li>
          </ul>
        </div>
        <div className="experience__right-content">
          <h3 className="experience__title">Technologies</h3>
          <ul className="experience__list">
            <li className="experience__item">
              <p className="experience__item-title">React.js</p>
              <p className="experience__item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae fuga aliquid porro,
                laboriosam libero sed molestiae.
              </p>
            </li>
            <li className="experience__item">
              <p className="experience__item-title">React.js</p>
              <p className="experience__item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae fuga aliquid porro,
                laboriosam libero sed molestiae.
              </p>
            </li>
            <li className="experience__item">
              <p className="experience__item-title">Redux.js</p>
              <p className="experience__item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae fuga aliquid porro,
                laboriosam libero sed molestiae.
              </p>
            </li>
            <li className="experience__item">
              <p className="experience__item-title">Git</p>
              <p className="experience__item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae fuga aliquid porro,
                laboriosam libero sed molestiae.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceSection;
