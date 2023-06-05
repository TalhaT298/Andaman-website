import React from 'react';
import { ImLocation2 } from 'react-icons/im'
import banner from '../../images/Rectangle 3.png'
import { FaBus, FaStopwatch, FaWifi } from 'react-icons/fa';
import { IoFastFoodSharp } from 'react-icons/io5';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { useContext } from 'react';
import bus from '../../images/bus.png';
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { BusContext } from '../../../../context/UseBusDataContext';
import Navforwithout from '../../../../Navforwithout';
import Footer from '../../../../Component/Footer/Footer';
const BusDetailsCard = () => {

    const { bookingInfo, setBookingInfo } = useContext(BusContext)
    // console.log(bookingInfo)
    const today = new Date();
    const { selected } = bookingInfo;
    const date = new Date(selected ? selected : today)
    const formatedDate = format(date, 'EEE, MMM d')
    const navigate = useNavigate();
    const handleConfirmBooking = () => {
        navigate('/bus/booking/seats')
        setBookingInfo({ ...bookingInfo, formatedDate })
    }

    return (
        <>
            <Navforwithout></Navforwithout>
            <div className='w-full max-w-[1232px] mx-auto font-montserrat my-20'>
                {/* bus information breadcumb start here*/}
                <div className='w-[300px] h-4 flex items-center justify-between mb-[22px]'>
                    <p className='font-medium text-sm text-[#FF8682]'>
                        <Link to={'/Bus'}>Bus</Link>
                    </p>
                    <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                    <p className='font-medium text-sm  whitespace-nowrap text-[#FF8682]'>{bookingInfo?.busName}</p>
                    <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                    <p className='font-medium text-sm text-[#112211] whitespace-nowrap'>{bookingInfo?.busCompanyName}</p>

                </div>
                {/* bus information breadcumb finish here  */}
                <h1 className='text-2xl text-[#112211] font-bold'>
                    Emirates A380 Airbus - Seater</h1>
                <p className='text-sm font-medium flex items-center mb-2'>
                    <ImLocation2 className='text-xs text-[#112211] mr-2'></ImLocation2>
                    North landing Guide road. No:8, Chennai 34437</p>

                <div className='flex items-center justify-between w-full max-w-[181px] h-8 text-[#112211]'>
                    <p className='w-10 h-8 border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mr-2'>4.2</p>
                    <p className='font-montserrat font-medium text-xs'><span className='font-montserrat font-bold text-xs'>very good</span> 54 reviews</p>
                </div>
                <div className='my-[49px]'>
                    <img src={banner} alt="banner" />

                </div>
                <p className='font-bold text-2xl text-[#112211] mb-[27px]'>Basic Economy Feauture</p>
                <div className='w-full max-w-[1230px] h-12 flex items-center justify-between mb-10'>
                    <div className='flex items-center justify-between w-full max-w-[312px] h-12 '>
                        <FaBus className='text-xl text-[#112211]'></FaBus>
                        <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                        <FaWifi className='text-xl text-[#112211]'></FaWifi>
                        <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                        <FaStopwatch className='text-xl text-[#112211]'></FaStopwatch>
                        <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                        <IoFastFoodSharp className='text-xl text-[#112211]'></IoFastFoodSharp>
                        <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                        <MdAirlineSeatReclineExtra className='text-xl text-[#112211]'></MdAirlineSeatReclineExtra>
                    </div>
                    <button
                        onClick={() => handleConfirmBooking()}
                        className='w-[150px] h-12 rounded font-montserrat text-sm text-[#112211] bg-[#FF8682] font-semibold'>Book Now</button>
                </div>
                <div className='mb-[49px] w-full max-w-[1232px] bg-[#FF8682] bg-opacity-60 h-[101px] rounded-lg p-4'>
                    <p className='font-bold text-2xl text-[#112211] mb-4'>Basic Economy Feauture</p>
                    <div className='flex items-center'>
                        <div className='flex items-center w-full max-w-[570px]'>
                            <FaStopwatch className='text-xl text-[#112211] mr-[19px]'></FaStopwatch>
                            <p className='font-medium text-base text-[#112211] text-opacity-75'>
                                Pre-flight cleaning, installation of cabin HEPA filters.
                            </p>
                        </div>
                        <div className='flex items-center w-full max-w-[570px]'>
                            <FaStopwatch className='text-xl text-[#112211] mr-[19px]'></FaStopwatch>
                            <p className='font-medium text-base text-[#112211] text-opacity-75'>
                                Pre-flight health screening questions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-[1232px] bg-white-100 h-[286px] rounded-xl' style={{
                    boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)'
                }}>
                    <div className='flex items-center justify-between mx-6 w-full max-w-[1184px] h-[84px]'>
                        <p className='font-montserrat font-normal text-[#112211] text-xl'>
                            {formatedDate}
                        </p>
                        <p className='font-montserrat font-medium text-[#112211] text-xl'>{bookingInfo?.busDuration}</p>
                    </div>
                    <div className='w-full max-w-[1200px] h-[86px] flex items-center justify-between ml-6 mr-2 mb-10'>
                        <div className='w-full max-w-[262px] h-[86px] flex items-center justify-center rounded-lg border-[0.5px] border-[#8DD3BB] gap-6 px-8 py-4'>
                            <img className='w-16 h-11' src={bookingInfo?.busLogo} alt="" />
                            <div>
                                <p className='font-semibold font-montserrat text-2xl mt-[10px] leading-7 mb-2'>{bookingInfo?.category}</p>
                                <p className='font-montserrat font-medium text-[#112211] text-opacity-60 text-sm leading-4'>{bookingInfo?.busName}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full max-w-[312px] h-12 '>
                            <FaBus className='text-xl text-[#112211]'></FaBus>
                            <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                            <FaWifi className='text-xl text-[#112211]'></FaWifi>
                            <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                            <FaStopwatch className='text-xl text-[#112211]'></FaStopwatch>
                            <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                            <IoFastFoodSharp className='text-xl text-[#112211]'></IoFastFoodSharp>
                            <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                            <MdAirlineSeatReclineExtra className='text-xl text-[#112211]'></MdAirlineSeatReclineExtra>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full max-w-[1200px] h-[48px] ml-6 mr-2'>
                        <div className='flex items-center justify-between w-[240px] h-7'>

                            <p className='font-montserrat font-semibold text-[#112211] text-2xl'>
                                {bookingInfo?.departureTime}
                            </p>
                            <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60'>
                                {bookingInfo?.routeNameFrom}
                            </p>
                        </div>
                        <div className='mx-20'>
                            <img src={bus} alt="" />
                        </div>
                        <div className='flex items-center justify-between w-[240px] h-7'>
                            <p className='font-montserrat text-[#112211] font-semibold text-2xl mr-5 whitespace-nowrap'>
                                {bookingInfo?.arrivalTime}
                            </p>
                            <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 whitespace-nowrap'>
                                {bookingInfo?.routeNameTo}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default BusDetailsCard;