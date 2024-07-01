import React from 'react';
import './StarRating.css'; // Assuming you have some CSS for styling the stars

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
