import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an enthusiastic undergraduate who is passionate about web development, mobile development and software engineering. I am eager to leverage my skills in to build user-friendly and interactive web applications and mobile applications. As an individual who is keen on learning from practice, I have already given my contribution to multiple projects. I'm a fast learner and a team player, always looking for opportunities to contribute to challenging projects and expand my knowledge in this ever-evolving field.`;

export const ABOUT_TEXT = `I am an undergraduate in Computing and Information Systems with a strong foundation in both front-end and back-end development. Proficient in Python, Java, C, PHP, JavaScript, and frameworks like React, React Native, Flutter, and Laravel, I build dynamic web applications using HTML, CSS, Node.js, and Express. I am eager to apply my skills to real-world challenges, continuously learning and adapting to new technologies to create impactful solutions.`;

export const PROJECTS = [
  {
    title: "PitCrew - Capstone Project",
    image: project1,
    description:
      "A mobile app developed for a university capstone project that connects vehicle owners with mechanics, garage owners, and spare parts sellers. It also helps users log and manage vehicle maintenance records.",
    technologies: ["React Native", "Firebase", "Node.js", "Express.js", "REST API"],
  },
  {
    title: "Currency Converter Web",
    image: project3,
    description:
      "A platform enabling users to convert currencies with access to real-time and historical exchange rates.",
    technologies: ["React", "Node.js", "Express.js", "REST API"],
    sourceCode: "https://github.com/Chandupa2001/Currency-Converter-Web"
    
  },
  {
    title: "Currency Converter Mobile App",
    image: project2,
    description:
      "A mobile app that allows users to convert currencies using real-time and historical exchange rates.",
    technologies: ["React Native", "Node.js", "Express.js", "REST API"],
    sourceCode: "https://github.com/Chandupa2001/Currency-Converter-Web"
  },
  {
    title: "Food Delivery Web",
    image: project4,
    description:
      "A platform for restaurants to display menus, manage orders, and track them. Features include user cart and order tracking, an admin panel, and Stripe payment integration.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    sourceCode: "https://github.com/Chandupa2001/Food-Delivery-Web"
  },
  {
    title: "Keells Self Checkout Mobile App (Ongoing)",
    image: project2,
    description:
      " A mobile app that enables users to scan items, view total prices, and make payments directly, eliminating checkout lines. ",
    technologies: ["React Native", "Expo", "Firebase", "Node.js", "Express.js", "Stripe"],
    sourceCode: "https://github.com/Chandupa2001/Keells-Self-Checkout-App"
  },
];