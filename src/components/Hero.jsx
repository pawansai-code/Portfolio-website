import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile pic.jpeg";
import "../styles/Hero.css";

const Hero = () => {
  const letters = "PAWANSAI G".split("");
  const roles = ["FullStack Developer", "Creative Problem Solver", "UI/UX Enthusiast", "Tech Innovator"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
  };

  return (
    <section id="hero" className="hero">
      
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="greeting-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Hey! I'm
          </motion.div>
          
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

          <div className="role-container">
            <motion.h3
              key={currentRoleIndex}
              className="subheading dynamic-role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRoleIndex]}
            </motion.h3>
          </div>
          
          <motion.p 
            className="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            I build exceptional digital experiences. Combining deep technical expertise with a sharp eye for design, I craft modern, responsive, and performant web applications.
          </motion.p>

          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <MagneticButton className="btn primary-btn" text="View Projects" link="#projects" />
            <MagneticButton className="btn secondary-btn" text="Contact Me" link="#contact" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <motion.div
            className="img-3d-wrapper"
            style={{ perspective: 1000 }}
          >
            <div className="img-glow-layer"></div>
            <img src={profileImg} alt="Pawan Sai G" className="profile-img-3d" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MagneticButton = ({ className, text, link }) => {
  return (
    <motion.a
      href={link}
      className={className}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {text}
    </motion.a>
  );
};

export default Hero;
