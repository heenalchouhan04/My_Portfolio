import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'expertise', 'tools', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#expertise' },
    { name: 'Tools', href: '#tools' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : 'top'}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-badge">H</span>
          <span className="logo-text">
            HEENAL
          </span>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-links-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                    {isActive && <span className="nav-active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-controls">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`theme-toggle-btn ${theme === 'dark' ? 'dark-mode' : ''}`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="#contact"
              className="btn btn-primary nav-cta-btn"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>

        <div className="mobile-nav-controls">
          <button
            onClick={toggleTheme}
            className={`theme-toggle-btn ${theme === 'dark' ? 'dark-mode' : ''}`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary mobile-cta-btn">
            Hire Me
            <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
