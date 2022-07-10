import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

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
    title: "Projects",
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
    link: "https://github.com/EnFlorian",
    icon: <FaGithub />,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/florian-engertsberger-44a993228/",
    icon: <FaLinkedin />,
  },
  {
    id: "codepen",
    title: "CodePen",
    link: "https://codepen.io/enflorian",
    icon: <FaCodepen />,
  },
];

export const projectItems = [
  {
    id: "vublog",
    title: "VuBlog - Blog",
    description: "A full-stack multi role blogging platform. That allows users to create and manage their posts.",
    codeLink: "/",
    websiteLink: "/",
    tags: ["fullstack", "javascript", "react.js", "node.js"],
  },
  {
    id: "vetpet",
    title: "VetPet - Website",
    description: "A website for a veterinary clinic. That allows the owners to advertise their services ",
    codeLink: "/",
    websiteLink: "/",
    tags: ["frontend", "typescript", "react.js"],
  },
  {
    id: "Markii - Markdown Editor",
    title: "Markii - Markdown Editor",
    description: "A lightweight web-based markdown editor that allows the user to edit, preview and save files. ",
    codeLink: "/",
    websiteLink: "/",
    tags: ["frontend", "typescript", "react.js"],
  },
  {
    id: "personal-website",
    title: "Personal Website",
    description: "A simple but modern looking and easily customizable website template for personal use.",
    codeLink: "/",
    websiteLink: "/",
    tags: ["frontend", "javascript", "react.js"],
  },
  {
    id: "artvu",
    title: "Artvu - Art Gallery",
    description: "A website / e-commerce platform that allows users to manage and sell their artworks.",
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

export const technologyItems = [
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
