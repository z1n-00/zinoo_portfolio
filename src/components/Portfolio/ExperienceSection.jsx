import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";

const ExperienceSection = ({ experienceData }) => (
    <Section id="experience" className="mb-12" title={"Experience"}>
        <div className="grid grid-flow-row gap-4">
            {experienceData.map((experience, index) => (
                <ContentCard key={index} className="bg-white dark:bg-gray-800 flex flex-col items-start text-left">
                    <h3 className="text-xl text-black dark:text-white font-semibold">{experience.jobTitle}</h3>
                    <p className="text-black dark:text-white">{experience.company}</p>
                    <p className="text-black dark:text-white">{experience.years}</p>
                    <p className="text-black dark:text-white mt-2">{experience.description}</p>
                </ContentCard>
            ))}
        </div>
    </Section >
);

export default ExperienceSection;