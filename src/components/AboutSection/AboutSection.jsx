import React from "react";
import "./AboutSection.scss";
import aboutImage from "../../assets/images/avatar-image.jpg";

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
          <h3 className="about__title">I'm Florian Engertsberger, a software developer.</h3>
          <p className="about__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ipsum quasi sunt. Voluptate nobis fuga
            atque ratione magni quos minima laborum itaque enim, asperiores qui exercitationem sint animi, eligendi vel!
            Voluptate nobis fuga atque ratione magni quos minima laborum itaque enim, asperiores qui exercitationem sint
            animi, eligendi vel!
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
                <p className="about__personals-item-description">contact@engertsberger.io</p>
              </div>
            </div>
          </section>
          <a className="about__btn" href="#about">
            Download my CV
          </a>
        </section>
      </div>
    </article>
  );
};

export default AboutSection;
