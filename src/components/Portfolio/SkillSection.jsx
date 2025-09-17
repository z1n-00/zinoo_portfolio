import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";

const SkillSection = ({ portfolioData }) => (
    <Section id="skills" title={portfolioData.skills.title}>
        <ContentCard>
            <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.skills.list.map((skill, index) => (
                    <div key={index} className="px-4 hover:scale-115 py-2 rounded-full text-gray-700 text-sm md:text-base bg-gray-100 font-medium">
                        {skill}
                    </div>
                ))}
            </div>
        </ContentCard>
    </Section>
)

export default SkillSection;