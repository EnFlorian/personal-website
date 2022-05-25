import React from "react";
import "./ContactSection.scss";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const ContactSection = () => {
  return (
    <article className="contact">
      <p className="contact__subheading">Feel free to reach out</p>
      <h2 className="contact__heading">Get in Touch</h2>
      <div className="contact__container">
        <div className="contact__left-content">
          <p className="contact__title">Message Me</p>
          <form className="contact__form">
            <input className="contact__input" type="text" placeholder="Your Name" />
            <input className="contact__input" type="email" placeholder="Your Email" />
            <input className="contact__input" type="email" placeholder="Subject" />
            <textarea className="contact__textarea" placeholder="Your Message"></textarea>
            <button className="contact__btn">Send Message</button>
          </form>
        </div>
        <div className="contact__right-content">
          <p className="contact__title">Contact Information</p>
          <p className="contact__description">
            I'm always happy to help out and answer questions. Feel free to reach out to me!
          </p>
          <section className="contact__details-container">
            <div className="contact__details-icons">
              <div className="contact__details-icon">
                <IoPerson />
              </div>
              <div className="contact__details-icon">
                <MdEmail />
              </div>
              <div className="contact__details-icon">
                <ImLocation />
              </div>
            </div>
            <div className="contact__details-wrapper">
              <div className="contact__details-item">
                <p className="contact__details-item-title">Name</p>
                <p className="contact__details-item-value">Florian Engertsberger</p>
              </div>

              <div className="contact__details-item">
                <p className="contact__details-item-title">Location</p>
                <p className="contact__details-item-value">Linz, Austria</p>
              </div>

              <div className="contact__details-item">
                <p className="contact__details-item-title">Email</p>
                <p className="contact__details-item-value">contact@engertsberger.io</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default ContactSection;
