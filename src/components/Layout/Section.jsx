const Section = ({ id, title, children }) => (
    <section id={id} className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">{title}</h2>
            {children}
        </div>
    </section>
);

export default Section;