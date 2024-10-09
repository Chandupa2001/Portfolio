import React from "react";
import { PROJECTS } from "../constants"; 
import { FaReact, FaNodeJs, FaStripe, FaLaravel, FaGithub } from "react-icons/fa";
import { SiFirebase, SiExpress, SiExpo, SiMysql, SiMongodb } from "react-icons/si"; 
import { motion } from "framer-motion";
import { TbApi } from "react-icons/tb";

const Projects = () => {
  const renderTechnologyIcon = (tech) => {
    switch (tech) {
      case "React":
      case "React Native":
        return <FaReact color="#61dbfb" size={25} />;
      case "Expo":
        return <SiExpo color="black" size={25} />;
      case "Laravel":
        return <FaLaravel color="#F05340" size={25} />;
      case "Firebase":
        return <SiFirebase color="#FFCA28" size={25} />;
      case "Node.js":
        return <FaNodeJs color="#8CC84B" size={25} />;
      case "Express.js":
        return <SiExpress color="white" size={25} />;
      case "Stripe":
        return <FaStripe color="#6772E5" size={25} />;
      case "MySQL":
        return <SiMysql color="#00758f" size={25} />;
      case "MongoDB":
        return <SiMongodb color="#589636" size={25} />;
      case "API":
        return <TbApi size={25} />;
      default:
        return null;
    }
  };

  return (
    <div id="projects" className="pb-12 mx-4 md:mx-10 lg:mx-auto max-w-7xl">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl text-white"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900 rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-fill transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h6 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h6>
              <p className="text-neutral-400 mb-6">
                {project.description}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div className="flex gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-neutral-800 p-2 rounded-full text-purple-400"
                    >
                      {renderTechnologyIcon(tech)}
                    </span>
                  ))}
                </div>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub alt="GitHub" size={30} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
