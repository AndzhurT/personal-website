import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      position: "Technical Lead",
      company: "WebBridgePro",
      companyUrl: "https://webbridgepro.com/",
      date: "May 2024 - Present",
      description: [
        "Led a team of 4+ Software Engineers in the development of a web browser robotic process automation tool.",
        "Spearheaded migration from WordPress to a scalable TypeScript/React app with PostgreSQL, cutting Time To First Byte (TTFB) by 55% and boosting click-through rates (CTRs) through faster load times and modern UI.",
        "Conducted code reviews and provided technical guidance, enhancing code quality and reducing bugs by 30%.",
        "Created and produced over 300+ scripts for dealerships, auctions, using JavaScript, Selenium and Python."
      ]
    },
    {
      id: 2,
      position: "Undergraduate Researcher",
      company: "Pennsylvania State University",
      companyUrl: "https://www.abington.psu.edu/academics/undergraduate-research",
      date: "2024 - 2025",
      description: [
        "Collaborated with professor on KI-BERT development, integrating SenticNet and GCN to improve sentiment analysis accuracy by 6%, receiving recognition from 30+ students and faculty at ACURA program.",
        "Performed evaluations across IMDb and Yelp datasets using PyTorch and implemented domain-specific tokens"
      ]
    },
    {
      id: 3,
      position: "Software Engineer Intern",
      company: "Headstarter",
      companyUrl: "https://headstarter.co/",
      date: "2024 - 2024",
      description: [
        "Built 5+ apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users.",
        "Developed projects from design to deployment leading 4+ engineering fellow using MVC design patterns.",
        "Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns."
      ]
    },
    {
      id: 4,
      position: "Software Engineer Intern",
      company: "Preventi LLC",
      companyUrl: "http://preventillc.com/",
      date: "2023 - 2024",
      description: [
        "Integrated automated JavaScript program to text and call 500+ people daily using Twilio and SMS APIs.",
        "Resolved customer issues and implemented strategies, improving satisfaction and retention by 20%.",
      ]
    },
         {
       id: 5,
       position: "Student Instructor",
       company: "Stanford University",
       companyUrl: "https://stanford.edu/",
       date: "2024 - 2024",
      description: [
        "Conducted Stanford’s Code in Place CS106A course to students globally, taken by 10,000+ students.",
        "Educated students in Python leveraging beginner-friendly libraries such as Stanford’s Karel and Tkinter.",
      ]
    },
  ];

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-title-wrapper">
            <h2 className="experience-title">
              <span className="experience-number">02.</span> Work Experience
            </h2>
          </div>
        </div>
        
        <div className="experience-content">
          <div className="experience-list">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className={`experience-item ${expandedId === exp.id ? 'expanded' : ''}`}
                onClick={() => toggleExpanded(exp.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpanded(exp.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={expandedId === exp.id}
              >
                <div className="experience-summary">
                  <div className="experience-main">
                    <div className="experience-title-section">
                      <h3 className="experience-position">{exp.position}</h3>
                      <div className="position-line"></div>
                    </div>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="experience-company"
                      onClick={(e) => e.stopPropagation()}
                    >
                      @ {exp.company}
                      <span className="external-link">↗</span>
                    </a>
                  </div>
                  <div className="experience-date">{exp.date}</div>
                  <div className="expand-indicator">
                    <span className={`arrow ${expandedId === exp.id ? 'rotated' : ''}`}>▼</span>
                  </div>
                </div>
                
                <div className={`experience-description ${expandedId === exp.id ? 'show' : ''}`}>
                  <ul>
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
