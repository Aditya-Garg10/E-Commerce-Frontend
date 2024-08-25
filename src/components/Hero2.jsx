import React from 'react'
import {Link} from 'react-router-dom'

const Hero2 = (props) => {


  const contentStyle1 = {
    height: '70vh',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    backgroundImage: "url('https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711017322_2044552.jpg?format=webp&w=480&dpr=1.5')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
    backgroundClip: "padding-box",
  };

  const contentStyle2 = {
    height: '70vh',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    backgroundImage: "url('https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722610914_4393266.jpg?format=webp&w=480&dpr=1.5')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundClip: "border-box",
    


  };

  const contentStyle3 = {    
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    backgroundImage: "url('https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1705740662_8369900.jpg?format=webp&w=480&dpr=1.5')",
    backgroundRepeat: "no-repeat",
    
    


  };

  const handleRedirect = () =>{
    window.scrollTo(0,0)
  }
  return (
    <div className='mt-16 sm:h-full  border-1  flex w-full items-center  h-[80vh]'>
      <div className="flex  w-full sm:flex-col md:flex-col  gap-5 2xl:px-10 sm:px-0  justify-center ">
        <div className='flex pb-20 ps-10 gap-2 flex-col 2xl:rounded-3xl sm:rounded-none  text-start items-start justify-end ' style={contentStyle1}>
          <p className=' font-semibold  text-6xl'>MAN</p>
          <Link onClick={handleRedirect}  className=' bg-white text-black px-4 py-2 rounded-full font-semibold  text-xl' to="/men"><button>See More</button></Link>
        </div>
        <div className='flex pb-20 ps-10 gap-2 flex-col  2xl:rounded-3xl sm:rounded-none text-start items-start justify-end ' style={contentStyle2}>
          <p className=' font-semibold  text-6xl'>WOMAN</p>
          <Link onClick={handleRedirect}  className=' bg-white text-black px-4 py-2 rounded-full font-semibold  text-xl' to="/women"><button>See More</button></Link>
        </div>
        <div className='flex pb-20 2xl:h-[70vh] ps-10  2xl:rounded-3xl sm:rounded-none  gap-2 flex-col text-start items-start justify-end 2xl:bg-cover ' style={contentStyle3}>
          <p className='font-semibold  text-6xl'>KIDS</p>
          <Link onClick={handleRedirect}  className=' bg-white text-black px-4 py-2 rounded-full font-semibold  text-xl' to="/kid"><button>See More</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero2
