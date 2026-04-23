import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase } from "react-icons/fa";
import "../styles/Experience.css";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const experiences = [
    {
      company: "SocialTek AI & ML Business Solutions Pvt Ltd (with Vyomenexgen)",
      role: "Full Stack Developer Intern",
      duration: "Recent - 5 Months",
      description: [
        "Contributed to a real-world product, advancing from basic React knowledge to building complex features and mastering deeper concepts.",
        "Integrated React Redux Toolkit for efficient state management, leading to cleaner and more maintainable code.",
        "Focused on best practices: writing clean and readable code, maintaining proper folder structure, and keeping an organized codebase.",
        "Gained exposure to client interactions, observing how projects evolve through continuous iterations to meet expectations.",
        "Tech Stack: React.js, React Redux Toolkit, GitHub",
      ],
    },
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
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
          <motion.div className="timeline-line" style={{ scaleY }} />
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
