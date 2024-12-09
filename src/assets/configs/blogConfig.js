import React from 'react';
import { SiMedium } from "react-icons/si";
import humanai from "../images/humanai.png";
import llm from "../images/llm.png";
const blogConfig = [
    {
        id: "blog-2",
        title: "Has Large Langauge Model Accuracy Stalled ",
        links: [
            {
                name: "article",
                url: "https://medium.com/@aniket30200/has-large-language-model-accuracy-stalled-what-it-means-for-everyday-tech-fd021652cd53",
                icon: <SiMedium />
            }
        ],
        image: llm, // Replace with actual image if available
        description: "With increasing AI content on the internet will LLM accuracy Plateau.",
        target: "_blank"
    },
    {
        id: "blog-1",
        title: "Spotting AI Generated Content (No Tools Required)",
        links: [
            {
                name: "article",
                url: "https://medium.com/@aniket30200/spotting-ai-generated-content-no-tools-required-baa0a588dd62",
                icon: <SiMedium />
            }
        ],
        image: humanai, // Replace with actual image if available
        description: "Learn how to spot AI-generated content without using any tools.",
        target: "_blank"
    }
];

export default blogConfig;
