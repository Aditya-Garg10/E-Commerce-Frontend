import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/Context'
import "./Common.css"
import Crad from '../components/Cards/Card2';
import Navbar from '../components/Navbar';
import { LoadingOutlined } from '@ant-design/icons';

const ShopCategory = (props) => {
  

  const {all_product, loading } = useContext(ShopContext);

  return (
    
    
    <div>
      <Navbar />
      <div className="category-banner">
      <img src={props.banner} alt="" />
      </div>
      
    
        <div className="bg-white w-full h-auto sm:py-5 py-10 2xl:px-0 sm:px-0 ">
          
        {loading ? <div className='w-full text-center my-10 sm:my-5'>
          <LoadingOutlined className='text-6xl'/>
          <p className='font-myFont font-semibold mt-3'>loading..</p>
        </div>:
        <div className="grid grid-cols-4 w-full h-full sm:grid-cols-2 gap-2 2xl:px-5 sm:p-0 sm:gap-0">
        {all_product.map((item,i)=>{           
          if(props.category===item.category){
            return <Crad key={i} id={item.id} Title={item.name} Price={item.new_price} Item={item.image} category={item.category} PriceOld={item.old_price}/>
          }
          else{
            return null
          }
        })}
      </div>}
        </div>
    </div>
        

    
  )
}

export default ShopCategory
