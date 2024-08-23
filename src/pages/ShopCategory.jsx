import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/Context'
import "./Common.css"
import Crad from '../components/Cards/Card2';
import {Skeleton} from 'antd'
import Navbar from '../components/Navbar';

const ShopCategory = (props) => {
  

  const {all_product} = useContext(ShopContext);
  return (
    
    
    <div>
      <Navbar />
      <div className="category-banner">
      <img src={props.banner} alt="" />
      </div>
      
    
        <div className="bg-white h-auto sm:py-5 py-10 px-10 ">
          
        <div className="row row-cols-2 card-bg row-cols-md-4 mt-5 g-4">
          {all_product.map((item,i)=>{           
            if(props.category===item.category){
              return <Crad key={i} id={item.id} Title={item.name} Price={item.new_price} Item={item.image} category={item.category} PriceOld={item.old_price}/>
            }
            else{
              return null
            }
          })}
        </div>
        </div>
    </div>
        

    
  )
}

export default ShopCategory
