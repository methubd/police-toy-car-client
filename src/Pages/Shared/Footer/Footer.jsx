import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Footer = () => {
    return (
        <>
            <div className='mt-10 bg-purple-100 p-10 grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <h1 className='text-gray-600 font-semibold py-5'>About Us</h1>
                    <p className='text-sm'>We are establishing our business with good strategies. Join us and sale your product in few clicks.</p>
                    <div>
                        <h1><small>Social Media Links : </small></h1>
                        <div className='flex'>
                            <p className='pr-2'><BeakerIcon className='h-6 w-6 text-blue-500'></BeakerIcon></p>
                            <p className='pr-2'><BeakerIcon className='h-6 w-6 text-blue-500'></BeakerIcon></p>
                            <p className='pr-2'><BeakerIcon className='h-6 w-6 text-blue-500'></BeakerIcon></p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-gray-600 font-semibold py-5'>Usefull Links</h1>
                    <ul>
                        <li className='text-blue-600 text-sm cursor-pointer'>Career</li>
                        <li className='text-blue-600 text-sm cursor-pointer'>Corporate Communication</li>
                        <li className='text-blue-600 text-sm cursor-pointer'>Customer Support Team</li>
                        <li className='text-blue-600 text-sm cursor-pointer'>Frequently Asked Questions</li>
                    </ul>
                </div>
                
                <div>
                    <h1 className='text-gray-600 font-semibold py-5'>Our Terms & Conditions</h1>
                        <ul>
                            <li className='text-blue-600 text-sm cursor-pointer'>Saling Products</li>
                            <li className='text-blue-600 text-sm cursor-pointer'>Refund Policy</li>
                            <li className='text-blue-600 text-sm cursor-pointer'>Customer Communication</li>
                            <li className='text-blue-600 text-sm cursor-pointer'>Pricing</li>
                        </ul>
                </div>

                <div>
                    <h1 className='text-gray-600 font-semibold py-5'>Promotional Newsletter</h1>
                    <form>
                        <input className='bg-white w-full p-2 rounded-t-md text-sm text-white' type="email" placeholder='Your Email' /> <br />
                        <input className='py-1 w-full bg-purple-500 cursor-pointer text-white my-2 text-sm' type="submit" value="Subscribe" />
                    </form>
                </div>

            </div>

            <p className='text-center bg-gray-500 text-white py-2 text-sm'><small>Copyright: Police Toy Car</small></p>

        </>
    );
};

export default Footer;