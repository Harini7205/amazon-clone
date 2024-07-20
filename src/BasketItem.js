import React from 'react'
import './styles/BasketItem.css';
import StarRating from './StarRating';
import { useStateValue } from './stateProvider';

function BasketItem({id,image,title,rating,rate}) {
    const [,dispatch]=useStateValue();
    const removeFromCart=()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id,
        });
    };
    return (
    <div className='basket-item'>
        <img src={image} alt="basketimg" className="basket-item-image"/>
        <div className="basket-item-content">
            <p className="basket-item-title"><strong>{title}</strong></p>
            <p className="basket-item-rating"><StarRating rating={rating}/></p>
            <p className="basket-item-rate">₹{rate}</p>
            <a href="#home" className="remove-product" onClick={removeFromCart}>Delete item</a>
        </div>                
    </div>
  )
}

export default BasketItem
