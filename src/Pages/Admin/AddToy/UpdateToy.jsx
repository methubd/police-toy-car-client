import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {    
    const toy = useLoaderData();
    const {name, price, quantity, _id} = toy;

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const oldToy = {name, quantity, price}
        console.log(oldToy);

        fetch(`http://localhost:5000/mytoys/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(oldToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <h1 className='font-semibold text-2xl text-center py-2 bg-purple-100 text-gray-600'>Update Toy : {toy.name}</h1>

            <form onSubmit={handleUpdateToy} className='text-center mt-10'>

                        <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 my-1' 
                        type="text" 
                        name="name" 
                        placeholder='Please type ( ... Toy Name )' defaultValue={name}/>

                    <div className=' md:w-2/3 mx-auto md:flex my-2'>
                        <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 md:me-5' 
                        type="text" 
                        name="quantity" 
                        placeholder='Available Quantity' defaultValue={quantity} />

                        <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 md:me-5' 
                        type="text" 
                        name="price" 
                        placeholder='Price ( .../product )' defaultValue={price} />                       
                    </div>

                    <div className=''>

                        <input className='p-2 px-10 text-lg bg-purple-500 text-white' type="submit" value="Update" />
                    </div>
                </form>
        </div>
    );
};

export default UpdateToy;