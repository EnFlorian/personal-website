import { FaGithub, FaLinkedin, FaCodepen, FaTwitter } from "react-icons/fa";

export const navItems = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "about",
    title: "About",
    link: "#about",
  },
  {
    id: "experience",
    title: "Experience",
    link: "#experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    link: "#portfolio",
  },
  {
    id: "contact",
    title: "Contact",
    link: "#contact",
  },
];

export const socialsItems = [
  {
    id: "github",
    title: "Github",
    link: "",
    icon: <FaGithub />,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "",
    icon: <FaLinkedin />,
  },
  {
    id: "twitter",
    title: "Twitter",
    link: "",
    icon: <FaTwitter />,
  },
  {
    id: "codepen",
    title: "CodePen",
    link: "",
    icon: <FaCodepen />,
  },
];
