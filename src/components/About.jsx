import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import "../styles/About.css";

const About = () => {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            ref={timelineRef}
          >
            <div className="timeline-line-bg">
              <motion.div className="timeline-line-animated" style={{ scaleY, transformOrigin: "top" }} />
            </div>

            <motion.div 
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="year">Start</span>
              <div className="content">
                <h3>The Dream</h3>
                <p>Ignited passion for IT in 10th grade.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="year">College</span>
              <div className="content">
                <h3>Machine Learning</h3>
                <p>
                  Learned Python & completed internship at Virtual Tech
                  Services.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="year">Now</span>
              <div className="content">
                <h3>Full Stack Dev</h3>
                <p>Building web apps and integrating AI.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
