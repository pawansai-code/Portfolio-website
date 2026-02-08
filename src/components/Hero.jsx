import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import profileImg from "../assets/profile pic.jpeg";
import "../styles/Hero.css";

const Hero = () => {
  const letters = "PAWANSAI G".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-animation"></div>
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="greeting"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.h2>

          <motion.h1
            className="name"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {letters.map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h3
            className="subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Full-Stack Developer | MERN STACK ENTHUSIAST | ML Enthusiast
          </motion.h3>
          <motion.p
            className="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            I build intelligent, scalable web applications and AI-powered
            systems with clean architecture and creative UI.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <button className="btn primary-btn">View Projects</button>
            </Link>
          </motion.div>

          <motion.div
            className="socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <a
              href="https://github.com/pawansai-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/pawansai-g/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:pawangopi2006@gmail.com">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <div className="img-wrapper">
            <img src={profileImg} alt="Pawan Sai G" className="profile-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
