import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Skills.css";

const MarqueeRow = ({ items, direction = "left", speed = 20 }) => (
  <div className="marquee-container">
    <div
      className={`marquee-content ${direction}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {items.concat(items).map((skill, idx) => (
        <Link key={idx} to={`/skill/${skill}`} className="skill-pill">
          {skill}
        </Link>
      ))}
    </div>
    <div
      className={`marquee-content ${direction}`}
      style={{ animationDuration: `${speed}s` }}
      aria-hidden="true"
    >
      {items.concat(items).map((skill, idx) => (
        <Link
          key={idx}
          to={`/skill/${skill}`}
          className="skill-pill"
          tabIndex="-1"
        >
          {skill}
        </Link>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skills = {
    row1: ["Python", "C", "Java", "Django", "Node.js", "SQL", "MongoDB"],
    row2: ["Pandas", "NumPy", "Matplotlib", "Figma", "Canva", "Wireframing"],
    row3: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap 5",
      "Git",
      "GitHub",
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Technical Arsenal</h2>
          <p>Technologies I use to build robust applications.</p>
        </motion.div>
      </div>

      <div className="skills-marquee-wrapper">
        <MarqueeRow items={skills.row1} direction="left" speed={30} />
        <MarqueeRow items={skills.row2} direction="right" speed={35} />
        <MarqueeRow items={skills.row3} direction="left" speed={40} />
      </div>
    </section>
  );
};

export default Skills;
