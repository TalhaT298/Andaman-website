import React, { useEffect, useState } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { data as schedules } from '../../Data/Schedule';
import Navforwithout from '../../../../Navforwithout';
import Footer from '../../../../Component/Footer/Footer';


const BusSchedule = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const params = useParams()
    // console.log(params)
    let pathName = ''
    if (params?.name === 'Government-Bus') {
        pathName = 'Govt. Inter-Island Bus Schedule'
    }
    else {
        pathName = 'Private Inter-Island Bus Schedule'
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
            <div className='w-full font-montserrat h-full px-10 ms:bg-[#FF8682] ms:bg-opacity-70 ms:my-0 mt-20'>

                <div className='w-full max-w-[1225px] h-full mx-auto ms:pt-11'>
                    <div className={`w-full max-w-[433px] h-5 flex items-center flex-wrap ${screenWidth < 388 ? 'mb-12' : 'mb-6'}`}>
                        <p className='font-medium text-sm text-[#FF8682] ms:text-black'>
                            {/* <Link to={'/Bus'}>Bus</Link> */}
                            <a href="/Bus">Bus</a>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                        {/* <br className={`${screenWidth < 434 ? "bg-red-600" : 'hidden'}`} /> */}
                        <br />
                        <p className={`font-medium text-sm text-opacity-75 text-[#000000]`}>{pathName}</p>
                    </div>
                    {
                        schedules?.map((location) => <div
                            key={location?.id}
                            className='rounded-lg bg-[#FF8682] bg-opacity-60 w-full max-w-[1225px] mb-[50px] flex items-center justify-between'>
                            <div className={`w-full max-w-[1181px] mx-auto gap-4 flex items-center justify-evenly flex-wrap py-[15px] ${screenWidth < 434 ? 'gap-2' : ''}`}>
                                <p className={`w-full max-w-[303px] bg-[#FF8682] font-montserrat font-medium h-[70px] rounded-lg flex items-center justify-center ${screenWidth < 567 ? 'text-sm' : 'text-base'}`}>Routes -{' '}
                                    {location?.From} - {location?.To}
                                </p>

                                <p className={`w-full max-w-[303px] bg-[#FF8682] font-montserrat font-medium h-[70px] rounded-lg flex items-center justify-center ${screenWidth < 567 ? 'text-sm' : 'text-base'}`}>
                                    Depature Time -{location?.Departure}
                                </p>
                                <p className={`w-full max-w-[303px] bg-[#FF8682] font-montserrat font-medium text-base h-[70px] rounded-lg flex items-center justify-center ${screenWidth < 567 ? 'text-sm' : ''}`}>
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