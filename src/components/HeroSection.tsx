import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle"; // Dark mode toggle

const titles = ["AI Enthusiast", "Full Stack Developer", "Problem Solver", "Innovator", "Tech Explorer"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Text changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative hero-section h-screen flex flex-col items-center justify-center 
      bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Dark Mode Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <DarkModeToggle />
      </div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white dark:text-gray-200 transition-colors duration-300"
      >
        <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Hello, I'm <span className="text-yellow-300 dark:text-yellow-400">Anjali Rawat</span>
        </h1>

        {/* Dynamic Changing Titles */}
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-3xl font-semibold text-gray-200 dark:text-gray-300 tracking-wider"
        >
          {titles[index]}
        </motion.p>
      </motion.div>

      {/* Glowing Animated Button */}
      <motion.button
        onClick={scrollToProjects}
        className="mt-6 inline-block bg-white text-indigo-600 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:bg-indigo-700 hover:text-white transition relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
        <motion.span
          className="absolute inset-0 rounded-full bg-indigo-400 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>

      {/* Invisible reference for smooth scrolling */}
      <div id="projects-showcase" ref={projectsRef} className="absolute bottom-0"></div>
    </section>
  );
};

export default HeroSection;
