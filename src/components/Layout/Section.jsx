import { motion } from "framer-motion";

const Section = ({ id, title, children }) => (
    <motion.section initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }} id={id} className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">{title}</h2>
            {children}
        </div>
    </motion.section>
);

export default Section;