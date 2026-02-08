import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>PAWAN SAI G</h2>
            <p>Building intelligent web systems with creativity.</p>
          </div>

          <div className="footer-links">
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </div>

          <div className="footer-socials">
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
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
