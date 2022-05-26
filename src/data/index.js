import { FaGithub, FaLinkedin, FaCodepen, FaTwitter } from "react-icons/fa";

export const navItems = [
  {
    id: "home",
    title: "Home",
    link: "hero",
    offset: -60,
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
    offset: 0,
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
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
  {
    id: "javascript",
    title: "Javascript",
    description:
      "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language. Mostly know as scripting languages for Websites.",
  },
  {
    id: "html",
    title: "HTML",
    description:
      "HTML, or Hypertext Markup Language, is a markup language for the web that defines the structure of web pages.",
  },
  {
    id: "css",
    title: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
  },
];

export const technologieItems = [
  {
    id: "react",
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
  },
  {
    id: "redux",
    title: "Redux",
    description:
      "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
  },
  {
    id: "nodejs",
    title: "Node.js",
    description:
      "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a web browser.",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    description:
      "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.",
  },
];
