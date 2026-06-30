import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Java", "JavaScript", "Typescript"],
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "React.js", "Bootstrap 5", "React Native", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Django"],
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Data Science & ML",
      skills: ["Pandas", "NumPy", "Matplotlib", "seaborn", "scikit-learn", "RAG"],
    },
    {
      title: "Tools & UI/UX",
      skills: ["Git", "GitHub", "Figma", "Canva", "Wireframing", "Prototyping"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Technical Skills</h2>
          <p>Technologies I use to build robust applications.</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3>
                {category.title}
              </h3>
              <div className="skills-wrapper">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="skill-item"
                    variants={itemVariants}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Link to={`/skill/${skill}`} className="skill-pill">
                        {skill}
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
