const NavCard = ({ children, className = '' }) => (
  <div
    className={`
      p-2
      rounded-full
      bg-white 
      dark:bg-gray-800
      shadow-md inset-shadow-sm inset-shadow-white-100
      md:border-0 border-t dark:border-gray-500/20
      ${className}
    `}
  >
    {children}
  </div>
);

export default NavCard;