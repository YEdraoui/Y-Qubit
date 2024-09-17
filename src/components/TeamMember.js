import React from 'react';
import './TeamMember.css';

function TeamMember({ name, title, image }) {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={image} alt={name} />
      </div>
      <h3 className="member-name">{name}</h3>
      <p className="member-title">{title}</p>
    </div>
  );
}

export default TeamMember;
