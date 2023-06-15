import React from 'react';
import bus from '../../images/bus.png';
import { AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { BusContext } from '../../../../context/UseBusDataContext';
import { format } from 'date-fns';


const BusSearchResult = ({ result, selected, travellers, travellerInfo }) => {
    // console.log(result, selected)
    // console.log(travellers)
    const { bookingInfo, setBookingInfo } = useContext(BusContext);
    const date = (format(selected, 'EEE, MMM d'))
    // console.log(date)
    const navigate = useNavigate();
    const handleBooking = (info) => {
        navigate(`/bus/details/${info?.busId}`)
        setBookingInfo({ ...info, selected, travellers, travellerInfo })
    }
    // console.log(result)
    console.log(bookingInfo)
    return (
        <div
            onClick={() => handleBooking(result)}
            className='ms:h-[129px]
        w-full max-w-[1220px] h-[338px] mx-auto ms:mx-0 bg-[#FFFFFF] shadow-md rounded-xl flex items-center justify-between px-11 ms:px-6 mb-[59px] ms:flex-col' style={{
                boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)'
            }}>
            {/* for mobile date responsive */}
            <div className='w-full mt-11 mb-6 ms:flex items-center justify-between ms:mt-5 ms:mb-2 hidden'>
                <p className='font-montserrat font-normal ms:text-[12px] ms:text-start ms:font-bold ms:leading-3 text-lg text-[#112211] whitespace-nowrap'>{date}</p>
                <p className='font-montserrat font-normal ms:text-[12px] ms:text-start ms:font-bold ms:leading-3 text-lg text-[#112211] whitespace-nowrap'>{result?.busName}</p>
            </div>
            <div className='w-full border border-[#BDBDC2] border-opacity-30 mb-3 hidden ms:block'>
            </div>
            {/* for mobile responsive bus logo name category and price*/}
            <div className='ms:h-12 sm:flex sm:items-center sm:justify-between sm:mb-3 ms:hidden'>
                <div className='ms:w-40 ms:h-12 ms:border-[0.5px] ms:border-[#FF8682] ms:rounded-lg ms:flex ms:items-center ms:justify-center'>
                    <div className='w-full max-w-[188px] h-[187px] text-center ms:flex ms:items-center items-center ms:justify-center justify-between hidden ms:w-24 ms:h-7 ms:gap-[10px]'>
                        <img className='ms:w-10 ms:h-7' src={result?.busLogo} alt="" />
                        <div className='flex flex-col items-center justify-center'>
                            <p className='font-bold font-montserrat text-2xl mt-[10px] leading-7 ms:font-semibold ms:leading-3 ms:text-[10px] ms:mt-0'>{result?.category}</p>
                            <p className='font-montserrat font-medium text-[#112211] text-opacity-60 text-sm leading-6 ms:font-medium ms:text-[8px] ms:leading-[9px] ms:whitespace-nowrap'>{result?.busName}</p>
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
                    <p className='font-montserrat font-bold text-[#425D97] text-2xl ml-4 ms:font-bold ms:text-xs ms:ml-[82px]'>${result?.price}</p>
                </div>
            </div>
            {/* mobile responsive bus route name to and from*/}
            <div className='ms:flex items-center justify-between w-full hidden'>
                <div className='flex items-center justify-between h-8 ms:justify-start ms:w-full'>
                    {/* <p className='font-montserrat font-semibold text-2xl text-[#112211] whitespace-nowrap hidden'>{result?.departureTime}</p> */}
                    {/* <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 ms:text-opacity-100 whitespace-nowrap ml-2 ms:ml-0 ms:text-[10px]'>{result?.routeNameFrom}</p> */}
                    <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 ms:text-opacity-100 whitespace-nowrap ml-2 ms:ml-0 ms:text-[10px]'>{result?.currentDestination}</p>
                </div>
                <div className='mx-20 ms:mx-auto'>
                    <img src={bus} alt="" />
                </div>
                <div className='flex items-center justify-end ms:w-full'>
                    {/* <p className='font-montserrat text-[#112211] font-semibold text-2xl mr-5 whitespace-nowrap hidden'>{result?.arrivalTime}</p> */}
                    {/* <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 whitespace-nowrap ms:text-opacity-100 ms:text-[10px]'>{result?.routeNameTo}</p> */}
                    <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 ms:text-opacity-100 whitespace-nowrap ml-2 ms:ml-0 ms:text-[10px]'>{result?.nextDestination}</p>
                </div>
            </div>
            {/* mobile responsive bus route name to and from*/}
            {/* mobile responsive bus arrival to and departure from*/}
            <div className='ms:flex items-center justify-between w-full hidden'>
                <div className='flex items-center justify-between h-8 ms:justify-start ms:w-full'>
                    <p className='font-montserrat font-semibold text-2xl text-[#112211] whitespace-nowrap ms:text-sm ms:text-[#BDBDC2]'>{result?.departureTime}</p>

                </div>
                <div className='mx-20 ms:mx-0'>
                    <p className='font-montserrat xs:text-xs ms:whitespace-nowrap text-[#262630]'>{result?.busDuration}</p>
                </div>
                <div className='flex items-center justify-end ms:w-full'>
                    <p className='font-montserrat text-[#112211] font-semibold text-2xl mr-5 whitespace-nowrap ms:whitespace-nowrap ms:text-sm ms:text-[#BDBDC2] ms:mr-0'>{result?.arrivalTime}</p>
                </div>
            </div>
            {/* mobile responsive bus route name to and from*/}
            {/* for mobile responsive */}

            {/* desktop logo */}
            <div className='w-full max-w-[188px] h-[187px] text-center lg:max-w-[100px] ms:hidden mr-6'>
                <img className='w-auto' src={result?.busLogo} alt="" />
                <p className='font-bold font-montserrat text-2xl mt-[10px] leading-7 lg:text-base'>{result?.category}</p>
                <p className='font-montserrat font-medium text-[#112211] text-opacity-60 text-sm leading-6 lg:text-xs'>{result?.busName}</p>
            </div>

            <div className='flex items-center flex-col justify-between h-[297px] w-full max-w-[868px] lg:max-w-xl'>

                <div className='flex items-center justify-between w-full max-w-[866px] h-11 ms:hidden lg:max-w-xl'>
                    <div className='flex items-center justify-between w-full max-w-[181px] h-8 text-[#112211]'>
                        <p className='w-10 h-8 border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mr-2'>4.2</p>
                        <p className='font-montserrat font-medium text-xs'><span className='font-montserrat font-bold text-xs'>very good</span> 54 reviews</p>
                    </div>
                    <div className='w-20 h-11'>
                        <p className='font-montserrat text-xs text-[#112211] text-opacity-75 font-medium whitespace-nowrap'>Starting From</p>
                        <span className='font-montserrat font-bold text-[#425D97] text-2xl ml-4'>${result?.price}</span>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full max-w-[866px] h-11 ms:hidden lg:max-w-xl'>
                    <div className='w-[103px] h-[22px] mt-11 mb-6'>
                        <p className='font-montserrat font-normal text-lg text-[#112211] whitespace-nowrap'>{date}</p>
                    </div>
                    <div className='mt-[30px] mb-6'>
                        <p className='font-montserrat text-xl font-medium text-[#112211] text-opacity-75'>{result?.busDuration}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full h-11 ms:hidden lg:max-w-xl airbnbml:max-w-xs'>
                    <div className='flex items-center justify-between h-8 ml:w-auto airbnbml:w-auto md:w-auto lg:max-w-xl lg:flex-col lg:h-auto'>
                        <p className='w-8 h-8 border-2 border-[#112211] border-opacity-5 rounded mr-6 shadow lg:hidden'></p>
                        <p className='font-montserrat font-semibold text-2xl text-[#112211] whitespace-nowrap'>{result?.departureTime}</p>
                        <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 whitespace-nowrap ml-2 lg:ml-0'>{result?.routeNameFrom}</p>
                    </div>
                    <div className='mx-20 lg:mx-0'>
                        <img src={bus} alt="" />
                    </div>
                    <div className='flex items-center justify-between lg:w-auto lg:max-w-xl airbnbml:max-w-xs lg:flex-col'>
                        <p className='font-montserrat text-[#112211] font-semibold text-2xl mr-5 whitespace-nowrap lg:mr-0'>{result?.arrivalTime}</p>
                        <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 whitespace-nowrap'>{result.routeNameTo}</p>
                    </div>
                </div>
                <div className='w-[270px] h-12 flex items-center ml-auto justify-between gap-4 mt-11 ms:hidden airbnbml:ml-auto'>
                    <p className='w-12 h-12 rounded border border-[#FF8682] flex items-center justify-center'>

                        <AiOutlineHeart className='text-[#4C4850]'></AiOutlineHeart>
                    </p>
                    <button
                        onClick={() => handleBooking(result)}
                        className='w-[205px] h-12 rounded font-montserrat text-sm text-[#112211] bg-[#FF8682] font-semibold'>Book Now</button>
                </div>

            </div>
        </div >
    );
};

export default BusSearchResult;