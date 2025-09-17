const ContentCard = ({ children, className = '' }) => (
    <div className={`p-6 rounded-3xl bg-white ${className}`}>
        {children}
    </div>
);

export default ContentCard;