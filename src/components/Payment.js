import React from 'react'
import '../styles/Payment.css';
import BasketItem from './BasketItem';
import { useStateValue } from '../config/stateProvider';

function Payment() {
    const [{basket,user}]=useStateValue();
  return (
    <div className='payment-page'>
      <div className='title-bar'>
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="amazon-logo"/>
        <h2>Checkout</h2>
        <a href="#home">Privacy Notice</a>
      </div>
      <div className='payment-options'>
        <div className='payment-option'>
            <div className='left-option'>1. Delivery Address</div>
            <div className='right-option'>
                {user?user.email:null},
                123, Brooklyn Lane,
                Seattle,
                USA.                        
            </div>
        </div>
        <hr width="100%" size="1px" color="lightgrey"/>
        <div className='payment-option'>
            <div className='left-option'>2. Payment Method</div>
            <div className='right-option'>
                <div className='checkbox-option'>
                    <input type="checkbox" value="credit" name="credit"></input>
                    <label for="credit">Credit or debit cards</label>  
                </div>
                <div className='checkbox-option'>
                    <input type="checkbox" value="upi" name="upi"></input>
                    <label for="upi">UPI'S-GPay,PayTM</label>  
                </div>
                <div className='checkbox-option'>
                    <input type="checkbox" value="stripe" name="stripe"></input>
                    <label for="stripe">Stripe</label>  
                </div>
                <div className='checkbox-option'>
                    <input type="checkbox" value="cash" name="cash"></input>
                    <label for="cash">Cash on delivery</label>  
                </div>                      
            </div>
        </div>
        <hr width="100%" size="1px" color="lightgrey"/>
        <div className='payment-option'>
            <div className='left-option'>3. Review items</div>
            <div className='right-option'>
            {basket.map((item) => (
                  <BasketItem id={item.id} image={item.image} title={item.title} rate={item.price} rating={item.rating} />
            ))}                       
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Payment
