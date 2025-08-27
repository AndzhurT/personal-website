import React, { useState, useEffect } from 'react';
import './Bio.css';
import './Bio.mobile.css';

import avi from '../../assets/images/andzhur_big.jpg';
import arrow from '../../assets/svg/arrow.svg';

const autotyping = [
  "An Aspiring Video Editor",
  "A Software Engineer",
  "A Volleyball Athlete",
  "I Love Gaming and Novels",
];

const Bio = ({ active }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(200);

  useEffect(() => {
    const currentWord = autotyping[currentIndex];
    
    if (isDeleting) {
      // Deleting effect
      setTypeSpeed(100);
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % autotyping.length);
        return;
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, typeSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      // Typing effect
      setTypeSpeed(150);
      if (currentText === currentWord) {
        // Pause before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
        return () => clearTimeout(timeout);
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, typeSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, isDeleting, currentIndex, typeSpeed]);

  return (
    <div className="base_container">
      <div></div>
      <div className="hero">
        <div className="intro_box">
          <h1>
            Moshi moshi, I'm <br /> Andzhur Terminkeev,
          </h1>
        </div>
        <div className="intro_box">
            <h3>
              <span className="auto-type">{currentText}</span>
            </h3>
        </div>
        <div className="description">
          <p>
            <span>
              I'm a <span className="highlight">software engineer</span> passionate about
              solving <span className="highlight">problems </span> and{' '}
              <span className="highlight">building new technologies</span>. I am interested in{' '}
              <span className="highlight">web development</span>,{' '}
              <span className="highlight">automation scripts</span>, and {' '}
              <span className="highlight">machine learning</span>. In my free time, I enjoy reading{' '}
              <span className="highlight">novels/mangas/manhwas</span>, playing {' '} 
              <span className="highlight">volleyball</span>, and exploring{' '}
              <span className="highlight">new technologies.</span> {' '}
              Recently, I've been <span className="highlight">learning</span>{" "}
              more about <span className="highlight">system design</span> and{' '}
              <span className="highlight">scalable architectures.</span>
            </span>
          </p>
        </div>
      </div>



      <div className="footer">
        <img src={avi} alt="" />
        <div className="social">
          <a href="https://github.com/andzhurT" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
            <img src={arrow} alt="pointer" />
          </a>

          <a href="https://twitter.com/BreadDreams" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter <img src={arrow} alt="pointer" />
          </a>

          <a href="mailto:andzhurterminkeev@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-at"></i> Email <img src={arrow} alt="pointer" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Bio;
