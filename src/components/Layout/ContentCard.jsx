const ContentCard = ({ children, className = '' }) => (
    <div className={`p-6 rounded-3xl space-y-6 text-gray-600 dark:text-gray-300 text-lg ${className}`}>
        {children}
    </div>
);

export default ContentCard;