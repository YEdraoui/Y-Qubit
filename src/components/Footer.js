import React from 'react';
import './Footer.css'; // Make sure to create and style this CSS file

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:contact@y-qubit.com">contact@y-qubit.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="./linkedin-icon.png" alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="./instagram-icon.png" alt="Instagram" className="footer-icon" />
          </a>
        </div>
        <div className="footer-section">
          <p>&copy; 2024 Y-Qubit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
