import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaTrophy,
} from "react-icons/fa";
import "../styles/Hackathons.css";

// Import images
import hardwareImg from "../assets/hardware hackathon/hardware 1.jpg";
import ritImg from "../assets/RIT college.jpg";
import sriramImg from "../assets/sriram college .jpg";

const Hackathons = () => {
  const ref = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
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
      description:
        "Participated in 'Hardware Hackathon 2.0' with teammates Meganathan and Nitheesh Kumar. Developed an end-to-end solution using Arduino Uno to measure temperature and humidity, displaying results on an LCD screen.",
      fullDetails:
        "Our team focused on building a compact, efficient IoT device for environmental monitoring. We utilized an Arduino Uno as the core microcontroller, integrated with DHT11 temperature and humidity sensors. The real-time data was processed and displayed on a 16x2 LCD screen. We also implemented a simple threshold-based alert system. The project was recognized for its precise calibration and robust build quality, ultimately securing a spot in the Top Five among numerous competitive entries.",
      achievement: "Top 5",
      image: hardwareImg,
      tags: ["Arduino", "Hardware", "IoT", "Sensors"],
    },
    {
      title: "Smart Crop Advisory System",
      date: "Recent - Sriram Engineering College",
      role: "Team Member",
      description:
        "Developed a 'Smart Crop Advisory System for Small and Marginal Farmers' at Sriram Engineering College. Features included a Multilingual Chatbot and Pest Detection.",
      fullDetails:
        "This project aimed to empower farmers by providing actionable insights through a user-friendly interface. We developed a Multilingual Chatbot that supports local languages, allowing farmers to ask questions about crop health. A pest/disease detection model was trained using YOLOv8 on aerial and ground-level images. We also integrated Market Price Tracking to help farmers decide the best time to sell. The backend was powered by Django with a MySQL database, and we used Selenium for automated data scraping.",
      achievement: "Finalist",
      image: sriramImg,
      tags: ["Django", "YOLOv8", "MySQL", "Chatbot"],
    },
    {
      title: "API Fusion - Smart Crop Advisory",
      date: "Recent - RIT College",
      role: "Team Member",
      description:
        "Secured 2nd place in the API Fusion competition organized by RIT College with team DHARA. Presented the Smart Crop Advisory System.",
      fullDetails:
        "In the API Fusion competition, we showcased how our Smart Crop Advisory System leverages multiple external APIs to provide a comprehensive solution for agricultural challenges. Our presentation focused on the seamless integration of weather data, market price APIs, and our custom AI models. The judges were particularly impressed by our frontend implementation and the practical applicability of the solution in real-world farming scenarios. Our team 'DHARA' worked cohesively to refine the user experience and ensure the system's scalability.",
      achievement: "2nd Place",
      image: ritImg,
      tags: ["Frontend", "API", "Presentation", "Teamwork"],
    },
  ];

  return (
    <section className="hackathons-page" ref={ref}>
      <div className="container">
        <motion.div
          className="hackathons-header-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Hackathon Journey</h2>
          <p>Innovating and competing at the highest levels.</p>
        </motion.div>

        <div className="timeline-container">
          {/* Central Line */}
          <div className="timeline-line">
            <motion.div
              className="timeline-line-progress"
              style={{ scaleY, transformOrigin: "top" }}
            />
          </div>

          {hackathons.map((h, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                className={`hackathon-item ${isExpanded ? "expanded" : ""}`}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div layout className="hackathon-content">
                  <div className="hackathon-image">
                    <img src={h.image} alt={h.title} />
                    <div className="badge-overlay">
                      <FaTrophy /> {h.achievement}
                    </div>
                  </div>
                  <div className="hackathon-header">
                    <h3>{h.title}</h3>
                    <span className="hackathon-date">
                      <FaCalendarAlt /> {h.date}
                    </span>
                  </div>

                  <motion.div layout className="hackathon-text-container">
                    <p className="hackathon-description">
                      {isExpanded ? h.fullDetails : h.description}
                    </p>
                  </motion.div>

                  <div className="hackathon-tags">
                    {h.tags.map((tag, i) => (
                      <span key={i} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="hackathon-footer">
                    <button
                      className="view-more-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? (
                        <>
                          Show Less <FaChevronUp />
                        </>
                      ) : (
                        <>
                          Preview Full Content <FaChevronDown />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
