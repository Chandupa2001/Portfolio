import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.jpg";
import { motion } from "framer-motion";
import cvFile from "../assets/Chandupa_Ranawaka_CV.pdf"; 

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-10 lg:mb-35">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-16">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-5 text-4xl md:text-6xl font-thin tracking-tight lg:mt-1 lg:text-7xl">
                            Chandupa Ranawaka
                        </motion.h1>
                        <motion.p
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        {/* Fixed Spacing for CV Button */}
                        <motion.a
                            href={cvFile}
                            download
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="inline-block bg-neutral-600 text-white px-5 py-3 rounded-md mb-6 md:mb-8 hover:bg-neutral-800 transition">
                            Download CV
                        </motion.a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="rounded-full aspect-square object-cover max-w-[250px] md:max-w-xs lg:max-w-md"
                        src={profilePic}
                        alt="Chandupa"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
