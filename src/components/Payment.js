import React,{useState,useEffect} from 'react'
import '../styles/Payment.css';
import CheckOutItem from './CheckOutItem';
import { useStateValue } from '../config/stateProvider';
import LockIcon from '@mui/icons-material/Lock';
import { getBasketTotal } from '../config/reducer';
import StripeCheckOut from "react-stripe-checkout";
import { db } from '../firebase/firebase';
import { doc,collection, getDoc } from 'firebase/firestore';
import GooglePayButton from '@google-pay/button-react';

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
    const [payment,setPaymenMethod]=useState('');
    const [userName,setUserName]=useState('');
    const [cartItems,setCartItems]=useState([]);
    const formattedValue=formatCurrency(getBasketTotal(basket));
    const handlePaymentChange=(event)=>{
      setPaymenMethod(event.target.value);
    }
    const makePayment=(token)=>{
      console.log(token);
    }
    useEffect(()=>{
      if (user){
        const docRef=doc(collection(db,'users'),user.uid);
        getDoc(docRef).then(doc=>{
          const docData=doc.data();
          setUserName(docData.Name);
        }).catch(error=>{
          console.log(error);
        })
      }
    })
    useEffect(()=>{
      const fetchCartItems=async ()=>{
      if (user){
        try{
          const docRef=doc(collection(db,'cart'),user.uid);
          const documents=await getDoc(docRef);
          if (documents.exists){
            setCartItems(documents.data().items || []);
          }
          else{
            console.log("No documents exists");
          }
        } catch (error){
          console.log(error);
        }       
      }
    };
    fetchCartItems();
  },[user]);
  return (
    <div className='payment-page'>
      <div className='title-bar'>
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="amazon-logo"/>
        <h2>Checkout ({cartItems.length} items) </h2>
        <p><LockIcon /></p>
      </div>
      <div className='two-split'>
      <div className='left-side'>
      <div className='payment-options'>
        <div className='payment-option'>
            <div className='left-option'>1. Delivery Address</div>
            <div className='right-option'>
                {(user && userName && (userName+",")) || null}<br/>
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
                    <input type="checkbox" value="credit" name="payment" checked={payment==='credit'} onChange={handlePaymentChange}></input>
                    <label for="credit">Credit or debit cards</label>  
                </div>
                <div className='checkbox-option'>
                    <input type="checkbox" value="upi" name="payment" checked={payment==='upi'} onChange={handlePaymentChange}></input>
                    <label for="upi">UPI- Google Pay</label>  
                </div>
                <div className='checkbox-option'>
                    <input type="checkbox" value="cash" name="payment" checked={payment==='cash'} onChange={handlePaymentChange}></input>
                    <label for="cash">Cash on delivery</label>  
                </div>                      
            </div>
        </div>
        <hr width="60%" size="1px" color="lightgrey"/>
        <div className='payment-option'>
            <div className='left-option'>3. Items and Delivery</div>
            <div className='right-option checkout-items'>
            {cartItems.map((item) => (
                  <CheckOutItem id={item.id} image={item.image} title={item.title} rate={item.price} rating={item.rating} />
            ))}                       
            </div>
        </div>
      </div>
      </div> 
      <div className='right-side'>
        <div className="subtotal payment-subtotal">
          <p><strong>Order Summary</strong></p>
          <p>Items: <strong>{cartItems.length}</strong></p>
          <p>Delivery: <strong>..</strong></p>
          <hr width="100%" color="grey" size="0.5px" />
          <p>Order Total: <strong>{formattedValue}</strong></p>
          <hr width="100%" color="grey" size="0.5px" />
          {payment==='credit'? (
          <StripeCheckOut
            name="Credit/debit cards"
            amount={getBasketTotal(cartItems)*100}
            currency='INR'
            token={makePayment}
            stripeKey='pk_test_51PescED6rbiP1ss82TSgWln87ezmvk41PM1ZXwrQprZE1HFRXYm5v6WjiAODKPRIVociKgUp57bjw3O9KYUwB1Fi00eTiRQKHM'
          >
          <button className="yellow-button">Buy Now</button>
          </StripeCheckOut> )
          : payment==='upi' ? (
            <GooglePayButton
              className='google-pay-button'
              environment='TEST'
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type:'CARD',
                    parameters:{
                      allowedAuthMethods: ['PAN_ONLY','CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD','VISA']
                    },
                    tokenizationSpecification: {
                      type:'PAYMENT_GATEWAY',
                      parameters:{
                        gateway: 'example',
                        gatewayMerchantId: 'examplegatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo:{
                  merchantId:'12345678901234567890',
                  merchantName:'Test Merchant',
                },
                transactionInfo:{
                  totalPriceStatus:'FINAL',
                  totalPriceLabel:'Total',
                  totalPrice:getBasketTotal(cartItems).toString(),
                  currencyCode:'INR',
                  countryCode:'IN',
                },
                callbackIntents:['PAYMENT_AUTHORIZATION'],
                shippingAddressRequired:false
              }}
              onLoadPaymentData={paymentRequest=>{
                console.log("Success"+paymentRequest);
              }}
              onPaymentAuthorized={paymentData=>{
                console.log("Payment authorized"+paymentData)
                return {transactionState:'SUCCESS'}
              }}
              existingPaymentMethodRequired='false'
              buttonColor='white'
              buttonType='short'
            ></GooglePayButton>
          ) :
          <button className="yellow-button">Buy Now</button>
          }
        </div>  
      </div>
      </div>
    </div>
  )
}

export default Payment
