import React, { useState } from "react";
import "./ThemeSwitch.scss";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleThemeChange = () => {
    if (!isDarkTheme) {
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "dark");
      setIsDarkTheme(!isDarkTheme);
    } else {
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "light");
      setIsDarkTheme(!isDarkTheme);
    }
  };

  return (
    <button className="theme-switch" onClick={toggleThemeChange}>
      {isDarkTheme === false ? <FaMoon /> : <BsSunFill />}
    </button>
  );
};

export default ThemeSwitch;
