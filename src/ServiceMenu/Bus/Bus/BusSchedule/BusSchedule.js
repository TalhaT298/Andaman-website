import React from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';
import { data as schedules } from '../../Data/Schedule';
import Navforwithout from '../../../../Navforwithout';
import Footer from '../../../../Component/Footer/Footer';


const BusSchedule = () => {
    const params = useParams()
    console.log(params)
    let pathName = ''
    if (params?.name === 'Government-Bus') {
        pathName = 'Government Inter-Island Seater Bus Schedule'
    }
    else {
        pathName = 'Private Inter-Island Seater Bus Schedule'
    }

    return (
        <>
            <Navforwithout></Navforwithout>
            <div className='w-full max-w-[1225px] h-[1521px] my-[85px] mx-auto font-montserrat'>
                <div className='w-[433px] h-5 flex items-center mb-[51px]'>
                    <p className='font-medium text-sm text-[#FF8682]'>
                        <Link to={'/Bus'}>Bus</Link>
                    </p>
                    <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                    <p className='font-medium text-sm text-opacity-75 text-[#000000]'>{pathName}</p>
                </div>
                <div className='w-full max-w-[1225px] h-[1450px] mx-auto'>
                    {
                        schedules?.map((location) => <div
                            key={location?.id}
                            className='rounded-lg bg-[#FF8682] bg-opacity-60 w-full max-w-[1225px] h-[100px] mb-[50px] flex items-center justify-between'>
                            <div className='w-full max-w-[1181px] h-[70px] mx-auto gap-[49px] flex items-center justify-center'>
                                <p className='w-full max-w-[251px] bg-[#FF8682] font-montserrat font-medium text-base h-[70px] rounded-lg flex items-center justify-center'>
                                    {location?.From} - {location?.To}
                                </p>
                                {/* <p className='w-full max-w-[177px] bg-[#FF8682] font-montserrat font-medium text-base h-[70px] rounded-lg flex items-center justify-center'>
                                    {location?.Service}
                                </p> */}
                                <p className='w-full max-w-[303px] bg-[#FF8682] font-montserrat font-medium text-base h-[70px] rounded-lg flex items-center justify-center'>
                                    Depature Time -{location?.Departure}
                                </p>
                                <p className='w-full max-w-[303px] bg-[#FF8682] font-montserrat font-medium text-base h-[70px] rounded-lg flex items-center justify-center'>
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