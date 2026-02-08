import { motion } from "framer-motion";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI Food Spoilage Detection",
      description:
        "Built a MobileNet-based ML model integrated with Django backend to detect food freshness from images.",
      tech: ["Python", "Django", "TensorFlow", "React"],
      role: "Model training, API integration, backend logic",
      github: "https://github.com/pawansaig", // Placeholder
      demo: null,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce application with cart, payment gateway, and user authentication.",
      tech: ["MERN Stack", "Redux", "Stripe"],
      role: "Full Stack Development",
      github: "https://github.com/pawansaig",
      demo: "https://example.com",
    },
    {
      title: "Smart Portfolio",
      description:
        "A responsive portfolio website with dark mode, animations, and clean UI.",
      tech: ["React", "Vite", "Framer Motion"],
      role: "Frontend Development",
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
