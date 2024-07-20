import React from 'react'
import StarRating from './StarRating';
import { useStateValue } from './stateProvider';
import './styles/Product.css';

function Product({id,title,image,rate,rating}) {
  const [{basket},dispatch]=useStateValue(); 
  console.log('this is the basket',basket);
  const addToCart= ()=>{
    dispatch({
      type:'ADD_TO_CART',
      item:{
        id:id,
        title:title,
        image:image,
        price:rate,
        rating:rating
      },
    });
  };
  return (
    <div className="recc-prod">
        <img src={image} alt="imgrecc" className="imgrecc"/>
          <div className="prod-right">
            <p className="rp-item-title">{title}</p>
            <p className="rp-rating-review"><StarRating rating={rating}/></p>
            <p className="rp-rate">₹{rate}</p>
            <button className="yellow-button" onClick={addToCart}>Add to cart</button>
          </div>
    </div>
  )
}

export default Product
