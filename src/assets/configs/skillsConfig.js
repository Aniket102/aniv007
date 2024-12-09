import {
    SiPython,
    SiMysql,
    SiTensorflow,
    SiStreamlit,
    SiPandas,
    SiOpencv,
    SiTableau,
    SiMicrosoftexcel,
    SiMicrosoftpowerpoint,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiGithub, // Added GitHub icon
    SiPostman // Added Postman icon
} from "react-icons/si";
import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50} />,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiMysql size={50} />,
            text: "MySQL"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiTensorflow size={50} />,
            text: "TensorFlow"
        }
    ],
    complementarySkills: [
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiStreamlit size={50} />,
            text: "Streamlit"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiPandas size={50} />,
            text: "Pandas"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiOpencv size={50} />,
            text: "OpenCV"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiTableau size={50} />,
            text: "Tableau"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiMicrosoftexcel size={50} />,
            text: "MS Excel"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiMicrosoftpowerpoint size={50} />,
            text: "MS PowerPoint"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiHtml5 size={50} />,
            text: "HTML"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiCss3 size={50} />,
            text: "CSS"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiJavascript size={50} />,
            text: "JavaScript"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiPostman size={50} />,
            text: "Postman" // Added Postman
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiGithub size={50} />,
            text: "GitHub" // Added GitHub
        }
    ]
};

export default skillsConfig;
