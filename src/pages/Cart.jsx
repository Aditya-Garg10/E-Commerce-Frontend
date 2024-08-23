import React, { useEffect, useRef, useState } from 'react'
import Cartitems from '../components/Cart/Cartitems'
import Navbar from '../components/Navbar'
import gsap from 'gsap'
import { Link, useNavigate } from 'react-router-dom'


const Cart = () => {

const navigate = useNavigate()

  const textRef = useRef()

  const [TEXT, setTEXT] = useState(true);


  setInterval(() => {
    setTEXT(!TEXT);
  }, 5000);

  useEffect(() => {
    if (TEXT && !localStorage.getItem("auth-token")) {      
      textRef.current.textContent = "LOGIN"
      textRef.current.style.color = "red"
      gsap.fromTo(textRef.current, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" })      
    }
    else if (!localStorage.getItem("auth-token") && TEXT === false) {
      textRef.current.textContent = "OR SIGNUP"
      textRef.current.style.color = "#581c87"
      gsap.fromTo(textRef.current, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" })      
    }

  },[TEXT])

  

  const handleRedirect = () =>{
    if(TEXT){
      navigate("/login")
    }
    else{
      navigate("/signup")
    }
  }

  return (
    <div>
      <Navbar />
      {localStorage.getItem("auth-token") ? <Cartitems></Cartitems> : <div className='flex flex-col h-[70vh] my-10 w-full'>
        <h1 className='text-3xl w-full mb-10 h-1/6 text-center  font-semibold font-myFont gap-2 flex flex-row  h1 justify-center' > Please <button ref={textRef}  onClick={handleRedirect}   className='text-red-500 font-myFont overflow-auto flex'></button> </h1>
        <dotlottie-player className="w-full" src="https://lottie.host/c837fa31-1095-4b54-91a3-19580f9333e9/xYOv9bIm7q.json" background="transparent" speed="0.8" loop autoplay></dotlottie-player>
        <div className="flex justify-center h-1/5 items-center gap-4 mt-3">
         <Link to="/login"><button className='px-4 bg-black border-2  text-white py-1 border-black font-semibold font-myFont'>LOGIN</button></Link>
         <Link to="/signup"><button className='px-4 bg-white border-2  text-black py-1 font-semibold font-myFont'>SIGNUP</button></Link>
         </div>
      </div>}
    </div>
  )
}

export default Cart
