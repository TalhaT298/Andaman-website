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
import bookingBus from '../../images/unsplash_jMvF2FQcihM.png'
import { AiOutlineLeftCircle } from 'react-icons/ai';
import { TbDotsCircleHorizontal } from 'react-icons/tb';
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
    console.log(bookingInfo)

    return (
        <>
            <Navforwithout></Navforwithout>
            <div className='w-full max-w-[1232px] mx-auto font-montserrat my-20 ms:my-0'>

                <div className='ms:bg-[#FF8682] ms:px-6 h-[330px] ms:block hidden pt-9'>
                    <div className='font-montserrat ms:flex items-center justify-between hidden pb-9'>
                        <AiOutlineLeftCircle className='text-2xl'></AiOutlineLeftCircle>
                        <p className='text-lg text-black font-medium'>Bus</p>
                        <TbDotsCircleHorizontal className='text-2xl'></TbDotsCircleHorizontal>
                    </div>
                    <h1 className='text-2xl text-[#112211] font-bold ms:text-sm ms:leading-4'>
                        Emirates A380 Airbus - Seater</h1>
                    <p className='font-medium flex items-center mb-2 text-[10px] ms:mb-0 ms:leading-3'>
                        <ImLocation2 className='text-xs text-[#112211] ms:mr-[6px] ms:text-[8px]'></ImLocation2>
                        North landing Guide road. No:8, Chennai 34437</p>
                    <div className='flex items-center justify-between w-full text-[#112211] ms:justify-start'>
                        <p className='border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mr-2 ms:text-[6px] ms:border-none'>4.2</p>
                        <p className='font-montserrat font-medium text-xs ms:text-[7px] ms:font-normal ms:leading-[9px]'><span className='font-montserrat font-medium text-xs ms:text-[7px] ms:font-normal'>very good</span> 54 reviews</p>
                    </div>
                    <div className='ms:mt-[12px] ms:w-full ms:rounded-[20px] ms:mb-5'>
                        <img className='ms:rounded-[20px]' src={banner} alt="banner" />

                    </div>
                    {/*card for mobile responsive */}
                    <div className='ms:h-[179px] w-full max-w-[1220px] h-[338px] mx-auto ms:mx-0 bg-[#FFFFFF] shadow-md rounded-xl flex items-center justify-between px-11 ms:px-6 mb-5 ms:flex-col' style={{
                        boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)'
                    }}>
                        {/* for mobile date responsive */}
                        <div className='flex items-center justify-between w-full mt-3'>
                            <p className='font-montserrat font-bold ms:text-[10px] ms:text-start ms:leading-3 text-lg text-[#112211] whitespace-nowrap'>{formatedDate}</p>
                            <p className='font-montserrat font-normal ms:text-[12px] ms:text-start ms:font-medium ms:leading-3 text-lg text-[#112211] whitespace-nowrap'>{bookingInfo?.busCompanyName}</p>
                        </div>

                        {/* for mobile responsive bus logo name category and price*/}
                        <div className='ms:w-full ms:h-12 ms:flex ms:items-center ms:justify-between ms:mb-3 hidden'>
                            <div className='ms:w-40 ms:h-12 ms:border-[0.5px] ms:border-[#FF8682] ms:rounded-lg ms:flex ms:items-center ms:justify-center'>
                                <div className='w-full max-w-[188px] h-[187px] text-center ms:flex ms:items-center items-center ms:justify-center justify-between hidden ms:w-24 ms:h-7 ms:gap-[10px]'>
                                    <img className='ms:w-10 ms:h-7' src={bookingInfo?.busLogo} alt="" />
                                    <div className='flex flex-col items-center justify-center'>
                                        <p className='font-bold font-montserrat text-2xl mt-[10px] leading-7 ms:font-semibold ms:leading-3 ms:text-[10px] ms:mt-0'>{bookingInfo?.category}</p>
                                        <p className='font-montserrat font-medium text-[#112211] text-opacity-60 text-sm leading-6 ms:font-medium ms:text-[8px] ms:leading-[9px] ms:whitespace-nowrap'>{bookingInfo?.busName}</p>
                                    </div>
                                </div>
                            </div>
                            {/* review and price  */}
                            <div className='ms:flex ms:flex-col items-center justify-between w-full max-w-[181px] ms:w-[100px] h-8 text-[#112211] hidden'>
                                <div className='flex items-center justify-center ms:w-[101px] ms:h-5'>
                                    <p className='w-10 h-8 border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mr-2 ms:w-5 ms:h-5 ms:text-[6px]'>4.2</p>
                                    <p className='font-montserrat font-medium text-xs ms:text-[7px] ms:whitespace-nowrap'>
                                        <span className='font-montserrat font-bold text-xs ms:text-[7px] ms:leading-[9px]'>very good</span> 54 reviews
                                    </p>
                                </div>
                                <p className='font-montserrat font-bold text-[#425D97] text-2xl ml-4 ms:font-bold ms:text-xs ms:ml-[82px]'>${bookingInfo?.price}</p>
                            </div>
                        </div>
                        {/* mobile responsive bus route name to and from*/}
                        <div className='ms:flex items-center justify-between w-full hidden'>
                            <div className='flex items-center justify-between h-8 ms:justify-start ms:w-full'>
                                {/* <p className='font-montserrat font-semibold text-2xl text-[#112211] whitespace-nowrap hidden'>{bookingInfo?.departureTime}</p> */}
                                <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 ms:text-opacity-100 whitespace-nowrap ml-2 ms:ml-0 ms:text-xl'>{bookingInfo?.routeNameFrom}</p>
                            </div>
                            <div className='mx-20 ms:mx-auto'>
                                <img src={bus} alt="" />
                            </div>
                            <div className='flex items-center justify-end ms:w-full'>
                                {/* <p className='font-montserrat text-[#112211] font-semibold text-2xl mr-5 whitespace-nowrap hidden'>{bookingInfo?.arrivalTime}</p> */}
                                <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 whitespace-nowrap ms:text-opacity-100 ms:text-xl'>{bookingInfo?.routeNameTo}</p>
                            </div>
                        </div>
                        {/* mobile responsive bus route name to and from*/}
                        {/* mobile responsive bus arrival to and departure from*/}
                        <div className='ms:flex items-center justify-between w-full hidden'>
                            <div className='flex items-center justify-between h-8 ms:justify-start ms:w-full'>
                                <p className='font-montserrat font-semibold text-2xl text-[#112211] whitespace-nowrap ms:text-sm ms:text-[#BDBDC2]'>{bookingInfo?.departureTime}</p>

                            </div>
                            <div className='mx-20 ms:mx-0'>
                                <p className='font-montserrat xs:text-xs ms:whitespace-nowrap text-[#262630]'>{bookingInfo?.busDuration}</p>
                            </div>
                            <div className='flex items-center justify-end ms:w-full'>
                                <p className='font-montserrat text-[#112211] font-semibold text-2xl mr-5 whitespace-nowrap ms:whitespace-nowrap ms:text-sm ms:text-[#BDBDC2] ms:mr-0'>{bookingInfo?.arrivalTime}</p>
                            </div>
                        </div>
                        {/* mobile responsive bus route name to and from*/}
                        {/* for mobile responsive */}
                    </div>
                    {/* card for mobile responsive */}
                    {/* icon card mobile responsive */}
                    <p className='text-[#17183B] font-montserrat text-[10px]'>Amenities</p>
                    <div className='flex items-center justify-between w-full h-[68px] ms:bg-white rounded-[20px] px-5 mb-5' style={{
                        boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)'
                    }}>

                        <FaBus className='text-[#112211] text-base'></FaBus>
                        <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                        <FaWifi className='text-base text-[#112211]'></FaWifi>
                        <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                        <FaStopwatch className='text-base text-[#112211]'></FaStopwatch>
                        <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                        <IoFastFoodSharp className='text-base text-[#112211]'></IoFastFoodSharp>
                        <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                        <MdAirlineSeatReclineExtra className='text-base text-[#112211]'></MdAirlineSeatReclineExtra>
                    </div>
                    {/* icon card mobile responsive */}

                    {/* responsive seats starts here */}
                    <div className='w-full max-w-[1220px] mx-auto ms:mx-0 bg-[#FFFFFF] shadow-md rounded-xl py-5 ms:px-6 mb-5 ms:flex-col' style={{
                        boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)'
                    }}>
                        <p className='font-montserrat ms:text-[10px] ms:text-start ms:font-bold ms:leading-3 text-lg text-[#112211] whitespace-nowrap flex items-start justify-start mb-[10px]'>{formatedDate}</p>
                        <div className='flex items-center justify-between'>
                            <div className='w-full max-w-[112px] h-[85px] mb-[10px]'>
                                <img className='rounded-xl w-full max-w-[112px] h-[85px]' src={bookingBus} alt="banner" />
                            </div>
                            <div>
                                <div className='flex flex-col'>
                                    <p className='font-montserrat font-medium text-[10px]'>seater</p>
                                    <p className='font-montserrat font-semibold text-xs'>Emirates Airbus Z320 </p>
                                </div>
                                <div className='flex items-center justify-between w-full text-[#112211] ms:justify-start'>

                                    <p className='w-5 h-5 border border-[#FF8682] rounded flex items-center justify-center font-montserrat font-medium mr-2 ms:text-[6px]'>4.2</p>
                                    <p className='font-montserrat font-medium text-xs ms:text-[7px] ms:font-normal ms:leading-[9px]'><span className='font-montserrat font-medium text-xs ms:text-[7px] ms:font-normal'>very good</span> 54 reviews</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => handleConfirmBooking()}
                            className='w-full bg-[#27273F] font-montserrat font-semibold text-sm h-12 rounded text-[#FFFFFF] px-[110px]py-[10px]'>View Seats</button>
                    </div>
                    {/* responsive seats starts here */}
                </div>
                {/* bus information breadcumb start here*/}
                <div className='w-[300px] h-4 flex items-center justify-between mb-[22px] sm:hidden'>
                    <p className='font-medium text-sm text-[#FF8682]'>
                        <Link to={'/Bus'}>Bus</Link>
                    </p>
                    <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                    <p className='font-medium text-sm  whitespace-nowrap text-[#FF8682]'>
                        <Link to={'/Bus'}>
                            {bookingInfo?.busName}
                        </Link>
                    </p>
                    <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                    <p className='font-medium text-sm text-[#112211] whitespace-nowrap'>{bookingInfo?.busCompanyName}</p>

                </div>
                {/* bus information breadcumb finish here  */}
                <h1 className='text-2xl text-[#112211] font-bold ms:text-sm ms:hidden'>
                    Emirates A380 Airbus - Seater</h1>
                <p className='text-sm font-medium flex items-center mb-2 text-[10px] ms:mb-0 ms:hidden'>
                    <ImLocation2 className='text-xs text-[#112211] mr-2 ms:text-[8px]'></ImLocation2>
                    North landing Guide road. No:8, Chennai 34437</p>

                <div className='flex items-center justify-between w-full max-w-[181px] h-8 text-[#112211] ms:justify-start ms:hidden'>
                    <p className='w-10 h-8 border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mr-2 ms:text-[7px] ms:border-none'>4.2</p>
                    <p className='font-montserrat font-medium text-xs ms:text-[7px] ms:font-normal'><span className='font-montserrat font-bold text-xs ms:text-[7px] ms:font-normal'>very good</span> 54 reviews</p>
                </div>
                <div className='my-[49px] ms:my-5 ms:w-full ms:hidden'>
                    <img src={banner} alt="banner" />
                </div>

                <p className='font-bold text-2xl text-[#112211] mb-[27px] ms:hidden'>Basic Economy Feauture</p>
                <div className='h-12 flex items-center justify-between mb-10 ms:hidden'>
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
                <div className='mb-[49px] w-full max-w-[1232px] bg-[#FF8682] bg-opacity-60 h-[101px] rounded-lg p-4 ms:hidden'>
                    <p className='font-bold text-2xl text-[#112211] mb-4 ml:mb-0'>Basic Economy Feauture</p>
                    <div className='flex items-center ml:flex-col ml:justify-start ml:items-start'>
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
                <div className='w-full max-w-[1232px] bg-white-100 h-[286px] rounded-xl ms:hidden' style={{
                    boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)'
                }}>
                    <div className='flex items-center justify-between mx-6 h-[84px]'>
                        <p className='font-montserrat font-normal text-[#112211] text-xl'>
                            {formatedDate}
                        </p>
                        <p className='font-montserrat font-medium text-[#112211] text-xl'>{bookingInfo?.busDuration}</p>
                    </div>
                    <div className='h-[86px] flex items-center justify-between ml-6 mr-2 mb-10'>
                        <div className='w-full max-w-[262px] h-[86px] flex items-center justify-center rounded-lg border-[0.5px] border-[#8DD3BB] gap-6 px-8 py-4'>
                            <img className='w-16 h-11' src={bookingInfo?.busLogo} alt="" />
                            <div>
                                <p className='font-semibold font-montserrat text-2xl mt-[10px] leading-7 mb-2 sm:text-[10px] sm:leading-3'>{bookingInfo?.category}</p>
                                <p className='font-montserrat font-medium text-[#112211] text-opacity-60 text-sm leading-4 sm:text-[7px] sm:leading-[7px]'>{bookingInfo?.busName}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-12 '>
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
                    <div className='flex items-center justify-center h-[48px] ml-6 mr-2'>
                        <div className='flex items-center justify-between w-[240px] h-7'>

                            <p className='font-montserrat font-semibold text-[#112211] text-2xl sm:text-xl airbnbml:text-xl ml:text-xl md:text-xl sm:whitespace-nowrap md:whitespace-nowrap'>
                                {bookingInfo?.departureTime}
                            </p>
                            <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60'>
                                {bookingInfo?.routeNameFrom}
                            </p>
                        </div>
                        <div className='mx-20 ml:mx-10'>
                            <img src={bus} alt="" />
                        </div>
                        <div className='flex items-center justify-between w-[240px] h-7'>
                            <p className='font-montserrat text-[#112211] font-semibold text-2xl mr-5 whitespace-nowrap sm:mr-0 sm:text-xl airbnbml:text-xl ml:text-xl md:text-xl lg:mr-0'>
                                {bookingInfo?.arrivalTime}
                            </p>
                            <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 whitespace-nowrap'>
                                {bookingInfo?.routeNameTo}
                            </p>
                        </div>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default BusDetailsCard;