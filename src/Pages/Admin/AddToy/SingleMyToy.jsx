import { Link } from "react-router-dom";


const SingleMyToy = ({toy, handleDeleteMyToy}) => {    
    const {name, userEmail, seller, price, quanity, _id} = toy;

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
                    
                    <td> 
                    <Link to={`/updateToy/${_id}`}>
                    <button className='bg-green-500 px-2 text-white rounded-md'>Edit</button>
                    </Link>
                    </td>

                    <td>
                    <button onClick={() => handleDeleteMyToy(_id)} className='bg-red-500 px-2 text-white font-bold rounded-md'>X</button>                        
                    </td>                    

                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default SingleMyToy;