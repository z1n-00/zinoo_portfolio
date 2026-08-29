import { FaGithub, FaLinkedin, FaWhatsapp, FaLine } from "react-icons/fa";

//tech logos
import blazor from './../assets/images/blazor.png';
import react from './../assets/images/react.png';
import tailwind from './../assets/images/tailwind.png';
import nodejs from './../assets/images/node.png';
import express from './../assets/images/express.png';
import mongodb from './../assets/images/mongodb.png';
import dotnet from './../assets/images/dotnet.png';
import csharp from './../assets/images/csharp.png';
import css from './../assets/images/css.png';
import html from './../assets/images/html.png';
import javascript from './../assets/images/javascript.png';
import sqlserver from './../assets/images/sqlserver.png';
import typescript from './../assets/images/typescript.png';

const portfolioData = {
    name: "Zin Oo",
    // profile,
    tagline: "I build beautiful and functional web applications.",
    textTypes: ["Back-end Developer", "Full-stack Developer", "Software Engineer"],
    about: {
        title: "About Me",
        description: "I'm a passionate web developer with over 5 years of experience creating dynamic and responsive websites. My expertise lies in front-end technologies like React, Tailwind CSS, and JavaScript, with a strong foundation in back-end development using Node.js and Express. I love solving complex problems and bringing ideas to life through clean, efficient code.",
    },
    social: [
        {
            name: "GitHub",
            link: "https://github.com",
            logo: FaGithub
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/zo",
            logo: FaLinkedin
        },
        {   
            name: "Whatsapp",
            link: "https://wa.me/95925000000",
            logo: FaWhatsapp
        }, 
        {
            name: "Line",
            link: "https://line.me/ti/p/@zinoo",
            logo: FaLine
        }
    ],
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

    brands: [
        {
            name: "Brand 1",
            logo: "https://placehold.co/100x100/111828/ffffff?text=B1"
        },
        {   
            name: "Brand 2",
            logo: "https://placehold.co/100x100/111828/ffffff?text=B2"
        },
        {
            name: "Brand 3",
            logo: "https://placehold.co/100x100/111828/ffffff?text=B3"
        },
        {   
            name: "Brand 4",
            logo: "https://placehold.co/100x100/111828/ffffff?text=B4"
        },
        {
            name: "Brand 5",
            logo: "https://placehold.co/100x100/111828/ffffff?text=B5"
        },
        {
            name: "Brand 6",
            logo: "https://placehold.co/100x100/111828/ffffff?text=B6"
        },
        {
            name: "Brand 7",
            logo: "https://placehold.co/100x100/111828/ffffff?text=B7"
        },
        {
            name: "Brand 8",
            logo: "https://placehold.co/100x100/111828/ffffff?text=B8"
        }
    ],
    skills: {
        title: "Skills",
        list: [
            {
                logo: "https://placehold.co/100x100/111828/ffffff?text=JS",
                name: "JavaScript"
            },
            {
                logo: "https://placehold.co/100x100/111828/ffffff?text=RE",
                name: "React"
            },
            {
                logo: "https://placehold.co/100x100/111828/ffffff?text=TW",
                name: "Tailwind CSS"
            },
            {
                logo: "https://placehold.co/100x100/111828/ffffff?text=ND",
                name: "Node.js"
            },
            {
                logo: "https://placehold.co/100x100/111828/ffffff?text=EX",     
              name: "Express.js"

            },
            {
                logo: "https://placehold.co/100x100/111828/ffffff?text=MO",         
                name: "MongoDB"
            },
        ]
    },
    projects: {
        title: "Projects",
        list: [
            {
                logo: "https://placehold.co/100x100/111828/ffffff?text=P1",
                title: "E-commerce Platform",
                description: "A full-stack e-commerce site with user authentication, product catalog, and a shopping cart.",
                technologies: "React, Node.js, Express, MongoDB",
                link: "#",
            },
            {
                logo: "https://placehold.co/100x100/111828/ffffff?text=P2",
                title: "Task Management App",
                description: "A Kanban-style task management tool that allows users to create, update, and track tasks.",
                technologies: "React, Redux, Firebase",
                link: "#",
            },
            {
                logo: "https://placehold.co/100x100/111828/ffffff?text=P3",
                title: "Personal Blog",
                description: "A responsive blog platform with a modern design and seamless user experience. ",
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