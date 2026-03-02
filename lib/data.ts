import React from "react";
import { FaLaptop } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// sample experience data
export const experiencesData: any = [
  {
    id: 2,
    title: "Software Engineer",
    location: "Lifebank technologies, Lagos, Nigeria",
    description: [
      "- Led cross-platform development of mobile and web applications using React Native, React, NextJs, and TypeScript, delivering high-performance, responsive user interfaces for both mobile and web platforms.",
      "- Developed robust mobile applications with React Native and intuitive web interfaces using React and NextJs, ensuring consistent user experiences across different devices and platforms.",
      "- Implemented responsive and adaptive UI/UX designs for both mobile  and web applications, demonstrating versatility in frontend development.",
      "- Collaborated closely with designers and backend developers to create seamless, pixel-perfect interfaces for web and mobile applications.",
      "- Actively participated in Agile development processes, contributing to sprint planning, daily stand-ups, and full-stack development lifecycle.",
      "- Enhanced team's code quality and maintainability through rigorous code reviews and implementation of best practices across web and mobile technologies.",
      "- Utilized advanced development tools including ESLint, Prettier, and performance optimization techniques for both web and mobile platforms.",
    ],
    icon: React.createElement(FaLaptop),
    date: "May, 2022 - August, 2023",
  },
];

// sample project response
export const projectsData = [
  {
    title: "Nerve",
    description:
      "A digital marketplace for hospitals to order all critical supplies on time and get it delivered to them in the right condition",
    tags: ["React Native", "Typescript", "Redux"],
    imageUrl: "./nerve.png",
    projectUrl: "https://lifebank.ng/nerve_order/",
  },
  {
    title: "Nabafat.ai",
    description:
      "Nabafat.AI is a central platform to manage vision intelligence inside smart machines. Successfully introduce AI in dynamic environments without the need for AI experts.",
    tags: ["React", "SCSS"],
    imageUrl: "./nabafat.png",
    projectUrl: "https://nabafat.ai",
  },
  {
    title: "Get Linked",
    description: "Getlinked.ai hackathon challenge.",
    tags: ["Next.js", "Typescript", "Tailwind", "Framer Motion", "Axios"],
    imageUrl: "./getLinked.png",
    projectUrl: "https://get-linked-rhammy.vercel.app/",
  },
] as const;

export const skillsData = [
  // "Solidity",
  // "Web3.js",
  // "Ethers.js",
  // "Cairo",
  // "Rust",
  // "Foundry",
  // "Hardhat",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  // "jest",
  // "Chai",
  // "React testing Library",
  "Git",
  "Tailwind",
  "SQL",
  "MongoDB",
  "Redux",
  // "GraphQL",
  // "ContextAPI",
  "Express",
  "PostgreSQL",
  "Hero UI",
  // "Ant Design",
  "Framer Motion",
] as const;
