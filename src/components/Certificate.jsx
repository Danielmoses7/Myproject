import React, { useState } from 'react';
import './Certificate.css';

function Certificate() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleCertificates = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section id="certificates" className="certificates-section">
      <h2 
        onClick={toggleCertificates} 
        className="certificates-toggle"
      >
        My Certificates {isVisible ? '▲' : '▼'}
      </h2>

      {isVisible && (
        <ul className="certificate-list">
          <li>✔️ Generative Ai – Oracle</li>
          <li>✔️ Javascript – Codeacademy</li>
          <li>✔️ DevOps Internship – NIELIT</li>
          <li>✔️ c++ – cisco</li>
          {/* Add more as needed */}
        </ul>
      )}
    </section>
  );
}

export default Certificate;
