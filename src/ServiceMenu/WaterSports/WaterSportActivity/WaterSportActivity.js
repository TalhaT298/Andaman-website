import React, { useContext, useEffect, useState } from 'react';
import { WaterContext } from '../../../context/UseWaterContext';

const WaterSportActivity = () => {
    const { waterBookingInfo } = useContext(WaterContext)
    // console.log(waterBookingInfo)
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
    return (
        <div className={`flex items-start justify-between gap-5 font-montserrat ${screenWidth < 1224 ? 'flex-col' : ''}`}>
            <iframe
                src={iframeLink}
                title="Embedded Content"
                className={`rounded-xl ${screenWidth < 1224 ? 'w-full h-96' : 'w-10/12 h-72'}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <p className='text-base text-black text-justify'>{fullDescription}</p>
        </div>
    );
};

export default WaterSportActivity;