import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleTheme } from "../store/themeSlice";
import "../styles/Header.css";

const Header = () => {
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-content">
        <div className="logo">PAWAN SAI G</div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="resume-btn"
            onClick={(e) => e.preventDefault()}
          >
            Resume
          </a>
        </nav>

        <div className="actions">
          <button
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
          >
            {mode === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
