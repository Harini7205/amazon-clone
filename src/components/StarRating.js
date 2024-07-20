import React from 'react';
import '../styles/StarRating.css'; 

const StarRating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? 'checked' : ''}`}></span>
      ))}
    </div>
  );
};

export default StarRating;
