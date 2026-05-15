import { useState, useEffect } from 'react';
import type { Page } from '../App';
import './Header.css';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  page: Page;
  setPage: (p: Page) => void;
}

export default function Header({ isDark, toggleTheme, page, setPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (page !== 'home') {
      setPage('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const goHome = () => {
    setPage('home');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goLearn = () => {
    setPage('learn');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={goHome}>EN</div>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {page === 'home' ? (
            <>
              <a onClick={() => scrollToSection('about')}>About</a>
              <a onClick={() => scrollToSection('skills')}>Skills</a>
              <a onClick={() => scrollToSection('projects')}>Projects</a>
              <a onClick={() => scrollToSection('experience')}>Experience</a>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </>
          ) : (
            <a onClick={goHome}>← Portfolio</a>
          )}
          <a
            onClick={goLearn}
            className={page === 'learn' ? 'nav-active' : ''}
            style={page === 'learn' ? { color: 'var(--primary-color)' } : {}}
          >
            Learn Java
          </a>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? '☀️' : '🌙'}
        </button>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
