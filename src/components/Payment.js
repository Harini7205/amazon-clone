import React from 'react'
import '../styles/Payment.css';
import CheckOutItem from './CheckOutItem';
import { useStateValue } from '../config/stateProvider';
import LockIcon from '@mui/icons-material/Lock';
import { getBasketTotal } from '../config/reducer';

function formatCurrency(value) {
  const numberValue = parseFloat(value);
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(numberValue);
}
function Payment() {
    const [{basket,user}]=useStateValue();
    const formattedValue=formatCurrency(getBasketTotal(basket));
  return (
    <div className='payment-page'>
      <div className='title-bar'>
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="amazon-logo"/>
        <h2>Checkout ({basket.length} items) </h2>
        <p><LockIcon /></p>
      </div>
      <div className='two-split'>
      <div className='left-side'>
      <div className='payment-options'>
        <div className='payment-option'>
            <div className='left-option'>1. Delivery Address</div>
            <div className='right-option'>
                {user?user.email+",":null}<br/>
                123, Brooklyn Lane,
                Seattle,
                USA.                        
            </div>
        </div>
        <hr width="60%" size="1px" color="lightgrey"/>
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
        <hr width="60%" size="1px" color="lightgrey"/>
        <div className='payment-option'>
            <div className='left-option'>3. Items and Delivery</div>
            <div className='right-option checkout-items'>
            {basket.map((item) => (
                  <CheckOutItem id={item.id} image={item.image} title={item.title} rate={item.price} rating={item.rating} />
            ))}                       
            </div>
        </div>
      </div>
      </div> 
      <div className='right-side'>
        <div className="subtotal payment-subtotal">
          <p><strong>Order Summary</strong></p>
          <p>Items: <strong>{basket.length}</strong></p>
          <p>Delivery: <strong>..</strong></p>
          <hr width="100%" color="grey" size="0.5px" />
          <p>Order Total: <strong>{formattedValue}</strong></p>
          <hr width="100%" color="grey" size="0.5px" />
          <button className="yellow-button">Buy Now</button>
        </div>  
      </div>
      </div>
    </div>
  )
}

export default Payment
