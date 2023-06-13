import React, { useEffect, useState } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';
import { data as schedules } from '../../Data/Schedule';
import Navforwithout from '../../../../Navforwithout';
import Footer from '../../../../Component/Footer/Footer';


const BusSchedule = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const params = useParams()
    // console.log(params)
    let pathName = ''
    if (params?.name === 'Government-Bus') {
        pathName = 'Government Inter-Island Seater Bus Schedule'
    }
    else {
        pathName = 'Private Inter-Island Seater Bus Schedule'
    }

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

    return (
        <>
            <Navforwithout></Navforwithout>
            <div className='w-full my-[85px] font-montserrat h-full'>

                <div className='w-full max-w-[1225px] h-full mx-auto'>
                    <div className='w-full max-w-[433px] h-5 flex items-center mb-[51px] flex-wrap'>
                        <p className='font-medium text-sm text-[#FF8682]'>
                            <Link to={'/Bus'}>Bus</Link>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                        {/* <br className={`${screenWidth < 434 ? "bg-red-600" : 'hidden'}`} /> */}
                        <br />
                        <p className={`font-medium text-sm text-opacity-75 text-[#000000]`}>{pathName}</p>
                    </div>
                    {
                        schedules?.map((location) => <div
                            key={location?.id}
                            className='rounded-lg bg-[#FF8682] bg-opacity-60 w-full max-w-[1225px] h-[100px] mb-[50px] flex items-center justify-between'>
                            <div className={`w-full max-w-[1181px] h-[70px] mx-auto gap-[49px] flex items-center justify-evenly ${screenWidth < 434 ? 'gap-2' : ''}`}>
                                <p className={`w-full max-w-[251px] bg-[#FF8682] font-montserrat font-medium text-base h-[70px] rounded-lg flex items-center justify-center ${screenWidth < 567 ? 'text-[8px]' : ''}`}>
                                    {location?.From} - {location?.To}
                                </p>

                                <p className={`w-full max-w-[303px] bg-[#FF8682] font-montserrat font-medium text-base h-[70px] rounded-lg flex items-center justify-center ${screenWidth < 567 ? 'text-[8px]' : ''}`}>
                                    Depature Time -{location?.Departure}
                                </p>
                                <p className={`w-full max-w-[303px] bg-[#FF8682] font-montserrat font-medium text-base h-[70px] rounded-lg flex items-center justify-center ${screenWidth < 567 ? 'text-[8px]' : ''}`}>
                                    Arrival Time -{location?.Departure}
                                </p>
                            </div>
                        </div>

                        )

                    }
                </div>

            </div >
            <Footer></Footer>
        </>
    );
};

export default BusSchedule;