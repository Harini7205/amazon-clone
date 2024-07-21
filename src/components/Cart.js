import React,{useEffect,useState} from 'react';
import '../styles/Cart.css';
import Product from './Product';
import recentProducts from '../data/recentHistory.json';
import { useStateValue } from '../config/stateProvider';
import { getBasketTotal } from '../config/reducer';
import BasketItem from './BasketItem';
import {useNavigate} from "react-router-dom";
import {doc,setDoc,collection,getDoc} from 'firebase/firestore';
import { db } from '../firebase/firebase';

function formatCurrency(value) {
  const numberValue = parseFloat(value);
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(numberValue);
}

function Cart() {
  const navigate=useNavigate();
  const [{basket,user}]=useStateValue();
  const [cartItems,setCartItems]=useState([]);
  console.log('Basket:', basket);
  console.log('Total:', getBasketTotal(basket));
  const isCartEmpty=(cartItems.length===0);
  useEffect(() => {
    if (user) {
      const cartRef = doc(db, 'cart', user.uid);
      setDoc(cartRef, { userid:user.uid, items: basket }, { merge: true }).catch(error => {
        console.error("Error updating cart: ", error);
      });
    }
  }, [basket,user]);
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
},[basket,user]);
  const formattedValue = formatCurrency(getBasketTotal(cartItems));
  return (
    <div className="cart-page">
      <div className="cart-left">
        {isCartEmpty?(
          <div className="cart-top-left empty">
          <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="cart-page-img" />
          <div className="empty-cart">
            <h2>Your Amazon Cart is empty</h2>
            <p className="blue-subtitle">Shop today's deals</p>
            {(!user)?
            <div className="buttons">
              <button className="prod-signin yellow-button" onClick={e=>navigate("/login")}>Sign In to Your Account</button>
              <button className="prod-signup white-button" onClick={e=>navigate("/login")}>Sign Up Now</button>
            </div> 
            : null
            }            
          </div>
          </div>
        ):
          <div className="cart-top-left notempty">
            <h2>Shopping Cart</h2>
            <h4>{cartItems.length} {cartItems.length>1?'items':'item'}</h4>
            <div className="basket-items">
            {cartItems.map((item) => (
                  <BasketItem id={item.id} image={item.image} title={item.title} rate={item.price} rating={item.rating} />
            ))}
            </div> 
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
              <p>Subtotal ({cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}): <strong>{formattedValue}</strong></p>
              <small><input type="checkbox" />This order contains a gift</small>
              <button className="yellow-button" onClick={e=>navigate('/payment')}>Proceed to Buy</button>
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
