import React from "react";
import HeroSection from "./components/HeroSection";
import ProjectsShowcase from "./components/ProjectsShowcase";
import SkillsSection from "./components/SkillsSection";
import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";
import DarkModeToggle from "./components/DarkModeToggle";
// import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div>
      <DarkModeToggle />
      <HeroSection />
      <ProjectsShowcase />
      <SkillsSection />
      {/* <SocialLinks />  */}
      <BlogSection />
      <ContactForm />
    </div>
  );
};

export default App;
