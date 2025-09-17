import NavCard from "./NavCard";
import NavButton from "./NavButton";
import { HomeIcon, UserIcon, BriefcaseIcon, RocketIcon, MailIcon } from "../Icons";

const Navigation = ({ activeSection, scrollToSection }) => (
    <nav className="fixed bottom-4 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 z-50 p-2 md:p-0">
        {/* <NavCard className="flex justify-around md:flex-col md:gap-4 backdrop-blur-xs bg-white/30 backdrop-contrast-50"> */}
        <NavCard className="flex md:flex-col md:gap-4
            bg-gradient-to-br from-white/30 to-white/10 dark:from-black/30 dark:to-black/10
            text-black dark:text-white dark:border-white/10 backdrop-blur-xs transition duration-200 hover:opacity-100
        ">
            <NavButton sectionId="home" activeSection={activeSection} onClick={scrollToSection} label="Home"><HomeIcon /></NavButton>
            <NavButton sectionId="about" activeSection={activeSection} onClick={scrollToSection} label="About"><UserIcon /></NavButton>
            <NavButton sectionId="projects" activeSection={activeSection} onClick={scrollToSection} label="Projects"><BriefcaseIcon /></NavButton>
            <NavButton sectionId="skills" activeSection={activeSection} onClick={scrollToSection} label="Skills"><RocketIcon /></NavButton>
            <NavButton sectionId="contact" activeSection={activeSection} onClick={scrollToSection} label="Contact"><MailIcon /></NavButton>
        </NavCard>
    </nav >
);

export default Navigation;