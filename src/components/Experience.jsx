import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Machine Learning Intern",
      duration: "June 2024 - Aug 2024",
      description: [
        "Developed and trained a MobileNet model for image classification.",
        "Preprocessed large datasets using Pandas and NumPy.",
        "Collaborated with the backend team to integrate the model via REST API.",
      ],
    },
    {
      company: "WebDev Works",
      role: "Frontend Developer Intern",
      duration: "Jan 2024 - April 2024",
      description: [
        "Built responsive user interfaces using React and Tailwind CSS.",
        "Optimized website performance, improving load times by 20%.",
        "Implemented Redux for state management across the application.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Experience</h2>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="exp-icon">
                <FaBriefcase />
              </div>
              <div className="exp-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
                <ul className="exp-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
