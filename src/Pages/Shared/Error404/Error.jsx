import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const Error = () => {
    useTitle('404 Error')
    return (
        <div className='text-center'>
            <img className='w-2/4 mx-auto mt-10' src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt="" />
            {/* <h1 className='text-9xl'>404</h1> */}
            <p className='text-3xl text-gray-500 py-5'>Page not found</p>
            <Link className='px-5 bg-purple-500 py-1 text-white' to='/'>Please Go Home</Link>
        </div>
    );
};

export default Error;