import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/Context'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import Display from '../components/Display/Display';
import Navbar from '../components/Navbar'

const Product = () => {  
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));  
   
  return (
    <div >  
     
      
      <div>

      <Display product={product}/>
      </div>
      
    </div>
  )
}

export default Product
