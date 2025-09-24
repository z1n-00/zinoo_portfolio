import ContentCard from "./ContentCard";
import portfolioData from "../../data/portfolioData";

const SocialButton = () => (
    <div className="grid md:grid-flow-col md:grid-cols-4 grid-cols-2 gap-4">
        {portfolioData.social.map((social, index) => {
            const Logo = social.logo; // alias for clarity

            return (
                <a href={social.link} target="_blank" key={index}>
                    <ContentCard
                        className="bg-white text-center dark:text-blue-500 dark:bg-gray-800 flex flex-row items-center justify-center gap-2 m-0"
                        whileHover={{ scale: 1.05 }}
                    >
                        {typeof Logo === "string" ? (
                            <img
                                src={Logo}
                                alt={social.name}
                                className="w-10 h-10 object-contain"
                            />
                        ) : (
                            <Logo className="w-10 h-10" />
                        )}
                        <p>{social.name}</p>
                    </ContentCard>
                </a>
            );
        })}

    </div>
)

export default SocialButton;