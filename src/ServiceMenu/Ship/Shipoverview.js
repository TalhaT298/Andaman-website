import React from 'react';
import lftarrow from '../../images/image_source_for_shiptab/lft-side.png';
import rhttarrow from '../../images/image_source_for_shiptab/rht-side.png';
import boat from '../../images/image_source_for_shiptab/Groupboat.png';
import heart from '../../images/image_source_for_shiptab/heart.png';

const Shipoverview = (props) => {
    return (
        <div className='bg-white drop-shadow-xl rounded-lg flex px-10 py-5 mb-8'>
            <div className='w-56 h-48 mr-8'>
                <img class="w-full h-full mr-3" src={props.flightLogo} alt="..." />
            </div>
            <div className='w-full mx-6'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <h2 className='mr-4 border border-rose-400 px-2 py-1'>4.9</h2>
                        <h3 className='font-bold'>Very Good Review</h3>
                    </div>
                    <h2 className='text-sky-600 font-bold text-xl'>$7</h2>
                </div>
                <div className='flex justify-between items-center text-xl text-slate-500 mt-5'>
                    <p>Wed, Dec 8</p>
                    <p className="font-sans">{props.flightDuration}</p>
                </div>
                <div className='w-full flex items-center my-4'>
                    <div className='border border-slate-600 w-5 h-5 mr-3'></div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                            <p className='mr-4 font-bold text-2xl'>{props.departureTime}</p>
                            <p className='text-xl text-slate-500'>{props.currentDestination}</p>
                        </div>
                        <div className='flex items-center'>
                            <img class="h-2 w-8 mx-3" src={lftarrow} alt="..." />
                            <img class="max-w-none mx-3" src={boat} alt="..." />
                            <img class="h-2 w-8 mx-3" src={rhttarrow} alt="..." />
                        </div>
                        <div className='flex items-center'>
                            <p className='mr-4 font-bold text-2xl'>{props.arrivalTime}</p>
                            <p className='text-xl text-slate-500'>{props.nextDestination}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end items-center mt-6'>
                    <div className='border border-rose-400 px-2 py-2 mr-5'>
                        <img class="max-w-none" src={heart} alt="..." />
                    </div>
                    <button className='text-black bg-rose-400 px-8 py-2'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Shipoverview;