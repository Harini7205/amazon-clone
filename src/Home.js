import React from 'react'
import './Home.css';
import productdet from './homeProduct.json';
import Product from './Product';
import Carousel from './Carousel';

function Home() {
  
  return (
    <div className="home background">
      <div className="home-container">
        <Carousel />
        <div className="product-container">
          {
            productdet.products.map((item,index)=>{
              return <Product 
              heading={item.itemTitle}
              images={item.imgs}
              subtitles={item.subtitles}
              next={item.next}
              />
            })
          }
          <div className="one-img-product">
            <h2 className="catchy-text">Minimum 50% off | Indoor plants</h2>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/PCCC/01-379_X_304-min._SY304_CB556163815_.jpg" alt="one-img" className="one-img"/>
            <p className="next">See more</p>
          </div>
          <div className="last-product">
            <div className="unique-product">
              <h2 className="sign-in">Sign in for your best experience</h2>
              <button className="prod-signin yellow-button">Sign in securely</button>
            </div>
            <div className="ad">
              <img src="https://m.media-amazon.com/images/I/81KqMk8EN6L._SY695_.jpg" alt="ad" className="ad-img"></img>
              <p className="ad-title">Rose Gold Plated 18k American I-pk ring</p>
              <p className="ad-text">Limited Time Deal</p>
              <p className="ad-rate"><span className="discount">-79%</span>&#8377;425</p>
            </div>
          </div>
        </div>
      </div>
      <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/3a04a81b-bafd-4f7c-8d08-0b26e5870ce3.jpeg" alt="ad" className="image-ad"/>
    </div>
  )
}

export default Home
