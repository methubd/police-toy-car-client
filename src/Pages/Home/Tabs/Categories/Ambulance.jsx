import React from 'react';
import { Link } from 'react-router-dom';

const Ambulance = ({amb}) => {
    
    const {name, _id, image, price, rating} = amb;

    return (
            <div className='border border-gray-300 rounded-md p-2 shadow-lg text-center'>
            <img className='w-60 mx-auto' src={image} alt="" />
            <h1 className='text-2xl p-1 text-gray-500 mx-1'>{name}</h1>
            <div className='flex text-sm justify-center py-2'>
                <p className='bg-purple-200 p-1 text-gray-500 mx-1'>Price: {price}</p>
                <p className='bg-green-200 p-1 text-gray-500 mx-1'>Ratings: {rating}</p>
            </div>
            <Link to={`toyDetails/${_id}`}>
            <button className='bg-purple-500 px-5 py-1 rounded-md text-white '>Details</button>
            </Link>
        </div>
    );
};

export default Ambulance;