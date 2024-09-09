import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.jpg";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center lg:justify-between items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-16">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-15 text-6xl font-thin tracking-tight lg:mt-1 lg:text-7xl">  
              Chandupa Ranawaka
            </motion.h1>
            <motion.p 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="rounded-full aspect-square object-cover max-w-xs lg:max-w-md"
            src={profilePic}
            alt="Chandupa"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
