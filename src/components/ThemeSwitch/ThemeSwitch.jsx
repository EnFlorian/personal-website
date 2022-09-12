import React from "react";
import "./ThemeSwitch.scss";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useAppContext } from "../../state/context";

const ThemeSwitch = () => {
  // const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { isDarkmode, setDarkmodeOn, setDarkmodeOff } = useAppContext();

  const toggleThemeChange = () => {
    if (!isDarkmode) {
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "dark");
      setDarkmodeOn();
    } else {
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "light");
      setDarkmodeOff();
    }
  };

  return (
    <button className="theme-switch" onClick={toggleThemeChange}>
      {isDarkmode === false ? <FaMoon /> : <BsSunFill />}
    </button>
  );
};

export default ThemeSwitch;
