import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";

const EducationSection = ({ portfolioData }) => (
    <Section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <ContentCard>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl text-white mb-8">Education</h2>
                <ul className="space-y-4">
                    {portfolioData.education.map((edu, index) => (
                        <li key={index} className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{edu.institution}, {edu.year}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </ContentCard>
    </Section>
);

export default EducationSection;