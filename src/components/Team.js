import React from 'react';
import TeamMember from './TeamMember'; // Import the TeamMember component
import './Team.css';
import ceoImage from './CEO.jpeg'; // Import the CEO image
import CFO from './CFO.jpeg'; // Import other images similarly
import Software1 from './Software1.jpeg';
import Software2 from './Software2.jpeg';
import Footer from './Footer';

function Team() {
  // Example team members data
  const teamMembers = [
    {
      name: 'Yassir Edraoui',
      title: 'Founder and CEO',
      image: ceoImage, // Use the imported image
    },
    {
      name: 'Achraf Bachiri Taoufiq',
      title: 'CFO',
      image: CFO, // Use the imported image
    },
    {
      name: 'Aymane Khaldi',
      title: 'Software Developer',
      image: Software1,
    },
    {
      name: 'Yassine Boucham',
      title: 'Software Developer',
      image: Software2,
    },
  ];

  return (
    <div className="team-container">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Team;
