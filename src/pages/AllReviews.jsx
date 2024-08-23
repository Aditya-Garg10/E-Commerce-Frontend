import { Card, Col, Row, message } from 'antd';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { FaStar } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { HOST } from '../App';

const AllReviews = () => {
    
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

  return (
    <>
    <Navbar/>
    <div>
        
        <div className="flex flex-col gap-5 w-full h-full justify-center items-center sm:my-5 my-10">
            <h1 className='text-4xl sm:text-2xl font-myFont  font-semibold'>Customers Experience on Capie.</h1>

            <div className="flex h-full md:w-full justify-center items-center md:p-0  w-full  px-0 overflow-auto">
            <Row className='flex  md:flex-col w-full  overflow-y-hidden   flex-row justify-center gap-3' gutter={20}>
                                {Reviews.map((Review, i) => {
                                    return <Col key={i}  span={10}>
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

    </div>
    
    </>
  )
}

export default AllReviews
