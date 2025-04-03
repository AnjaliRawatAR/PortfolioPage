import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-section h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <h1 className="text-5xl font-bold">Hello, I'm Anjali Rawat</h1>
        <p className="mt-4 text-2xl font-medium">
          AI Enthusiast | Full Stack Developer | Problem Solver
        </p>

        {/* Animated Button */}
        <motion.a
          href="#projects"
          className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
