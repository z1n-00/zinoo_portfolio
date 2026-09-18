const NavCard = ({ children, className = '' }) => (
  <div
    className={`
      p-2
      rounded-full
      bg-white dark:bg-gray-800
      shadow-sm
      ${className}
    `}
  >
    {children}
  </div>
);

export default NavCard;