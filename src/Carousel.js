import React,{useState,useEffect} from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './Carousel.css';

const images=[
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/June/GW/Hero/V1/V2/BucketsMugsPC-V1._CB553693039_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Makeup-PCfdfo._CB554430294_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/BISS_2024/GW_heros_June24/PC_june/3000x1200_PC_2._CB554379545_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg"
];

function Carousel() {
  const [currIndex,setCurrentIndex]=useState(0);
  function carouselScroll(){
    if (currIndex===images.length-1){
        return setCurrentIndex(0);
    }
    return setCurrentIndex(currIndex+1);
}
useEffect(()=>{
    const interval=setInterval(()=>{carouselScroll()},6000);
    return()=> clearInterval(interval)
})
  function goToPrev(){
    const isFirstSlide=currIndex===0;
    const prevIndex=isFirstSlide?images.length-1:currIndex-1;
    setCurrentIndex(prevIndex);
  }
  function goToNext(){
    const isLastSlide=currIndex===images.length-1;
    const nextIndex=isLastSlide?0:currIndex+1;
    setCurrentIndex(nextIndex);
  }
  return (
    <div className="carousel">
      <button onClick={goToPrev} className="carousel-button left"><ChevronLeftIcon className="chevron"/></button>
      <div className="carousel-content">
        {images.map((image,index)=>(
            <div
            key={index}
            className={`carousel-item ${index === currIndex ? '' : 'hidden'}`}
            >
            <img src={image} alt={`Slide ${index}`}/>
          </div>
        ))}
      </div>
      <button onClick={goToNext} className="carousel-button right"><ChevronRightIcon className="chevron"/></button>
    </div>
  )
}



export default Carousel
