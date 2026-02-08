import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { toggleTheme } from "../store/themeSlice";
import "../styles/Header.css";

const Header = () => {
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100);
    }
  };

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
                {location.pathname === "/" ? (
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <span
                    onClick={() => handleNavClick(link.to)}
                    style={{ cursor: "pointer" }}
                    className="nav-link-span"
                  >
                    {link.name}
                  </span>
                )}
              </li>
            ))}
            <li>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
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
