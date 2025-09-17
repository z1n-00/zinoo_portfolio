import React, { useState, useEffect } from "react";
import portfolioData from "./data/portfolioData";
import Navigation from "./components/Layout/Navigation";
import HomeSection from "./components/Portfolio/HomeSection";
import AboutSection from "./components/Portfolio/AboutSection";
import ProjectSection from "./components/Portfolio/ProjectSection";
import SkillSection from "./components/Portfolio/SkillSection";
import ContactSection from "./components/Portfolio/ContactSection";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "home";
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="relative z-10">
        <HomeSection portfolioData={portfolioData} />
        <AboutSection portfolioData={portfolioData} />
        <ProjectSection portfolioData={portfolioData} />
        <SkillSection portfolioData={portfolioData} />
        <ContactSection portfolioData={portfolioData} />
      </main>
    </div>
  );
};

export default App;