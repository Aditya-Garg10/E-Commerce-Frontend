import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ShopContext } from '../Context/Context'
import { Card,Carousel } from 'antd';
const { Meta } = Card;




const Crad = (props) => {


  // const { addtoCart, addtoList } = useContext(ShopContext)

const handleRedirect = () =>{
  window.scrollTo(0, 0);
}
  
  return (
    <div>


     

      <Card
        hoverable
        style={{                
          alignItems: "start",          
          textAlign : "start"
        }}        
        cover={
        <Carousel className='bg-cover' autoplay>
           {props.Item.map((item, i) => {
              return <div key={i} className='h-[50vh] 2xl:h-[50vh]'>
                <Link to={`/product/${props.id}`} onClick={handleRedirect}><p className={`flex h-full w-full text-end bg-no-repeat rounded-xl bg-cover sm:bg-contain`} style={{backgroundImage:`url(${item})`}} ></p></Link>
              </div>
            })}        
      </Carousel>}
      >
        <Link  to={`/product/${props.id}`} onClick={handleRedirect}>
        <Meta  title={props.Title} description={props.category}/>

        <div className='mt-2'>
        <small className="text-sm font-semibold">$ {props.Price}</small><br />
        {/* <small className="text-sm">$ {props.PriceOld}</small> */}
        </div>
        </Link>
       
          
      </Card>



    </div>

  )
}

export default Crad
