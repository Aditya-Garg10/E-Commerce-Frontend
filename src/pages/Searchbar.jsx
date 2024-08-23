import React, { useContext, useState } from 'react'
import { ShopContext } from '../components/Context/Context'
import Navbar from '../components/Navbar';
import { Button, Input } from 'antd';
import { MdArrowOutward } from 'react-icons/md';
import Crad2 from '../components/Cards/Card2';


const Searchbar = () => {
    const {all_product} = useContext(ShopContext);
    

    const [Val, setVal] = useState("");
    const [filteredResults, setfilteredResults] = useState([]);
    

    const fetchData = () =>{
      const result = all_product.filter(obj=>
        obj.name.toLowerCase().includes(Val.toLowerCase())
      )
      setfilteredResults(result)
    }

    const handleSelectChange = (name) =>{
      setVal(name)
    }
  return (

    <>
    <Navbar/>
    <div className='flex flex-col px-10 '>
    <h1 className='text-5xl sm:text-center font-semibold py-5 text-black font-myFont'>Search </h1>

    <div className="flex  gap-3 sm:gap-0 ">
      <div className="flex w-1/2 sm:w-full h-full flex-col">
      <Input allowClear type='search' className='w-full h-full sm:w-full rounded-none hover:border-black' placeholder='Search Any Product'  value={Val} onChange={(e)=>setVal(e.target.value)}/>      
     <div className='rounded-none border-1 overflow-auto max-h-[22vh]  sm:max-h-[10vh] flex-col sm:flex-col mt-1 gap-1' >      
     {all_product.map((obj)=>{
        if(obj.name.toLowerCase().includes(Val.toLowerCase()) || obj.details.toLowerCase().includes(Val.toLowerCase()) ){
          return <div  onClick={()=>handleSelectChange(obj.name)}  value={obj.name} className='shadow-sm  w-full text-nowrap  hover:bg-gray-200 rounded-sm  sm:text-xs text-sm cursor-pointer text-start border-1  justify-between flex py-1 px-2'>
          <div className="flex flex-col">
          {obj.name}
           <span  className='text-xs'>({obj.details})</span></div> 
           <MdArrowOutward onClick={fetchData} className='h-full pt-2 w-5'/>
           </div>
        }
        else{
          return null
        }
      })}
     </div>
      </div>
      <Button onClick={fetchData} className='bg-black border-0 sm:w-1/3 rounded-none text-white font-semibold'>Search</Button>
    </div>

    <div className="flex mt-0 ">
    <div className="row row-cols-2 card-bg row-cols-md-4 mt-5 g-4">
        {filteredResults.length > 0 ? filteredResults.map((obj)=>{
          return <Crad2 id={obj.id} Title={obj.name} Price={obj.new_price} Item={obj.image} category={obj.category} PriceOld={obj.old_price}/>
        }):<h1 className='text-center flex w-full font-semibold text-2xl'>Search a Product</h1>}    
    </div>
    </div>

      </div>
    
    </>
    
  )
}

export default Searchbar
