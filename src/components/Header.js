import React,{useState,useEffect} from 'react'
import '../styles/Header.css';
import india from '../assets/india.jpg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom";
import { useStateValue } from '../config/stateProvider';
import {auth,db} from '../firebase/firebase';
import { doc,collection, getDoc} from 'firebase/firestore';


function Header() {
  const [{basket,user},]=useStateValue();
  const handleAuthentication=()=>{
    if (user){
      auth.signOut();
    }
  }
  const [userName,setUserName]=useState('');
  useEffect(()=>{
    if (user){
      console.log(user.uid);
      const docRef=doc(collection(db,'users'),user.uid);
      getDoc(docRef).then(doc=>{
        if (doc.exists){
          const docData=doc.data();
          setUserName(docData.Name);
        }
        else{
          console.log("No document");
        }
      }).catch(error=>{
        console.log(error);
      });
    }
  },[user]);
  return (
    <div className="header">
      <div className="logo bordered">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="header_logo"/>
        <span className="logo_attach">.in</span>
      </div>
      <div className="delivery_loc bordered">
        <LocationOnIcon className="location_icon"/>
        <div className="header_option">
          <p className="text1">Delivering to Mumbai 400001</p>
          <p className="text2">Update location</p>
        </div>
      </div>
      <div class="header_search">
        <input type="text" className="header_input" placeholder="Search Amazon.in"/>
        <SearchIcon className="search_icon"/>
      </div>
      <div className="header_nav">
        <div className="language-option bordered">
          <img src={india} alt="India flag" class="india-flag"></img>
          <p>EN</p>
          <ArrowDropDownIcon className="dropdown"/>
        </div>
        <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header_option bordered">
            <p className="text1">Hello, {(user && userName) || "Guest"}</p>
            <p className="text2">{user?"Sign out": "Sign in"}</p>
        </div>
        </Link>
        <div className="header_option bordered">
            <p className="text1">Returns</p>
            <p className="text2">& Orders</p>
        </div>
        <Link to="/cart">
        <div className="header_option_basket bordered">
            <p className="shopping_basket_count t1">{basket?.length}</p>
            <p className="t2"><ShoppingCartIcon className="shopping_basket" /> Cart</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
