import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h1 className='text-center text-2xl py-5 font-bold '>Blog</h1>

            <div className='bg-purple-100 md:w-2/3 mx-auto p-5 my-2'>
                <h1 className='font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <h1 className='py-2'>- Refresh token is used to generate a new access token and Access token is a changeable token to authenticate.</h1>
            </div>

            <div className='bg-purple-100 md:w-2/3 mx-auto p-5 my-2'>
                <h1 className='font-bold'>2. Compare SQL and NoSQL databases?</h1>
                <h1 className='py-2'>- SQL database are table based similar excel (not similar), and NoSQL database are document based.</h1>
            </div>

            <div className='bg-purple-100 md:w-2/3 mx-auto p-5 my-2'>
                <h1 className='font-bold'>3. What is express js? What is Nest JS?</h1>
                <h1 className='py-2'>- Express js is a web application framework of Node js. Nest js is a JS application framework.</h1>
            </div>

            <div className='bg-purple-100 md:w-2/3 mx-auto p-5 my-2'>
                <h1 className='font-bold'>4. What is MongoDB aggregate and how does it work?</h1>
                <h1 className='py-2'>- Its a advance process of CRUD. </h1>
            </div>
        </div>
    );
};

export default Blog;