import React from "react";
import { motion } from "framer-motion";

const skillCategories = {
  "Frontend Development": [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 85 },
  ],
  "Backend & Databases": [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 82 },
    { name: "PostgreSQL", level: 75 },
  ],
  "AI & Machine Learning": [
    { name: "Python", level: 90 },
    { name: "TensorFlow & PyTorch", level: 80 },
    { name: "NLP & LLMs", level: 85 },
    { name: "GANs (Voice Modulation)", level: 80 },
    { name: "Speech Processing", level: 85 },
  ],
  "DevOps & Tools": [
    { name: "Git/GitHub", level: 90 },
    { name: "CI/CD (GitHub Actions)", level: 75 },
    { name: "Cloud Deployment (AWS, Render)", level: 80 },
  ],
};

const SkillsSection = () => {
  return (
    <section className="skills-section py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title with Animation */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                {category}
              </h3>
              {skills.map((skill, idx) => (
                <div key={idx} className="mb-4">
                  {/* Skill Name & Level */}
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mt-2 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5 }}
                      className="h-4 bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
