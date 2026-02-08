import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaCalendarAlt, FaTrophy } from "react-icons/fa";
import "../styles/Hackathons.css";

// Import images
import hardwareImg from "../assets/hardware hackathon/hardware 1.jpg";
import ritImg from "../assets/RIT college.jpg";
import sriramImg from "../assets/sriram college .jpg";

const Hackathons = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const hackathons = [
    {
      title: "Hardware Hackathon 2.0",
      date: "Recent",
      role: "Team Member",
      description:
        "Participated in 'Hardware Hackathon 2.0' with teammates Meganathan and Nitheesh Kumar. Developed an end-to-end solution using Arduino Uno to measure temperature and humidity, displaying results on an LCD screen. Secured 'Top Five' position.",
      achievement: "Top 5",
      image: hardwareImg,
      tags: ["Arduino", "Hardware", "IoT", "Sensors"],
    },
    {
      title: "Smart Crop Advisory System",
      date: "Recent - Sriram Engineering College",
      role: "Team Member",
      description:
        "Developed a 'Smart Crop Advisory System for Small and Marginal Farmers' at Sriram Engineering College. Features included a Multilingual Chatbot, Pest/Disease Detection Model using YOLOv8, and Market Price Tracking. Tech stack: Django, MySQL, HTML/CSS/JS, Selenium.",
      achievement: "Finalist",
      image: sriramImg,
      tags: ["Django", "YOLOv8", "MySQL", "Chatbot"],
    },
    {
      title: "API Fusion - Smart Crop Advisory",
      date: "Recent - RIT College",
      role: "Team Member",
      description:
        "Secured 2nd place in the API Fusion competition organized by RIT College with team DHARA. Presented the Smart Crop Advisory System which helps farmers make informed decisions. Gained deep insights into frontend development and presentation skills.",
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

          {hackathons.map((h, index) => (
            <motion.div
              key={index}
              className="hackathon-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="hackathon-content">
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
                <p className="hackathon-description">{h.description}</p>
                <div className="hackathon-tags">
                  {h.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
