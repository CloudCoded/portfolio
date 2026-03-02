"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* As a Software Engineer with extensive expertise in both Web3 and Web2
        technologies, I am dedicated to architecting innovative digital
        solutions that push the boundaries of technological innovation. My
        diverse skill set allows me to create holistic and transformative
        projects that address complex challenges across different technological
        domains. A prime example of my innovative approach is Dukia DeFi, a
        comprehensive Decentralized Asset Management Platform that enables users
        to seamlessly interact with DeFi protocols across multiple networks.
        This project exemplifies my ability to design complex, multi-network
        blockchain solutions that simplify user interactions with decentralized
        financial technologies. My technical proficiency spans a wide range of
        technologies, including{" "}
        <span className="font-medium">
          Solidity, Cairo, Smart Contract Development, Blockchain Architecture,
          Web3 Tools, Node.js, Express, React, Next.js, TypeScript, SQL,
          MongoDB, React Native, Tailwind CSS
        </span>
        . This unique combination of skills enables me to seamlessly bridge Web3
        and Web2 technologies, creating integrated solutions that leverage the
        strengths of both ecosystems. I view development as more than just
        writing code—it's about crafting solutions that drive real business
        value. Whether working on decentralized applications or traditional web
        platforms, I consistently deliver projects that optimize operational
        efficiency and create tangible impact. My approach combines deep
        technical expertise with a strategic vision, allowing me to solve
        complex problems across various technological landscapes. Throughout my
        career, I've demonstrated an unwavering commitment to innovation and
        technical excellence. I stay at the forefront of technological
        advancements, continuously exploring emerging technologies and their
        potential to transform business processes.
        <br /> <br /> In summary, I am a Software Engineer who{" "}
        <span className="underline">
          engineers solutions that transcend technological boundaries.
        </span>{" "}
        My proven track record of successful projects, comprehensive
        technological expertise, and ability to navigate both Web3 and Web2
        environments make me a valuable asset to any forward-thinking
        development team or organization seeking transformative digital
        solutions. */}
        I am a Software Engineer with strong experience building scalable,
        high-quality web and mobile applications. I specialize in designing
        end-to-end solutions that simplify complex requirements while delivering
        reliable, user-focused products. My technical stack includes Node.js,
        Express, React, Next.js, TypeScript, SQL, MongoDB, React Native, and
        Tailwind CSS, enabling me to work effectively across frontend, backend,
        and mobile platforms. 
        <br /> <br /> 
        I approach development with a focus on
        performance, maintainability, and real business impact. I am driven by
        continuous learning and innovation, consistently applying modern best
        practices to deliver efficient, future-ready software solutions.
      </p>
    </motion.section>
  );
}
