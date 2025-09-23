import { motion } from "framer-motion";

const Section = ({ id, title, children }) => (
    <motion.section initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }} id={id} className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="container max-w-6xl text-center">
            <h2 className="text-xl md:text-5xl font-bold mb-8 text-black dark:text-white">{title}</h2>
            {children}
        </div>
    </motion.section>
);

export default Section;