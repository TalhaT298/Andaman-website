import React, { useContext, useEffect, useState } from 'react';
import Navforwithout from '../../../Navforwithout';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { WaterContext } from '../../../context/UseWaterContext';
// import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import Footer from '../../../Component/Footer/Footer';
import visa from '../../Bus/images/visa.png'
// import hotel from '../images/hotelname.png'
import { ImLocation2 } from 'react-icons/im';


const WaterSportsPayment = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const { waterBookingInfo, places } = useContext(WaterContext);
    // console.log(waterBookingInfo)
    const { bookingDetails } = waterBookingInfo || {};

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);
    // const places = elements.find(place => place.name === waterBookingInfo.activity)
    console.log(places)
    return (
        <>
            <Navforwithout />
            <div className="h-full w-auto" style={{ fontFamily: "Montserrat" }}>
                <div className="ms:bg-[#FF8682]  ms:px-2 ms:h-[450px]">
                    {/* mobile  process navigation bar starts here  */}
                    <div className='w-full max-w-[500px] h-[17px] ms:flex items-center justify-center lg:justify-between mb-10 font-montserrat flex-wrap hidden pt-11'>
                        <p className='font-medium text-sm text-white'>

                            <a href={`${places ? '/Water-Sports' : '/Trekking'}`}>
                                {places ? 'Water-Sports' : 'Trekking'}
                            </a>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                        <p className='font-medium text-sm text-white'>

                            <a href={'/water/tickets'}>
                                {waterBookingInfo?.activity}
                            </a>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>

                        <p className='font-medium text-sm whitespace-nowrap text-white'>
                            Payment
                        </p>

                    </div>

                    <div className="w-[90%] mx-auto ms:mt-0 ms:pt-9 mt-12 mb-8">
                        {/* desktop process navigaton  */}
                        <div className="ms:hidden flex items-center mt-5 gap-2 z-50">

                            <div className='w-full max-w-[500px] h-[17px] flex items-center mb-6 font-montserrat flex-wrap'>
                                <p className='font-medium text-sm text-red-400'>

                                    <a href={places ? '/Water-Sports' : '/Trekking'}>
                                        {places ? 'Water-Sports' : 'Trekking'}
                                    </a>
                                </p>
                                <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                                <p className='font-medium text-sm text-[#FF8682]'>
                                    <a href={'/Water/tickets'}>
                                        {waterBookingInfo?.activity}
                                    </a>
                                </p>
                                <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>

                                <p className='font-medium text-sm whitespace-nowrap text-black'>
                                    Payment
                                </p>

                            </div>
                        </div>
                        <div className=" flex lg:flex-col">
                            <div className="w-full">
                                <div className="mt-10 ms:mt-5 ms:hidden block bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
                                    <div className="flex justify-between font-montserrat mb-[30px]">
                                        <h5 className="text-2xl text-[#112211] font-bold">

                                            {waterBookingInfo?.activity}
                                        </h5>
                                        <h5 className="text-2xl font-bold text-[#112211]">

                                            ₹250/
                                            <sub className='text-gray-400'>per person</sub>
                                        </h5>
                                    </div>
                                    <div className='flex items-start justify-start rounded-lg font-montserrat'>

                                        <div>
                                            <p className='text-md text-black font-medium flex items-center'><ImLocation2 className='text-sm text-[#112211] mr-1'></ImLocation2>{waterBookingInfo?.bookingDetails.location}</p>

                                        </div>
                                    </div>
                                    {/* <div className="flex justify-between md:gap-5 md:flex-col mt-5 items-center">
                                        <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                                            <img
                                                src={flightLogo}
                                                alt="flightLogoMini"
                                                className=""
                                            />
                                            <div className="">
                                                <h2 className="font-semibold text-2xl">Emirates</h2>
                                                <p className="text-[#112211] opacity-[0.6] font-medium">
                                                    {flightDataState.flightName}
                                                    {bookingInfo?.busName}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="my-5">
                                            {" "}
                                            <img src={feature} alt="" />
                                        </div>
                                    </div> */}
                                    {/* <div className="flex justify-between items-center lg:w-[70vw] w-[52vw] mx-auto mt-5">
                                        <div className="">
                                            <div>
                                                <span className="font-bold">
                                                    {flightDataState.departureTime}
                                                    {
                                                        bookingInfo?.departureTime
                                                    }
                                                </span>

                                                <span className="ml-2">
                                                    {currentDestinationFilter}
                                                    {
                                                        bookingInfo?.currentDestination
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span>
                                                {" "}
                                                <img
                                                    src={bus}
                                                    className="w-full h-8"
                                                    alt="shipIcon"
                                                />{" "}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="font-bold">
                                                {flightDataState.arrivalTime}
                                                {bookingInfo?.arrivalTime}
                                            </span>
                                            <span className="ml-2">
                                                {nextDestinationFilter}
                                                {bookingInfo?.nextDestination}
                                            </span>
                                        </div>
                                    </div> */}
                                </div>
                                <div className={`flex flex-row  bg-white rounded-xl  inset-x-0  w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] ${screenWidth > 1 && 'hidden'}`}>
                                    <div className="text-[#112211] flex items-center md:gap-5 gap-16  mx-auto py-auto md:px-8 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
                                        <div className="w-full">
                                            <div className="flex lexs:flex-col justify-between items-center md:gap-5">
                                                <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                                                    {/* <img
                                                        src={flightLogoMini}
                                                        alt="flightLogoMini"
                                                        className=""
                                                    /> */}
                                                    {/* <img src={flightLogo} alt="" /> */}
                                                    <div className="">
                                                        <h2 className="font-semibold text-2xl">Emirates</h2>
                                                        <p className="text-[#112211] opacity-[0.6] font-medium">
                                                            {/* {flightDataState.flightName} */}
                                                            {/* {
                                                                bookingInfo?.busCompanyName
                                                            } */}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-xl whitespace-nowrap text-bluefont-mediumfont-bold">
                                                    {/* ₹ {netTotal}{" "} */}
                                                    {/* ₹{totalPrice} */}
                                                </div>
                                            </div>
                                            {/* <hr className="ms:block hidden my-3" /> */}
                                            <div className="flex justify-between items-center ">
                                                <div className="ms:block hidden text-start">
                                                    <div>
                                                        <span className="text-[3.72vw]">
                                                            {/* {flightData.currentDestination} */}
                                                            {/* {bookingInfo?.currentDestination} */}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="ms:flex hidden ms:mt-3 items-center text-[#FF8682]">
                                                    <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                                                    <span>
                                                        {/* <IoIosAirplane className="w-6 h-6" /> */}
                                                        {/* <img
                                                            // src={shipIconMini}
                                                            src={busicon}
                                                            className="w-full md:h-6 h-12"
                                                            alt="shipIcon"
                                                        /> */}
                                                    </span>
                                                    <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                                                </div>
                                                <div className="ms:block hidden">
                                                    <span className="text-[3.72vw] whitespace-nowrap">
                                                        {/* {flightData.nextDestination} */}
                                                        {/* {bookingInfo.nextDestination} */}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ms:flex justify-between items-center mt-3 hidden">
                                                <div className="font-bold text-[#BDBDC2]">
                                                    {/* {flightData.departureTime} */}
                                                    {/* {bookingInfo.departureTime} */}
                                                </div>
                                                <div className="font-bold">
                                                    {/* {flightData.flightDuration} */}
                                                    {/* {bookingInfo.busDuration} */}
                                                </div>
                                                <div className="font-bold text-[#BDBDC2]">
                                                    {/* {flightData.arrivalTime} */}
                                                    {/* {bookingInfo.arrivalTime} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <img
                                    src={featureShadow}
                                    // src={flightMobile}
                                    alt="Fight-log"
                                    className="ms:block hidden mt-10 w-full"
                                /> */}
                                <div className='font-montserrat ms:hidden'>
                                    <p className="text-xl font-bold text-[#17183B] my-4">
                                        Payment Method
                                    </p>
                                    <div>
                                        <div className="flex justify-between border border-[#17183B] border-opacity-20 rounded-sm p-4">
                                            <div className="flex flex-wrap">
                                                <input type="radio" className="default:ring-2 ..." />
                                                <img src={visa} alt="" className="mx-3" />
                                                <p className="lexs:mr-2 mr-10">.....6754</p>
                                                <p>Expires 06/2021</p>
                                            </div>
                                            <p className='text-[#FF8682] text-opacity-50'>Remove</p>
                                        </div>
                                        <div className="flex justify-between border border-[#17183B] border-opacity-20 rounded-sm p-4">
                                            <div className="flex flex-wrap">
                                                <input type="radio" className="default:ring-2 ..." />
                                                <img
                                                    // src={master} 
                                                    src={visa}
                                                    alt="" className="mx-3" />
                                                <p className="lexs:mr-2 mr-10">.....5643</p>
                                                <p>Expires 11/2025</p>
                                            </div>
                                            <p className='text-[#FF8682] text-opacity-50'>Remove</p>
                                        </div>
                                        <div className="flex items-center my-8">
                                            <MdAdd className="mr-6 text-cyanfont-mediumtext-xl" />
                                            <p>Add Payment method</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[50%] lg:w-full lg:mt-0 mt-10 lg:pl-0 pl-8">
                                {/* <h1 className="text-[26px] text-[#699c78] md:text-2xl  font-semibold">Trip Summary</h1> */}
                                {/* {tripData.length === 0 ? (
                                    <h1>Please select seats to proceed with booking.</h1>
                                ) : (
                                    tripData
                                )} */}
                                <div className="p-4 lg:w-full  bg-white ms:rounded-xl">
                                    {" "}
                                    <div className="flex gap-3 items-center">
                                        {/* <img src={flightLogo} alt="flightLogo" className="w-24 h-24" /> */}
                                        <img className='w-full max-w-[130px] rounded-[10px]' src={waterBookingInfo?.image} alt="" />
                                        <div className='font-montserrat'>
                                            <p className="font-medium text-black/75">
                                                Package
                                            </p>
                                            <p className="font-semibold text-xl text-[#000000]">
                                                {/* {flightDataState.flightName} */}
                                                {/* {bookingInfo.busCompanyName} */}
                                                {waterBookingInfo?.activity}
                                            </p>
                                            <div className='flex items-center justify-center'>
                                                <p className='border border-[#FF8682] rounded p-2 font-montserrat text-xs font-medium mr-2'>4.2</p>
                                                <p className='font-montserrat font-medium text-xs '><span className='font-montserrat font-medium text-xs '>very good</span> 54 reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-5" />
                                    <p>
                                        Your booking is protected by <b>golobe</b>
                                    </p>
                                    <hr className="my-5" />
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold">Booking Details</h1>
                                        <div className="flex justify-between">
                                            <p className="font-medium text-md">Name</p>
                                            <p className="font-semibold text-md">
                                                {/* {user_name} */}
                                                {bookingDetails?.name}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium text-md">Contact</p>
                                            <p className="font-semibold text-md">
                                                {/* {user_people} */}
                                                {bookingDetails?.phone}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium text-md">Location</p>
                                            <p className="font-semibold text-md">
                                                {/* {room} */}
                                                {bookingDetails?.location}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium text-md">No. Of Tickets</p>
                                            <p className="font-semibold text-md">
                                                {/* {staying} */}
                                                {waterBookingInfo?.totalTicket}
                                            </p>
                                        </div>
                                    </div>

                                    <hr className="my-5" />
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold">Price Details</h1>
                                        <div className="flex justify-between">
                                            <p className="font-medium text-md">Base Fare</p>
                                            <p className="font-semibold text-md">₹

                                                {/* {totalFare} */}
                                                {/* {totalPrice} */}

                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium text-md">Discount</p>
                                            <p className="font-semibold text-md">₹


                                                {/* {discount} */}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium text-md">Taxes</p>
                                            <p className="font-semibold text-md">₹
                                                {/* {taxes} */}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium text-md">Service Fee</p>
                                            <p className="font-semibold text-md">₹
                                                {/* {fee} */}
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                        <p className="font-medium text-md">Total</p>
                                        <p className="font-semibold text-md">₹
                                            {/* {totalPrice} */}
                                            {/* {netTotal} */}
                                        </p>
                                    </div>
                                    <button
                                        // onClick={handleSubmit}
                                        // onClick={handleShowAlert}
                                        className="w-full bg-[#FF8682] rounded py-4 mt-3 text-white text-md"
                                    >
                                        Confirm and Pay
                                    </button>
                                </div>
                            </div>
                            <div className='font-montserrat hidden ms:block'>
                                <p className="text-xl font-bold text-[#17183B] my-4">
                                    Payment Method
                                </p>
                                <div>
                                    <div className="flex justify-between border border-[#17183B] border-opacity-20 rounded-sm p-4">
                                        <div className="flex flex-wrap">
                                            <input type="radio" className="default:ring-2 ..." />
                                            <img src={visa} alt="" className="mx-3" />
                                            <p className="lexs:mr-2 mr-10">.....6754</p>
                                            <p>Expires 06/2021</p>
                                        </div>
                                        <p className='text-[#FF8682] text-opacity-50'>Remove</p>
                                    </div>
                                    <div className="flex justify-between border border-[#17183B] border-opacity-20 rounded-sm p-4">
                                        <div className="flex flex-wrap">
                                            <input type="radio" className="default:ring-2 ..." />
                                            <img
                                                // src={master} 
                                                src={visa}
                                                alt="" className="mx-3" />
                                            <p className="lexs:mr-2 mr-10">.....5643</p>
                                            <p>Expires 11/2025</p>
                                        </div>
                                        <p className='text-[#FF8682] text-opacity-50'>Remove</p>
                                    </div>
                                    <div className="flex items-center my-8">
                                        <MdAdd className="mr-6 text-cyanfont-mediumtext-xl" />
                                        <p>Add Payment method</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default WaterSportsPayment;