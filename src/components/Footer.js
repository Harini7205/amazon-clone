import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-options">
        <div className="footer-option small">
            <h4>Get to Know Us</h4>
            <p>About us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Sciences</p>
        </div>
        <div className="footer-option small">
            <h4>Connect with Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
        <div className="footer-option">
            <h4>Make Money with Us</h4>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and build your brand</p>
            <p>Become an affliate</p>
            <p>Amazon Global Selling</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise your products</p>
            <p>Amazon Pay on merchants</p>
        </div>
        <div className="footer-option">
            <h4>Let Us Help You</h4>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>Recalls & Product Safety Alerts</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
        </div>
      </div>
      <div className="footer-line"></div>
      <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="footer-logo" />
      <div className='copyright'>
        <div className="copyright-options">
            <p>Conditions of Use & Sale</p>
            <p>Privacy Notice</p>
            <p>Interest Based Ads</p>
        </div>
        <p className='copyright-text'>&#169; July 2024 Harini</p>
      </div>
    </div>
    
  )
}

export default Footer
