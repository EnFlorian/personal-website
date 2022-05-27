import React from "react";
import "./MobileNavbar.scss";
import { Link as ScrollLink } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../state/context";
import { navItems } from "../data";

const MobileNavbar = () => {
  const { toggleMobileMenu } = useAppContext();

  const links = navItems.map(({ id, title, link, offset }) => {
    return (
      <li key={id} className="mobile__list-item">
        <ScrollLink
          smooth={true}
          spy={true}
          to={link}
          offset={offset}
          className="mobile__list-link"
          onClick={() => toggleMobileMenu(false)}
        >
          {title}
        </ScrollLink>
      </li>
    );
  });

  return (
    <nav className="mobile" onClick={() => toggleMobileMenu(false)}>
      <IoClose className="mobile__close-icon" onClick={() => toggleMobileMenu(false)} />
      <ul className="mobile__list">{links}</ul>
    </nav>
  );
};

export default MobileNavbar;
