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
      skills: ["SQL", "MongoDB"],
    },
    {
      title: "Data Science & ML",
      skills: ["Pandas", "NumPy", "Matplotlib"],
    },
    {
      title: "Tools & UI/UX",
      skills: ["Git", "GitHub", "Figma", "Canva", "Wireframing", "Prototyping"],
    },
  ];

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{category.title}</h3>
              <div className="skills-wrapper">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <Link to={`/skill/${skill}`} className="skill-pill">
                      {skill}
                    </Link>
                  </div>
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
