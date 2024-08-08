import React from 'react';
import './Services.css';
import Footer from './Footer';

const Services = () => {
  return (
    <div>
    <div className="services-container">
      <div className="service-card">
        <h2>BUSINESS & DATA ANALYTICS</h2>
        <p>
          We provide insights through data analysis, helping you make informed decisions. 
          Whether it's understanding your market or improving your business strategy, 
          we've got you covered.
        </p>
      </div>

      <div className="service-card">
        <h2>SOFTWARE DEVELOPMENT</h2>
        <p>
          Our team creates custom software solutions tailored to your needs. 
          From concept to execution, we build software that fits your business perfectly.
        </p>
      </div>

      <div className="service-card">
        <h2>CYBERSECURITY ANALYSIS</h2>
        <p>
          We offer comprehensive cybersecurity services, including penetration testing, 
          to protect your systems from threats and vulnerabilities.
        </p>
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Services;
