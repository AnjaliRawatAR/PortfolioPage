import React from "react";
import { motion } from "framer-motion";

const skillCategories = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Material UI", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 82 },
    { name: "JWT Authentication", level: 78 },
  ],
  "AI/ML & LLM": [
    { name: "Python", level: 88 },
    { name: "NLP & LLMs", level: 80 },
    { name: "OpenAI API", level: 85 },
    { name: "Reinforcement Learning", level: 75 },
  ],
  "DevOps & Tools": [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "CI/CD (GitHub Actions)", level: 70 },
    { name: "Cloud Deployment", level: 78 },
  ],
};

const SkillsSection = () => {
  return (
    <section className="skills-section py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div key={index} className="mb-6">
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                {category}
              </h3>
              {skills.map((skill, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2 }}
                      className="bg-indigo-500 h-4 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
