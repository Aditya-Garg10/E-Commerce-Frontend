import React, { useEffect, useRef, useState } from 'react'
import { ShopContext } from '../components/Context/Context'
import { useContext } from 'react'
import Crad from '../components/Cards/Card'
import Navbar from '../components/Navbar'
import gsap from 'gsap'
import { GoHeartFill } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'
const Wishlist = () => {
  const navigate =  useNavigate()


  const textRef = useRef()

  const [TEXT, setTEXT] = useState(true);


  setInterval(() => {
    setTEXT(!TEXT);
  }, 5000);

  useEffect(() => {
    if (TEXT && !localStorage.getItem("auth-token")) {
      const word = "LOG IN"
      const wordArr = word.split("")
      let clutter = ""
      wordArr.forEach(function (e) {
        clutter += `<span>${e}</span>`
      })          
      textRef.current.innerHTML = clutter;
      textRef.current.style.color = "red"
      gsap.from("button span", { y: -40, duration: 0.2, delay: 0.3, opacity: 0, stagger: 0.2 })
      // console.log(textRef.current)
      // gsap.fromTo(textRef.current, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" })      
    }
    else if (!localStorage.getItem("auth-token") && TEXT === false) {
      const word = "OR-SIGNUP"
      const wordArr = word.split("")
      let clutter = ""
      wordArr.forEach(function (e) {
        clutter += `<span>${e}</span>`
      })      
      textRef.current.style.color = "#581c87"
      textRef.current.innerHTML = clutter;
      gsap.from("button span", { y: 40, duration: 0.2, delay: 0.3, opacity: 0, stagger: 0.2 })

    }



  }, [TEXT])

  
  const handleRedirect = () =>{
    if(TEXT){
      navigate("/login")
    }
    else{
      navigate("/signup")
    }
  }

  const { all_product, listItems } = useContext(ShopContext)

  let found = false;
  const array = [listItems]
  // let value = array[0][150]
  for (let key in array[0]) {
    if (array[0][key] > 0 || 1) {
      found = true
      break;
    }
  }

  return (
    <>
      <Navbar />
      <div>
        {localStorage.getItem("auth-token") ?
          <div className='container'>
            <div className="flex flex-col justify-center items-center">
              <h1 className='text-center mt-4 font-semibold text-3xl'>Your Wishlist</h1>
              <GoHeartFill className='text-center mt-4 font-semibold text-6xl text-red-500' />
            </div>
            <div className="main2  flex justify-center items-center">



              <div class="row row-cols-1 row-cols-md-3 g-4">
                {all_product.map((e) => {
                  if (listItems[e.id] > 0) {
                    return <Crad key={e} id={e.id} Title={e.name} PriceOld={e.old_price} Price={e.new_price} Item={e.image} />

                  } else {
                    return null
                  }
                })}
              </div>
              {found ? "" :
              <div>
                <h1 className='text-center justify-center items-center flex text-xl font-myFont'>Add Items in <p className='text-red-500 ms-2 text-2xl font-semibold'>Wishlist</p></h1>              
              </div>}              
            </div>
          </div>
          : <div className='flex flex-col justify-center items-center h-[60vh] my-10 w-full'>
            <h1 className='text-3xl w-full mb-10 h-1/6 text-center  items-center font-semibold font-myFont gap-2 flex flex-row text-black h1 justify-center' > <button  onClick={handleRedirect} ref={textRef} className='text-blue-950 font-myFont p text-4xl overflow-auto flex'></button> </h1>
            <GoHeartFill className='text-center mt-4 font-semibold text-8xl text-red-500' />
            
            <div className="flex mt-5 justify-center h-1/5 items-center gap-4 ">
         <Link to="/login"><button className='px-4 bg-black border-2  text-white py-1 border-black font-semibold font-myFont'>LOGIN</button></Link>
         <Link to="/signup"><button className='px-4 bg-white border-2  text-black py-1 font-semibold font-myFont'>SIGNUP</button>          </Link>
         </div>
          </div>}


      </div>
    </>
  )
}

export default Wishlist
