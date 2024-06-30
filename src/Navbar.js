import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <p className="option bordered"><MenuIcon style={{color:"white",height:"22px"}}/> All</p>
      <p className="option bordered">Fresh</p>
      <p className="option bordered">Amazon miniTV</p>
      <p className="option bordered">Sell</p>
      <p className="option bordered">Best Sellers</p>
      <p className="option bordered">Mobiles</p>
      <p className="option bordered">Today's deals</p>
      <p className="option bordered">Fashion</p>
      <p className="option bordered">Electronics</p>
      <p className="option bordered">Prime <ArrowDropDownIcon className="dropdown-prime" style={{color:"grey",fontSize:"18px",alignSelf:"flex-end"}}/></p>
      <p className="option bordered">New Releases</p>
      <p className="option bordered">Home & Kitchen</p>
      <p className="option bordered">Amazon Pay</p>
      <p className="option bordered">Customer Service</p>
      <p className="option bordered">Computer</p>
      <p className="option bordered">Books</p>
      <p className="option bordered">Car & Motorbike</p>
    </div>
  )
}

export default Navbar
