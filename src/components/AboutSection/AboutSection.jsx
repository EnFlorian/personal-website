import React from "react";
import "./AboutSection.scss";
import aboutImage from "../../assets/images/avatar-image.jpg";
import { Link as ScrollLink } from "react-scroll";

const AboutSection = () => {
  return (
    <article name="about" className="about">
      <p className="about__subheading">Get to know me</p>
      <h2 className="about__heading">About me</h2>
      <div className="about__container">
        <section className="about__left-content">
          <div className="about__image-border">
            <img src={aboutImage} alt="Florian Engertsberger" className="about__image" />
          </div>
        </section>
        <section className="about__right-content">
          <p className="about__subtitle">Who am I?</p>
          <h3 className="about__title">I'm Florian, a software developer.</h3>
          <p className="about__description">
            I'm Florian Engertsberger, I'm a software developer and currently a computer science student in Linz. I'm
            passionate about developing accessible interactive Frontend Applications for the Browser. When I'm not
            coding, I usually learn about Data Visualization and Natural Language Processing and how they can be applied
            to increase the User Experience and Usability of Web Applications.
          </p>
          <section className="about__personals">
            <div className="about__personals-left">
              <div className="about__personals-item">
                <p className="about__personals-item-title">Name:</p>
                <p className="about__personals-item-description">Florian Engertsberger</p>
              </div>
              <div className="about__personals-item">
                <p className="about__personals-item-title">Location:</p>
                <p className="about__personals-item-description">Linz, Austria</p>
              </div>
            </div>
            <div className="about__personals-right">
              <div className="about__personals-item">
                <p className="about__personals-item-title">Email:</p>
                <p className="about__personals-item-description">contact@enflorian.com</p>
              </div>
            </div>
          </section>
          <ScrollLink to="contact" smooth={true} offset={-5} className="about__btn">
            Lets Get In Touch
          </ScrollLink>
        </section>
      </div>
    </article>
  );
};

export default AboutSection;
