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
  {
    _id: "2",
    title: "Full Stack Developer",
    company: "TriveStack",
    location: "Remote",
    startDate: "2026-07-01",
    endDate: "2026-09-01",
    current: false,
    description: [
      "Architected scalable e-commerce features for Trivestack, supporting independent storefronts across a multi-store platform.",
      "Connected frontend and backend services through GraphQL, enabling cohesive data flow across e-commerce functionality.",
      "Resolved application defects and integration challenges, reducing recurring technical issues by 24% through systematic debugging and code reviews.",
    ],
  },
  {
    _id: "3",
    title: "Mobile Developer",
    company: "InnovaSwift Technologies",
    location: "Remote",
    startDate: "2026-03-01",
    endDate: "2026-10-01",
    current: true,
    description: [
      "Translated UI/UX designs into responsive mobile interfaces across iOS and Android platforms.",
      "Coordinated frontend requirements with backend services, ensuring accurate data presentation and reliable application behaviour.",
      "Collaborated with designers and backend engineers, reducing interface integration issues by 25% through structured development coordination.",
      "Developed 20+ reusable interface components, improving consistency and accelerating implementation across core application screens.",
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
              date={`${new Date(item.startDate).toLocaleString("default", {
                month: "short",
              })} ${new Date(item.startDate).getFullYear()} - ${
                item.current
                  ? "Present"
                  : `${new Date(item.endDate).toLocaleString("default", {
                      month: "short",
                    })} ${new Date(item.endDate).getFullYear()}`
              }`}
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
