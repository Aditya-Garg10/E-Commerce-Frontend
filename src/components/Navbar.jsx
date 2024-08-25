import React, { useContext, useEffect, useRef } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './Context/Context';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi'
import { FaBars, FaUser } from 'react-icons/fa6'
import { Badge, message } from 'antd';
import { Dropdown } from 'antd';
import { GoHeartFill } from 'react-icons/go';
import { IoLogIn, IoLogOut } from 'react-icons/io5';





const Navbar = () => {



  const [toggle, setToggle] = useState(false);

  const textRef = useRef(null)

  useEffect(() => {
    const scrambleText = (element, newText) => {
      const orginalText = element.innerText;
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
      const duration = 2;
      const frameRate = 20;
      let progress = 0;

      const scramble = () => {
        progress += frameRate / (duration * 1000);
        if (progress < 1) {
          const scrambledText = orginalText.split('').map((char, i) => {
            if (Math.random() > progress) {
              return chars.charAt(Math.floor(Math.random() * chars.length));
            }
            else {
              return newText.charAt(i) || '';
            }
          }).join('');
          element.innerText = scrambledText
          requestAnimationFrame(scramble);
        }
        else {
          element.innerText = newText;
        }
      }
      scramble();
    }

    const element = textRef.current;
    const newText = "GET 25% Off This Summer Sale. Grab It Fast!!";
    scrambleText(element, newText)

    const interval = setInterval(() => {
      scrambleText(element, newText)
    }, 20000);

    return () =>
      clearInterval(interval);
  }, [])



  const handletoggle = () => {

    setToggle(!toggle)

  }



  const { getTotalCartItems } = useContext(ShopContext)


  const handleLogout = () => {
    if (localStorage.getItem("auth-token")) {
      localStorage.removeItem("auth-token")
    }
    else {
      message.info("Please Login Or Signup")
    }
  }

  const items = [
    {
      key: '1',
      label: (
        // 
        <Link className='hover:text-blue-500 2xl:hidden md:flex flex gap-2 items-center font-semibold' to="/cart"><FiShoppingBag/> Cart
        <Badge className='absolute -top-[2px] sm:text-[1px] right-[60px] z-10' count={getTotalCartItems()}>
        </Badge>
        </Link>
        
      ),
    },    
    {
      key: '2',
      label: (
        <Link className='flex gap-2 items-center font-semibold' to="/wishlist">
          <GoHeartFill /> Wishlist
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link className='hover:text-blue-500 flex gap-2 items-center font-semibold' to="/searchBar"><FiSearch  />Search</Link>
      ),
    },
    localStorage.getItem("auth-token") ? "" :
      {
        key: '4',
        label: (
          <Link className='flex gap-2 items-center font-semibold' to="/login">
            <IoLogIn /> LogIn
          </Link>
        ),
      },
    localStorage.getItem("auth-token") ? "" :
      {
        key: '5',
        label: (
          <Link className='flex gap-2 items-center font-semibold' to="/signup">
            <FaUser /> SignUp
          </Link>
        ),

      },
    localStorage.getItem("auth-token") ? {
      key: '6',
      label: (
        <Link onClick={handleLogout} className='flex gap-2 items-center font-semibold' >
          <IoLogOut /> LogOut
        </Link>
      ),
      danger: true,

    } : ""
  ];

  return (
    <div className='w-full'>
      <nav className='lg:h-[17vh] 2xl:h-[17vh] sm:h-[13vh]  bg-white w-full'>
        <div className="text-black ">
          <h1 className='bg-black h-[5vh] text-sm text-white flex justify-center items-center ' ref={textRef}>GET 25% Off This Summer Sale. Grab It Fast!!</h1>
          <div className='h-[10vh] sm:h-[8vh] w-full  px-5 flex  items-center  justify-between'>
            <FaBars onClick={handletoggle} className='lg:hidden sm:flex md:flex 2xl:hidden' />
            <div className="flex justify-center items-center">
              <p className='text-3xl font-bold sm:text-2xl'><Link to="/">Capie.</Link></p>
            </div>

            <div className="flex sm:hidden md:hidden items-center text-md font-semibold gap-5">
              <p className='hover:text-blue-500' ><Link to="/men">Men</Link></p>
              <p className='hover:text-blue-500' ><Link to="/women">Woman</Link></p>
              <p className='hover:text-blue-500'><Link to="/kid">Kids</Link></p>
              <p className='hover:text-blue-500'><Link to="/latest">New & Featured</Link></p>
            </div>

            <Dropdown
                menu={{
                  items,
                }}
                className='2xl:hidden sm:block'
              >
                <Link onClick={(e) => e.preventDefault()}>
                  <FiUser className='text-xl sm:block 2xl:hidden hover:text-blue-400 cursor-pointer' />
                </Link>
              </Dropdown>
              

            <div className="flex relative sm:hidden  overflow-visible items-center gap-3">
              <Link className='hover:text-blue-500 ' to="/searchBar"><FiSearch className='text-xl' /></Link>

              <Badge className='absolute -top-[5px] sm:text-[1px] right-[25px] z-10' count={getTotalCartItems()}>
              </Badge>
              <Link className='hover:text-blue-500' to="/cart"><FiShoppingBag className='text-xl' /> </Link>


              <Dropdown
                menu={{
                  items,
                }}
              >
                <Link onClick={(e) => e.preventDefault()}>
                  <FiUser className='text-xl hover:text-blue-400 cursor-pointer' />
                </Link>
              </Dropdown>
              
            </div>






          </div>
        </div>
      </nav>




      {
        toggle ?
          <div   className="w-full flex-col flex items-center h-[13vh] justify-around">
            <div className=" flex items-center text-md font-semibold gap-3">
              <p ><Link to="/men">Men</Link></p>
              <p ><Link to="/women">Woman</Link></p>
              <p ><Link to="/kid">Kids</Link></p>
              <p className='hover:text-blue-500'><Link to="/latest">New & Featured</Link></p>
            </div>            
            
          </div> : ""

      }

    </div>

  )
}

export default Navbar
