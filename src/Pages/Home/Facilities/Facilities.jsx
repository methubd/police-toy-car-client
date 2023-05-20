import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css'

const Facilities = () => {

    useEffect(() => {
        aos.init();
    },[])

    return (
        <div  className='grid grid-cols-1 md:grid-cols-3 gap-5 pt-14'>
            <div data-aos="flip-left" className='bg-gray-400 text-center p-5 rounded-lg'>
                <img className='w-20 rounded-full border mx-auto' src="https://media.istockphoto.com/id/918558150/vector/fast-delivery-logo-fast-delivery-typographic-monochrome-inscription.jpg?s=612x612&w=0&k=20&c=r4XUOE0MZBbGskHpDGuqCDtcO1HEWQBLQ9w3ZozmYA8=" alt="" />
                <h1 className='text-white font-bold text-lg'>FAST DELIVERY</h1>
                <p className='text-white text-sm'>Our delivery methods are very flexible, we are building good communication with every customer.</p>
            </div>

            <div data-aos="flip-up" className='bg-gray-500 text-center p-5 rounded-lg'>
                <img className='w-20 rounded-full border mx-auto' src="https://thumbs.dreamstime.com/b/hundred-percent-genuine-tag-label-icon-198403937.jpg" alt="" />
                <h1 className='text-white font-bold text-lg'>BEST QUALITY</h1>
                <p className='text-white text-sm'>Our delivery methods are very flexible, we are building good communication with every customer.</p>
            </div>

            <div data-aos="flip-right" className='bg-gray-400 text-center p-5 rounded-lg'>
                <img className='w-20 rounded-full border mx-auto' src="data:image/png;base64,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" alt="" />
                <h1 className='text-white font-bold text-lg'>FREE SHIPPING</h1>
                <p className='text-white text-sm'>Our delivery methods are very flexible, we are building good communication with every customer.</p>
            </div>
        </div>
    );
};

export default Facilities;