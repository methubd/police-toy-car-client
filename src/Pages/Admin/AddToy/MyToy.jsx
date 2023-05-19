import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import SingleMyToy from './SingleMyToy';
import Swal from 'sweetalert2';
import useTitle from '../../../Hooks/useTitle';

const MyToy = () => {
    useTitle('My Toys')
    const {user} = useContext(AuthContext);
    const email = user?.email;
    const [myToys, setMytoys] = useState([]);

    const url = `http://localhost:5000/myToys?email=${email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMytoys(data);
        })
    }, [url])

    const handleDeleteMyToy = id => {        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/myToys/${id}`, {
                    method: 'DELETE',
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const remaining = myToys.filter(toy => toy._id !== id)
                setMytoys(remaining)
            }
          })
    }


    return (
        <div>
            <h1 className='font-semibold text-2xl text-center py-2 bg-purple-100 text-gray-600'>Total Added Toys: {myToys.length}</h1>
            <div className='py-5'>
                
                {
                    myToys.map(toy => <SingleMyToy
                    key={toy._id}
                    toy={toy}
                    handleDeleteMyToy={handleDeleteMyToy}
                    ></SingleMyToy>)
                }
            </div>
        </div>
    );
};

export default MyToy;