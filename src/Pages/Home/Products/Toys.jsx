import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from './SingleToy';

const Toys = () => {
    const toys = useLoaderData()

    return (
        <div>
            <h1 className='text-center text-2xl'></h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:p-10'>
                    {
                        toys.map(toy => <SingleToy
                        key={toy._id}
                        toy={toy}
                        ></SingleToy>)
                    }
                </div>
        </div>
    );
};

export default Toys;