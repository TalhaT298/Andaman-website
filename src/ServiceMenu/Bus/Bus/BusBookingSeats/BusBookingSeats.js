import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import bus from '../../images/bus.png';
import { FaBus, FaStopwatch, FaWifi } from 'react-icons/fa';
import { IoFastFoodSharp } from 'react-icons/io5';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { HiMinus, HiOutlineChevronRight, HiOutlinePlus } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom';
import { BusContext } from '../../../../context/UseBusDataContext';
import Navforwithout from '../../../../Navforwithout';
import Footer from '../../../../Component/Footer/Footer';

const BusBookingSeats = () => {
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const { bookingInfo, setBookingInfo, adult, children, infant } = useContext(BusContext)
    const navigate = useNavigate();
    const seats = [
        '1', '2', '17', '18', '19',
        '3', '4', '20', '21', '22',
        '5', '6', '23', '24', '25',
        '7', '8', '26', '27', '28',
        '9', '10', '29', '30', '31',
        '11', '12', '32', '33', '34',
        '13', '14', '35', '36', '37',
        '15', '16', '38', '39', '40',
        '41', '42', '43', '44', '45', '46'
    ]


    const handleSelectSeat = (num) => {
        const alreadyBooked = selectedSeat.find((booked) => booked === num)
        if (!alreadyBooked) {
            setSelectedSeat([...selectedSeat, num])
            setRefresh(!refresh)
        }
        else {
            setSelectedSeat(selectedSeat.filter(seat => seat !== num));
            setRefresh(!refresh)
        }

    }

    // console.log(bookingInfo.selectedSeat?.length)

    const totalSeat = selectedSeat?.length;
    const newPrice = totalSeat * bookingInfo?.price;

    const { price, ...rest } = bookingInfo;
    const updatedPrice = { price: newPrice, ...rest };
    const totalPassenger = adult + children + infant

    const handleConfirmBooking = () => {
        // console.log(selectedSeat.length)
        if (selectedSeat.length === 0 || selectedSeat.length !== totalPassenger) {

            alert(`You have to select ${totalPassenger} seat`)
            return;
        }
        navigate('/bus/traveler/details')
    }

    useEffect(() => {
        setBookingInfo({ ...bookingInfo, selectedSeat, updatedPrice })
    }, [refresh])

    return (
        <>
            <Navforwithout></Navforwithout>
            <div className='w-full max-w-[1244px] h-[697px] mt-20 mx-auto flex items-center justify-between mb-11 sm:gap-6 md:flex-col airbnbml:gap-6 ml:gap-6 lg:gap-6 sxl:gap-6'>
                <div className='w-full max-w-[792px]'>
                    {/* bus info breadcumb starts here  */}
                    <div className='w-[405px] h-[17px] flex items-center justify-between mb-6 font-montserrat flex-wrap ms:hidden'>
                        <p className='font-medium text-sm text-[#FF8682]'>
                            <Link to='/Bus'>Bus</Link>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                        <p className='font-medium text-sm text-[#FF8682]'>
                            <Link to={`/Bus`}>{bookingInfo?.busName}</Link>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                        <p className='font-medium text-sm text-[#FF8682] whitespace-nowrap'>
                            <Link to={`/bus/details/${bookingInfo?.busId}`}>
                                {bookingInfo?.busCompanyName}
                            </Link>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                        <p className='font-medium text-sm text-[#000000] text-opacity-60'>Seats</p>
                    </div>
                    {/* bus info breadcumb finish here  */}
                    {/* bus detail card starts here  */}
                    <div className='w-full max-w-[792px] bg-[#FFFFFF] h-[349px] rounded-xl px-6 pt-8 pb-9 mb-[25px] ms:hidden' style={{
                        boxShadow: '0px 4px 16px rgba(17, 34, 17, 0.05)'
                    }}>
                        <div className='w-full max-w-[742px] h-[39px] font-montserrat flex items-center justify-between mx-auto mb-[29px]'>
                            <h1 className='font-bold text-2xl text-[#000000] leading-6'>{bookingInfo?.busName}</h1>
                            <h1 className='font-bold text-[32px] text-[#062F7D] leading-6'>${bookingInfo?.updatedPrice?.price || 0}</h1>
                        </div>
                        <div className='flex items-center justify-between mx-6 w-full max-w-[742px] h-6 mb-7'>
                            <p className='font-montserrat font-normal text-[#000000] text-xl'>
                                {bookingInfo?.formatedDate}
                            </p>
                            <p className='font-montserrat font-medium text-[#000000] text-opacity-75 text-xl'>{bookingInfo?.busDuration}</p>
                        </div>
                        {/* bus feature details  */}
                        <div className='w-full max-w-[742px] h-[86px] flex items-center justify-between mx-auto mb-11'>
                            <div className='w-full max-w-[262px] h-[86px] flex items-center justify-center rounded-lg border-[0.5px] border-[#FF8682] gap-6 px-8 py-4'>
                                <img className='w-16 h-11' src={bookingInfo?.busLogo} alt="" />
                                <div>
                                    <p className='font-semibold font-montserrat text-2xl mt-[10px] text-[#000000] leading-7 mb-2'>{bookingInfo?.category}</p>
                                    <p className='font-montserrat font-medium text-[#000000] text-opacity-60 text-sm leading-4'>{bookingInfo?.busName}</p>
                                </div>
                            </div>
                            {/* icon  */}
                            <div className='flex items-center justify-between w-full max-w-[312px] h-12 '>
                                <FaBus className='text-xl text-[#000000]'></FaBus>
                                <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                                <FaWifi className='text-xl text-[#000000]'></FaWifi>
                                <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                                <FaStopwatch className='text-xl text-[#000000]'></FaStopwatch>
                                <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                                <IoFastFoodSharp className='text-xl text-[#000000]'></IoFastFoodSharp>
                                <p className='h-12 border border-[#D7E2EE] mx-[27px]'></p>
                                <MdAirlineSeatReclineExtra className='text-xl text-[#000000]'></MdAirlineSeatReclineExtra>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full max-w-[742px] h-[48px] mx-auto'>
                            <div className='flex items-center justify-between w-[240px] h-7'>

                                <p className='font-montserrat font-semibold text-[#000000] text-2xl'>
                                    {bookingInfo?.departureTime}
                                </p>
                                <p className='font-montserrat text-base font-medium text-opacity-60 text-[#000000]'>
                                    {bookingInfo?.routeNameFrom}
                                </p>
                            </div>
                            <div className='mx-[47px]'>
                                <img src={bus} alt="" />
                            </div>
                            <div className='flex items-center justify-between w-[240px] h-7'>
                                <p className='font-montserrat text-black-200 font-semibold text-2xl mr-5 whitespace-nowrap'>
                                    {bookingInfo?.arrivalTime}
                                </p>
                                <p className='font-montserrat text-base font-medium text-[#000000] text-opacity-60 whitespace-nowrap'>
                                    {bookingInfo?.routeNameTo}
                                </p>
                            </div>
                        </div>
                        {/* bus details card ends here  */}
                    </div>
                    <div className='w-full max-w-[790px] bg-[#FF8682] bg-opacity-60 h-[135px] rounded-lg px-4 font-montserrat mb-[25px] ms:hidden'>
                        <p className='font-bold text-2xl text-[#112211] font-montserrat pt-4 mb-4 leading-7'>Emirates Airlines Policies</p>
                        <div className='flex flex-col items-center justify-start'>
                            <div className='flex items-center w-full mb-4 leading-5'>
                                <FaStopwatch className='text-xl text-[#112211] mr-[19px]'></FaStopwatch>
                                <p className='font-medium text-base text-[#112211] text-opacity-75 leading-5'>
                                    Pre-flight cleaning, installation of cabin HEPA filters.
                                </p>
                            </div>
                            <div className='flex items-center w-full'>
                                <FaStopwatch className='text-xl text-[#112211] mr-[19px]'></FaStopwatch>
                                <p className='font-medium text-base text-[#112211] text-opacity-75 leading-5'>
                                    Pre-flight health screening questions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleConfirmBooking}
                        className='w-full bg-[#27273F] font-montserrat font-semibold text-sm h-12 rounded text-[#FFFFFF] max-w-[786px]
                        block ms:hidden md:hidden
                        '>Checkout
                    </button>
                </div>

                {/* seats starts here  */}
                <div className='w-full max-w-[327px] h-[694px] mx-auto ms:hidden'
                >
                    <div className='flex items-center justify-between w-full max-w-[327px] h-[34px] mb-[18px] font-popins'>
                        <p className='font-popins font-semibold text-2xl text-[#262630]'>
                            Choose Seats
                        </p>
                        <div className='flex items-center justify-between gap-3'>
                            <button className='w-8 h-8 rounded-full border border-[#BDBDC2] border-opacity-20 flex items-center justify-center'>
                                <HiOutlinePlus className='text-base'></HiOutlinePlus>
                            </button>
                            <button className='w-8 h-8 rounded-full border border-[#BDBDC2] border-opacity-20 flex items-center justify-center'>
                                <HiMinus className='text-base'></HiMinus>
                            </button>
                        </div>
                    </div>
                    <div className='w-full max-w-[327px] h-5 flex items-center justify-between mb-[22px] ms:max-w-[568px]'>
                        <div className='flex items-center justify-center w-[92px] h-5'>
                            <p className='mr-3 w-[20px] h-[20px] rounded-full bg-[#BDBDC2] bg-opacity-20'></p>
                            <p className='font-popins font-normal text-[13px] text-[#262630]'>Reserved</p>
                        </div>
                        <div className='flex items-center justify-center w-[92px] h-5'>
                            <p className='mr-3 w-[20px] h-[20px] rounded-full border border-[#BDBDC2] border-opacity-20'></p>
                            <p className='font-popins font-normal text-[13px] text-[#262630]'>Available</p>
                        </div>

                        <div className='flex items-center justify-center w-[92px] h-5'>
                            <p className='mr-3 w-[20px] h-[20px] rounded-full bg-[#FF8682]'></p>
                            <p className='font-popins font-normal text-[13px] text-[#262630]'>Selected</p>
                        </div>
                    </div>
                    <div className='w-[345px] bg-[#F2F2F3] h-[600px] border border-dashed border-[#F2F2F3] rounded-xl mx-auto'
                        style={{
                            boxShadow: '0px 4px 4px 0px #00000040'
                        }}
                    >

                        {
                            seats.map((seat) => (
                                <button
                                    onClick={() => handleSelectSeat(seat)}
                                    className={`w-[41px] h-[41px] font-popins text-sm text-[#262630] border border-[#BDBDC2] border-opacity-20 rounded-xl 
                                    ${['41', '42', '43', '44', '45', '46'].includes(seat) ? 'ml-[13.7px]' : 'mb-3 ml-4 mt-4'}
                                    ${selectedSeat.includes(seat) ? 'bg-[#FF8682] text-[#FFFFFF]' : 'bg-[#BDBDC2]'}
                                    ${['2', '4', '6', '8', '10', '12', '14', '16'].includes(seat) ? 'mr-10' : ''}`}
                                    key={seat}
                                >
                                    {seat}
                                </button>
                            ))
                        }

                    </div>
                    <button
                        onClick={handleConfirmBooking}
                        className='w-[345px] bg-[#27273F] font-montserrat font-semibold text-sm h-12 rounded text-[#FFFFFF] mx-auto
                        block ms:hidden lg:hidden md:block
                        '>Checkout
                    </button>
                </div>
                {/* seats ends here  */}
                {/* seats starts here  */}
                <div className='ms:block hidden'
                >
                    <div className='flex items-center justify-between w-full max-w-[567px] h-[34px] mb-[18px] font-popins mt-40'>
                        <p className='font-popins font-semibold text-2xl text-[#262630]'>
                            Choose Seats
                        </p>
                        <div className='flex items-center justify-between gap-3'>
                            <button className='w-8 h-8 rounded-full border border-[#BDBDC2] border-opacity-20 flex items-center justify-center'>
                                <HiOutlinePlus className='text-base'></HiOutlinePlus>
                            </button>
                            <button className='w-8 h-8 rounded-full border border-[#BDBDC2] border-opacity-20 flex items-center justify-center'>
                                <HiMinus className='text-base'></HiMinus>
                            </button>
                        </div>
                    </div>
                    {/* mobile seats here  */}
                    <div className='w-full max-w-[327px] h-5 flex items-center justify-between mb-[22px]'>
                        <div className='flex items-center justify-center w-[92px] h-5'>
                            <p className='mr-3 w-[20px] h-[20px] rounded-full bg-[#BDBDC2] bg-opacity-20'></p>
                            <p className='font-popins font-normal text-[13px] text-[#262630]'>Reserved</p>
                        </div>
                        <div className='flex items-center justify-center w-[92px] h-5'>
                            <p className='mr-3 w-[20px] h-[20px] rounded-full border border-[#BDBDC2] border-opacity-20'></p>
                            <p className='font-popins font-normal text-[13px] text-[#262630]'>Available</p>
                        </div>

                        <div className='flex items-center justify-center w-[92px] h-5'>
                            <p className='mr-3 w-[20px] h-[20px] rounded-full bg-[#FF8682]'></p>
                            <p className='font-popins font-normal text-[13px] text-[#262630]'>Selected</p>
                        </div>
                    </div>
                    <div className='w-[510px] bg-[#F2F2F3] h-auto border border-dashed border-[#F2F2F3] rounded-xl ml-3'
                        style={{
                            boxShadow: '0px 4px 4px 0px #00000040'
                        }}
                    >

                        {
                            seats?.map((seat) => (
                                <button
                                    onClick={() => handleSelectSeat(seat)}
                                    className={`w-[70px] h-[70px] font-popins text-sm text-[#262630] border border-[#BDBDC2] border-opacity-20 rounded-xl 
                                    ${['41', '42', '43', '44', '45', '46'].includes(seat) ? 'ml-[13.7px]' : 'mb-3 ml-5 mt-4'}
                                    ${selectedSeat.includes(seat) ? 'bg-[#FF8682] text-[#FFFFFF]' : 'bg-[#BDBDC2]'}
                                    ${['2', '4', '6', '8', '10', '12', '14', '16'].includes(seat) ? 'mr-10' : ''}`}
                                    key={seat}
                                >
                                    {seat}
                                </button>
                            ))
                        }

                    </div>
                    <button
                        onClick={handleConfirmBooking}
                        className='w-[510px] ml-3 bg-[#27273F] font-montserrat font-semibold text-sm h-12 rounded text-[#FFFFFF] hidden ms:block'>Checkout
                    </button>
                </div>
                {/* seats ends here  */}
            </div>
            <Footer></Footer>
        </>
    );
};

export default BusBookingSeats;