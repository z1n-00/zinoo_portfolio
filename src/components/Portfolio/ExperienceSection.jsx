const ExperienceSection = ({ experienceData }) => (
    <Section id="experience" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <div className="space-y-6">
            {experienceData.map((experience, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">{experience.jobTitle}</h3>
                    <p className="text-gray-600">{experience.company}</p>
                    <p className="text-gray-500">{experience.years}</p>
                    <p className="mt-2">{experience.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

export default ExperienceSection;