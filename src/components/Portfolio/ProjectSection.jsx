
import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";

const ProjectSection = ({ portfolioData }) => (
    <Section id="projects" title={portfolioData.projects.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.list.map((project, index) => (
                <ContentCard key={index} className="flex flex-col items-start text-left">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    <div className="mt-auto pt-4 w-full">
                        <span className="text-sm font-light text-gray-500 block mb-2">{project.technologies}</span>
                        <a href={project.link} className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-semibold">
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>
                </ContentCard>
            ))}
        </div>
    </Section>
)

export default ProjectSection;