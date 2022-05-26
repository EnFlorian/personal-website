import React from "react";
import "./MobileNavbar.scss";
import { Link as ScrollLink } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../state/context";

const MobileNavbar = () => {
  const { toggleMobileMenu } = useAppContext();

  return (
    <nav className="mobile" onClick={() => toggleMobileMenu(false)}>
      <IoClose className="mobile__close-icon" onClick={() => toggleMobileMenu(false)} />
      <ul className="mobile__list">
        <ScrollLink
          smooth={true}
          spy={true}
          to="hero"
          className="mobile__list-item"
          onClick={() => toggleMobileMenu(false)}
        >
          Home
        </ScrollLink>
        <ScrollLink
          smooth={true}
          spy={true}
          to="about"
          className="mobile__list-item"
          onClick={() => toggleMobileMenu(false)}
        >
          About
        </ScrollLink>
        <ScrollLink
          smooth={true}
          spy={true}
          to="experience"
          className="mobile__list-item"
          onClick={() => toggleMobileMenu(false)}
        >
          Experience
        </ScrollLink>
        <ScrollLink
          smooth={true}
          spy={true}
          to="portfolio"
          className="mobile__list-item"
          onClick={() => toggleMobileMenu(false)}
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          smooth={true}
          spy={true}
          to="contact"
          className="mobile__list-item"
          onClick={() => toggleMobileMenu(false)}
        >
          Contact
        </ScrollLink>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
