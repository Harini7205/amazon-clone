import React from 'react'
import './Component.css';

function Component({heading,images,subtitles,next}) {
  return (
    <div className="product">
      <h2 className="catchy-text">{heading}</h2>
      <div className="image-container">
            {
              images.map((item,index)=>{
                return (
                  <div className="image-with-text">
                    <img src={item} alt={"image"+index} className="product-image"/>
                    <p>{subtitles[index]}</p>
                  </div>
                );
              })
            }
      </div>
      <a href="#home" className="next">{next}</a>
    </div>
  )
}

export default Component
