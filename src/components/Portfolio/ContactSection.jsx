import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import { MailIcon } from "../Icons";

const ContactSection = ({ portfolioData }) => (
    <Section id="contact" title={portfolioData.contact.title}>
        <ContentCard>
            <p className="text-gray-700 text-lg md:text-xl mb-6">
                {portfolioData.contact.description}
            </p>
            {/* <p className="text-gray-700 text-lg md:text-xl mb-6">
                Address: {portfolioData.contact.address}
            </p> */}
            <a href={`mailto:${portfolioData.contact.email}`} className="inline-flex items-center px-6 py-3 rounded-full text-white font-bold bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <MailIcon />
                <span className="ml-2">Say Hello</span>
            </a>
        </ContentCard>
    </Section>
)

export default ContactSection;