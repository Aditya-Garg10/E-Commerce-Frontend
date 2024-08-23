import React, { useEffect,useRef,useState } from 'react'
import {gsap} from 'gsap'
import Navbar from '../components/Navbar'
import Card2 from '../components/Cards/Card2'
import { HOST } from '../App'

const LatestCollection = () => {
  const [collection, setCollections] = useState([]);
  
  useEffect(()=>{
    fetch( `${HOST}/newCollections`).then((resp)=>resp.json()).then((data)=>setCollections(data))    
    // eslint-disable-next-line
  },[])

  const textRef= useRef(null)
  
  useEffect(()=>{
    gsap.fromTo(textRef.current,{opacity:0, y: -50},{threshold : 0.5,opacity:1,y:0,duration:1,ease:"power3.Out"})
  },[collection])
  return (
    <>
    <Navbar/>
    <div>
      <div className="container " >
        <h1  className='text-4xl font-semibold text-center py-10'>Our New Collection</h1>
      <div ref={textRef} className="row row-cols-2 row-cols-md-3 g-4">
      {collection.map((item,i)=>{
        return <Card2 key={i} id={item.id} category={item.category} Title={item.name} PriceOld={item.old_price} Price={item.new_price} Item={item.image} />
      })}
      </div>                        
      </div>
    </div>
    </>
  )
}

export default LatestCollection
