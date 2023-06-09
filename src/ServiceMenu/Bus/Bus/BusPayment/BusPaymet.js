import React, { useContext } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { FaBus, FaStopwatch, FaWifi } from 'react-icons/fa';
import { IoFastFoodSharp } from 'react-icons/io5';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import bus from '../../images/bus.png';
import visa from '../../images/visa.png'
import { AiOutlinePlus } from 'react-icons/ai'
import banner from '../../images/Rectangle 3.png'
import { BusContext } from '../../../../context/UseBusDataContext';
import Navforwithout from '../../../../Navforwithout';
import Footer from '../../../../Component/Footer/Footer';
import { Link } from 'react-router-dom';


const BusPayment = () => {
    const { bookingInfo } = useContext(BusContext)
    // console.log(bookingInfo)
    const totalPrice = bookingInfo?.updatedPrice?.price;

    const handleShowAlert = () => {
        alert('Payment recived')
    }
    return (
        <>
            <Navforwithout></Navforwithout>
            <div className='w-full max-w-[1327px] h-[657px] mt-20 mx-auto mb-[84px] flex items-center justify-between'>
                <div>
                    <div className='w-full max-w-[820px] font-montserrat'>
                        <div className='w-[600px] h-[17px] flex items-center justify-between mb-6 flex-wrap'>
                            <p className='font-medium text-sm text-[#FF8682]'>
                                <Link to={'/Bus'}>
                                    Bus
                                </Link>
                            </p>
                            <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                            <p className='font-medium text-sm text-[#FF8682]'>
                                <Link to={'/Bus'}>
                                    {bookingInfo?.busName}
                                </Link>
                            </p>
                            <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>

                            <p className='font-medium text-sm text-[#FF8682] whitespace-nowrap'>
                                <Link to={`/bus/details/${bookingInfo?.busId}`}>
                                    {bookingInfo?.busCompanyName}
                                </Link>
                            </p>
                            <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                            <p className='font-medium text-sm text-[#FF8682]'>
                                <Link to={'/bus/booking/seats'}>
                                    Seats
                                </Link>
                            </p>
                            <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                            <p className='font-medium text-sm text-[#FF8682]'>
                                <Link to={'/bus/traveler/details'}>
                                    Details
                                </Link>
                            </p>
                            <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                            <p className='font-medium text-sm text-[#112211] text-opacity-70'>Payment</p>
                        </div>
                        <div className='w-full max-w-[792px] bg-[#FFFFFF] h-[349px] rounded-xl px-6 pt-8 pb-9 mb-[25px]' style={{
                            boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)'
                        }}>
                            <div className='w-full max-w-[742px] h-[39px] font-montserrat flex items-center justify-between mx-auto mb-[29px]'>
                                <h1 className='font-bold text-2xl text-[#000000] leading-6'>{bookingInfo?.busName}</h1>
                                <h1 className='font-bold text-[32px] text-[#062F7D] leading-6'>${bookingInfo?.updatedPrice?.price}</h1>
                            </div>
                            <div className='flex items-center justify-between mx-6 w-full max-w-[742px] h-6 mb-7'>
                                <p className='font-montserrat font-normal text-[#112211] text-xl'>
                                    {bookingInfo?.formatedDate}
                                </p>
                                <p className='font-montserrat font-medium text-[#112211] text-xl'>{bookingInfo?.busDuration}</p>
                            </div>
                            <div className='w-full max-w-[742px] h-[86px] flex items-center justify-between mx-auto mb-11'>
                                <div className='w-full max-w-[262px] h-[86px] flex items-center justify-center rounded-lg border-[0.5px] border-[#FF8682] gap-6 px-8 py-4'>
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
                            <div className='flex items-center justify-center w-full max-w-[742px] h-[48px] mx-auto'>
                                <div className='flex items-center justify-between w-[240px] h-7'>

                                    <p className='font-montserrat font-semibold text-[#112211] text-2xl'>
                                        {bookingInfo?.departureTime}
                                    </p>
                                    <p className='font-montserrat text-base font-medium text-[#112211] text-opacity-60'>
                                        {bookingInfo?.routeNameFrom}
                                    </p>
                                </div>
                                <div className='mx-[47px]'>
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
                    <div className='w-[820px] h-[250px]'>
                        <p className='font-montserrat text-xl font-bold mb-6'>Payment Method</p>
                        <div className='w-full max-w-[820px] h-[120px] rounded-[2px] border border-[#062F7D] border-opacity-20'>
                            <div className='w-full max-w-[820px] h-14 bg-[#FFFFFF] flex items-center justify-center'>
                                <div className='w-[779px] h-6 flex items-center justify-between mx-auto'>
                                    <div className='flex items-center justify-between'>
                                        <div className='w-5 h-5 mr-[14px] rounded-full border-2 border-[#3AA39F] flex items-center justify-center bg-[#FFFFFF]'>
                                            <p className='w-[10px] h-[10px] rounded-[10px] bg-[#3AA39F] border border-[#3AA39F]'></p>
                                        </div>
                                        <img className='w-6 h-6' src={visa} alt="" />
                                        <p className='font-montserrat italic text-[#A2A3B1] text-base ml-4'>•••• 6754</p>
                                        <p className='font-montserrat font-normal text-base text-[#A2A3B1] ml-[46px]'>Expires 06/2021</p>
                                    </div>
                                    <div>
                                        <p className='text-[#FF8682] text-base font-montserrat italic '>Remove</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full max-w-[820px] h-[1px] rounded-[2px] border border-[#062F7D] border-opacity-20'>
                            </div>
                            <div className='w-full max-w-[820px] h-14 bg-[#FFFFFF] flex items-center justify-center'>
                                <div className='w-[779px] h-6 flex items-center justify-between mx-auto'>
                                    <div className='flex items-center justify-between'>
                                        <div className='w-5 h-5 mr-[14px] rounded-full border-2 border-[#3AA39F] flex items-center justify-center bg-[#FFFFFF]'>

                                        </div>
                                        <img className='w-6 h-6' src={visa} alt="" />
                                        <p className='font-montserrat italic text-[#A2A3B1] text-base ml-4'>•••• 5643</p>
                                        <p className='font-montserrat font-normal text-base text-[#A2A3B1] ml-[46px]'>Expires 11/2025</p>
                                    </div>
                                    <div>
                                        <p className='text-[#FF8682] text-base font-montserrat italic '>Remove</p>
                                    </div>
                                </div>

                            </div>
                            <div className='w-full max-w-[820px] h-[1px] rounded-[2px] border border-[#062F7D] border-opacity-20 mt-8'>
                            </div>
                            <p className='text-[#3AA39F] font-montserrat text-base font-semibold mt-[34px] flex items-center'>
                                <AiOutlinePlus className='text-sm mr-5'></AiOutlinePlus>
                                Add Payment method</p>
                        </div>

                    </div>
                </div>
                <div className='w-full max-w-[450px] h-[609px] bg-[#FFFFFF] rounded-lg mx-6'
                    style={{
                        boxShadow: '0px 4px 16px 0px #1122110D'
                    }}
                >
                    <div className='w-full max-w-[367px] h-[120px] flex items-center justify-center mx-6 my-6 gap-6'>
                        <div className=''>
                            <img className='w-[120px] h-[120px] rounded-lg' src={banner} alt="" />
                        </div>
                        <div className='flex items-center justify-between w-full max-w-[223px] h-[120px] text-[#112211]'>

                            <div>
                                <p className='font-montserrat font-medium text-[#000000] text-base leading-5'>Economy</p>
                                <p className='font-montserrat font-semibold text-[#000000] leading-6 text-xl'>{bookingInfo?.busName}</p>
                                <div className='w-[181px] h-8 flex items-center justify-between mt-5'>
                                    <p className='w-10 h-8 border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mr-2'>4.2</p>
                                    <p className='font-montserrat font-medium text-xs leading-5'><span className='font-montserrat font-bold text-xs'>very good</span> 54 reviews</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='w-[402px] h-[0.5px] bg-[#000000] bg-opacity-25 mx-auto mb-6'>
                    </div>
                    <p className='font-montserrat font-medium text-base text-[#000000] leading-5 mx-6 mb-4'>Your booking is protected by <span className='font-bold'>golobe</span> </p>
                    <div className='w-[402px] h-[0.5px] bg-[#000000] bg-opacity-25 mx-auto'>
                    </div>

                    <div className='font-montserrat w-[402px] h-[164px] mx-6'>

                        <p className='font-bold text-[#000000] mb-4 mt-4 leading-5'>Price Details</p>
                        <div className='flex items-center justify-between'>
                            <p className='font-medium text-base leading-5 mb-4'>Base Fare </p>
                            <p className='text-[#000000] text-base leading-5 font-semibold'>${bookingInfo?.updatedPrice?.price || '100'}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='font-medium text-base leading-5 mb-4'>Discounts</p>
                            <p className='text-[#000000] text-base leading-5 font-semibold'>$100</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='font-medium text-base leading-5 mb-4'>Taxes</p>
                            <p className='text-[#000000] text-base leading-5 font-semibold'>$100</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='font-medium text-base leading-5 mb-4'>Service Fee</p>
                            <p className='text-[#000000] text-base leading-5 font-semibold'>$100</p>
                        </div>
                        <div className='w-[402px] h-[0.5px] bg-[#000000] bg-opacity-225 mx-auto mb-4'>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='font-medium text-base leading-5 mb-4'>Total </p>
                            <p className='text-[#000000] text-base leading-5 font-semibold'>$
                                {100 + 100 + 100 + totalPrice}

                            </p>
                        </div>
                        <input
                            placeholder='Cupon Code'
                            className='w-full max-w-[402px] h-14 mb-4 font-montserrat text-base font-semibold rounded border border-[#BDBDC2] placeholder:pl-4'
                            type="text" name="" id="" />
                        <button
                            onClick={() => handleShowAlert()}
                            className='w-full max-w-[402px] h-[52px] font-montserrat text-base font-semibold bg-[#FF8682] rounded text-white-100 leading-5'>Confirm and Pay</button>
                    </div>

                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default BusPayment;