import React from 'react';
import './About.css';
import pfp from '../../assets/static/pfp.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            <span className="about-number">01.</span> About Me
          </h2>
          <div className="about-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-left">
            <div className="about-text">
              <p>
                Hello! I'm Andzhur Terminkeev, a passionate software engineer based in the United States. 
                My journey in technology began with a curiosity about how things work, which has evolved 
                into a deep passion for creating meaningful digital experiences.
              </p>
              
              <p>
                I specialize in <span className="highlight">full-stack web development</span>, with expertise 
                in modern technologies like React, Node.js, and Python. My approach combines technical 
                excellence with user-centered design, ensuring that every solution I build is not only 
                functional but also intuitive and accessible.
              </p>
              
              <p>
                When I'm not coding, you'll find me playing volleyball, diving into novels and manga, 
                or exploring the latest in gaming technology. I believe that diverse interests fuel 
                creativity and help me bring unique perspectives to every project.
              </p>
            </div>
            
            <div className="about-skills">
              <h3>Here're a few technologies I've been working with recently:</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Gatsby</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4>Tools & Others</h4>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Figma</li>
                    <li>Jest</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-right">
            <div className="about-photo-placeholder">
                <img src={pfp} alt="Andzhur Terminkeev" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
