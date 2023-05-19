import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const ToyDetails = () => {
    const {user} = useContext(AuthContext);
    const userEmail = user.email;
    const {_id, name, price, quantity, seller, subCategory, rating, image, details, email} = useLoaderData();

    const handleAddMyToys = () => {        
        const myToy = {name, userEmail, seller, price, quantity}        

        fetch('http://localhost:5000/myToys', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(myToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Successfully Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
        })
    }
    
    return (
        <div className='p-10'>
            <div className='md:flex md:items-center'>
                <div className='md:w-2/3 p-10'>
                    <img className=' border border-gray-400 rounded-md' src={image} alt="" />
                </div>

                <div className='p-5'>
                    <h1 className='text-2xl font-semibold py-5'>{name}</h1>
                    <div className='text-sm py-2'>
                        <p className='py-2 pl-3 bg-green-200 text-gray-500'>Price: {price} pcs</p>
                        <p className='py-2 pl-3 bg-purple-200 text-gray-500'>Available: {quantity} pcs</p>
                        <p className='py-2 pl-3 bg-green-200 text-gray-500'>Ratings: {rating}</p>
                        <p className='py-2 pl-3 bg-purple-200 text-gray-500'>Sub Category: {subCategory}</p>
                        <p className='py-2 pl-3 bg-green-200 text-gray-500'>Seller: {seller}</p>
                        <p className='py-2 pl-3 bg-purple-200 text-gray-500'>Email: {email} pcs</p>
                        <p className='py-2 pl-3 bg-green-200 text-gray-500'>Product Id: {_id}</p>
                    </div>

                    <button onClick={handleAddMyToys} className='my-2 py-1 px-6 bg-purple-500 text-white '>Add to My List</button>

                </div>
            </div>
                
                <p>{details}</p>
        </div>
    );
};

export default ToyDetails;