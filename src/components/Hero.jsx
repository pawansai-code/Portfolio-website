import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="greeting">Hi, I'm</h2>
          <h1 className="name">PAWAN SAI G</h1>
          <h3 className="subheading">
            Full-Stack Developer | MERN STACK ENTHUSIAST | ML Enthusiast
          </h3>
          <p className="intro">
            I build intelligent, scalable web applications and AI-powered
            systems with clean architecture and creative UI.
          </p>

          <div className="cta-buttons">
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <button className="btn primary-btn">View Projects</button>
            </Link>
          </div>

          <div className="socials">
            <a
              href="https://github.com/pawansaig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/pawansaig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:pawangopi2006@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="img-wrapper">
            {/* Placeholder for now, user needs to add real image */}
            <div className="placeholder-img">Profile Photo</div>
            {/* <img src={profileImg} alt="Pawan Sai G" /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
