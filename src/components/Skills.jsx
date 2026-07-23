import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaDatabase, 
  FaChartBar, FaChartLine, FaBrain, FaGitAlt, FaGithub, FaFigma, FaPencilRuler, FaLayerGroup
} from "react-icons/fa";
import { 
  SiC, SiJavascript, SiTypescript, SiTailwindcss, SiDjango, SiMongodb, SiPostgresql, 
  SiPandas, SiNumpy, SiScikitlearn, SiCanva 
} from "react-icons/si";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "C", icon: <SiC color="#A8B9CC" /> },
        { name: "Java", icon: <FaJava color="#ED8B00" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "React.js", icon: <FaReact color="#61DAFB" /> },
        { name: "Bootstrap 5", icon: <FaBootstrap color="#7952B3" /> },
        { name: "React Native", icon: <FaReact color="#61DAFB" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Django", icon: <SiDjango color="#092E20" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL", icon: <FaDatabase color="#336791" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas", icon: <SiPandas color="#150458" /> },
        { name: "NumPy", icon: <SiNumpy color="#013243" /> },
        { name: "Matplotlib", icon: <FaChartBar color="#11557c" /> },
        { name: "seaborn", icon: <FaChartLine color="#4C72B0" /> },
        { name: "scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },
        { name: "RAG", icon: <FaBrain color="#A020F0" /> },
      ],
    },
    {
      title: "Tools & UI/UX",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="var(--text-color)" /> },
        { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
        { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
        { name: "Wireframing", icon: <FaPencilRuler color="#555555" /> },
        { name: "Prototyping", icon: <FaLayerGroup color="#007BFF" /> },
      ],
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
                      <Link to={`/skill/${skill.name}`} className="skill-pill">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
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
