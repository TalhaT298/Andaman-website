import React, { useContext, useState } from 'react';
// import boat from '../images/Banana-Boat-Rides 1.png'
// import mount from '../images/mount-harriet-1 1.png'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { WaterContext } from '../../../context/UseWaterContext';
import elements from '../../../Data/ActivityData'
import { duration } from '@mui/material';
const WaterSportCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const { setWaterBookingInfo } = useContext(WaterContext);
    // const images = [boat, mount, boat, mount]
    // const title = ['Port Blair', 'North Island', 'Havock Island', 'Neil Island']
    // const title = ['Mount Manipur', 'Banana Boat Rides', 'Elephent Beach', 'Mount Manipur']
    const images = elements?.map(link => link.imageLink)
    const titles = elements?.map(name => name.name)
    const duration = elements?.map(location => location.duration)
    // console.log(images)

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
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         goToNext();
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, []);
    // console.log(currentIndex)
    const navigate = useNavigate();
    const handleBookTicket = (index) => {
        const location = titles[index]
        const image = images[index]
        const location2 = duration[index]
        setWaterBookingInfo({ location, image, location2 })
        navigate(`/water/tickets`)
    }
    return (
        <div className='my-28 font-montserrat relative px-16'>
            <div className='flex items-center'>
                <img src={images[currentIndex]} alt="" />
                <div className='ml-6'>
                    {
                        titles.map((_, i) => <p className={`w-3 h-3 rounded-full mb-4 ${i === currentIndex ? "bg-[#FF8682]" : 'bg-[#EAEAEA]'}`}></p>)
                    }
                </div>
            </div>
            <div className='flex items-end justify-end absolute w-full inset-0 -bottom-10'>
                <div className='flex items-center justify-center'>
                    <button
                        className={`px-6 py-4 bg-[#3E66DF] text-sm text-white font-semibold flex items-center justify-between ${currentIndex === 6 ? 'block' : 'hidden'}`}
                        onClick={goToStart}
                    ><MdKeyboardArrowUp className='mr-9 text-lg'></MdKeyboardArrowUp>
                        Start Over
                    </button>
                    <button
                        className={`px-6 py-4 bg-[#3E66DF] text-sm text-white font-semibold flex items-center justify-between ml-1 ${currentIndex === 6 ? 'hidden' : 'block'}`}
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
                <div className='bg-black font-montserrat px-8 py-7 w-full max-w-xl'>
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
                        className='bg-[#FF8682] px-11 py-4 rounded text-sm font-semibold'
                    >Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default WaterSportCarousel;