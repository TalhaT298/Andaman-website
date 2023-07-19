import React, { useContext, useEffect, useState } from 'react';
import { WaterContext } from '../../../context/UseWaterContext';

const WaterSportActivity = () => {
    const { waterBookingInfo, places } = useContext(WaterContext)
    // console.log(waterBookingInfo)
    console.log(places)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);
    const { iframeLink, fullDescription } = waterBookingInfo;

    console.log(screenWidth)
    return (
        <>
            {
                places ?
                    <div className={`flex items-start justify-between gap-5 font-montserrat ${screenWidth < 1224 ? 'flex-col' : ''}`}>
                        <iframe
                            src={iframeLink}
                            title="Embedded Content"
                            className={`rounded-xl ${screenWidth < 1224 && screenWidth > 569 ? 'w-[75%] h-96 mx-auto' : 'h-72 mx-auto'} ${screenWidth < 568 ? 'w-full' : ''}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <p className='text-base text-black text-justify'>{fullDescription}</p>
                    </div>
                    :
                    <div className={`flex items-start justify-between gap-5 font-montserrat flex-col`}>
                        <iframe
                            src={iframeLink}
                            title="Embedded Content"
                            className={`rounded-xl ${screenWidth < 1224 && screenWidth > 569 ? 'w-[75%] h-96 mx-auto' : 'w-10/12 h-72 mx-auto'} ${screenWidth < 568 ? 'w-full' : ''}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <p className='text-base text-black text-justify'>{fullDescription}</p>
                    </div>
            }
        </>
    );
};

export default WaterSportActivity;