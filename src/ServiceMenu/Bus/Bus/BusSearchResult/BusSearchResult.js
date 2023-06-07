import React from 'react';
import bus from '../../images/bus.png';
import { AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { BusContext } from '../../../../context/UseBusDataContext';
import { format } from 'date-fns';


const BusSearchResult = ({ result, selected, travellers, travellersInfo }) => {
    // console.log(result, selected)
    // console.log(travellers)
    const { setBookingInfo } = useContext(BusContext);
    const date = (format(selected, 'EEE, MMM d'))
    // console.log(date)
    const navigate = useNavigate();
    const handleBooking = (info) => {
        navigate(`/bus/details/${info?.busId}`)
        setBookingInfo({ ...info, selected, travellers, travellersInfo })
    }
    // console.log(result)
    return (
        <div className='w-full max-w-[1220px] h-[338px] mx-auto bg-[#FFFFFF] shadow-md rounded-xl flex items-center justify-between px-11 mb-[59px]' style={{
            boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)'
        }}>
            <div className='w-full max-w-[188px] h-[187px] text-center'>
                <img src={result?.busLogo} alt="" />
                <p className='font-bold font-montserrat text-2xl mt-[10px] leading-7'>{result?.category}</p>
                <p className='font-montserrat font-medium text-[#112211] text-opacity-60 text-sm leading-6'>{result?.busName}</p>
            </div>
            <div className='flex items-center flex-col justify-between h-[297px] w-full max-w-[868px]'>

                <div className='flex items-center justify-between w-full max-w-[866px] h-11'>
                    <div className='flex items-center justify-between w-full max-w-[181px] h-8 text-[#112211]'>
                        <p className='w-10 h-8 border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mr-2'>4.2</p>
                        <p className='font-montserrat font-medium text-xs'><span className='font-montserrat font-bold text-xs'>very good</span> 54 reviews</p>
                    </div>
                    <div className='w-20 h-11'>
                        <p className='font-montserrat text-xs text-[#112211] text-opacity-75 font-medium whitespace-nowrap'>Starting From</p>
                        <span className='font-montserrat font-bold text-[#425D97] text-2xl ml-4'>${result?.price}</span>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full max-w-[866px] h-11'>
                    <div className='w-[103px] h-[22px] mt-11 mb-6'>
                        <p className='font-montserrat font-normal text-lg text-[#112211] whitespace-nowrap'>{date}</p>
                    </div>
                    <div className='mt-[30px] mb-6'>
                        <p className='font-montserrat text-xl font-medium text-[#112211] text-opacity-75'>{result?.busDuration}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full max-w-[866px] h-11'>
                    <div className='flex items-center justify-between w-[300px] h-8'>
                        <p className='w-8 h-8 border-2 border-[#112211] border-opacity-5 rounded mr-6 shadow'></p>
                        <p className='font-montserrat font-semibold text-2xl text-[#112211] whitespace-nowrap'>{result?.departureTime}</p>
                        <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 whitespace-nowrap ml-2'>{result?.routeNameFrom}</p>
                    </div>
                    <div className='mx-20'>
                        <img src={bus} alt="" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='font-montserrat text-[#112211] font-semibold text-2xl mr-5 whitespace-nowrap'>{result?.arrivalTime}</p>
                        <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60 whitespace-nowrap'>{result.routeNameTo}</p>
                    </div>
                </div>
                <div className='w-[270px] h-12 flex items-center ml-auto justify-between gap-4 mt-11'>
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