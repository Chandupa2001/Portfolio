import PitCrew from "../assets/projects/PitCrew.png";
import currencyConvert from "../assets/projects/currencyConvert.png"
import foodDel from "../assets/projects/foodDel.jpg"
import studentManage from "../assets/projects/TuneCraft.png"
import keells from "../assets/projects/keells.png"
import currencyConvertWeb from "../assets/projects/currencyConvertWeb.png"

export const HERO_CONTENT = `I am an enthusiastic undergraduate who is passionate about web development, mobile development and software engineering. I am eager to leverage my skills in to build user-friendly and interactive web applications and mobile applications. As an individual who is keen on learning from practice, I have already given my contribution to multiple projects. I'm a fast learner and a team player, always looking for opportunities to contribute to challenging projects and expand my knowledge in this ever-evolving field.`;

export const ABOUT_TEXT = `I am an undergraduate in Computing and Information Systems with a strong foundation in both front-end and back-end development. Proficient in Python, Java, C, PHP, JavaScript, and frameworks like React, React Native, Flutter, and Laravel, I build dynamic web applications using HTML, CSS, Node.js, and Express. I am eager to apply my skills to real-world challenges, continuously learning and adapting to new technologies to create impactful solutions.`;

export const PROJECTS = [
  {
    title: "PitCrew - Capstone Project",
    image: PitCrew,
    description:
      "A mobile app developed for a university capstone project that connects vehicle owners with mechanics, garage owners, and spare parts sellers. It also helps users log and manage vehicle maintenance records.",
    technologies: ["React Native", "Firebase", "Node.js", "Express.js", "API"],
    
    sourceCode: "https://github.com/ChethanaWijesinghe10/PitCrew"
  },
  {
    title: "Currency Converter Web",
    image: currencyConvertWeb,
    description:
      "A platform enabling users to convert currencies with access to real-time and historical exchange rates.",
    technologies: ["React", "Node.js", "Express.js", "API"],
    sourceCode: "https://github.com/Chandupa2001/Currency-Converter-Web"
    
  },
  {
    title: "Currency Converter Mobile App",
    image: currencyConvert,
    description:
      "A mobile app that allows users to convert currencies using real-time and historical exchange rates.",
    technologies: ["React Native", "Node.js", "Express.js", "API"],
    sourceCode: "https://github.com/Chandupa2001/Currency-Converter-Web"
  },
  {
    title: "Food Delivery Web",
    image: foodDel,
    description:
      "A platform for restaurants to display menus, manage orders, and track them. Features include user cart and order tracking, an admin panel, and Stripe payment integration.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    sourceCode: "https://github.com/Chandupa2001/Food-Delivery-Web"
  },
  {
    title: "Student Management System",
    image: studentManage,
    description:
      " A System for admins to manage students, teachers, courses, and batches, with features for enrollment and streamlined course administration. ",
    technologies: ["Laravel", "MySQL"],
    sourceCode: "https://github.com/Chandupa2001/Student-Management-System"
  },
  {
    title: "Keells Self Checkout Mobile App (Ongoing)",
    image: keells,
    description:
      " A mobile app that enables users to scan items, view total prices, and make payments directly, eliminating checkout lines. ",
    technologies: ["React Native", "Expo", "Firebase", "Node.js", "Express.js", "Stripe"],
    sourceCode: "https://github.com/Chandupa2001/Keells-Self-Checkout-App"
  },
];