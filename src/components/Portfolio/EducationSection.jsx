import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import { motion } from "framer-motion";

const EducationSection = ({ portfolioData }) => (
    <Section id="education">
        <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-300"
        >
            Education
        </motion.h4>

        <div className="grid md:grid-flow-col grid-flow-row gap-4 my-4">
            {portfolioData.education.map((edu, index) => (
                <ContentCard key={index} className="bg-white dark:bg-gray-800 flex flex-col items-start text-left ">
                    <h3 className="md:text-xl text-black dark:text-gray-400 font-medium mb-2">{edu.degree}</h3>
                    <p className=" text-black md:text-xl dark:text-gray-500  mb-4 flex-grow">{edu.institution}</p>
                    <p className="md:text-xl text-black dark:text-gray-500 m-0"> {edu.year}  </p>
                </ContentCard>
            ))}
        </div>
    </Section >
);

export default EducationSection;