import React, { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/Context'
import { Card, Carousel } from 'antd';
import { FaBagShopping, FaHeart, FaRegHeart, } from 'react-icons/fa6';
const { Meta } = Card;




const Crad2 = (props) => {


  const { addtoCart, addtoList } = useContext(ShopContext)

  const [like, setlike] = useState(false);
  const handleClick = () => {
    addtoList(props.id)
    setlike(!like)
  }

  const handleRedirect = () => {
    window.scrollTo(0, 0);

  }
  return (
    <div>


      <Card
        hoverable
        style={{
          alignItems: "start",
          textAlign: "start",
        }}
        cover={
          <Carousel className='h-[50vh] overflow-y-hidden md:h-[25vh] 2xl:h-[50vh] sm:h-[20vh]' autoplay>            
            {props.Item.map((item, i) => {
              return <div className='h-[35vh] overflow-y-hidden w-full   2xl:h-[50vh]'>
                <p className={`flex h-full w-full text-end bg-no-repeat rounded-xl bg-cover sm:bg-contain`} style={{backgroundImage:`url(${item})`}} ></p>
              </div>
            })}
            
          </Carousel>}
      >

        <Meta title={props.Title} description={props.category} />

        <div className='mt-3'>
          <small className="text-sm font-bold">$ {props.Price}</small><br />
        </div>

        <div className="flex sm:gap-3 justify-between items-center mt-2">

          <Link to={`/product/${props.id}`}><button className='bg-white border-3 sm:w-full text-center sm:px-4 sm:text-xs hover:text-blue-300  px-3 font-bold  py-1 rounded-md' onClick={handleRedirect}>BUY</button></Link>

          <div className='flex sm:hidden gap-2'>
            <FaBagShopping onClick={() => addtoCart(props.id)} className='text-xl  hover:text-blue-400' />
            {like ? <FaHeart onClick={handleClick} className='text-xl  hover:text-blue-400' /> : <FaRegHeart onClick={handleClick} className='text-xl  hover:text-blue-400' />}

          </div>
        </div>
      </Card>



    </div>

  )
}

export default Crad2
