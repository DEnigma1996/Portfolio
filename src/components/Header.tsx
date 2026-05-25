import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const SECTION_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link className="logo" to="/" onClick={() => setIsMobileMenuOpen(false)}>EN</Link>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {SECTION_LINKS.map((item) => (
            <Link key={item.id} to={`/#${item.id}`} onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </Link>
          ))}

          <NavLink
            to="/learn"
            className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Learn
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </NavLink>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? '☀️' : '🌙'}
        </button>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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
