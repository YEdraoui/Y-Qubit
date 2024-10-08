import React from 'react';
import { Link } from 'react-router-dom';
import welcomeImage from './971.jpg'; // Update the path if needed
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="particles"></div> {/* Particles animation */}
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome to Y-Qubit</h1>
          <p>Y-Qubit is a team of AI experts, researchers, and engineers dedicated to making a difference. Our goal is unlocking AI's full potential for the benefit of society.</p>
          <Link to="/services" className="welcome-button">Explore Our Services</Link>
        </div>
        <div className="welcome-image-container">
          <img src={welcomeImage} alt="Programming" className="welcome-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
