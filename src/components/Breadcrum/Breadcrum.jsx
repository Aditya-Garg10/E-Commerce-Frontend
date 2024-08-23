import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrum = (props) => {
    const {product} = props
  return (
    <div className=''>
    <nav aria-label="breadcrumb ">
        <ol class="breadcrumb  ms-3">            
            <li class="breadcrumb-item hover:text-red-500 "><Link to="/">{"Home".toUpperCase()}</Link></li>
            <li class="breadcrumb-item hover:text-red-500" aria-current="page"><Link to={`/${product.category}`}>{product.category.toUpperCase()}</Link></li>
            <li class="breadcrumb-item hover:text-blue-300" aria-current="page">{product.name}</li>
        </ol>
    </nav>  
    </div>
  )
}

export default Breadcrum
