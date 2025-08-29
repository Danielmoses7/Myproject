import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleProjects = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 onClick={toggleProjects} className="projects-toggle">
        My Projects {isVisible ? '▲' : '▼'}
      </h2>

      {isVisible && (
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Online voting system (fullstack).</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Ecommerce Website</p>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>Online Sudy platform</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
