import React from 'react';
import './Cart.css';
import Product from './Product';
import recentProducts from './recentHistory.json';
import { useStateValue } from './stateProvider';
import { getBasketTotal } from './reducer';
import BasketItem from './BasketItem';

function formatCurrency(value) {
  const numberValue = parseFloat(value);
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(numberValue);
}

function Cart() {
  const [{basket}]=useStateValue();
  console.log('Basket:', basket);
  console.log('Total:', getBasketTotal(basket));
  const isCartEmpty=(basket.length===0);
  const formattedValue = formatCurrency(getBasketTotal(basket));
  return (
    <div className="cart-page">
      <div className="cart-left">
        {isCartEmpty?(
          <div className="cart-top-left empty">
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
        ):
          <div className="cart-top-left notempty">
            <h2>Shopping Cart</h2>
            <h4>{basket.length} {basket.length>1?'items':'item'}</h4>
            {basket.map((item) => (
                <div className="basket-items">
                  <BasketItem id={item.id} image={item.image} title={item.title} rate={item.price} rating={item.rating} />
                </div>              
            ))}
          </div>
        }
      <div className="cart-bottom-left"></div>
      <div className="cautionary-text">
        <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.</p>
        <p>Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
      </div>
      </div>
        {isCartEmpty?
        (
          <div className="cart-right empty">
            <h3>Customers who bought items in your Recent History also bought</h3>
          <div className="list-product">
            {
              recentProducts.products.map((item,index)=>{
                return <Product image={item.img} rate={item.rate} rating={item.rating} reviews={item.reviews} title={item.title} id={item.id} />
              })
            }
          </div>
          </div>
        ):
        (
          <div className="cart-right">
            <div className="subtotal">
              <p>Subtotal ({basket.length} {basket.length > 1 ? 'items' : 'item'}): <strong>{formattedValue}</strong></p>
              <small><input type="checkbox" />This order contains a gift</small>
              <button className="yellow-button">Proceed to Buy</button>
            </div>
            <div className='cart-right-bottom'>
            <h3>Customers who bought items in your Recent History also bought</h3>
            <div className="list-product">  
              {
                recentProducts.products.map((item,index)=>{
                  return <Product image={item.img} rate={item.rate} rating={item.rating} reviews={item.reviews} title={item.title} id={item.id} />
                })
              }
            </div>
            </div>
          </div>
        )
        }
    </div>
  )
}

export default Cart
