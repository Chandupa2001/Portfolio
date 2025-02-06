import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="border-b border-neutral-900 mt-32 flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full px-6 md:px-10 py-14 gap-6 md:gap-2.5"
    >
      {/* Contact Title Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-wide"
        >
          Contact
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-3xl font-normal tracking-wide mt-2"
        >
          Feel free to get in touch!
        </motion.p>
      </div>

      {/* Contact Details */}
      <ul className="flex flex-col items-center md:items-start list-none gap-4 md:gap-6">
        <motion.li
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 md:gap-5"
        >
          <img className="w-7 md:w-9" src={gmail} alt="Email Icon" />
          <a className="text-sm md:text-lg font-normal" href="mailto:chanduparanawaka2001@email.com">
            chanduparanawaka2001@gmail.com
          </a>
        </motion.li>

        <motion.li
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 md:gap-5"
        >
          <img className="w-7 md:w-9" src={linkedin} alt="Linkedin Icon" />
          <a className="text-sm md:text-lg font-normal" href="https://www.linkedin.com/in/chandupa-ranawaka/">
            Chandupa Ranawaka
          </a>
        </motion.li>

        <motion.li
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 md:gap-5"
        >
          <img className="w-7 md:w-9" src={github} alt="Github Icon" />
          <a className="text-sm md:text-lg font-normal" href="https://github.com/Chandupa2001">
            Chandupa2001
          </a>
        </motion.li>
      </ul>
    </div>
  );
};

export default Contact;
