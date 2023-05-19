import React, { useState } from 'react';

const SingleMyToy = ({toy}) => {
    const [myToy, setMyToy] = useState(toy);
    const {name, userEmail, seller, price, quanity, _id} = myToy;
    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table table-zebra w-full">

                <tbody className=''>
                <tr className='border flex items-center justify-between px-5'>
                    <td className='font-semibold'>{name}</td>
                    <td className='text-gray-500'>{userEmail}</td>
                    <td className='text-gray-500'>{seller}</td>
                    <td className='font-bold'>$ {price}</td>
                    <td>{quanity}</td>
                    <button className='bg-green-500 px-2 text-white rounded-md'>Edit</button>
                    <button className='bg-red-500 px-2 text-white font-bold rounded-md'>X</button>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default SingleMyToy;