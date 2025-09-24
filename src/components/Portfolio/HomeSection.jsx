import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const HomeSection = ({ portfolioData }) => (
    <Section id="home" className="flex flex-col items-center justify-center text-center relative">
        <div className="flex flex-col gap-4">
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
                    <div className="flex size-10 animate-bounce items-center justify-center rounded-full p-2 ring-2 ring-black dark:ring-blue-500/10 bg-white/30 dark:bg-gray-800/30 dark:bg-blue-500/10 backdrop-blur-lg rounded-3xl z-50">
                        <svg
                            className="size-6 dark:text-blue-500 text-black"
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
                <a href={`mailto:${portfolioData.contact.email}`} className="inline-flex dark:text-blue-500 dark:bg-blue-500/10 items-center px-6 py-3 rounded-full text-white font-bold dark:bg-[#101828] bg-black hover:scale-115 duration-30 transition-all duration-300">
                    <span className="text-xl">CONTACT ME</span>
                </a>
            </ContentCard>

            <div className="grid md:grid-flow-col md:grid-cols-4 grid-cols-2 gap-4">
                {portfolioData.social.map((social, index) => {
                    const Logo = social.logo; // alias for clarity

                    return (
                        <a href={social.link} target="_blank" key={index}>
                            <ContentCard
                                className="bg-white text-center dark:bg-gray-800 flex flex-row items-center justify-center gap-2 m-0"
                                whileHover={{ scale: 1.05 }}
                            >
                                {typeof Logo === "string" ? (
                                    <img
                                        src={Logo}
                                        alt={social.name}
                                        className="w-10 h-10 object-contain"
                                    />
                                ) : (
                                    <Logo className="w-10 h-10" />
                                )}
                                <p>{social.name}</p>
                            </ContentCard>
                        </a>
                    );
                })}

            </div>
        </div>
    </Section >
);

export default HomeSection;