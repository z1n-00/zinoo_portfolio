import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";
import { motion } from "framer-motion";
import { style } from "framer-motion/client";

const SkillSection = ({ portfolioData }) => (
    <Section className="md:p-0" title={portfolioData.skills.title}>
        <ContentCard className="bg-white dark:bg-gray-800 my-4">
            <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.skills.list.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center w-32 h-32 p-4 hover:scale-120 duration-150 cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="md:w-18 md:h-18 w-15 h-15 object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </ContentCard>
    </Section>
)

export default SkillSection;