import React from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../../Hooks/useTitle';

const AddToy = () => {
    useTitle('Add Toy')
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const subCategory = form.subCategory.value;
        const seller = form.seller.value;
        const quantity = form.quantity.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const details = form.details.value;

        const newToy = {name, subCategory, seller, quantity, email, price, rating, image, details};

        fetch('https://assignment-11-server-nu.vercel.app/toys', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newToy)
        })

        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset();
            }
        })
    }
    return (
        <div>
            <h1 className='font-semibold text-2xl text-center py-2 bg-purple-100 text-gray-600'>Add a Toy</h1>
            <div>
                <form onSubmit={handleAddToy} className='text-center mt-10'>

                    <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 my-1' 
                    type="text" 
                    name="name" 
                    placeholder='Please type ( ... Toy Name )' required/>
                    
                    <div className=' md:w-2/3 mx-auto md:flex my-2'>

                        <select className="md:w-2/3 mx-auto md:flex px-2 bg-purple-50 mr-5 text-gray-400 border border-gray-300" name='subCategory'>
                        <option className='' disabled selected>Sub Category</option>
                        <option>SUV</option>
                        <option>Ambulance</option>
                        <option>Truck</option>
                        </select>
                        
                        <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300' 
                        type="text" 
                        name="seller" 
                        placeholder='Seller Name' />
                    </div>

                    <div className=' md:w-2/3 mx-auto md:flex my-2'>
                        <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 md:me-5' 
                        type="text" 
                        name="quantity" 
                        placeholder='Available Quantity' />

                        <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 ' 
                        type="text" 
                        name="email" 
                        placeholder='Seller Email ( ...@email.com )' />
                        
                    </div>

                    <div className=' md:w-2/3 mx-auto md:flex my-2'>
                        <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 md:me-5' 
                        type="text" 
                        name="price" 
                        placeholder='Price ( .../product )' />

                        <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 ' 
                        type="text" 
                        name="rating" 
                        placeholder='Ratings (... 1 - 5)' />
                        
                    </div>

                        <input className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 my-1' 
                        type="text" 
                        name="image" 
                        placeholder='Photo URL ( ...https:// )' required/>

                    <div className=''>
                        <textarea className='p-2 bg-purple-50 md:w-2/3 border border-gray-300 my-1' 
                        type="text" 
                        name="details"
                        cols="30" rows="5" 
                        placeholder='Type details abut your prodcut.' required/> <br />

                        <input className='p-2 px-10 text-lg bg-purple-500 text-white cursor-pointer' type="submit" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;