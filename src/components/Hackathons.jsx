import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaTrophy,
  FaArrowLeft,
} from "react-icons/fa";
import "../styles/Hackathons.css";

// Import images
import hardwareImg from "../assets/hardware hackathon/hardware 1.jpg";
import ritImg from "../assets/RIT college.jpg";
import sriramImg from "../assets/sriram college .jpg";
import codaethonImg from "../assets/codaethon.jpeg";

const Hackathons = () => {
  const containerRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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

  return (
    <section className="hackathons-page" ref={containerRef}>
      <div className="container" style={{ paddingTop: "20px" }}>
        <Link to="/" className="back-btn">
          <FaArrowLeft /> Back to Home
        </Link>
        <motion.div
          className="hackathons-header-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Hackathon Journey </h2>
          <p>Innovating and competing at the highest levels.</p>
        </motion.div>

        <div className="journey-container">
          {/* Glowing Central Line */}
          <div className="journey-line-bg">
            <motion.div
              className="journey-line-glow"
              style={{ scaleY, transformOrigin: "top" }}
            />
          </div>

          {hackathons.map((h, index) => {
            const isExpanded = expandedIndex === index;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`journey-item ${isEven ? "left" : "right"}`}>
                <motion.div
                  className="journey-card"
                  initial={{ opacity: 0, x: isEven ? -100 : 100, rotateY: isEven ? 15 : -15, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.1 }}
                >
                  <div className="journey-dot"></div>
                  
                  <div className="journey-card-image">
                    <img src={h.image} alt={h.title} />
                    <div className="journey-achievement-badge">
                      <FaTrophy /> {h.achievement}
                    </div>
                  </div>

                  <div className="journey-card-content">
                    <h3>{h.title}</h3>
                    <div className="journey-date">
                      <FaCalendarAlt /> {h.date}
                    </div>
                    
                    <motion.div layout className="journey-desc-container">
                      <p className="journey-desc">
                        {isExpanded ? h.fullDetails : h.description}
                      </p>
                    </motion.div>

                    <div className="journey-tags">
                      {h.tags.map((tag, i) => (
                        <span key={i} className="tech-tag">{tag}</span>
                      ))}
                    </div>

                    <button
                      className="view-more-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? (
                        <>Show Less <FaChevronUp /></>
                      ) : (
                        <>Explore Details <FaChevronDown /></>
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
