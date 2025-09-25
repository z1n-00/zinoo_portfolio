import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";

const ExperienceSection = ({ experienceData }) => (
    <Section id="experience" className="mb-12">
        <h4 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-300">
            Experience
        </h4>
        <div className="grid grid-flow-row gap-4 my-4">
            {experienceData.map((experience, index) => (
                <ContentCard key={index} className="bg-white dark:bg-gray-800 flex flex-col items-start text-left">
                    <div className="flex md:flex-row flex-col gap-4">
                        <div className="basis-[30%]">
                            <p className="text-black md:text-xl text-black dark:text-gray-400 font-semibold mb-2">{experience.company}</p>
                            <p className="text-black text-black dark:text-gray-500 mb-2">{experience.years}</p>
                        </div>
                        <div className="basis-[70%]">
                            <h3 className="md:text-xl text-black dark:text-gray-400 font-medium font-semibold mb-2">{experience.jobTitle}</h3>
                            <p className="text-black text-black dark:text-gray-500 mb-2">{experience.description}</p>
                        </div>
                    </div>
                </ContentCard>
            ))}
        </div>
    </Section >
);

export default ExperienceSection;