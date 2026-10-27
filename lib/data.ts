import React from "react";
import { FaLaptop } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
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
    _id: "1",
    title: "ThinaAI",
    description:
      "Thina connects people struggling with addiction to peers who understand, advocates who care, and professionals who can help — all in a safe, anonymous, and culturally grounded space.",
    tags: ["ReactNative", "TypeScript", "React-Query", "Redux", "Expo"],
    imageUrl: "./thina.png",
    projectUrl: "https://thina.app/",
    featured: true,
  },
  {
    _id: "2",
    title: "Trivestack Storefront - backoffice",
    description: "Multi-tenant store for business owners",
    tags: ["NextJS", "TypeScript", "GraphQL", "Apollo", "Vendure"],
    imageUrl: "./trive.png",
    projectUrl:
      "https://trivestack-storefront-staging.ambitiouscliff-8e5bebae.westus2.azurecontainerapps.io/",
    featured: true,
  },
  {
    _id: "3",
    title: "SmartBank",
    description:
      "This platform helps manage blood donors by tracking donation activity...",
    tags: ["React", "JavaScript", "React-Query"],
    imageUrl: "./smartbank.png",
    projectUrl: "https://smartbank.lifebanktest.com/bloodbank/",
    featured: true,
  },
  {
    _id: "4",
    title: "Coop",
    description:
      "A platform for hospitals and medical facilities to get medical supplies collectively at cheaper rates.",
    tags: ["React Native", "Typescript", "Redux"],
    imageUrl: "./coop.png",
    projectUrl: "https://apps.apple.com/us/app/coop-by-lifebank/id6743861129",
    featured: true,
  },
  {
    _id: "5",
    title: "Finance Lite",
    description:
      "This platform is a healthcare dashboard that helps manage orders, customers, and finances while providing tools for invoicing, pricing, and tracking business performance in one place.",
    tags: ["NextJs", "Typescript", "ReactQuery", "Tailwind"],
    imageUrl: "./flite.png",
    projectUrl: "https://flite.lifebank.ng/dashboard/",
    featured: true,
  },
  {
    _id: "6",
    title: "Lite",
    description:
      "A digital marketplace for hospitals to order all critical supplies on time and get it delivered to them in the right condition",
    tags: ["React", "JavaScript", "Redux", "SCSS"],
    imageUrl: "./lite.png",
    projectUrl: "https://lite.lifebank.ng/",
    featured: true,
  },
  {
    _id: "7",
    title: "One Vendor",
    description:
      "OVA helps manage medical products.It helps track inventory, manage orders, and collaborate with your team seamlessly.",
    tags: ["React Native", "TypeScript", "Redux"],
    imageUrl: "./OVA.png",
    projectUrl: "https://apps.apple.com/us/app/one-vendor/id6736524230",
    featured: true,
  },
  {
    _id: "8",
    title: "ElderBerry",
    description:
      "EDB is a digital health platform connecting hospitals and doctors to elderly patients whose care is funded by guardians abroad",
    tags: ["React Native", "TypeScript", "Redux"],
    imageUrl: "./edb.png",
    projectUrl:
      "https://apps.apple.com/us/app/elderberry-by-lifebank/id6748587591",
    featured: true,
  },
  {
    _id: "9",
    title: "ElderBerry website",
    description: "...",
    tags: ["NextJS", "TailwindCSS"],
    imageUrl: "./edbl.png",
    projectUrl: "https://elderberry.lifebankcares.com/",
    featured: true,
  },
  {
    _id: "10",
    title: "Boat Foundation Website",
    description: "...",
    tags: ["NextJS", "TailwindCSS"],
    imageUrl: "./boat.png",
    projectUrl: "https://elderberry.lifebankcares.com/",
    featured: true,
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
  "JavaScript",
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
  "React Query",
  "TailwindCSS",
  "GraphQL",
  "REST API",
  "ClaudeAI",
  "Kiro",
  "CodeRabbit",
  // "ContextAPI",
  "Express",
  "PostgreSQL",
  "Hero UI",
  // "Ant Design",
  "Framer Motion",
] as const;
