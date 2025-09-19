import { motion } from "framer-motion";

const NavButton = ({ sectionId, activeSection, onClick, children, label }) => (
    <motion.div whileHover={{ scale: 1.1, borderRadius: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative group">
        <button
            onClick={() => onClick(sectionId)}
            className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${activeSection === sectionId ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
        >
            {children}
        </button>

        <span
            className="absolute left-1/2 -translate-x-1/2 bottom-14 
             md:left-20 md:top-1/2 md:-translate-y-1/2
             inline-flex items-center
             whitespace-nowrap rounded-xl 
             bg-gradient-to-br from-white/30 to-white/10 dark:from-black/30 dark:to-black/10
             text-black dark:text-white
             px-3 py-1 text-sm
             md:px-5 md:py-3 md:text-lg
             backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg
             opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none"
        >
            {label}
        </span>

    </motion.div>
);

export default NavButton;