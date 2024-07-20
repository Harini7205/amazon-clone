import React from 'react'
import './styles/Header.css';
import india from './assets/india.jpg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom";
import { useStateValue } from './stateProvider';
import {auth} from './firebase';


function Header() {
  const [{basket,user},]=useStateValue();
  const handleAuthentication=()=>{
    if (user){
      auth.signOut();
    }
  }
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
            <p className="text1">Hello, {user?"sign out": "sign in"}</p>
            <p className="text2">Accounts & Lists</p>
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
