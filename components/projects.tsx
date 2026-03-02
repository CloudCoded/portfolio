"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import liteImage from "../public/lite.png";
import { StaticImageData } from "next/image";

interface Project {
  _id: string;
  title: string;
  description: string;
  // tags: string[];
  imageUrl: StaticImageData;
  // projectUrl: string;
  // githubUrl: string;
  featured: boolean;
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showAll, setShowAll] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_DEV_API;

  const [projects, setProjects] = useState<Project[]>([]);

  const works = [
    {
      title: "Lite",
      description: "A lite version of a social media app",
      imageUrl: liteImage,
      _id: "1",
      featured: true
    }
  ]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${BASE_URL}/projects`);
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.log(`Error fetching projects, ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      {loading ? (
        <div className="flex justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div>
          {showAll
            ? works
                ?.filter((project) => project.featured)
                ?.sort((a, b) => (a._id < b._id ? -1 : 1))
                ?.map((project, index) => (
                  <React.Fragment key={index}>
                    <Project {...project} />
                  </React.Fragment>
                ))
            : works
                ?.filter((project) => project.featured)
                ?.sort((a, b) => (a._id < b._id ? -1 : 1))
                ?.slice(0, 4)
                ?.map((project, index) => (
                  <React.Fragment key={index}>
                    <Project {...project} />
                  </React.Fragment>
                ))}
          <div className="flex justify-center items-center self-center">
            <div
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setShowAll(!showAll);
              }}
            >
              {showAll ? "View Less Projects" : "View More Projects"}
              {showAll ? (
                <BsArrowUp className="opacity-90 font-bold group-hover:translate-x-1 transition animate-bounce" />
              ) : (
                <BsArrowDown className="opacity-90 font-bold group-hover:translate-x-1 transition animate-bounce" />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
