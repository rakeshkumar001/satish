import React from 'react';
import Lottie from 'lottie-react';
import PageNotFound from '../../assets/lottie-animation/404.json';
import Arrow from '../../assets/lottie-animation/arrow.json';
import { Link } from 'react-router-dom';

function NoPageFound() {
    return (
        <div className='dark:bg-slate-800'>
            <div className='flex justify-center items-center'>
                <div className='text-right dark:text-white'>
                    <p className='text-4xl mb-5 font-Poppins font-bold '>Oops!</p>
                    <p className='text-right'> We can't seem to find the page you're looking for.</p>
                    <p className='mt-3 text-sm text-gray-400 text-right'>Let's get back to the Home Page, and start over.</p>
                    <div className='mt-10 relative'>
                        <div className='w-24 absolute top-[-40px] right-24 origin-center scale-x-[-1]'>
                            <Lottie animationData={Arrow} />
                        </div>
                        <Link to='home' className='bg-white  shadow-other-card-shadow mx-4 border border-gray-300 hover:border-white cursor-pointer p-2 px-5 rounded-3xl text-gray-400 hover:bg-primary hover:text-white' aria-current="page">Home</Link>
                    </div>
                </div>
                <Lottie animationData={PageNotFound} />
            </div>
        </div>
    )
}

export default NoPageFound