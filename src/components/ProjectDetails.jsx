import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import "../styles/ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    const foundProject = projectsData.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/#projects");
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <motion.div
      className="project-details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="project-details-content">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>

        <div className="header-section">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            className="role"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.role}
          </motion.p>
        </div>

        <motion.div 
          className="tech-stack"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div 
          className="project-links"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-link">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link">
              <FaGithub /> GitHub
            </a>
          )}
        </motion.div>

        <motion.div 
          className="description-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3>About the Project</h3>
          <p>{project.longDescription || project.description}</p>
        </motion.div>

        {project.images && project.images.length > 0 && (
          <motion.div 
            className="images-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3>Project Gallery</h3>
            <div className="image-grid">
              {project.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className="image-wrapper"
                  onClick={() => setSelectedImage(img)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={img} alt={`${project.title} preview ${idx + 1}`} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
        )}
      </div>

      {selectedImage && (
        <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
            <img src={selectedImage} alt="Full screen preview" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetails;
