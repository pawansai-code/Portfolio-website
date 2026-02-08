import { motion } from "framer-motion";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Animal Adoption and Welfare System",
      description:
        "Developed and integrated a Groq API-powered chatbot using HTML, CSS, JavaScript, and Django to assist users with adoption-related queries. Implemented backend routing and user input handling using Django. Contributed to UI/UX design by creating design references and wireframes in Figma.",
      tech: ["HTML", "CSS", "JavaScript", "Django", "Groq API", "Figma"],
      role: "Full Stack Developer",
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
