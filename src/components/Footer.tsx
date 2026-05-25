import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">EN</h3>
          <p>Full-Stack Java Developer passionate about building exceptional digital experiences.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/#about">About</Link>
            <Link to="/#skills">Skills</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#experience">Experience</Link>
            <Link to="/#contact">Contact</Link>
            <Link to="/learn" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>
              📚 Java Course
            </Link>
            <Link to="/blog">Tech Blog</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a
              href="https://github.com/DEnigma1996"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-nwachukwu-262388100/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Emmanuel Nwachukwu. All rights reserved.</p>
      </div>
    </footer>
  );
}
