import NavCard from "./NavCard";
import NavButton from "./NavButton";
import { HomeIcon, BookOpenIcon, BriefcaseIcon, SkillIcon, MailIcon } from "../Icons";
import { motion } from "framer-motion";
import { IoHomeOutline, IoMailOpenOutline, IoBriefcaseOutline, IoBookOutline, IoFolderOpenOutline } from "react-icons/io5";

const Navigation = ({ activeSection, scrollToSection }) => (
    <nav className="fixed bottom-4 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 z-50 p-2 md:p-0">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}

        >
            <NavCard className="flex md:flex-col gap-4 text-black text-white backdrop-blur-xs">
                <NavButton sectionId="home" activeSection={activeSection} onClick={scrollToSection} label="Home"><HomeIcon /></NavButton>
                <NavButton sectionId="education" activeSection={activeSection} onClick={scrollToSection} label="Education"><IoBookOutline /></NavButton>
                <NavButton sectionId="experience" activeSection={activeSection} onClick={scrollToSection} label="Experience"><IoBriefcaseOutline /></NavButton>
                <NavButton sectionId="projects" activeSection={activeSection} onClick={scrollToSection} label="Projects"><IoFolderOpenOutline /></NavButton>
                <NavButton sectionId="contact" activeSection={activeSection} onClick={scrollToSection} label="Contact"><IoMailOpenOutline /></NavButton>
            </NavCard>
        </motion.div>
    </nav >
);

export default Navigation;