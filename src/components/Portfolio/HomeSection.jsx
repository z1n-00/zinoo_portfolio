import Section from "../Layout/Section";
import linkein from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';

const HomeSection = ({ portfolioData }) => (
    <Section id="home" className="flex flex-col items-center text-center">
        <div className="absolute top-8 right-8 flex">
            <a href="https://github.com/z1n-00" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 inline-flex items-center hover:bg-gray-100 transition-all duration-300">
                <img src={github} alt="GitHub" className="w-8 h-8 rounded-full" />
            </a>
            <a href="https://www.linkedin.com/in/z1n00" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 inline-flex items-center hover:bg-gray-100 transition-all duration-300">
                <img src={linkein} alt="LinkedIn" className="w-8 h-8 rounded-full" />
            </a>
        </div>
        <div className="flex justify-center">
            <img src={portfolioData.profile} alt="profile" className="w-35 p-2 bg-grey h-35 rounded-full mb-4" />
        </div>
        <h4 className="text-2xl md:text-5xl font-bold mb-2">{`Hi, I'm ${portfolioData.name}`}</h4>
        <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8">{portfolioData.tagline}</p>
        <div className="flex justify-center">
            <div className="-lg flex size-10 animate-bounce items-center justify-center rounded-full bg-gray p-2 ring-1 ring-gray-900/5 bg-gradient-to-br from-white/30 to-white/10 dark:from-black/30 dark:to-black/10">
                <svg className="size-6 text-black-500 " fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
        </div>
    </Section>
);

export default HomeSection;