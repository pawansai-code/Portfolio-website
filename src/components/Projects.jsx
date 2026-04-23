import { motion } from "framer-motion";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "ENCOM: AI-Driven Gamified Learning and Networking System",
      description:
        "Developed a comprehensive educational hub integrating a Meta LLaMA 3.3-powered AI assistant via Groq API, gamified cognitive challenges (Chess), and a personal journaling system. Engineered a secure hybrid architecture using Firebase for role-based authentication and real-time data persistence, alongside an Express.js backend for protected AI proxying. Implemented an XP-based achievement system and dual-role dashboards to drive student engagement and administrative efficiency.",
      tech: ["React.js", "Express.js", "Firebase", "Groq API", "Redux", "Socket.io"],
      role: "Full Stack Developer",
      github: "https://github.com/pawansai-code",
      demo: null,
    },
    {
      title: "Smart Crop Advisory System",
      description:
        "Developed the frontend using React.js and Redux Toolkit to deliver a highly responsive, user-friendly interface. Engineered distinct functional modules including an AI-powered chatbot, an articles & news feed, real-time market price tracking, a tractor connection hub, and a pest & disease detection interface.",
      tech: ["React.js", "Redux Toolkit", "JavaScript", "CSS3", "AI Integration"],
      role: "Frontend Developer",
      github: "https://github.com/pawansai-code",
      demo: null,
    },
    {
      title: "Drone-based Women Safety Analysis",
      description:
        "Labeled aerial image datasets using Roboflow for gender detection from drone footage. Assisted in training a gender classification model using a MobileNetV2 pre-trained architecture. Supported dataset preparation, model tuning, and research activities.",
      tech: ["Roboflow", "MobileNetV2", "Python", "Machine Learning"],
      role: "ML Researcher / Data Analysis",
      github: "https://github.com/pawansai-code",
      demo: null,
    },
    {
      title: "Mini Projects Collection",
      description:
        "Developed over 5 mini Python projects including an AI chatbot using Groq API, MADLIB story generator, and number guessing game. Created 5+ frontend clones like Netflix and YouTube homepages.",
      tech: ["Python", "Groq API", "HTML", "CSS", "JavaScript"],
      role: "Developer",
      github: "https://github.com/pawansaig",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Featured Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
