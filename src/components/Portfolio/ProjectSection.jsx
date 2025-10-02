import { useState, useEffect } from "react";
import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import { RightArrowIcon } from "../Icons";
import SkillSection from "./SkillSection";

const ProjectSection = ({ portfolioData }) => {
    const initialCount = 3;
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            let current = visibleCount;
            const total = portfolioData.projects.list.length;

            const interval = setInterval(() => {
                current++;
                if (current > total) {
                    clearInterval(interval);
                } else {
                    setVisibleCount(current);
                }
            }, 300);
            return () => clearInterval(interval);
        }
    }, [showAll]);

    const projectsToShow = portfolioData.projects.list.slice(0, visibleCount);

    return (
        <>
            <Section id="projects" title={portfolioData.projects.title}>
                <div className="grid grid-flow-row gap-4 my-4">
                    {projectsToShow.map((project, index) => (
                        <ContentCard
                            key={index}
                            className="bg-white dark:bg-gray-800 flex flex-col items-start text-left transition-opacity duration-500 ease-in-out"
                        >
                            <div className="flex md:flex-row flex-col gap-4 ">
                                <div className="basis-[30%]">
                                    <div className="flex flex-col items-start gap-2">
                                        <div className="flex flex-row gap-4">
                                            <img
                                                className="md:w-15 md:h-15 w-10 h-10 rounded-2xl object-contain"
                                                src={project.logo}
                                            />
                                        </div>
                                        <p className="text-black basis-[50%] dark:text-gray-500">{project.year}</p>
                                    </div>
                                </div>
                                <div className="basis-[70%]">
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            className="flex flex-row items-center gap-2 mb-4 text-black dark:text-gray-400 font-semibold hover:underline hover:text-gray-400 group"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h3 className="md:text-xl">{project.title}</h3>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 mt-1 transform transition-transform duration-200 group-hover:-translate-y-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17 7l-10 10m0-10h10v10"
                                                />
                                            </svg>
                                        </a>
                                    ) : (
                                        <h3 className="md:text-xl mb-4 text-black dark:text-gray-400 font-semibold">
                                            {project.title}
                                        </h3>
                                    )}

                                    <p className="text-black dark:text-gray-500 mb-2">{project.description}</p>
                                    {/* <p className="text-black dark:text-gray-500">{project.technologies}</p> */}
                                </div>
                            </div>
                        </ContentCard>
                    ))}
                </div>
                {!showAll && portfolioData.projects.list.length > initialCount && (
                    <div className="flex justify-center mt-4">
                        <button
                            className="group w-50 inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-bold bg-black 
                    dark:border dark:border-white-500/10 dark:bg-gray-800 
                    dark:hover:outline-white duration-300 cursor-pointer hover:scale-105"
                            onClick={() => setShowAll(true)}
                        >
                            View All Projects
                        </button>
                    </div>
                )}

                <SkillSection portfolioData={portfolioData} />
            </Section>
        </>
    );
};

export default ProjectSection;