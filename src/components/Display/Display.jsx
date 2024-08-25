import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../Context/Context'
import { Flex, Progress, Rate, Modal, Input, Form } from 'antd';
import Breadcrum from '../Breadcrum/Breadcrum';
import gsap from 'gsap';
import Navbar from '../Navbar';
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { message, Button } from 'antd';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import { jwtDecode } from 'jwt-decode'
import TextArea from 'antd/es/input/TextArea';
import { HOST } from '../../App';


const Display = (props) => {

    const { addtoCart, all_product, getTotalCartItems, removeFromCart, addtoList } = useContext(ShopContext)
    const textref = useRef()
    const textref2 = useRef()

    const [open, setOpen] = useState(false);
    const [userId, setuserId] = useState(null);
    const [Value, setValue] = useState(0);
    const [credentials, setCredentials] = useState({
        title: "",
        message: "",        
    })


    
    const changeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        
    }

    const [category, setcategory] = useState();


    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    const [selectedImage, setselectedImage] = useState(product.image[0]);

    
    useEffect(() => {
        const token = localStorage.getItem("auth-token")
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.user.id || decodedToken.sub
                setuserId(userId)
            } catch (error) {
                message.error(error)
            }
        }
        if(product.category === "men"){
            setcategory("men")
        }
        else if(product.category === "women"){
            setcategory("women")
        }
        else{
            setcategory("kid")
        }
    }, [])

    useEffect(() => {
        gsap.fromTo(textref.current, { opacity: 0, backgroundPositionX: -5 }, { opacity: 1, backgroundPositionX: 1 })
        gsap.fromTo(textref2.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0 })
    }, [selectedImage])

    useEffect(() => {
        gsap.fromTo(textref2.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.4 })
    }, [addtoCart])

    const [Reviews, setReviews] = useState([]);   
    
    const fetchReviews = async () => {
        try {
            const response = await fetch(`${HOST}/allReviews`)
            const reviews = await response.json()
            if (response.status === 400)
                message.error(response.message)
            else {
                setReviews(reviews)
            }
            
                       
        } catch (error) {
            message.error(error.message)
        }
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    const [liked, setliked] = useState(false);

    const handleClick = () => {
        setliked(!liked)
        addtoList(product.id)
        if(addtoList){            
            message.success("Item Added to Wishlist")
        }
        else{
            // console.log("Failed")
            message.error("Item Already Added")
        }
    }

  

    if (!product) {
        alert("Not  Found")

    }

    const handleSubmit = async () => {
        try {
            
            if(!userId){
                message.info("Please Login to give Review")
            }
            else{
                const response = await fetch(`${HOST}/createReview`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json",

                },
                body: JSON.stringify({reviewData: {...credentials,stars: Value}, userId: userId, product: productId }),
            })

            const data = await response.json()
            if(data){
                fetchReviews()
                setOpen(false)
                setCredentials("")
                message.success("Review Submitted")
            }
            }
        } catch (error) {
            message.error(error.message)
        }
    }

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
        if (removeFromCart) {
            message.success("Item Removed from Cart")
        }
        else {
            message.error("Not Removed from Cart")
        }
    }

    const addtoCartHandler = () => {
        addtoCart(product.id);
        if (addtoCart) {
            message.success("Item Added to Cart")

        }
        else {
            message.error("Not Added to Cart")
        }
    }

    const [like, setlike] = useState(false);
    const handleClick2 = () => {
        addtoList(product.id)
        setlike(!like)
    }
    const handleRedirect = () => {
        // location.reload()        
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <Breadcrum product={product} />

                <div className="flex w-full items-center  md:flex-col h-full ">
                    <div className="flex sm:mt-3 2xl:flex-row sm:flex-col-reverse sm:w-full h-full justify-center  items-center md:w-full w-1/2 ">
                        <div className="flex  flex-col sm:flex-row sm:w-full sm:justify-center  md:flex-col py-5 gap-2  h-1/4 drop-shadow-lg  items-center  w-2/3">
                            {product.image.map((item,i)=>{
                                return <img key={i} onClick={() => setselectedImage(item)} className='h-[16vh] sm:h-[12vh] md:h-[8vh] rounded-md cursor-pointer border-2 hover:border-gray-500' src={item} alt="" />
                            })}                                                        
                        </div>
                        <div className="flex h-1/3 md:w-4/5 border-1 border-gray-300 rounded-md p-8 shadow-md drop-shadow-lg shadow-gray-300 w-full">
                            <img ref={textref} className='border-1 rounded-md' src={selectedImage} alt="" />
                        </div>

                    </div>
                    <div className="flex gap-2 flex-col sm:items-start md:items-center  h-full text-start sm:p-7 p-20 w-1/2 md:w-full ">
                        <p className='flex items-center gap-2 font-semibold'>
                            <FaStar className='text-orange-400' /> 4.5 ({Reviews.length} Reviews)
                        </p>
                        <h1 className='text-2xl sm:text-wrap flex items-center justify-start font-bold gap-3 font-myFont'>{product.name} {liked ? <GoHeartFill onClick={handleClick} className='text-start text-red-400 text-3xl' /> : <GoHeart onClick={handleClick} className='text-start text-3xl' />}</h1>
                        <h4 className='text-blue-400 text-start text-xl font-bold'>${product.new_price}</h4>

                        <h1 className='text-xl mt-3 flex items-center justify-start font-semibold  font-myFont'>{product.category.toUpperCase()}S</h1>
                        <div className="flex sm:w-full flex-row flex-wrap text-blue-400 gap-3">
                            {product.tags.map((tag,i)=>{
                                return <h1 key={i} className='text-md sm:text-sm flex text-nowrap items-center rounded-sm justify-start font-semibold p-2 font-myFont border-2'>{tag.toUpperCase()}</h1>
                            })}
                            
                        </div>

                        <div className="flex mt-3 gap-2">
                            <button onClick={addtoCartHandler} className='bg-black px-4 py-2 text-white cursor-pointer font-semibold'>Add to Cart</button>
                            {getTotalCartItems() !== 0 ? <button className='bg-black flex text-center px-4 py-2 items-center gap-3 text-white font-semibold'> <FaMinus onClick={handleRemoveFromCart} /> <p ref={textref2}>{getTotalCartItems()} </p> <FaPlus onClick={() => addtoCart(product.id)} /></button> : ""}
                        </div>
                    </div>
                </div>

                <h3 className='text-dark mt-20 mb-4 font-myFont text-3xl font-semibold '>Product Details</h3>
                <div className="font-myFont">
                    <p className='text-gray-600 mx-4'>{product.description}</p>
                </div>


                <h3 className='text-dark mt-20  font-myFont text-3xl font-semibold  '>Review</h3>

                <div className="flex md:flex-col p-5 items-center h-auto border-1  border-gray-300 rounded-md w-full   my-20 md:my-6">
                    <div className=" gap-5 flex w-1/2 md:w-full md:h-full justify-center font-myFont flex-col">
                        <div className="flex gap-1 flex-col h-full md:px-0 md:items-center px-20">
                            <h3 className='font-bold text-xl md:text-md pt-2 '>4.5</h3>
                            <Rate className='text-3xl md:text-xl' style={{ color: "orange" }} allowHalf disabled defaultValue={4.5} />
                            <h3 className='text-md text-gray-500 md:text-xs'>({Reviews.length})</h3>
                        </div>
                        <div className="flex gap-1 md:gap-0 flex-col h-full md:px-0 md:items-center px-20">
                            <h3 className='font-bold text-xl '>({Reviews.length})</h3>
                            <Flex gap="mdall" vertical>
                                <Progress className='' strokeColor="orange" percent={80} status="active" showInfo={false} />
                            </Flex>
                            <h3 className=' text-md text-gray-500'>Recommend this product</h3>
                        </div>

                        <div className="flex items-center justify-center gap-4 ">
                            <button onClick={() => setOpen(true)} className='bg-black rounded-md px-8 py-2 text-white md:py-0 md:px-4 md:text-nowrap md:text-xs'>Write Review</button>
                            <Modal
                                className='flex h-[60vh] gap-10'
                                footer={[
                                    <Button onClick={() => setOpen(false)} className='font-myFont rounded-sm' key="back">
                                        Cancel
                                    </Button>,
                                    <Button key="submit" onClick={handleSubmit} className='bg-black text-white font-myFont rounded-sm'   >
                                        Submit
                                    </Button>,
                                ]}
                                title="Write a Review"
                                centered
                                open={open}
                                onOk={() => setOpen(false)}
                                onCancel={() => setOpen(false)}

                            >
                                <div >
                                    <Form className="flex flex-col gap-3" action="">
                                        <Input className='py-2' value={credentials.title} placeholder='Title' onChange={changeHandler} name='title' />
                                        <TextArea className='' value={credentials.message} placeholder='Description' onChange={changeHandler} name='message' />
                                        <Rate allowHalf value={Value} onChange={setValue}  />
                                    </Form> </div>
                            </Modal>
                            <button className='bg-white rounded-md border-gray-400 md:py-0 md:px-4 md:text-nowrap md:text-xs text-black px-8 py-2 border-1 '><Link to="/allReviews">See All Review</Link></button>

                        </div>
                    </div>

                    {Reviews.length > 0 ? 
                    
                    <div className="flex flex-col md:w-full md:h-full items-center justify-center md:p-0  p-10 w-1/2 ">
                        <h3 className='text-xl mb-10 md:mt-10 md:mb-5 font-semibold'>Most Helpfull Review</h3>

                        <div className="flex h-full md:w-full justify-center items-center md:p-0  w-full  px-0 overflow-auto ">
                            <Row className='flex flex-nowrap md:flex-col  overflow-y-hidden  overflow-x-auto flex-row' gutter={20}>
                                {Reviews.map((Review, i) => {
                                    return <Col key={i} span={20}>
                                        <Card className='border-1 border-gray-400' bordered={true}>
                                            <h3 className='text-lg text-black text-nowrap font-semibold mb-2'>{Review.title}</h3>
                                            <h3 className='text-md text-gray-500 text-wrap font-semibold mb-2'>{Review.message}</h3>
                                            <div className="flex mt-2 justify-between">
                                                <p className='text-start  border-1 px-2 rounded-md flex items-center gap-1 font-semibold'> {Review.stars} <FaStar className='text-orange-400' /> </p>
                                                <p className='text-end flex px-2 rounded-md gap-1 items-center font-semibold'> {Review.user.name} <MdVerified className='text-orange-400' /></p>
                                            </div>
                                        </Card>
                                    </Col>
                                })}
                            </Row>
                        </div>
                    </div>
                    :""}

                </div>



                <div className="">
                    <h3 className='text-dark mt-20  font-myFont text-3xl font-semibold mb-5 '>Related Products</h3>
                    <div className="grid grid-cols-3 w-full sm:grid-cols-2 gap-2 2xl:px-5 sm:p-0 sm:gap-0">
                        {all_product.map((item, i) => {
                            if(item.category === category){
                                return <Card
                                key={i}
                                hoverable
                                style={{
                                    alignItems: "start",
                                    textAlign: "start",
                                }}
                                cover={<img src={item.image[0]} alt='' />}
                            >

                                <Meta title={item.name} description={item.details} />
                                <div className='mt-3'>
                                    <small className="text-sm font-bold">$ {item.new_price}</small><br />
                                </div>

                                <div className="flex justify-between items-center mt-2">

                                    <a href={`/product/${item.id}`}> <button type='submit' className='bg-white border-3 hover:text-blue-300  px-3 font-bold  py-1 rounded-md' onClick={handleRedirect}>BUY</button></a>

                                    <div className='flex gap-2'>
                                        {like ? <FaHeart onClick={handleClick2} className='text-xl  hover:text-blue-400' /> : <FaRegHeart onClick={handleClick2} className='text-xl  hover:text-blue-400' />}
                                    </div>
                                </div>
                            </Card>
                            }
                            else{
                                return null
                            }
                            
                        })}
                    </div>
                </div>


            </div>
        </>
    )
}

export default Display
