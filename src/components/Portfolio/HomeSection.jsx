import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import linkein from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import BrandSection from "./BrandSection";

const HomeSection = ({ portfolioData }) => (
    <Section id="home" className="flex flex-col items-center justify-center text-center relative">
        {/* <div className="absolute top-8 right-8 flex">
            <a
                href="https://github.com/z1n-00"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 inline-flex items-center hover:bg-gray-100 transition-all duration-300"
            >
                <img src={github} alt="GitHub" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
            </a>
            <a
                href="https://www.linkedin.com/in/z1n00"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 inline-flex items-center hover:bg-gray-100 transition-all duration-300"
            >
                <img src={linkein} alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
            </a>
        </div> */}
        <ContentCard className="bg-white dark:bg-gray-800 ">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex justify-center"
            >
                <img
                    src={portfolioData.profile ?? "https://placehold.co/128x128/a0aec0/ffffff?text=ZO"}
                    alt="Profile" className="w-32 h-32 rounded-full border-4 border-white/50 dark:border-gray-200 mb-6" />
            </motion.div>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-300 mb-2"
            >
                {`Hi, I'm ${portfolioData.name}`}
            </motion.h4>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="md:text-xl text-black dark:text-gray-400 font-medium mb-8"
            >
                {portfolioData.tagline}
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex justify-center"
            >
                <div className="flex size-10 animate-bounce items-center justify-center rounded-full p-2 ring-2 ring-black dark:ring-white bg-white/30 dark:bg-gray-800/30 dark:bg-blue-500/10 backdrop-blur-lg rounded-3xl z-50">
                    <svg
                        className="size-6 dark:text-white text-black"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </motion.div>

            {/* <ReactTyped
                strings={portfolioData.textTypes}
                typeSpeed={60}
                backSpeed={40}
                loop
                className="text-lg md:text-xl text-indigo-500 font-semibold mb-8"
            /> */}
            <a href={`mailto:${portfolioData.contact.email}`} className="inline-flex items-center px-6 py-3 rounded-full text-white font-bold dark:bg-[#101828] bg-black hover:scale-115 duration-30 transition-all duration-300">
                <span className="text-xl">CONTACT ME</span>
            </a>
        </ContentCard>
    </Section>
);

export default HomeSection;