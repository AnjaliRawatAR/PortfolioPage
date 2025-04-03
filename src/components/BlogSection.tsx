import React from "react";

const blogPosts = [
  {
    title: "How AI is Revolutionizing Hiring",
    summary:
      "Exploring how AI-powered interview systems can transform the recruitment process.",
    link: "https://yourblog.com/ai-hiring",
  },
  {
    title: "Optimizing LLM Prompts with Reinforcement Learning",
    summary:
      "A deep dive into using RL techniques to improve AI model performance.",
    link: "https://yourblog.com/llm-optimization",
  },
  {
    title: "Building Scalable Web Apps with MERN",
    summary:
      "Best practices and strategies for building high-performance web applications using the MERN stack.",
    link: "https://yourblog.com/mern-scalability",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Blog & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {post.summary}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
