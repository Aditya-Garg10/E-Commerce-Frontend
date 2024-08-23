import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import Insta from '../components/Asset/image.png'

const Instabar = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 justify-center my-14 ">

       <div className="flex px-10">
       <img className='object-contain rounded-xl flex' src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/1677820240816162003.jpg?format=webp&w=1500&dpr=1.5" alt="" />
        </div>
        <div className="flex gap-3 justify-center items-center  flex-col">
            <h1 className='text-5xl font-semibold text-center md:text-3xl'>WEAR TO STYLE</h1>
            <button className='bg-black gap-2 flex flex-row justify-center items-center py-2 text-2xl font-myFont sm:text-sm font-semibold text px-4'> <img className='h-7' src={Insta} alt="" /> Instagram</button>
        </div>
      </div>    
    </div>
  )
}

export default Instabar
