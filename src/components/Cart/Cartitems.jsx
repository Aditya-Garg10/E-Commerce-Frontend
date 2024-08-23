import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../Context/Context'
import { IoBagHandle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { Input } from 'antd'
import { IoBagCheckOutline } from "react-icons/io5";

// import { Link } from 'react-router-dom'


const Cartitems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext)

    
  let found = false;
  const array = [cartItems]
  // let value = array[0][150]
  for(let key in array[0]){
    if(array[0][key]=== 1){
      found = true
      break;
    }
  }
  return (
    <>    

        <h1 className='text-center text-3xl mt-5 font-myFont'>Your Cart</h1>
        {found? 
        <div className='container'>
        <div className="head my-3 justify-center items-center flex gap-3">
          <IoBagHandle className='text-center text-4xl font-myFont'/>
        </div>
        <div className="main2 border-2 rounded-md my-10">
          
      
         <div className="table-responsive">
         <table class="table  align-middle">
              <thead className='text-center'>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
       {all_product.map((e)=>{
          if(cartItems[e.id]>0){
              return  <tbody className='text-center'>
              <tr >
                <th scope="row" className='flex items-center justify-center'><Link to={`/product/${e.id}`}><img className='h-20 object-contain w-20'  src={e.image[0]} alt="" /></Link></th>
                <td className='font-semibold'>{e.name}</td>
                <td>${e.new_price}</td>
                <td>{cartItems[e.id]}</td>
                <td className='font-semibold'>${e.new_price*cartItems[e.id]}</td>
                <td  ><button style={{border:"0",backgroundColor:"white"}} onClick={()=>{removeFromCart(e.id)}}><i class="fa-solid btn fa-xmark"></i></button></td>                
              </tr>
              </tbody>
             
               
             
          } else{
              return null
          }        
       })}
       
            </table>
          </div>   
        
      
        </div>
        {/* <div className="main3">
          
         <div className="cart-total">
         <h3>Cart Totals</h3>
          

          
          <div className="div1">
          <h5>Subtotal</h5>
          
          </div>
          
          <div className="div2">
            <h5>Shipping Fee</h5>
            <p>Free</p>
          </div>
          
          <div className="div3">
          <h5><b>Total</b></h5>
          <p><b>${getTotalCartAmount()}</b></p>
          </div>
          
        <button className='btn btn-dark mt-3'><b>PROCEED TO CHECKOUT</b></button>
         </div>
  
          <div className="coupen ">
            <h5>If you have a Promocode, Enter it here:</h5>           
            <input id="newsletter" type="text" className="form-control search-input" placeholder="Code" fdprocessedid="hnhec8"/>
            <button className="buttn btn" fdprocessedid="f6ise9" type="button">SUBMIT</button>
             
            
          </div>
        </div> */}
        <h1 className='flex items-center  gap-2 text-xl font-semibold'>Cart Total <FaCartShopping/></h1>
      <div className="flex  gap-2 flex-col h-full   w-full">
      <div className="w-full gap-2 border-2 rounded-md mt-4 py-4 flex flex-col">
      <div className="flex  items-center  px-10 justify-between w-full">
      <h5>Subtotal</h5>
       <p>${getTotalCartAmount()}</p>
      </div>
      <div className="flex mt-1 items-center px-10 justify-between w-full">
      <h5>Shipping Fee</h5>
       <p>Free</p>
      </div>
      <div className="flex mt-1 items-center px-10 justify-between w-full">
      <h5 className='font-semibold'>Total</h5>
       <p className='font-bold'>${getTotalCartAmount()}</p>
      </div>
      </div>
      <div className="w-full gap-2 px-40 sm:px-8 items-center border-2 rounded-md mt-4 py-4 flex flex-col">
      <h5 className='font-semibold text-xl'>If you have a Promocode, Enter it here:</h5>           
      <Input id="newsletter" type="text" className="form-control  search-input" placeholder="Code" fdprocessedid="hnhec8"/>
      <button className="text-white bg-black px-3  font-myFont py-1" fdprocessedid="f6ise9" type="button">SUBMIT</button>
      </div>
     </div>
     <button className='text-xl bg-black px-3 flex items-center  gap-2 justify-center py-1 mt-6 text-white font-myFont'>CHECKOUT <IoBagCheckOutline className='mb-1 '/></button>
      </div>
        
        :<div className='flex flex-col items-center justify-center'>
          

          <div className="h-[45vh]"><dotlottie-player  src="https://lottie.host/a579ecd9-aef0-49b7-83e6-41a5c41d0e4b/ZPRxsmI92t.json" background="transparent" speed="1"  loop autoplay></dotlottie-player></div>
          <h1 className='text-center items-center flex mt-5 text-xl font-myFont'>Your shopping cart is<p className='text-red-500 ms-2 text-2xl font-semibold'>Empty</p></h1>
          <h1 className='text-center items-center flex mt-1 text-lg font-myFont'>Carts have feelings too</h1>        
          </div>}
        
    </>
  )
}

export default Cartitems
