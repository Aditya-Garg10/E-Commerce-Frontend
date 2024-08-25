import React, {  useEffect,useRef,useState } from 'react'
import Hero from '../components/Hero'
import Card from '../components/Cards/Card2.jsx'
import "./Common.css"
import Instabar from '../components/Instabar.jsx'
import Hero2 from '../components/Hero2'
import {gsap} from 'gsap'
import Navbar from '../components/Navbar'
import { HOST } from '../App.js'
import { LoadingOutlined } from "@ant-design/icons";

import { message } from 'antd'




const Home = () => {

  const [collection, setCollections] = useState([]);
  const [ loading , setloading ] = useState(true)


  const fetchData = async() =>{
    try {      
      const response = await fetch(`${HOST}/newCollections`);
      const data = await response.json()
      if(data){
        setCollections(data)
        setloading(false)
      }
    } catch (error) {
      message.error("Internal Server Error",error.message)
      setloading(true)
    }
  }


  useEffect(()=>{    
   
    fetchData()
  },[])

  

  const textRef= useRef(null)
  
  useEffect(()=>{
    gsap.fromTo(textRef.current,{opacity:0, y: -100},{threshold : 0.5,opacity:1,y:0,duration:1.5,ease:"power3.Out"})
  },[])
  return (
    <div className='w-full' >
      <Navbar/>
    
      <Hero/>

      <div ref={textRef} className='flex flex-col gap-4 mt-5  sm:my-4 sm:h-[30vh]  h-[40vh] justify-center  items-center  '>
        <p className="text-5xl sm:text-3xl text-black font-semibold">
            NEW COLLECTION
        </p>
        <p className='text-md sm:text-sm sm:w-2/3 text-center text-gray-400'>
            Our latest collection, where classic and contemporary styles converge in <br /> perfect harmony

        </p>
    </div>
      <div className=" flex justify-center w-full" ref={textRef}>
      {loading ?
      <div className='w-full text-center my-10 sm:my-5'>
          <LoadingOutlined className='text-6xl'/>
          <p className='font-myFont font-semibold mt-3'>loading..</p>
        </div> :
      <div className="grid grid-cols-3   w-full sm:grid-cols-2 gap-2 2xl:px-5 sm:p-0 sm:gap-0">
      { collection.map((item,i)=>{
        return <Card key={i} id={item.id} category={item.category} Title={item.name} PriceOld={item.old_price} Price={item.new_price} Item={item.image} />
      })}
      </div>
      }                      
      </div>
      
      <Instabar/>
      

      <Hero2 />
      
      
    </div>
  )
}

export default Home
