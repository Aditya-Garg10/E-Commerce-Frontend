import React from 'react'

import Insta from '../components/Asset/image.png'

const Instabar = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 justify-center my-14 ">

       <div className="flex sm:px-1 px-10">
        <img className='2xl:hidden lg:hidden md:block sm:block' src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catbanmob-520240822133143.jpg?format=webp&w=768&dpr=3.0" alt="" />
       <img className='object-contain sm:hidden rounded-xl flex' src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/1677820240816162003.jpg?format=webp&w=1500&dpr=1.5" alt="" />
        </div>
        <div className="flex gap-3 justify-center items-center  flex-col">
            <h1 className='text-5xl font-myFont text-center bg-gradient-to-r bg-black font-semibold text-transparent bg-clip-text md:text-3xl'>WEAR TO STYLE</h1>
            <button className='bg-black gap-2 flex flex-row justify-center items-center py-2 text-2xl font-myFont sm:text-sm font-semibold text px-4'> <img className='h-7' src={Insta} alt="" /> Instagram</button>
        </div>
      </div>    
    </div>
  )
}

export default Instabar
