import React from 'react';
import HeroImg from "../assets/heroImg.webp";
import Cluch from "../assets/cluch.svg";

const Hero = () => {
    return (
        <div className='bg-gradient-to-br from-white to-blue-200'>
            <div className='flex items-center justify-between px-20 py-10'>
                <div className='max-w-xl'>
                    <h1 className='text-[40px] font-medium mb-4'>
                        Plan. Launch. Grow.
                    </h1>
                    <h1 className='text-[40px] font-medium mb-4'>
                        We are team of talented designers and developers
                    </h1>
                    <p className='text-[20px] font-medium mb-6 text-gray-700'>
                        Work with AI-Proficient engineers who are 10x more productive, or find the AI Expert who’ll automate your workflows – at a fraction of the cost with Latin American talent.
                    </p>
                    <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
                        Schedule a call
                    </button>
                </div>
                <div className='max-w-4xl'>
                    <img src={HeroImg} alt="heroImg" className='w-full ' />
                </div>
            </div>
            <div className='CardContainer pb-16 mt-56 flex justify-center items-center'>
                <div className='w-[850px] bg-white rounded-2xl flex'>
                    <div className='ml-10 text-3xl font-bold py-10 w-[50%]'>
                        <div>
                            <h1 >
                                #1 Tech Talent Partner
                            </h1>
                            <h1> Worldwide according to</h1>
                            <h1 className='text-orange-600'>Clutch.</h1>
                        </div>
                        <div className='mt-64 flex gap-2'>
                            <h1 className='text-3xl text-emerald-950'>Clutch</h1>
                            <div>
                                <h1 className='text-3xl text-orange-600'>* * * * * <span className='text-black' >4.9</span></h1>
                                <h1 className='text-sm'>OVERALL RATING BASED ON <br/> 60 REVIEWS</h1>
                            </div>
                        </div>
                    </div>
                     <div className='w-[50%] '>
                    <h1 className='mt-10'>S U P E R H U M A N</h1>
                    <p className='mt-8 font-semibold'>The engineer attitude is really positive,and he was genuily interested in learning</p>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default Hero;
