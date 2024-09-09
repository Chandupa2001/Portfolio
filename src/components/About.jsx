import React, { useState } from 'react';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabname, event) => {
    setActiveTab(tabname);
  };

  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
          <div className="tab-titles flex my-5 mb-10">
            <p
              className={`tab-links mr-12 text-lg font-medium cursor-pointer relative ${
                activeTab === "skills" ? "active-link" : ""
              }`}
              onClick={(event) => opentab("skills", event)}
            >
              Skills
            </p>
            <p
              className={`tab-links mr-12 text-lg font-medium cursor-pointer relative ${
                activeTab === "experience" ? "active-link" : ""
              }`}
              onClick={(event) => opentab("experience", event)}
            >
              Experience
            </p>
            <p
              className={`tab-links mr-12 text-lg font-medium cursor-pointer relative ${
                activeTab === "education" ? "active-link" : ""
              }`}
              onClick={(event) => opentab("education", event)}
            >
              Education
            </p>
          </div>
          <div
            className={`tab-contents ${
              activeTab === "skills" ? "active-tab block" : "hidden"
            }`}
            id="skills"
          >
            <ul>
              <li className="my-2">
                <span className="text-purple-500 text-sm">Web Development</span>
                <br /> Web app development
              </li>
              <li className="my-2">
                <span className="text-purple-500 text-sm">App development</span>
                <br /> Building Android/ios apps
              </li>
            </ul>
          </div>
          <div
            className={`tab-contents ${
              activeTab === "experience" ? "active-tab block" : "hidden"
            }`}
            id="experience"
          >
            <ul>
              <li className="my-2">
                <span className="text-purple-500 text-sm">2021-2022</span>
                <br /> Internship Training at Peoples Bank
              </li>
            </ul>
          </div>
          <div
            className={`tab-contents ${
              activeTab === "education" ? "active-tab block" : "hidden"
            }`}
            id="education"
          >
            <ul>
              <li className="my-2">
                <span className="text-purple-500 text-sm">2022-Current</span>
                <br /> Bsc(Hons) Computing & Information System, SUSL
              </li>
              <li className="my-2">
                <span className="text-purple-500 text-sm">2018-2020</span>
                <br /> G.C.E A/L(Physical Science), Rahula Collage Matara
              </li>
              <li className="my-2">
                <span className="text-purple-500 text-sm">2012-2017</span>
                <br /> G.C.E O/L, Rahula Collage Matara
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
