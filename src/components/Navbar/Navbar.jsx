import React from "react";
import "./Navbar.scss";
import { navItems } from "../../data";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { useAppContext } from "../../state/context";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Navbar = () => {
  const { toggleMobileMenu } = useAppContext();
  let activeLink;

  const handleClick = (event) => {
    event.preventDefault();
    activeLink?.classList.remove("navbar__accent");
    activeLink = event.currentTarget;
    event.currentTarget.classList.toggle("navbar__accent");
  };

  const navLinks = navItems.map((item) => {
    const { id, title, link, offset } = item;
    return (
      <li key={id}>
        <ScrollLink to={link} smooth={true} offset={offset} className="navbar__link" onClick={(e) => handleClick(e)}>
          {title}
        </ScrollLink>
      </li>
    );
  });

  return (
    <nav className="navbar" id="navbar">
      <h1 className="navbar__title">Engertsberger</h1>
      <div className="navbar__right-content">
        <ul className="navbar__links">
          {navLinks}
          <li className="navbar__link navbar__icon">
            <ThemeSwitch />
          </li>
        </ul>
        <FiMenu className="navbar__menu" onClick={() => toggleMobileMenu(true)} />
      </div>
    </nav>
  );
};

export default Navbar;
