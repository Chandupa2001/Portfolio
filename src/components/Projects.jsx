import React from "react";
import { PROJECTS } from "../constants"; 
import { FaReact, FaNodeJs, FaStripe, FaLaravel, FaGithub } from "react-icons/fa";
import { SiFirebase, SiExpress, SiExpo, SiMysql, SiMongodb } from "react-icons/si"; 
import { motion } from "framer-motion";
import { TbApi } from "react-icons/tb";

const Projects = () => {
  const renderTechnologyIcon = (tech) => {
    const iconSize = "text-[20px] sm:text-[22px] md:text-[24px]"; // Adjust size based on screen

    switch (tech) {
      case "React":
      case "React Native":
        return <FaReact className={iconSize} color="#61dbfb" />;
      case "Expo":
        return <SiExpo className={iconSize} color="black" />;
      case "Laravel":
        return <FaLaravel className={iconSize} color="#F05340" />;
      case "Firebase":
        return <SiFirebase className={iconSize} color="#FFCA28" />;
      case "Node.js":
        return <FaNodeJs className={iconSize} color="#8CC84B" />;
      case "Express.js":
        return <SiExpress className={iconSize} color="white" />;
      case "Stripe":
        return <FaStripe className={iconSize} color="#6772E5" />;
      case "MySQL":
        return <SiMysql className={iconSize} color="#00758f" />;
      case "MongoDB":
        return <SiMongodb className={iconSize} color="#589636" />;
      case "API":
        return <TbApi className={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <div id="projects" className="pb-12 px-4 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-16 text-center text-4xl font-bold text-white"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900 rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <h6 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {project.title}
              </h6>
              <p className="text-neutral-400 mb-4 text-sm md:text-base">
                {project.description}
              </p>

              {/* Tech Stack & GitHub Link */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                {/* Tech Icons - Now wraps correctly on smaller screens */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-neutral-800 p-2 rounded-full text-purple-400 flex items-center justify-center"
                    >
                      {renderTechnologyIcon(tech)}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link */}
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub alt="GitHub" size={28} />
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
