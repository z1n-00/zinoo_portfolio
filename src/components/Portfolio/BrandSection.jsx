
import { motion } from "framer-motion";
import Section from "../Layout/Section";
import ContentCard from "../Layout/ContentCard";

const BrandSection = ({ portfolioData }) => (
    <Section id="brands" title="The Brands I've Worked With" className="bg-white dark:bg-gray-800">
        <ContentCard className="bg-white dark:bg-gray-800 my-4">
            <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.brands.map((brand, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center w-32 h-32 p-4 hover:scale-120 duration-300 cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-20 h-20 object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </ContentCard>
    </Section>
);

export default BrandSection;
