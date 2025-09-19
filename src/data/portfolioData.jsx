import profile from './../assets/images/profile.jpg';

const portfolioData = {
    name: "Zin Oo",
    profile,
    tagline: "I build beautiful and functional web applications.",
    textTypes: ["Back-end Developer", "Full-stack Developer", "Software Engineer"],
    about: {
        title: "About Me",
        description: "I'm a passionate web developer with over 5 years of experience creating dynamic and responsive websites. My expertise lies in front-end technologies like React, Tailwind CSS, and JavaScript, with a strong foundation in back-end development using Node.js and Express. I love solving complex problems and bringing ideas to life through clean, efficient code.",
    },
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Example",
            year: 2020
        },
        {
            degree: "Master of Science in Software Engineering",
            institution: "University of Example",
            year: 2022
        }
    ],
    experience: [
        {
            jobTitle: "Front-end Developer",
            company: "Tech Solutions Inc.",
            years: "2020 - Present",
            description: "Developed and maintained the front-end of the company's main product using React and Tailwind CSS. Collaborated with designers and back-end developers to create a seamless user experience."
        },
        {
            jobTitle: "Junior Web Developer",
            company: "Web Creators LLC",
            years: "2018 - 2020",
            description: "Assisted in building and optimizing websites for various clients. Gained experience in HTML, CSS, JavaScript, and basic back-end development."
        }
    ],
    skills: {
        title: "Skills",
        list: [
            "React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Node.js", "Express", "MongoDB", "Git"
        ]
    },
    projects: {
        title: "Projects",
        list: [
            {
                title: "E-commerce Platform",
                description: "A full-stack e-commerce site with user authentication, product catalog, and a shopping cart.",
                technologies: "React, Node.js, Express, MongoDB",
                link: "#",
            },
            {
                title: "Task Management App",
                description: "A Kanban-style task management tool...",
                technologies: "React, Redux, Firebase",
                link: "#",
            },
            {
                title: "Personal Blog",
                description: "A responsive blog platform...",
                technologies: "Next.js, Tailwind CSS, Sanity CMS",
                link: "#",
            },
        ],
    },
    contact: {
        title: "Get in Touch",
        description: "I'm always open to new opportunities. Let's connect!",
        email: "zinoo.netdev@gmail.com",
        address: "Mandalay, Myanmar",
    }
};

export default portfolioData;