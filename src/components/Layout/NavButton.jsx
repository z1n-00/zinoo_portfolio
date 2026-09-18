const NavButton = ({ sectionId, activeSection, onClick, children, label }) => (
    <>
        <button
            onClick={() => onClick(sectionId)}
            aria-label={label}
            className={`group relative flex h-12 w-25 shrink-0 flex-col items-center justify-center gap-1 rounded-full duration-300 cursor-pointer hover:scale-100 md:h-12 md:w-12 ${activeSection === sectionId ? 'dark:bg-gray-800/30 bg-black dark:bg-none dark:border darK:border-white-500/10 text-white' : 'hover:text-black hover:dark:text-gray-500 hover:bg-gray-500/10 text-black dark:text-gray-400 hover:text-gray-500 dark:hover:text-white'}`}
        >
            <div>
                {children}
            </div>
            <span className={`text-[9px] leading-none md:hidden ${activeSection === sectionId ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>{label}</span>
            <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-white dark:text-black md:block">
                {label}
            </span>
        </button>
    </>
);

export default NavButton;
