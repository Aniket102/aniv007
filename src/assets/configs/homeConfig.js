import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Aniket Verma</strong>
        </h1>,
    titles: [
        "A Data Enthusiast",
        "A Data Analyst",
        "An Open Source Contributor",
        "An Innovator ",
        "An Explorer"
    ],
    about: {
        start: "I've been working for over two years on data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in addresing business challenges."
    },
    workTimeline: [
        
        {
            id: "work-2",
            title: "Associate Consultant",
            company: "Oracle Financial Services and Software",
            description: "Developmet of Insurance  solution from Scheme Creation to Claim Settlement " +
                "with optimization of data pipelines and XML configuration.",
            date: "1/08/2023-Present",
            icon: <FaMobileAlt/>,
            tags: ["SQL", "XML", "Excel", "SOAPUI",  "JAVA","Oracle Cloud","PSQL"]
        },
        {
            id: "work-1",
            title: "Data Engineer ",
            company: "Ignitus",
            description: " Devlopment of Learning Managment System for Data Science. " +
                "RMF analysis on large scale Data",
            date: "1/05/2022-20/07/2022",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "SQL", "python", "pandas", "sklearn", "matplotlib"]
        },
        {
            id: "work-0",
            title: "Research Intern",
            company: "IIT  Kharagpur",
            description: "Worked on implementing and analysing computer vision solutions in manufacturing industry.",
            date: "1/12/2021-1/3/2022",
            icon: <BsClipboardData/>,
            tags: ["Python", "OpenCV", "Pandas"]
        }
    ]
}
export default homeConfig
