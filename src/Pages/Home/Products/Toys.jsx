import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from './SingleToy';
import useTitle from '../../../Hooks/useTitle';

const Toys = () => {
    useTitle('All Toys')
    const allToys = useLoaderData()
    const loadedToys = allToys.slice(0, 20);

    const [toys, setToys] = useState(loadedToys)

    const handleSearch = event => {
        const searchString = event.target.value;
        if(searchString){
            const searchResult = toys.filter (t => t.name.toLowerCase().includes(searchString))
            setToys(searchResult)
        }
        else{
            setToys(loadedToys)
        }
    }

    return (
        <div>
            <div className='md:text-right text-center md:p-5'>
                <input onChange={handleSearch} className='outline-none p-2 bg-purple-50 w-full md:w-1/3 border border-gray-300 my-2 mx-5 md:mx-0' type="text" name="search" placeholder="Search by Toy Name" />
                <hr className='pt-5'/>
            </div>
            <h1 className='text-center text-2xl'>Explore our exclusive collections</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:p-10'>
                    {
                        toys?.map(toy => <SingleToy
                        key={toy._id}
                        toy={toy}
                        ></SingleToy>)
                    }
                </div>
        </div>
    );
};

export default Toys;