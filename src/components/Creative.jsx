import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaPalette } from "react-icons/fa";
import "../styles/Creative.css";

const Creative = () => {
  return (
    <section id="creative" className="creative">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Creative Work</h2>
        </motion.div>

        <motion.div
          className="creative-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="art-card">
            <div className="art-icon">
              <FaPalette />
            </div>
            <h3>Art Gallery</h3>
            <p>
              Beyond coding, I express my creativity through art. Explore my
              sketches, paintings, and digital art collection.
            </p>
            <a href="#" className="view-gallery-btn">
              Visit Gallery <FaExternalLinkAlt />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Creative;
