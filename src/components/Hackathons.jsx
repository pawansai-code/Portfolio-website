import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaTrophy,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaTimes
} from "react-icons/fa";
import "../styles/Hackathons.css";

// Import images
import hardwareImg from "../assets/hardware hackathon/hardware 1.jpg";
import ritImg from "../assets/RIT college.jpg";
import sriramImg from "../assets/sriram college .jpg";
import codaethonImg from "../assets/codaethon.jpeg";

const Hackathons = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const openPreview = (imgSrc) => {
    setPreviewImage(imgSrc);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setPreviewImage(null);
    // Restore scrolling
    document.body.style.overflow = "auto";
  };

  const hackathons = [
    {
      title: "Hardware Hackathon 2.0",
      date: "Recent",
      role: "Team Member",
      description: "Developed an end-to-end solution using Arduino Uno to measure temperature and humidity, displaying results on an LCD screen.",
      fullDetails: "Our team focused on building a compact, efficient IoT device for environmental monitoring. We utilized an Arduino Uno as the core microcontroller, integrated with DHT11 temperature and humidity sensors. The real-time data was processed and displayed on a 16x2 LCD screen. We also implemented a simple threshold-based alert system. The project was recognized for its precise calibration and robust build quality, ultimately securing a spot in the Top Five among numerous competitive entries.",
      achievement: "Top 5",
      image: hardwareImg,
      tags: ["Arduino", "Hardware", "IoT", "Sensors"],
    },
    {
      title: "Codaethon",
      date: "TBD",
      role: "TBD",
      description: "Placeholder description for the new hackathon.",
      fullDetails: "Placeholder full details for the new hackathon. This space will be updated soon.",
      achievement: "TBD",
      image: codaethonImg,
      tags: ["Placeholder"],
    },
    {
      title: "Smart Crop Advisory System",
      date: "Recent - Sriram Engineering College",
      role: "Team Member",
      description: "Developed a 'Smart Crop Advisory System for Small and Marginal Farmers' featuring a Multilingual Chatbot and Pest Detection.",
      fullDetails: "This project aimed to empower farmers by providing actionable insights through a user-friendly interface. We developed a Multilingual Chatbot that supports local languages, allowing farmers to ask questions about crop health. A pest/disease detection model was trained using YOLOv8 on aerial and ground-level images. We also integrated Market Price Tracking to help farmers decide the best time to sell. The backend was powered by Django with a MySQL database, and we used Selenium for automated data scraping.",
      achievement: "Finalist",
      image: sriramImg,
      tags: ["Django", "YOLOv8", "MySQL", "Chatbot"],
    },
    {
      title: "API Fusion - Smart Crop Advisory",
      date: "Recent - RIT College",
      role: "Team Member",
      description: "Secured 2nd place in the API Fusion competition organized by RIT College with team DHARA.",
      fullDetails: "In the API Fusion competition, we showcased how our Smart Crop Advisory System leverages multiple external APIs to provide a comprehensive solution for agricultural challenges. Our presentation focused on the seamless integration of weather data, market price APIs, and our custom AI models. The judges were particularly impressed by our frontend implementation and the practical applicability of the solution in real-world farming scenarios. Our team 'DHARA' worked cohesively to refine the user experience and ensure the system's scalability.",
      achievement: "2nd Place",
      image: ritImg,
      tags: ["Frontend", "API", "Presentation", "Teamwork"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 }
    }
  };

  return (
    <section className="hackathons-page">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div 
            className="image-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <button className="lightbox-close-btn" onClick={closePreview}>
              <FaTimes />
            </button>
            <motion.img 
              src={previewImage} 
              alt="Preview" 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container" style={{ paddingTop: "20px" }}>
        <Link to="/" className="back-btn">
          <FaArrowLeft /> Back to Home
        </Link>
        <motion.div
          className="hackathons-header-section"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="glitch-text">Hackathon Journey</h2>
          <p>Innovating and competing at the highest levels.</p>
        </motion.div>

        <motion.div 
          className="hackathons-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {hackathons.map((h, index) => {
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className={`journey-card ${isExpanded ? "expanded" : ""}`}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              >
                <div 
                  className="journey-card-image previewable" 
                  onClick={() => openPreview(h.image)}
                >
                  <img src={h.image} alt={h.title} />
                  <div className="image-overlay">
                    <span className="preview-text">Click to preview</span>
                  </div>
                  <motion.div 
                    className="journey-achievement-badge"
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaTrophy className="trophy-icon" /> <span>{h.achievement}</span>
                  </motion.div>
                </div>

                <div className="journey-card-content">
                  <div className="journey-card-header">
                    <h3>{h.title}</h3>
                    <div className="journey-date">
                      <FaCalendarAlt className="date-icon" /> {h.date}
                    </div>
                  </div>
                  
                  <motion.div layout className="journey-desc-container">
                    <p className="journey-desc">
                      {h.description}
                    </p>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 15 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="expanded-content"
                        >
                          <div className="divider" />
                          <p className="journey-full-details">{h.fullDetails}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <div className="journey-tags">
                    {h.tags.map((tag, i) => (
                      <motion.span 
                        key={i} 
                        className="tech-tag"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="card-actions">
                    <button
                      className="view-more-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? (
                        <>Show Less <FaChevronUp className="btn-icon" /></>
                      ) : (
                        <>Explore Details <FaChevronDown className="btn-icon" /></>
                      )}
                    </button>
                    
                    {isExpanded && (
                      <motion.button 
                        className="external-link-btn"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.button>
                    )}
                  </div>
                </div>
                
                {/* Decorative corner accents */}
                <div className="corner-accent top-right" />
                <div className="corner-accent bottom-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
