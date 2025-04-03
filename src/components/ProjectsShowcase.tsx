import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Real Time Voice Modulation",
    description:
      "A web application that allows users to modify their voice in real-time during video calls using AI and WebRTC.",
    tech: ["AI", "Node.js", "MongoDB", "React"],
    link: "https://gla-fit.onrender.com/",
  },
  {
    title: "GLA-Zoom",
    description:
      "An AI-powered virtual meeting platform that recognizes emotions in real-time using speech and image analysis during meetings.",
    tech: [
      "AI",
      "WebRTC",
      "Computer Vision",
      "NLP",
      "Express.js",
      "React",
      "MongoDB",
    ],
    link: "https://gla-zoom.vercel.app/",
  },

  {
    title: "Discussion Forum Web App",
    description:
      "A collaborative platform for discussions with a modern UI and real-time interactions.",
    tech: ["React", "Node.js", "MongoDB", "ShadCN"],
    link: "https://github.com/yourusername/Discussion-Forum",
  },
  {
    title: "Healthcare Platform",
    description:
      "Secure healthcare platform with role-based access for patients and providers.",
    tech: ["JWT", "Node.js", "React", "MongoDB"],
    link: "https://github.com/yourusername/Healthcare-Platform",
  },
];

const ProjectsShowcase = () => {
  return (
    <section className="projects-section py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-indigo-500 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                View More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
