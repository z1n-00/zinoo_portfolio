import { motion } from "framer-motion";

const Section = ({ id, title, children }) => (
    <motion.section initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }} id={id} className="md:min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="container max-w-5xl text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-300">{title}</h2>
            {children}
        </div>
    </motion.section>
);

export default Section;