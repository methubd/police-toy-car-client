import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css'

const ForBoyGirls = () => {
    useEffect(() => {
        aos.init();
    },[])

    return (
        <div data-aos="zoom-in-down" className='md:flex border p-10'>
            <div>
                <div className='absolute'>
                    <h3 className='text-3xl'>FOR</h3>
                    <h1 className='text-6xl font-bold'>GIRLS</h1>
                    <button className='bg-purple-500 px-3 text-white'>SHOP NOW</button>
                </div>
                <img className='h-full' src="https://thumbs.dreamstime.com/b/funny-child-school-girl-yellow-background-148933750.jpg" alt="" />
            </div>
            <div>
                <div className='absolute'>
                    <h3 className='text-3xl'>FOR</h3>
                    <h1 className='text-6xl font-bold'>BOYS</h1>
                    <button className='bg-purple-500 px-3 text-white'>SHOP NOW</button>
                </div>
                <img src="https://e1.pxfuel.com/desktop-wallpaper/753/82/desktop-wallpaper-hat-child-baby-christmas-goodfon-christmas-cap.jpg" alt="" />
            </div>
        </div>
    );
};

export default ForBoyGirls;