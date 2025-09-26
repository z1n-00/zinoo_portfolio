
import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import { motion } from "framer-motion";
import { RightArrowIcon } from "../Icons";

const ProjectSection = ({ portfolioData }) => (
    <Section id="projects" title={portfolioData.projects.title}>
        <div className="grid grid-flow-row gap-4 my-4">
            {portfolioData.projects.list.map((project, index) => (
                <ContentCard key={index} className="bg-white dark:bg-gray-800 flex flex-col items-start text-left">
                    <div className="flex md:flex-row flex-col gap-4 ">
                        <div className="basis-[30%]">
                            <div className="bg-white/30 backdrop-blur-lg flex flex-row items-center gap-4">
                                <p className="text-black basis-[50%] text-black dark:text-gray-400">{project.year}</p>
                                <img className="md:w-20 md:h-20 w-10 h-10 rounded-2xl object-contain" src={project.logo} />
                            </div>
                        </div>
                        <div className="basis-[70%] bg-white/30 backdrop-blur-lg ">
                            <h3 className="md:text-xl text-black dark:text-gray-400 font-medium font-semibold mb-2">{project.title}</h3>
                            <p className="text-black text-black dark:text-gray-500 mb-2">{project.description}</p>
                        </div>
                    </div>
                </ContentCard>
            ))}
        </div>
    </Section >
)

export default ProjectSection;