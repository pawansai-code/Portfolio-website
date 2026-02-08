import { motion } from "framer-motion";
import { FaBrain, FaCode, FaDatabase, FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Tailwind",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["Python", "Django", "Node.js", "Express", "REST APIs"],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "AI / ML",
      icon: <FaBrain />,
      skills: [
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "MobileNet",
        "TensorFlow",
        "Model Training",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Technical Skills</h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <Link key={idx} to={`/skill/${skill}`} className="skill-tag">
                    {skill}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
