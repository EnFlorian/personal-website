import React from "react";
import "./Navbar.scss";
import { navItems } from "../data";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { useAppContext } from "../state/context";

const Navbar = () => {
  const { toggleMobileMenu } = useAppContext();

  const navLinks = navItems.map((item) => {
    const { id, title, link, offset } = item;
    return (
      <li key={id}>
        <ScrollLink
          to={link}
          spy={true}
          smooth={true}
          offset={offset}
          activeClass="navbar__accent"
          className="navbar__link"
        >
          {title}
        </ScrollLink>
      </li>
    );
  });

  return (
    <nav className="navbar" id="navbar">
      <h1 className="navbar__title">Engertsberger</h1>
      <div className="navbar__right-content">
        <ul className="navbar__links">{navLinks}</ul>
        <FiMenu className="navbar__menu" onClick={() => toggleMobileMenu(true)} />
      </div>
    </nav>
  );
};

export default Navbar;
