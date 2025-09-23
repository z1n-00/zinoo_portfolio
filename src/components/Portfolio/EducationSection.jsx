import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";

const EducationSection = ({ portfolioData }) => (
    <Section id="education" className="bg-white py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900" title={"Education"}>
        <div className="grid md:grid-flow-col grid-flow-row md:grid-cols-2 gap-4">
            {portfolioData.education.map((edu, index) => (
                <ContentCard key={index} className="bg-white  dark:bg-gray-800 flex flex-col items-start text-left">
                    <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">{edu.degree}</h3>
                    <p className=" text-black md:text-xl dark:text-gray-400  mb-4 flex-grow">{edu.institution}, {edu.year}</p>
                    <div className="mt-auto pt-4 w-full">
                        {/* <span className="text-sm font-light text-gray-500 block mb-2">{project.technologies}</span>
                        <a href={project.link} className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-semibold">
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a> */}

                    </div>
                </ContentCard>
            ))}
        </div>
    </Section >
);

export default EducationSection;