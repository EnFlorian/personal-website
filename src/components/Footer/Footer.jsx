import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {new Date().getFullYear()} - Florian Engertsberger</p>
    </footer>
  );
};

export default Footer;
