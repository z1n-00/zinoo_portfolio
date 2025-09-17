import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";

const AboutSection = ({ portfolioData }) => (
    <Section id="about" title={portfolioData.about.title}>
        <ContentCard>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {portfolioData.about.description}
            </p>
        </ContentCard>
    </Section>
)

export default AboutSection;