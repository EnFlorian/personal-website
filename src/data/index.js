import { FaGithub, FaLinkedin, FaCodepen, FaTwitter } from "react-icons/fa";

export const navItems = [
  {
    id: "home",
    title: "Home",
    link: "hero",
    offset: -100,
  },
  {
    id: "about",
    title: "About",
    link: "about",
    offset: -5,
  },
  {
    id: "experience",
    title: "Experience",
    link: "experience",
    offset: -5,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    link: "portfolio",
    offset: -5,
  },
  {
    id: "contact",
    title: "Contact",
    link: "contact",
    offset: -5,
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

export const projectsItems = [
  {
    id: "personal-website",
    title: "Personal Website",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam doloremque.",
    image: "",
    docuLink: "/",
    websiteLink: "/",
    categories: ["frontend"],
  },
  {
    id: "personal-website1",
    title: "Personal Website",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam doloremque.",
    image: "",
    docuLink: "/",
    websiteLink: "/",
    categories: ["frontend"],
  },
  {
    id: "personal-website2",
    title: "Personal Website",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam doloremque.",
    image: "",
    docuLink: "/",
    websiteLink: "/",
    categories: ["frontend"],
  },
];

export const languageItems = [
  {
    id: "typescript",
    title: "Typescript",
    description: "TypeScript is a strongly typed programming language that builds on JavaScript.",
  },
  {
    id: "javascript",
    title: "Javascript",
    description:
      "JavaScript is a just-in-time compiled programming language. Mostly know as scripting languages for Websites.",
  },
  {
    id: "html",
    title: "HTML",
    description: "HTML is a markup language for the web that defines the structure of web pages.",
  },
  {
    id: "css",
    title: "CSS",
    description: "CSS is a style sheet language used for describing the presentation of a document written in HTML.",
  },
];

export const technologieItems = [
  {
    id: "react",
    title: "React",
    description: "React is a JavaScript library for building component based user interfaces.",
  },
  {
    id: "redux",
    title: "Redux",
    description: "Redux is a predictable state container for JavaScript apps.",
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "Node.js is JavaScript run-time environment that executes JavaScript code outside of a web browser.",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    description: "MongoDB is a NoSQL database program using JSON-like documents with schemas.",
  },
];
