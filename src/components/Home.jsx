import React from 'react';
import profile from './chinnu.jpeg';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <img src={profile} alt="Daniel Y" className="profile-pic" />
        <div className="welcome-text">
          <h2>Welcome!</h2>
          <p>
I am currently pursuing a B.Tech in Computer Science Engineering. My academic journey has provided me with a solid technical background and a growing understanding of both hardware and software systems. I am passionate about technology, eager to learn, and motivated to explore new domains in the tech world. I particularly enjoy coding, with a strong interest in Data Structures and Algorithms.
</p>

        </div>
      </div>
    </section>
  );
}

export default Home;
