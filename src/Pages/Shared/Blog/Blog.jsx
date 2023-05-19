import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h1 className='text-center text-2xl py-5 font-bold'>Blog</h1>

            <div className='bg-purple-100 md:w-2/3 mx-auto p-5'>
                <h1 className='font-bold'>Questions</h1>
            </div>
        </div>
    );
};

export default Blog;