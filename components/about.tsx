// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

// export default function About() {
//   const { ref } = useSectionInView("About");

//   return (
//     <motion.section
//       ref={ref}
//       className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.175 }}
//       id="about"
//     >
//       <SectionHeading>About me</SectionHeading>
//       <p className="mb-3">
//         I am a Software Engineer with strong experience building scalable,
//         high-quality web and mobile applications. I specialize in designing
//         end-to-end solutions that simplify complex requirements while delivering
//         reliable, user-focused products. My technical stack includes Node.js,
//         Express, React, Next.js, TypeScript, SQL, MongoDB, React Native, and
//         Tailwind CSS, enabling me to work effectively across frontend, backend,
//         and mobile platforms. 
//         <br /> <br /> 
//         I approach development with a focus on
//         performance, maintainability, and real business impact. I am driven by
//         continuous learning and innovation, consistently applying modern best
//         practices to deliver efficient, future-ready software solutions.
//       </p>
//     </motion.section>
//   );
// }
