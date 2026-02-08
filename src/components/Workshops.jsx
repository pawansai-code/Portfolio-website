import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import "../styles/Workshops.css";

// Import images
import meetupImg from "../assets/reactjs meetup/meetup 1.jpg";
import uiuxImg from "../assets/uiux workshop/ui ux1.jpg";

const Workshops = () => {
  const workshops = [
    {
      title: "Chennai React Meetup #15",
      date: "Recent",
      audience: "Developers & Students",
      type: "Meetup",
      description:
        "Attended Chennai React Meetup #15. Insights on server-side rendering with Nitro, streaming UI patterns for AI, and next-gen CSS. Networked with professionals and participated in interactive sessions.",
      image: meetupImg,
    },
    {
      title: "My First UI/UX Workshop",
      date: "Recent",
      audience: "2nd & 3rd YearPeers",
      type: "Workshop",
      description:
        "Conducted a UI/UX workshop in Figma with teammates Saravanan MR and Aarthi M. Covered UI/UX principles, wireframing, and Figma tools. Included hands-on session and prototyping.",
      image: uiuxImg,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="workshops-page">
      <div className="container">
        <motion.div
          className="workshops-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Knowledge Sharing</h2>
          <p>Empowering others through workshops and seminars.</p>
        </motion.div>

        <motion.div
          className="workshops-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workshops.map((w, index) => (
            <motion.div
              key={index}
              className="workshop-card"
              variants={cardVariants}
            >
              <div className="workshop-image-container">
                <img src={w.image} alt={w.title} />
                <div className="workshop-overlay"></div>
              </div>
              <div className="workshop-content">
                <div className="workshop-header">
                  <h3 className="workshop-title">{w.title}</h3>
                  <span className="workshop-date">
                    <FaCalendarAlt /> {w.date}
                  </span>
                </div>
                <div className="workshop-stats">
                  <div className="stat-item">
                    <FaUsers className="stat-icon" /> {w.audience}
                  </div>
                  <div className="stat-item">
                    <FaChalkboardTeacher className="stat-icon" /> {w.type}
                  </div>
                </div>
                <p className="workshop-desc">{w.description}</p>
                <button className="explore-btn">
                  View Details <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;
