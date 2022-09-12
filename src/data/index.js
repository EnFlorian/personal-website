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
    id: "vetmed",
    title: "VetMed - Animal Clinic",
    description: "A simple website for a veterinary office to advertise their services and other information.",
    codeLink: "https://github.com/EnFlorian/vetmed",
    websiteLink: "https://vetmed-gamma.vercel.app",
    tags: ["frontend", "typescript", "react.js"],
  },
  {
    id: "florana",
    title: "Florana - Florist Website",
    description: "A 1-3 frontend website for a florist to advertise their products, services and other information",
    codeLink: "https://github.com/EnFlorian/florana",
    websiteLink: "https://florana.vercel.app/",
    tags: ["frontend", "typescript", "angular"],
  },
  {
    id: "vublog",
    title: "VuBlog - Blog",
    description: "A personal blogging website that lets you share your thoughts and ideas with the world.",
    codeLink: "https://github.com/EnFlorian/vublog",
    websiteLink: "https://vublog.vercel.app/",
    tags: ["frontend", "typescript", "react.js"],
  },
  {
    id: "kenii",
    title: "Kenii - Landing Page",
    description: "A simple landing page for a your personal online presence that contains all your information.",
    codeLink: "https://github.com/EnFlorian/kenii-landing-page",
    websiteLink: "https://kenii-landing-page.vercel.app/",
    tags: ["frontend", "typescript", "react.js"],
  },
  {
    id: "artvu",
    title: "Artvu - Art Gallery",
    description: "A frontend / e-commerce that allows you to sell your artworks and other art related products online",
    codeLink: "https://github.com/EnFlorian/artvu-ecom",
    websiteLink: "https://artvu-ecom.vercel.app/",
    tags: ["frontend", "typescript", "react.js", "redux"],
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
    id: "html/css",
    title: "HTML/CSS",
    description: "HTML is a markup language for the web that defines the structure of web pages.",
  },
  {
    id: "java",
    title: "Java",
    description: "Java is a high-level, class-based, object-oriented programming language.",
  },
];

export const technologyItems = [
  {
    id: "react",
    title: "React.js",
    description: "React is a JavaScript library for building component based user interfaces.",
  },
  {
    id: "angular",
    title: "Angular",
    description: "Angular is a TypeScript-based free and open-source web application framework. ",
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
];
