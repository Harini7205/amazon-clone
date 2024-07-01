import React from 'react';
import './Cart.css';
import StarRating from './StarRating';
import recentProducts from './recentHistory.json';

function Cart() {
  return (
    <div className="cart-page">
      <div className="cart-left">
      <div className="cart-top-left">
        <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="cart-page-img" />
        <div className="empty-cart">
          <h2>Your Amazon Cart is empty</h2>
          <p className="blue-subtitle">Shop today's deals</p>
          <div className="buttons">
            <button className="prod-signin yellow-button">Sign In to Your Account</button>
            <button className="prod-signup white-button">Sign Up Now</button>
          </div>
        </div>
      </div>
      <div className="cart-bottom-left"></div>
      <div className="cautionary-text">
        <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.</p>
        <p>Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
      </div>
      </div>
      <div className="cart-right">
        <h3>Customers who bought items in your Recent History also bought</h3>
        <div className="list-product">
          {
            recentProducts.products.map((item,index)=>{
              return <div className="recc-prod">
                <img src={item.img} alt="imgrecc" className="imgrecc"/>
                <div className="prod-right">
                  <p className="rp-item-title">{item.title}</p>
                  <p className="rp-rating-review"><StarRating rating={item.rating}/> <span className="rp-review">{item.reviews}</span></p>
                  <p className="rp-rate">{item.rate}</p>
                  <button className="yellow-button">Add to cart</button>
                </div>
              </div>
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default Cart
