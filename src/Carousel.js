import React,{useState,useEffect} from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './Carousel.css';

function Carousel({images}) {
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
