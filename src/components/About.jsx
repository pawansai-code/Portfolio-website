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
              I'm currently seeking my{" "}
              <strong>Bachelor's degree in Computer Science Engineering</strong>
              . My journey began in 10th grade with a dream of working in the IT
              field.
            </p>
            <p>
              After entering college, I discovered a passion for{" "}
              <strong>Machine Learning</strong> and started mastering Python.
              This led to a 21-day internship at "Virtual Tech Services," where
              I applied algorithms to real-world problems and built a "Weather
              Classification" project.
            </p>
            <p>
              Now, I'm expanding my horizons to become a{" "}
              <strong>Full Stack Developer</strong>, mastering the MERN stack
              while keeping my ML roots strong. In my free time, I create art to
              stay focused and creative.
            </p>
            <p>
              Open to collaborations in Full Stack and ML—let's explore new
              origins together!
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
              <span className="year">Start</span>
              <div className="content">
                <h3>The Dream</h3>
                <p>Ignited passion for IT in 10th grade.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="year">College</span>
              <div className="content">
                <h3>Machine Learning</h3>
                <p>
                  Learned Python & completed internship at Virtual Tech
                  Services.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="year">Now</span>
              <div className="content">
                <h3>Full Stack Dev</h3>
                <p>Building web apps and integrating AI.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
