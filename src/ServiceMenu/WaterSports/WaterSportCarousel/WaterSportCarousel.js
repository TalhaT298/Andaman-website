import React, { useContext, useEffect, useState } from 'react';
// import boat from '../images/Banana-Boat-Rides 1.png'
// import mount from '../images/mount-harriet-1 1.png'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { WaterContext } from '../../../context/UseWaterContext';


const WaterSportCarousel = ({ elements }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { setWaterBookingInfo } = useContext(WaterContext);

    // console.log(bus)
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            // console.log(screenWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);

    const images = elements?.map(link => link?.imageLink)
    const titles = elements?.map(name => name?.name)
    const duration = elements?.map(location => location?.duration)
    const videoLink = elements?.map(links => links?.iframeLink)
    const description = elements.map(desc => desc?.fullDescription)
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const goToStart = () => {
        setCurrentIndex(0)
    }
    // console.log(images)
    // console.log(images.length)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         goToNext();
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, []);
    // console.log('currentIndex=>', currentIndex)
    const navigate = useNavigate();
    const handleBookTicket = (index) => {
        // console.log(index)
        const activity = titles[index]
        const image = images[index]
        const location = duration[index]
        const iframeLink = videoLink[index]
        const fullDescription = description[index]
        setWaterBookingInfo({ activity, image, location, iframeLink, fullDescription })
        navigate(`/water/tickets`)
    }
    return (
        <>
            <div className='mt-5 mb-32 font-montserrat relative px-16 ms:px-0 ms:my-0 z-50'>

                {/* image and carousel indiacator start here */}
                <div className='flex items-center ms:hidden'>
                    <img className='w-full max-w-xl h-96' src={images[currentIndex]} alt="" />
                    <div className='ml-6'>
                        {
                            titles.map((_, i) => <p className={`w-3 h-3 rounded-full mb-4 ${i === currentIndex ? "bg-[#FF8682]" : 'bg-[#EAEAEA]'}`}></p>)
                        }
                    </div>
                </div>
                <div className='flex items-end justify-end absolute w-full inset-0 -bottom-10 ms:hidden'>
                    {/* change carousel button start here */}
                    <div className={`flex items-center justify-center ${screenWidth < 934 ? 'hidden' : 'block'}`}>
                        <button
                            className={`px-6 py-4 bg-[#3E66DF] text-sm text-white font-semibold flex items-center justify-between ${currentIndex === images?.length - 1 ? 'block' : 'hidden'}`}
                            onClick={goToStart}
                        ><MdKeyboardArrowUp className='mr-9 text-lg'></MdKeyboardArrowUp>
                            Start Over
                        </button>
                        <button
                            className={`px-6 py-4 bg-[#3E66DF] text-sm text-white font-semibold flex items-center justify-between ml-1 ${currentIndex === images.length - 1 ? 'hidden' : 'block'}`}
                            onClick={goToPrevious}
                        >
                            <MdKeyboardArrowLeft className='mr-9 text-lg'></MdKeyboardArrowLeft>
                            Previous
                        </button>
                        <button
                            className='px-6 py-4 bg-[#3E66DF] text-sm text-white font-semibold ml-1 flex items-center justify-between'
                            onClick={goToNext}
                        >
                            Next
                            <MdKeyboardArrowRight className='ml-9 text-lg'></MdKeyboardArrowRight>
                        </button>
                    </div>
                    {/* book now start here*/}
                    <div className={`bg-black font-montserrat px-8 py-7 w-full ${screenWidth < 934 ? 'max-w-full' : 'max-w-xl'}`}>
                        <div className='flex items-center justify-between w-full'>
                            <h4 className='font-bold text-2xl text-white'>{titles[currentIndex]}</h4>
                            <div className='flex items-center justify-center'>
                                <p className='rounded border border-[#FF8682] p-2 text-white mr-2'>4.2</p>
                                <p className='font-montserrat font-medium text-white
                            '>very good 54 reviews</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleBookTicket(currentIndex)}
                            className={`bg-[#FF8682] px-11 py-4 rounded text-sm font-semibold ${screenWidth < 934 ? 'hidden' : 'block'}`}
                        >Book Now
                        </button>
                        <div className={`flex items-center justify-between ${screenWidth > 933 ? 'hidden' : 'block mt-2'}`}>
                            <button
                                onClick={() => handleBookTicket(currentIndex)}
                                className={`bg-[#FF8682] px-11 py-4 rounded text-sm font-semibold`}
                            >Book Now
                            </button>
                            <div className='flex items-center justify-center'>
                                <button
                                    className={`py-4 bg-[#3E66DF] text-sm text-white font-semibold flex items-center justify-between ${currentIndex === images.length - 1 ? 'block' : 'hidden'}
                                    ${screenWidth < 934 ? 'px-2' : 'px-6'}
                                    `}
                                    onClick={goToStart}
                                ><MdKeyboardArrowUp className='mr-9 text-lg'></MdKeyboardArrowUp>
                                    Start Over
                                </button>
                                <button
                                    className={`py-4 bg-[#3E66DF] text-sm text-white font-semibold flex items-center justify-between ml-1 ${currentIndex === images.length - 1 ? 'hidden' : 'block'} 
                                    ${screenWidth < 934 ? 'px-[9.5px]' : 'px-6'}
                                    `}
                                    onClick={goToPrevious}
                                >
                                    <MdKeyboardArrowLeft className='mr-9 text-lg'></MdKeyboardArrowLeft>
                                    Previous
                                </button>
                                <button
                                    className='px-6 py-4 bg-[#3E66DF] text-sm text-white font-semibold ml-1 flex items-center justify-between'
                                    onClick={goToNext}
                                >
                                    Next
                                    <MdKeyboardArrowRight className='ml-9 text-lg'></MdKeyboardArrowRight>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile responsive cards start here */}
                <div className="absolute left-[-4vw] right-[-4vw] z-[-1] ms:bg-[#FF8682] pl-4 pr-3 pt-8 hidden ms:block">
                    <div className='hidden ms:block'>
                        {
                            elements.map((ms, index) => <div
                                onClick={() => handleBookTicket(index)}
                                key={ms?.id}
                                className='w-full flex items-start justify-start py-5 mb-4 gap-4 bg-white px-4 rounded-xl'
                                style={{
                                    boxShadow: '0px 4px 16px 0px #1122110D'
                                }}
                            >
                                {/* <div className='w-full max-w-[115px] h-[85px]'> */}
                                <img
                                    className='rounded-xl w-full max-w-[115px] h-[85px]'
                                    src={ms?.imageLink} alt="location images" />
                                {/* </div> */}
                                <div className='font-montserrat'>
                                    <h3 className='font-semibold text-xs text-black mb-1'>{ms?.name}</h3>
                                    <p className='font-medium text-[10px] text-black/50 mb-1'>{ms?.duration}</p>
                                    <div className='flex items-center justify-start'>
                                        <p className='rounded border border-[#FF8682] p-1 text-black mr-2 font-medium text-[7px]'>4.2</p>
                                        <p className='font-montserrat font-medium text-black text-[7px]'>very good 54 reviews</p>
                                    </div>
                                </div>
                            </div>

                            )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WaterSportCarousel;