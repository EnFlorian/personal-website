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

export const projectItems = [
  {
    id: "blog-cms",
    title: "Blog - CMS",
    description: "A full-stack blog with custom content management system.",
    codeLink: "/",
    websiteLink: "/",
    tags: ["fullstack", "javascript", "react.js", "node.js"],
  },
  {
    id: "personal-website-template",
    title: "Personal Website Template",
    description: "A simple but modern looking website template for personal use.",
    codeLink: "/",
    websiteLink: "/",
    tags: ["frontend", "javascript", "react.js"],
  },
  {
    id: "artvu",
    title: "Artvu Ecommerce",
    description: "An e-commerce platform designed for an art gallery/vendor.",
    codeLink: "/",
    websiteLink: "/",
    tags: ["typescript", "react.js"],
  },
  {
    id: "markdown-editor",
    title: "Markdown Editor",
    description: "A lightweight web-based markdown viewer and editor that allows the user to edit and save files. ",
    codeLink: "/",
    websiteLink: "/",
    tags: ["frontend", "typescript", "react.js"],
  },
  {
    id: "country-explorer",
    title: "Country Explorer",
    description: "A web-based application that allows the user to explore the world's countries.",
    codeLink: "/",
    websiteLink: "/",
    tags: ["frontend", "typescript", "react.js"],
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
