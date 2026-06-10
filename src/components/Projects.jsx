import { motion } from "framer-motion";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

const Projects = () => {
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
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
