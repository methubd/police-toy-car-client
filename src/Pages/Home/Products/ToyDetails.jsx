import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const {_id, name, price, quantity, seller, subCategory, rating, image, details} = useLoaderData();
    
    return (
        <div className='p-10'>
            <div className='md:flex md:items-center'>
                <div className='md:w-2/3 p-10'>
                    <img className=' border border-gray-400 rounded-md' src={image} alt="" />
                </div>

                <div className='p-5'>
                    <h1 className='text-2xl font-semibold py-5'>{name}</h1>
                    <div className='text-sm py-2'>
                        <p className='py-2 pl-3 bg-purple-200 text-gray-500x'>Seller: {seller}</p>
                        <p className='py-2 pl-3 bg-green-200 text-gray-500'>Ratings: {rating}</p>
                        <p className='py-2 pl-3 bg-purple-200 text-gray-500x'>Sub Category: {subCategory}</p>
                        <p className='py-2 pl-3 bg-green-200 text-gray-500'>Available: {quantity} pcs</p>
                    </div>

                    <button className='py-1 px-6 bg-purple-500 text-white '>Add to My List</button>
                </div>
            </div>
                
                <p>{details}</p>
        </div>
    );
};

export default ToyDetails;