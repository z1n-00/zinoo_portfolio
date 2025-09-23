const NavCard = ({ children, className = '' }) => (
    <div className={`p-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-3xl ${className} `}>
        {children}
    </div>
);

export default NavCard;