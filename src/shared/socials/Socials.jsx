import React from 'react';
import './Socials.css';

const Socials = () => {
  return (
    <div className="social_buttons">
      <a href="https://github.com/AndzhurT" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      
      <a href="https://www.linkedin.com/in/andzhurT/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      
      <a href="mailto:hello@andzhurterminkeev.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-at"></i>
      </a>

      <div className="credits">
        <p>© 2025</p>
        <p>Andzhur Terminkeev</p>
      </div>
    </div>
  );
};

export default Socials;