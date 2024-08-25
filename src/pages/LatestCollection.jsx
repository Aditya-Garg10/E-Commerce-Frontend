import React, { useEffect,useRef,useState } from 'react'
import {gsap} from 'gsap'
import Navbar from '../components/Navbar'
import Card2 from '../components/Cards/Card2'
import { HOST } from '../App'
import { LoadingOutlined } from '@ant-design/icons'
import { message } from 'antd'

const LatestCollection = () => {
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
    gsap.fromTo(textRef.current,{opacity:0, y: -50},{threshold : 0.5,opacity:1,y:0,duration:1,ease:"power3.Out"})
  },[collection])
  return (
    <>
    <Navbar/>
    <div>
      <div className="container" >
        <h1  className='text-4xl font-semibold text-center py-10'>Our New Collection</h1>
        {loading?<div className='w-full text-center my-10 sm:my-5'>
          <LoadingOutlined className='text-6xl'/>
          <p className='font-myFont font-semibold mt-3'>loading..</p>
        </div>:
        <div ref={textRef} className="grid grid-cols-3   w-full sm:grid-cols-2 gap-2 2xl:px-5 sm:p-0 sm:gap-0">
        {collection.map((item,i)=>{
          return <Card2 key={i} id={item.id} category={item.category} Title={item.name} PriceOld={item.old_price} Price={item.new_price} Item={item.image} />
        })}
        </div>}
                              
      </div>
    </div>
    </>
  )
}

export default LatestCollection
