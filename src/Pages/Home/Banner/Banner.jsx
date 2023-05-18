import React from 'react';

const Banner = () => {
    return (
        <div className="hero p-5 text-center md:text-left">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.kindpng.com/picc/m/4-45556_toy-car-png-car-toy-transparent-background-png.png" className="max-w-sm" />
                <div>
                <h1 className="text-5xl font-bold">The Police Toy!</h1>
                <p className="py-6 text-gray-600">Life is too short to have boring toys, our car toys never disappoint.</p>
                <button className="btn bg-purple-500 border-none">Get Started</button>
                </div>
            </div>
            </div>
    );
};

export default Banner;