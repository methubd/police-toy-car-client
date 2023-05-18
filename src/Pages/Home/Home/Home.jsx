import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../Products/SingleToy';


const Home = () => {
    const toys = useLoaderData()
    console.log(toys);

    return (
        <div>
            <Banner></Banner>
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

export default Home;