import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              I am a 3rd-year Computer Science student passionate about building
              intelligent systems. My focus is on{" "}
              <strong>Full-Stack Development</strong> and{" "}
              <strong>Machine Learning</strong>.
            </p>
            <p>
              I have experience working with Django, APIs, and integrating ML
              models into web applications. I love blending code with creativity
              to build seamless user experiences.
            </p>
          </motion.div>

          <motion.div
            className="timeline"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="timeline-item">
              <span className="year">2024</span>
              <div className="content">
                <h3>ML Internship</h3>
                <p>
                  Gained hands-on experience in training models and data
                  analysis.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="year">2025</span>
              <div className="content">
                <h3>Full-Stack Projects</h3>
                <p>Developed scalable web apps using MERN stack and Django.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="year">2026</span>
              <div className="content">
                <h3>Future Goals</h3>
                <p>
                  Aiming to contribute to open-source and build AI-driven SaaS
                  products.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
