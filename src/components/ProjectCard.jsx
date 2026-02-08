import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../styles/Projects.css"; // Shared styles

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="project-image">
        {/* Placeholder for project image */}
        <div className="img-placeholder">{project.title} Image</div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="role">{project.role}</p>
        <p className="description">{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        <p className="role">
          <strong>Role:</strong> {project.role}
        </p>

        <div className="project-links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              <FaGithub /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
