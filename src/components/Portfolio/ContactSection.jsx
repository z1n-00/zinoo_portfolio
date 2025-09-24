import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import SocialButton from "../Layout/SocialButton";

const ContactSection = ({ portfolioData }) => (
    <Section id="contact" title={portfolioData.contact.title}>
        {/* <ContentCard className="bg-white text-start dark:bg-gray-800 my-4 py-8 text-wrap">
            <h4 className="md:text-6xl text-4xl text-black dark:text-gray-400 dark:bg-gray-800 font-bold">I'm ready to hear your idea</h4>
            <p className="text-black dark:text-gray-500 text-lg md:text-xl mb-6">
                I’m looking forward to connecting with you and exploring how my skills in development can contribute to your business objectives. Don’t hesitate to reach out to me for a meeting today.
            </p>
        </ContentCard> */}
        <ContentCard className="bg-black dark:bg-gray-800 my-4 py-8 text-wrap">
            <h4 className="md:text-6xl text-4xl text-white dark:text-gray-400 dark:bg-gray-800 font-bold text-balance">Ready to collaborate?</h4>
            <p className="text-white dark:text-gray-500 text-l/g md:text-xl mb-6 text-wrap">
                {portfolioData.contact.description}
            </p>
            {/* <p className="text-gray-700 text-lg md:text-xl mb-6">
                Address: {portfolioData.contact.address}
            </p> */}
            <a href={`mailto:${portfolioData.contact.email}`} className="md:text-3xl underline underline-offset-1 text-white dark:text-gray-400 font-bold hover:text-gray-700 transition-all duration-300">
                <span>zinoo.netdev@gmail.com</span>
            </a>
            <p className="md:text-start text-sm dark:text-gray-300 text-white mt-12">©2025 - All rights reserved</p>
        </ContentCard>
        <div className="mb-20">
            <SocialButton />
        </div>
    </Section>
)

export default ContactSection;