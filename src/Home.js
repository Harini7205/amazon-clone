import React from 'react'
import './Home.css';
import productdet from './homeProduct.json';
import Product from './Product';
import Carousel from './Carousel';

function Home() {
  const images=[
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/June/GW/Hero/V1/V2/BucketsMugsPC-V1._CB553693039_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Makeup-PCfdfo._CB554430294_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/BISS_2024/GW_heros_June24/PC_june/3000x1200_PC_2._CB554379545_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg"
  ];
  return (
    <div className="home">
      <div className="home-container">
        <Carousel images={images}/>
        <div className="background"></div>
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
              <button className="prod-signin">Sign in securely</button>
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
    </div>
  )
}

export default Home
