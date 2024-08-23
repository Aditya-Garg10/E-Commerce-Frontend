import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'

import { Button, Carousel } from 'antd';
const contentStyle = {
  height: '70vh',  
  width:'100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'end',
  
  backgroundImage: "url('https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/ISRO_MEN__HOMEPAGE_copy_mtgYixO.jpg?format=webp&w=1500&dpr=2.0')",
  borderRadius : "24px",
  backgroundRepeat : "no-repeat",
  backgroundSize : "cover",
  
};
const contentStyle2 = {
  height: '70vh',  
  width:'100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'end',
  backgroundImage: "url('https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_copy_8.jpg?format=webp&w=1500&dpr=2.0')",
  borderRadius : "24px",
  backgroundRepeat : "no-repeat",
  backgroundSize : "cover",
  
};



const Hero = () => {
  const textRef= useRef()

  
  useEffect(()=>{
    gsap.fromTo(textRef.current,{opacity:0, y: -100},{opacity:1,y:0,duration:1.5,ease:"power3.Out"})
  },[])
  return (
    <div >
    
    <div  className='sm:hidden'>
    <Carousel className='px-10  rounded-3xl' autoplay>
    <div className='rounded-3xl'>
      <h3 className='' style={contentStyle}></h3>
    </div>
    <div>
      <h3 style={contentStyle2}></h3>
    </div>
    <div>
      <h3 style={contentStyle}></h3>
    </div>   
  </Carousel>
    </div>

  <div className="flex sm:block md:flex lg:hidden 2xl:hidden"><img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/MobileBanner_copy_R1t0iLT.jpg?format=webp&w=768&dpr=2.0" alt="" /></div>
   

    </div>
  )
}

export default Hero
