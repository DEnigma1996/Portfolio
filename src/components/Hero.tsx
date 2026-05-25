import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const TYPING_TEXTS = [
  'Full-Stack Java Developer',
  'Backend Architect',
  'Problem Solver',
  'Clean Code Advocate',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const currentText = TYPING_TEXTS[textIndex];
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText('');
      setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [currentIndex, textIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Emmanuel Nwachukwu</h1>
          <div className="hero-title">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-tagline">
            Building scalable Java applications with seamless UI/UX
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
            <button className="btn btn-learn" onClick={() => navigate('/learn')}>
              📚 Java Course
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-icon">
              <span>EN</span>
            </div>
            <div className="code-decoration">
              <div className="code-line"></div>
              <div className="code-line"></div>
              <div className="code-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
