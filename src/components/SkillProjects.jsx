import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "../styles/Projects.css"; // Reuse styles
import ProjectCard from "./ProjectCard";

const SkillProjects = () => {
  const { skillName } = useParams();

  // This data ideally comes from a shared source or Redux, repeating here for simplicity
  const allProjects = [
    {
      title: "AI Food Spoilage Detection",
      description:
        "Built a MobileNet-based ML model integrated with Django backend to detect food freshness from images.",
      tech: [
        "Python",
        "Django",
        "TensorFlow",
        "React",
        "MobileNet",
        "Model Training",
      ],
      role: "Model training, API integration, backend logic",
      github: "https://github.com/pawansaig",
      demo: null,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce application with cart, payment gateway, and user authentication.",
      tech: ["MERN Stack", "Redux", "Stripe", "React", "Node.js", "MongoDB"],
      role: "Full Stack Development",
      github: "https://github.com/pawansaig",
      demo: "https://example.com",
    },
    {
      title: "Smart Portfolio",
      description:
        "A responsive portfolio website with dark mode, animations, and clean UI.",
      tech: ["React", "Vite", "Framer Motion", "Frontend"],
      role: "Frontend Development",
      github: "https://github.com/pawansaig",
      demo: null,
    },
    // Add more dummy projects if needed to show filtering better
  ];

  const filteredProjects = allProjects.filter((project) =>
    project.tech.some((tech) =>
      tech.toLowerCase().includes(skillName.toLowerCase()),
    ),
  );

  return (
    <section
      className="projects"
      style={{ paddingTop: "100px", minHeight: "100vh" }}
    >
      <div className="container">
        <Link
          to="/"
          className="back-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            color: "var(--primary-color)",
            fontWeight: "600",
          }}
        >
          <FaArrowLeft /> Back to Home
        </Link>

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Projects using {skillName}</h2>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "4rem",
              color: "var(--text-secondary)",
            }}
          >
            <h3>No specific projects listed for this skill yet.</h3>
            <p>Check back later or view all projects on the home page.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillProjects;
