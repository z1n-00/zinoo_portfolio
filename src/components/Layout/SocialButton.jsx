import ContentCard from "./ContentCard";
import portfolioData from "../../data/portfolioData";
import { RightArrowIcon } from "../Icons";

const SocialButton = () => (
    <div className="grid md:grid-flow-col md:grid-cols-4 grid-cols-2 gap-4">
        {portfolioData.social.map((social, index) => {
            const Logo = social.logo;
            return (
                <a href={social.link} target="_blank" key={index} className="group">
                    <ContentCard
                        className="bg-white text-center dark:text-blue-500 dark:bg-gray-800 
                       flex flex-row items-center justify-center gap-2 m-0"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex flex-row gap-4 m-0">
                            <span className="group-hover:hidden">
                                {typeof Logo === "string" ? (
                                    <img
                                        src={Logo}
                                        alt={social.name}
                                        className="w-10 h-10 object-contain"
                                    />
                                ) : (
                                    <Logo className="w-10 h-10" />
                                )}
                            </span>

                            <span className="hidden group-hover:inline">
                                <RightArrowIcon className="text-black dark:text-white" />
                            </span>

                            <p className="group-hover:hidden">{social.name}</p>
                            <p className="hidden group-hover:inline">Visit Link</p>
                        </div>
                    </ContentCard>
                </a>
            );
        })}
    </div>
);

export default SocialButton;