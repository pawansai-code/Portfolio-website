import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Let’s Work Together</h2>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Get In Touch</h3>
            <p>
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="info-items-wrapper">
              <div className="info-item">
                <FaEnvelope className="icon" />
                <span>pawangopi2006@gmail.com</span>
              </div>
              <div className="info-item">
                <FaPhone className="icon" />
                <span>9080201820</span>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://linkedin.com/in/pawansai-g/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/pawansai-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
