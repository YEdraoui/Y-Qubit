import React from 'react';
import './TeamMember.css';

function TeamMember({ name, title, image }) {
  return (
    <div className="team-card">
      <img src={image} alt={`${name}`} className="team-image" />
      <h3 className="team-name">{name}</h3>
      <p className="team-title">{title}</p>
      
    </div>
  );
}

export default TeamMember;
