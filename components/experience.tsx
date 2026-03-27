"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FaLaptop } from "react-icons/fa";

const experiences = [
  {
    _id: "1",
    title: "Frontend Engineer",
    company: "LifeBank Technologies",
    location: "McWen St, Yaba Lagos, NG",
    startDate: "2023-06-01",
    endDate: "2026-02-01",
    current: false,
    description: [
      "Developed and maintained responsive, high-performance web and mobile applications using JavaScript, React, Next.js, TypeScript, and React Native.",
      "Collaborated cross-functionally with designers and backend engineers to deliver pixel-perfect, user-centric interfaces.",
      "Contributed to applications that optimized medical supply tracking, improving operational efficiency and revenue growth for healthcare facilities.",
    ],
  },
];

export default function Experience() {
  const { theme } = useTheme();
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor="">
        <>
          {experiences.map((item) => (
            <VerticalTimelineElement
              key={item._id}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={`June 2023 - February 2026`}
              icon={<FaLaptop />}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">
                {item.company}, {item.location}
              </p>

              <ul className="flex flex-col mt-4 gap-2">
                {item.description.map((text, index) => (
                  <li
                    key={index}
                    className="!mt-1 !font-normal text-gray-700 dark:text-white/75 gap-2"
                  >
                    <span>◉</span> {text}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </>
      </VerticalTimeline>
    </section>
  );
}
