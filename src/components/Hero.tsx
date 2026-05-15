import { useState, useEffect } from 'react';
import type { Page } from '../App';
import './Hero.css';

interface HeroProps {
  setPage: (p: Page) => void;
}

export default function Hero({ setPage }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    'Full-Stack Java Developer',
    'Backend Architect',
    'Problem Solver',
    'Clean Code Advocate',
  ];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setTextIndex((textIndex + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
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
            <button className="btn btn-learn" onClick={() => setPage('learn')}>
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
