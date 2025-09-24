import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import SocialButton from "../Layout/SocialButton";

const ContactSection = ({ portfolioData }) => (
    <Section id="contact" title={portfolioData.contact.title}>
        <ContentCard className="bg-black dark:bg-gray-800 my-4 py-8 text-wrap">
            <h4 className="md:text-6xl text-4xl text-white dark:bg-gray-800 font-bold text-balance">Ready to collaborate?</h4>
            <p className="text-white text-lg md:text-xl mb-6 text-wrap">
                {portfolioData.contact.description}
            </p>
            {/* <p className="text-gray-700 text-lg md:text-xl mb-6">
                Address: {portfolioData.contact.address}
            </p> */}
            <a href={`mailto:${portfolioData.contact.email}`} className="md:text-3xl underline underline-offset-1 text-white font-bold hover:text-gray-700 transition-all duration-300">
                <span>zinoo.netdev@gmail.com</span>
            </a>
            <p className="md:text-start text-sm text-white mt-12">©2025 - All rights reserved</p>
        </ContentCard>
        <SocialButton />
    </Section>
)

export default ContactSection;