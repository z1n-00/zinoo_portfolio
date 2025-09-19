const NavCard = ({ children, className = '' }) => (
    <div className={`p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-3xl border border-white/20 dark:border-gray-700/30 z-50 ${className} `}>
        {children}
    </div>
);

export default NavCard;