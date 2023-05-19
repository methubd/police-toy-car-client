import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import SingleMyToy from './SingleMyToy';

const MyToy = () => {
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


    return (
        <div>
            <h1 className='text-center py-10 text-2xl font-semibold'>Total Added Products: {myToys.length}</h1>
            <div className='py-5'>
                
                {
                    myToys.map(toy => <SingleMyToy
                    key={toy._id}
                    toy={toy}
                    ></SingleMyToy>)
                }
            </div>
        </div>
    );
};

export default MyToy;