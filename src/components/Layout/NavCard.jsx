const NavCard = ({ children, className = '' }) => (
    <div className={`p-2 rounded-full bg-grey/70 ${className}`}>
        {children}
    </div>
);

export default NavCard;