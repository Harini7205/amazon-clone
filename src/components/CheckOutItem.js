import React from 'react';
import StarRating from './StarRating';
import '../styles/CheckOutItem.css';

function CheckOutItem({image,title,rating,rate}) {
  return (
    <div className='checkout-item'>
        <img src={image} alt="checkoutimg" className="checkout-item-image"/>
        <div className="checkout-item-content">
            <p className="checkout-item-title"><strong>{title}</strong></p>
            <p className="checkout-item-rating"><StarRating rating={rating}/></p>
            <p className="checkout-item-rate">₹{rate}</p>
        </div>       
    </div>
  )
}

export default CheckOutItem
