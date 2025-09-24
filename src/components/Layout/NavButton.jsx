import { motion } from "framer-motion";

const NavButton = ({ sectionId, activeSection, onClick, children, label }) => (
    <>
        <button
            onClick={() => onClick(sectionId)}
            className={`rounded-full hover:scale-115 duration-300 cursor-pointer ${activeSection === sectionId ? 'text-white dark:text-white' : 'text-black dark:text-gray-400 hover:text-gray-500 dark:hover:text-white'}`}
        >
            <div className={`p-3 rounded-full ${activeSection === sectionId ? 'dark:bg-gray-800/30 bg-black dark:bg-none dark:border darK:border-white-500/10' : 'hover:text-black hover:dark:text-gray-500 hover:bg-gray-500/10'}`}>
                {children}

            </div>
        </button>

        {/* <span
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
        </span> */}
    </>
);

export default NavButton;