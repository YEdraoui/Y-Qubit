import React from 'react';
import './About.css';
import Footer from './Footer';
const aboutItems = [
  {
    title: "Our Vision",
    content: "Our vision is to build intelligent systems that enhance human abilities and create a more connected world. We aim to lead the AI industry with solutions that solve real-world problems.",
  },
  {
    title: "Our Mission",
    content: "Our mission is to develop advanced AI technologies that empower businesses and individuals. We focus on innovation, excellence, and ethical practices to ensure our solutions are effective and responsible.",
  },
  {
    title: "Our Projects",
    content: "MyHealth: AI-driven health management platform. Y-Tracker: CRM system for AUI’s Employability and Entrepreneurship Office. Dart: Concept in Morocco for interest-free money gathering.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      {aboutItems.map((item, index) => (
        <div key={index} className="about-card">
          <blockquote>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </blockquote>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default About;
