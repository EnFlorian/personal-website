import React from "react";
import "./Navbar.scss";
import { navItems } from "../data";

const Navbar = () => {
  const navLinks = navItems.map((item) => {
    const { id, title, link } = item;
    return (
      <li key={id}>
        <a href={link} className="navbar__link">
          {title}
        </a>
      </li>
    );
  });

  return (
    <nav className="navbar">
      <h1 className="navbar__title">Engertsberger</h1>
      <ul className="navbar__links">{navLinks}</ul>
    </nav>
  );
};

export default Navbar;
