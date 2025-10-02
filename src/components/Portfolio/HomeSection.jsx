import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import SocialButton from "../Layout/SocialButton";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const HomeSection = ({ portfolioData }) => (
    <Section id="home" className="flex flex-col items-center justify-center text-center relative">
        <div className="flex flex-col gap-4 mb-4">
            <ContentCard className="bg-white dark:bg-gray-800 ">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex justify-center my-8"
                >
                    <img
                        src={portfolioData.profile ?? "https://placehold.co/128x128/a0aec0/ffffff?text=ZO"}
                        alt="Profile" className="w-32 h-32 rounded-full border-2 border-white/50 dark:border-white mb-6" />
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
                    className="md:text-xl text-black dark:text-gray-400 font-medium my-4"
                >
                    {portfolioData.tagline}
                </motion.p>

                <ReactTyped
                    strings={portfolioData.textTypes}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                    className="text-lg md:text-xl text-black-700 dark:text-white-500 font-semibold mb-10"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex justify-center m-0 mt-4"
                >
                    <div className="flex size-10 animate-bounce items-center justify-center rounded-full p-2 ring-2 ring-black dark:ring-white bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-3xl z-50 m-0">
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

                <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="group w-50 inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-bold bg-black 
                    dark:border dark:border-white-500/10 dark:bg-gray-800 
                    dark:hover:outline-white duration-300"
                >
                    <span className="text-xl group-hover:hidden">Contact Me</span>
                    <span className="text-xl hidden group-hover:inline">Let’s Talk</span>
                </a>

            </ContentCard>
            <SocialButton />
        </div >
    </Section >
);

export default HomeSection;