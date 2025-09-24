import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import { motion } from "framer-motion";

const SkillSection = ({ portfolioData }) => (
    <Section id="skills" title={portfolioData.skills.title}>
        <ContentCard className="bg-white dark:bg-gray-800 my-4">
            <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.skills.list.map((brand, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center w-25 h-25 p-4 hover:scale-115 duration-300 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-15 h-15 object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </ContentCard>
    </Section>
)

export default SkillSection;