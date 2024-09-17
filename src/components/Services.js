import React from 'react';
import './Services.css';
import Footer from './Footer';

const services = [
  {
    title: "Cybersecurity Solutions",
    description:
      "We provide comprehensive cybersecurity services, including penetration testing, vulnerability assessment, and secure system design to protect your digital assets.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Leverage the power of AI with our cutting-edge machine learning models and algorithms tailored to meet your business needs. We specialize in predictive analytics, automation, and intelligent systems.",
  },
  {
    title: "Big Data Analytics",
    description:
      "Transform your data into actionable insights. We offer end-to-end big data solutions including data mining, processing, and visualization to help you make data-driven decisions.",
  },
  {
    title: "Blockchain Development",
    description:
      "Our blockchain experts can help you develop secure, decentralized applications, smart contracts, and blockchain-based solutions for various industries.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Explore the wide range of services we offer to help your business stay ahead in the digital era.
        </p>
      </div>
      <div className="services-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services
