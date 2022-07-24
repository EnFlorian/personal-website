import React, { useRef } from "react";
import "./ContactSection.scss";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const ContactSection = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm("service_y8tnmqn", "template_xuxbzlm", formRef.current, "0OK33tqYTW_OVGwUE").then(
      (result) => {
        toast.success("Message received!", {
          theme: "dark",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        formRef.current.reset();
        setIsSending(false);
      },
      (error) => {
        toast.error("Something went wrong!", {
          theme: "dark",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsSending(false);
      }
    );
  };

  return (
    <article id="contact" className="contact">
      <p className="contact__subheading">Feel free to reach out</p>
      <h2 className="contact__heading">Get in Touch</h2>
      <div className="contact__container">
        <div className="contact__left-content">
          <p className="contact__title">Message Me</p>
          <form ref={formRef} onSubmit={sendEmail} className="contact__form">
            <input className="contact__input" type="text" name="user_name" placeholder="Enter your name..." />
            <input className="contact__input" type="text" name="user_email" placeholder="Enter your email..." />
            <textarea name="message" className="contact__textarea" placeholder="Enter your message..." />
            <button type="submit" value="Send" className="contact__btn">
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
          <ToastContainer />
        </div>
        <div className="contact__right-content">
          <p className="contact__title">Contact Information</p>
          <p className="contact__description">
            I'm always happy to help out and answer questions. Don't hesitate to react out!
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
                <p className="contact__details-item-value">contact@enflorian.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default ContactSection;
