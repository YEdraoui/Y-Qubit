'use client';
import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 gradient-animated opacity-100"></div>
    </div>
  );
};
