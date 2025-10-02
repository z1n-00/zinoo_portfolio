import React, { useState, useEffect } from "react";
import portfolioData from "./data/portfolioData";
import Navigation from "./components/Layout/Navigation";
import HomeSection from "./components/Portfolio/HomeSection";
import AboutSection from "./components/Portfolio/AboutSection";
import EducationSection from "./components/Portfolio/EducationSection";
import ExperienceSection from "./components/Portfolio/ExperienceSection";
import ProjectSection from "./components/Portfolio/ProjectSection";
import SkillSection from "./components/Portfolio/SkillSection";
import ContactSection from "./components/Portfolio/ContactSection";
import { MoonIcon, SunIcon } from "./components/Icons";
import BrandSection from "./components/Portfolio/BrandSection";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects", "skills", "contact"];
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

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <main className="relative z-10 bg-[#EEEEF2] dark:bg-gray-900 transition-colors duration-300">
          <button onClick={toggleTheme} className="fixed top-6 right-6 w-12 h-12 bg-white/30 dark:text-white dark:bg-gray-800 backdrop-blur-lg rounded-full flex items-center justify-center text-gray-600 z-50 cursor-pointer">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <HomeSection portfolioData={portfolioData} />
          {/* <AboutSection portfolioData={portfolioData} /> */}
          <EducationSection portfolioData={portfolioData} />
          <ExperienceSection portfolioData={portfolioData} />
          <BrandSection portfolioData={portfolioData} />
          <ProjectSection portfolioData={portfolioData} />
          <SkillSection portfolioData={portfolioData} />
          <ContactSection portfolioData={portfolioData} />
        </main>
      </div>
    </div>
  );
};

export default App;