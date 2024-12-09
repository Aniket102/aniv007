import React from "react";
import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa"; // Importing the CV icon (PDF icon)

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Blogs",
      path: "/blogs",
      icon: <BsMedium size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Skills",
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
    /*{
      id: "menu-4", // Unique ID for the CV button
      title: "CV",
      path: "/cv", // Adjust the path according to your route setup for the CV
      icon: <FaFilePdf size={35} />, // Using a PDF icon for the CV
      className: "nav-text",
    },*/
  ],
};

export default menuConfig;
