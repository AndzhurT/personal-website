import React, { useState } from 'react';
import { Link } from 'gatsby';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-brand">
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/about" className="nav-link" activeClassName="nav-link--active">
              <span className="nav-link-number">01.</span> About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link" activeClassName="nav-link--active">
              <span className="nav-link-number">02.</span> Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-link" activeClassName="nav-link--active">
              <span className="nav-link-number">03.</span> Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" activeClassName="nav-link--active">
              <span className="nav-link-number">04.</span> Contact
            </Link>
          </li>
          <li className="nav-item">
            <a 
              href="/resume.pdf" 
              className="nav-link nav-link--resume" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        {/* Mobile Navigation */}
        <div className={`nav-mobile ${isMenuOpen ? 'nav-mobile--open' : ''}`}>
          <ul className="nav-mobile-menu">
            <li className="nav-mobile-item">
              <Link to="/about" className="nav-mobile-link" onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li className="nav-mobile-item">
              <Link to="/experience" className="nav-mobile-link" onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li className="nav-mobile-item">
              <Link to="/work" className="nav-mobile-link" onClick={closeMenu}>
                Work
              </Link>
            </li>
            <li className="nav-mobile-item">
              <Link to="/contact" className="nav-mobile-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-mobile-item">
              <a 
                href="/resume.pdf" 
                className="nav-mobile-link nav-mobile-link--resume" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;