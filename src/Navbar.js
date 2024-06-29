import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <p className="option"><MenuIcon style={{color:"white",height:"22px"}}/> All</p>
      <p className="option">Fresh</p>
      <p className="option">Amazon miniTV</p>
      <p className="option">Sell</p>
      <p className="option">Best Sellers</p>
      <p className="option">Mobiles</p>
      <p className="option">Today's deals</p>
      <p className="option">Fashion</p>
      <p className="option">Electronics</p>
      <p className="option">Prime <ArrowDropDownIcon className="dropdown-prime" style={{color:"grey",fontSize:"18px",alignSelf:"flex-end"}}/></p>
      <p className="option">New Releases</p>
      <p className="option">Home & Kitchen</p>
      <p className="option">Amazon Pay</p>
      <p className="option">Customer Service</p>
      <p className="option">Computer</p>
      <p className="option">Books</p>
      <p className="option">Car & Motorbike</p>
    </div>
  )
}

export default Navbar
