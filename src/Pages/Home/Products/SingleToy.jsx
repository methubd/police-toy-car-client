import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aos from 'aos';
import 'aos/dist/aos.css'

const SingleToy = ({toy}) => {
    const {_id, name, price, quantity, seller, subCategory, rating, image} = toy;

    useEffect(() => {
        aos.init();
    },[])

    return (
        <div data-aos="fade-up" className='border border-gray-300 rounded-md p-2 shadow-lg text-center'>
            <img className='md:w-72' src={image} alt="" />
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <p className='text-gray-600'>Price: $ {price}</p>

            <div className='flex text-sm justify-center py-2'>
                <p className='bg-purple-200 p-1 text-gray-500 mx-1'>Seller: {seller}</p>
                <p className='bg-green-200 p-1 text-gray-500 mx-1'>Ratings: {rating}</p>
            </div>

            <div className='flex text-sm justify-center'>
                <p className='bg-purple-200 p-1 text-gray-500 mx-1'>Sub Category: {subCategory}</p>
                <p className='bg-green-200 p-1 text-gray-500 mx-1'>Available: {quantity} pcs</p>
            </div>

            <Link to={`/toyDetails/${_id}`}>
            <button className='bg-purple-500 px-5 py-1 rounded-md text-white mt-4'>Details</button>
            </Link>

        </div>
    );
};

export default SingleToy;