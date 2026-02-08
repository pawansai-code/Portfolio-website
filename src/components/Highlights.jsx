import { motion } from "framer-motion";
import { FaAward, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Highlights.css";

const Highlights = () => {
  const certifications = [
    "Python for Data Science – NPTEL",
    "Python Essentials I – Cisco Networking Academy",
    "Introduction to JavaScript Certification",
  ];

  const activities = [
    {
      type: "Hackathon",
      title: "Hackathon Participation",
      description: "Participated and won in national-level hackathons.",
      icon: <FaLaptopCode />,
    },
    {
      type: "Workshop",
      title: "Workshop Conductor",
      description:
        "Conducted technical workshops on Python and Web Development.",
      icon: <FaChalkboardTeacher />,
    },
  ];

  return (
    <section id="highlights" className="highlights-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Professional Highlights</h2>
        </motion.div>

        <div className="highlights-content">
          {/* Certifications Column */}
          <motion.div
            className="highlight-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>
              <FaAward className="highlight-icon" /> Certifications
            </h3>
            <ul className="cert-list">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </motion.div>

          {/* Activities Column */}
          <motion.div
            className="highlight-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>
              <FaLaptopCode className="highlight-icon" /> Activities
            </h3>
            <div className="activity-cards">
              {activities.map((activity, index) => (
                <Link
                  to={
                    activity.type === "Hackathon" ? "/hackathons" : "/workshops"
                  }
                  key={index}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="activity-card">
                    <div className="card-icon">{activity.icon}</div>
                    <div className="card-content">
                      <h4>{activity.title}</h4>
                      <p>{activity.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
