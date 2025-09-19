import Section from "../Layout/Section";
import linkein from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const HomeSection = ({ portfolioData }) => (
    <Section id="home" className="flex flex-col items-center text-center relative">
        <div className="absolute top-8 right-8 flex">
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
        </div>

        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center"
        >
            <img
                src={portfolioData.profile}
                alt="profile"
                className="w-35 h-35 p-2 rounded-full mb-4 shadow-sm"
            />
        </motion.div>

        <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl md:text-5xl font-bold mb-2"
        >
            {`Hi, I'm ${portfolioData.name}`}
        </motion.h4>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 font-medium mb-8"
        >
            {portfolioData.tagline}
        </motion.p>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center"
        >
            <div className="flex size-10 animate-bounce items-center justify-center rounded-full p-2 ring-1 ring-gray-900/5 bg-gradient-to-br from-white/30 to-white/10 dark:from-black/30 dark:to-black/10">
                <svg
                    className="size-6 text-black-500"
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

        <ReactTyped
            strings={portfolioData.textTypes}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="text-lg md:text-xl text-indigo-500 font-semibold mb-8"
        />
    </Section>
);

export default HomeSection;