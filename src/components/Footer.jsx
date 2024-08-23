import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-white'>
      <div className="h-[60vh] flex sm:flex-col md:flex-col sm:px-5  justify-around px-20 ">
        <div className="flex sm:w-full md:w-full w-1/2 sm:h-1/2 flex-col">
          <div className="flex-col h-full flex gap-4 sm:gap-1 justify-center items-start ">
          <h1 className='text-5xl font-semibold  sm:text-3xl'>Capie.</h1>
          <p className='w-2/3 sm:w-2/3   text-gray-400 sm:text-xs font-semibold'>Get news update for upcoming product and Discounts on New items</p>
         <div className="flex gap-3 sm:gap-0 ">
         <input type="text" placeholder='Your Email' className="flex-col border-1 border-black rounded-full py-2 sm:px-5 px-10 flex gap-3 "/>
          <button className='bg-black px-10 sm:px-5 rounded-full  text-white py-0 font-semibold  text-md'>Submit</button>
         </div>
          </div>          
        </div>
      
      <div className="w-1/2 sm:w-full md:w-full flex items-center mb-0 sm:mb-10">
      <table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Category</th>
      <th scope="col">Our Social Media</th>
      
    </tr>
  </thead>
  <tbody className='font-normal cursor-pointer'>
    <tr >
      <td >Tshirt</td>
      <td><Link to="/men">Man</Link></td>
      <td className="text2">Instagram</td>
      
    </tr>
    <tr>
      <td >Jacket</td>
      <td ><Link to="/women">Woman</Link></td>
      <td className='hover:text-blue-700 hover:font-semibold'>Facebook</td>
      
    </tr>
    <tr>
      <td >Shoes</td>
      <td><Link to="/kid">Kids</Link></td>
      <td className='hover:text-blue-400 hover:font-semibold'>Twitter</td>
      
    </tr>
    <tr>
      <td >Pants</td>
      <td><Link to="/latest">New Arrival</Link></td>
      <td className='hover:text-red-600 hover:font-semibold'>Youtube</td>
      
    </tr>
  </tbody>
</table>
      </div>
      </div>
      <div className="h-2/5  w-full  sm:text-lg sm:py-4 py-3  bg-black flex flex-row justify-around items-center">
        <div className="flex w-1/2 sm:justify-center sm:items-center">
        <h1 className=' sm:ps-0 sm:text-sm text-nowrap text-white'>@2024 Capie Production</h1>
        </div>
        <div className="flex w-1/3 sm:hidden text-nowrap gap-4">
        <h1 className=' text-white'>Terms & Conditions</h1>
        <h1 className=' text-white'>Privacy Policy</h1>
        <h1 className=' text-white'>Cookie Policy</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
