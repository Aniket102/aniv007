import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

// Import images from the local directory
import kafkaMl from "../images/kafkaml.png";
import rmf from "../images/rmf.png";
import obesity from "../images/obesity.png";
import desk from "../images/desk.jpg";
import diabetes from "../images/diabetes.jpg";
import anime from "../images/anime.jpg";
import voter from "../images/voter.jpg";







import React from "react";

const projectConfig = [
    {
        id: "project-6",
        title: "Ecommerce RMF Analysis",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aniket102/Ecommerce_rmf",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Aniket102/Ecommerce_rmf/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Aniket102/Ecommerce_rmf/subscription",
                icon: <AiFillEye />,
            },
        ],
        image: rmf,  // Use the local image
        description: "Ecommerce RMF analysis project using advanced analytics.",
        target: "_blank",
    },
    {
        id: "project-5",
        title: "Obesity Analytics",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aniket102/Obesity_Analytics",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Aniket102/Obesity_Analytics/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Aniket102/Obesity_Analytics/subscription",
                icon: <AiFillEye />,
            },
        ],
        image: obesity,  // Placeholder for missing image
        description: "Analytics-driven insights into obesity trends and patterns.",
        target: "_blank",
    },
    {
        id: "project-4",
        title: "Diabetes Treatment Non-Adherence",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aniket102/Dia_Care",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Aniket102/Dia_Care/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Aniket102/Dia_Care/subscription",
                icon: <AiFillEye />,
            },
        ],
        image: diabetes,  // Placeholder for missing image
        description: "Analyzing diabetes treatment and medical non-adherence patterns.",
        target: "_blank",
    },
    {
        id: "project-3",
        title: "Anime Recommendation Engine",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aniket102/Anime_Recomendation",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Aniket102/Anime_Recomendation/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Aniket102/Anime_Recomendation/subscription",
                icon: <AiFillEye />,
            },
        ],
        image: anime,  // Placeholder for missing image
        description: "A recommendation engine for anime enthusiasts.",
        target: "_blank",
    },
    {
        id: "project-2",
        title: "Data Extraction from Voter List",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aniket102/Voter-List-Data-EXtraction-Devangri-",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Aniket102/Voter-List-Data-EXtraction-Devangri-/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Aniket102/Voter-List-Data-EXtraction-Devangri-/subscription",
                icon: <AiFillEye />,
            },
        ],
        image: voter,  // Placeholder for missing image
        description: "Automated data extraction from voter list documents.",
        target: "_blank",
    },
    {
        id: "project-1",
        title: "Height Adjusting Desk using Facial Recognition",
        links: [
            {
                name: "repo",
                url: "https://github.com/Aniket102/Raspberry_Face",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Aniket102/Raspberry_Face/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Aniket102/Raspberry_Face/subscription",
                icon: <AiFillEye />,
            },
        ],
        image: desk,  // Placeholder for missing image
        description: "A smart desk that adjusts its height using facial recognition.",
        target: "_blank",
    },
];

export default projectConfig;
