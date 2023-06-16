import React, { useContext, useState } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { FaBus, FaStopwatch, FaWifi } from 'react-icons/fa';
import { IoFastFoodSharp } from 'react-icons/io5';
import { MdAdd, MdAirlineSeatReclineExtra, MdKeyboardArrowRight } from 'react-icons/md';
import bus from '../../images/bus.png';
import visa from '../../images/visa.png'
import { AiOutlineLeftCircle, AiOutlinePlus } from 'react-icons/ai'
import banner from '../../images/Rectangle 3.png'
import { BusContext } from '../../../../context/UseBusDataContext';
import Navforwithout from '../../../../Navforwithout';
import Footer from '../../../../Component/Footer/Footer';
import { Link } from 'react-router-dom';
import { TbDotsCircleHorizontal } from 'react-icons/tb';
import { IoIosAirplane } from 'react-icons/io';
import { RiDoorLockFill } from 'react-icons/ri';

import feature from "../../images/flightFeature.png";
import flightLogo from "../../images/flightLogoMini.png"
import busicon from '../../images/Vector.png'
import featureShadow from '../../images/Frame 143.png'

const BusPayment = () => {
    const { bookingInfo } = useContext(BusContext)
    // console.log(bookingInfo)
    const totalPrice = bookingInfo?.updatedPrice?.price;
    console.log(bookingInfo)

    const handleShowAlert = () => {
        alert('Payment recived')
    }
    return (

        // <div style={{ fontFamily: "Montserrat" }}>
        //     <Navforwithout />
        //     <div className="ms:mx-0 ms:mt-0  lg:mx-6   mx-20 mt-10 ms:mb-5 mb-16">
        //         {/* <div className="absolute -top-10 left-[-4vw] right-[-4vw] h-[340px] z-[-1] ms:bg-[#FF8682]" /> */}
        //         <div className="ms:bg-[#FF8682] ms:pt-10 lexs:px-2 ms:px-6 ms:h-[240px]">
        //             <div className="ms:hidden flex items-center mt-5 gap-2 z-50">
        //                 <Link to={"/Flights"} className="text-[#FF8682] ">
        //                     Flight
        //                 </Link>
        //                 <span>
        //                     <MdKeyboardArrowRight />
        //                 </span>
        //                 <span>
        //                     {/* {flightDataState.flightName} */}
        //                 </span>
        //             </div>
        //             <div className="ms:hidden flex lg:flex-col lg:gap-3 justify-between mt-6">
        //                 <div className="">
        //                     <h2 className="text-2xl font-bold">Basic Economy Feature</h2>
        //                     {/* <img src={flightFeature} alt="" /> */}
        //                 </div>
        //                 <div className="">
        //                     <div className="flex items-center gap-5">
        //                         <div className="flex items-center justify-center gap-2">
        //                             {/* <label htmlFor="economy"> */}
        //                             <input
        //                                 type="checkbox"
        //                                 name="economy"
        //                                 id="economy"
        //                                 value={"ECONOMY"}
        //                                 // checked={passengerClass === "ECONOMY"}
        //                                 // onChange={handleInput}
        //                                 className="inline-block h-6 w-6"
        //                             />
        //                             {/* </label> */}

        //                             <label htmlFor="economy" className="font-bold">
        //                                 Economy
        //                             </label>
        //                         </div>
        //                         <div className="flex items-center justify-center gap-2">
        //                             <>
        //                                 <input
        //                                     type="checkbox"
        //                                     name="business"
        //                                     id="business"
        //                                     value={"BUSINESS"}
        //                                     // checked={passengerClass === "BUSINESS"}
        //                                     // onChange={handleInput}
        //                                     className="inline-block h-6 w-6"
        //                                 />
        //                             </>

        //                             <label htmlFor="business" className="font-bold">
        //                                 Business Class
        //                             </label>
        //                         </div>
        //                         <div className="flex items-center justify-center gap-2">
        //                             {/* <label htmlFor="first"> */}
        //                             <input
        //                                 type="checkbox"
        //                                 name="first"
        //                                 id="first"
        //                                 value={"FIRST"}
        //                                 // checked={passengerClass === "FIRST"}
        //                                 // onChange={handleInput}
        //                                 className="inline-block h-6 w-6"
        //                             />
        //                             {/* </label> */}
        //                             <label htmlFor="first" className="font-bold">
        //                                 First Class
        //                             </label>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="ms:mx-2">
        //             <div className="lexs:mt-52 ms:mt-36 mt-10 bg-[rgba(255,134,130,0.6)] rounded-lg p-6">
        //                 <h2 className="text-2xl font-bold">Emirates Airlines Policies</h2>
        //                 <div className="flex lg:flex-col lg:gap-5 gap-20 mt-3">
        //                     <div className="flex items-center gap-1">
        //                         <RiDoorLockFill className="w-8 h-8" />
        //                         <span>
        //                             Pre-flight cleaning, installation of cabin HEPA filters.
        //                         </span>
        //                     </div>
        //                     <div className="flex items-center gap-1">
        //                         <RiDoorLockFill className="w-8 h-8" />
        //                         <span>
        //                             Pre-flight cleaning, installation of cabin HEPA filters.
        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="mt-10 ms:mt-5 ms:hidden block bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
        //                 <div className="flex justify-between">
        //                     <h5 className="text-xl text-[#112211]">
        //                         {/* Return {endingDate[0].endDate.toDateString()} */}
        //                     </h5>
        //                     <h5 className="text-xl text-[#112211]">
        //                         {/* {flightDataState.flightDuration} */}
        //                     </h5>
        //                 </div>
        //                 <div className="flex justify-between md:gap-5 md:flex-col mt-5">
        //                     <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
        //                         {/* <img src={flightLogoMini} alt="flightLogoMini" className="" /> */}
        //                         <div className="">
        //                             <h2 className="font-semibold text-2xl">Emirates</h2>
        //                             <p className="text-[#112211] opacity-[0.6] font-[500]">
        //                                 {/* {flightDataState.flightName} */}
        //                             </p>
        //                         </div>
        //                     </div>
        //                     <div className="">
        //                         {" "}
        //                         {/* <img src={flightFeature} alt="" /> */}
        //                     </div>
        //                 </div>
        //                 <div className="flex justify-between items-center lg:w-[70vw] w-[52vw] mx-auto mt-5">
        //                     <div className="">
        //                         <div>
        //                             <span className="font-bold">
        //                                 {/* {flightDataState.departureTime} */}
        //                             </span>

        //                             <span className="ml-2">
        //                                 {/* {currentDestinationFilter} */}
        //                             </span>
        //                         </div>
        //                     </div>
        //                     <div className="flex gap-2">
        //                         <span>
        //                             {" "}
        //                             {/* <img
        //                                 src={flightIcon}
        //                                 className="w-full h-8"
        //                                 alt="flightIcon"
        //                             />{" "} */}
        //                         </span>
        //                     </div>
        //                     <div>
        //                         <span className="font-bold">
        //                             {/* {flightDataState.arrivalTime} */}
        //                         </span>
        //                         <span className="ml-2">

        //                             {/* {nextDestinationFilter} */}

        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="ms:flex flex-row hidden bg-white rounded-xl absolute top-52 mx-3 inset-x-0  w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
        //                 <div className="text-[#112211] flex items-center md:gap-5 gap-16  mx-auto py-auto md:px-8 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
        //                     <div className="w-full">
        //                         <div className="flex lexs:flex-col justify-between items-center md:gap-5">
        //                             <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
        //                                 {/* <img
        //                                     src={flightLogoMini}
        //                                     alt="flightLogoMini"
        //                                     className=""
        //                                 /> */}
        //                                 <div className="">
        //                                     <h2 className="font-semibold text-2xl">Emirates</h2>
        //                                     <p className="text-[#112211] opacity-[0.6] font-[500]">
        //                                         {/* {flightDataState.flightName} */}
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                             <div className="text-xl whitespace-nowrap text-blue-500 font-bold">
        //                                 {/* ₹ {netTotal}{" "} */}
        //                             </div>
        //                         </div>
        //                         {/* <hr className="ms:block hidden my-3" /> */}
        //                         <div className="flex justify-between items-center ">
        //                             <div className="ms:block hidden text-start">
        //                                 <div>
        //                                     <span className="text-[3.72vw]">
        //                                         {/* {flightData.currentDestination} */}
        //                                     </span>
        //                                 </div>
        //                             </div>
        //                             <div className="ms:flex hidden items-center text-[#FF8682]">
        //                                 <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
        //                                 <span>
        //                                     <IoIosAirplane className="w-6 h-6" />
        //                                 </span>
        //                                 <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
        //                             </div>
        //                             <div className="ms:block hidden">
        //                                 <span className="text-[3.72vw] whitespace-nowrap">
        //                                     {/* {flightData.nextDestination} */}
        //                                 </span>
        //                             </div>
        //                         </div>
        //                         <div className="ms:flex justify-between items-center mt-3 hidden">
        //                             <div className="font-bold text-[#BDBDC2]">
        //                                 {/* {flightData.departureTime} */}
        //                             </div>
        //                             {/* <div className="font-bold">{flightData.flightDuration}</div> */}
        //                             <div className="font-bold text-[#BDBDC2]">
        //                                 {/* {flightData.arrivalTime} */}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="mt-10 bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl flex flex-wrap lg:gap-5 justify-between">
        //                 <div className=" flex justify-start md:w-full md:justify-between items-center gap-3">
        //                     {/* <img src={flightLogo} alt="flightLogo" className="w-24 h-24" /> */}
        //                     <div>
        //                         {/* <p>{passengerClass}</p> */}
        //                         {/* <p>{flightDataState.flightName}</p> */}
        //                     </div>
        //                 </div>
        //                 <div className="lg:flex justify-between md:w-full items-center flex-col">
        //                     <div className="md:w-full w-96 ">
        //                         {" "}
        //                         <div className="flex justify-between">
        //                             <h5 className="text-xl font-[500] text-[#000000]">
        //                                 {/* {endingDate[0].endDate.toDateString()} */}
        //                             </h5>
        //                             <h5 className="text-xl font-[500] text-[#000000]">
        //                                 {/* {flightDataState.flightDuration} */}
        //                             </h5>
        //                         </div>
        //                         <h6 className="text-lg font-[700] text-[#112211]">
        //                             Price Details
        //                         </h6>
        //                         <div className="flex justify-between md:w-full w-96 ">
        //                             <h5 className="text-xl font-[500] text-[#112211]">
        //                                 Base Fare
        //                             </h5>
        //                             <h5 className="text-xl font-[700] text-[#425D97]">
        //                                 {/* ₹ {flightDataState.adultPrice} */}
        //                             </h5>
        //                         </div>
        //                         <Link to={"/ReviewFlight"}>
        //                             <button className=" w-full flex justify-center items-center bg-[#27273F] text-white py-2 rounded mt-5">
        //                                 Confirm Booking
        //                             </button>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <Footer />
        // </div >
        <>
            <Navforwithout />
            <div className="h-full w-auto" style={{ fontFamily: "Montserrat" }}>
                <div className="ms:bg-[#FF8682]  ms:px-2 ms:h-[450px]">
                    {/* mobile  process navigation bar starts here  */}
                    <div className='w-full max-w-[500px] h-[17px] ms:flex items-center justify-center lg:justify-between mb-10 font-montserrat flex-wrap hidden pt-11'>
                        <p className='font-medium text-sm text-white'>
                            {/* <Link to='/Bus'>
                                Bus
                            </Link> */}
                            <a href='/Bus'>
                                Bus
                            </a>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                        <p className='font-medium text-sm text-white'>
                            {/* <Link to={'/Bus'}>
                                {bookingInfo?.busName}
                            </Link> */}
                            <a href={'/Bus'}>
                                {bookingInfo?.busName}
                            </a>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>

                        <p className='font-medium text-sm whitespace-nowrap text-white'>
                            {/* <Link to={`/bus/details/${bookingInfo?.busId}`}>
                                {bookingInfo?.busCompanyName}
                            </Link> */}
                            <a href={`/bus/details/${bookingInfo?.busId}`}>
                                {bookingInfo?.busCompanyName}
                            </a>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                        <p className='font-medium text-sm text-white'>
                            {/* <Link to={'/bus/booking/seats'}>
                                Seats
                            </Link> */}
                            <a href={'/bus/booking/seats'}>
                                Seats
                            </a>
                        </p>
                        <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                        <p className='font-medium text-sm text-[#112211] text-opacity-70 sxs:mr-auto'>Details</p>
                    </div>


                    {/* <div className='font-montserrat ms:flex items-center justify-between hidden pt-11 px-5'>
                        <AiOutlineLeftCircle className='text-2xl'></AiOutlineLeftCircle>
                        <p className='text-lg text-black font-medium'>Bus</p>
                        <TbDotsCircleHorizontal className='text-2xl'></TbDotsCircleHorizontal>
                    </div> */}
                    <div className="w-[90%] mx-auto ms:mt-0 ms:pt-10 mt-12 mb-8">
                        <div className="ms:hidden flex items-center mt-5 gap-2 z-50">

                            <div className='w-full max-w-[500px] h-[17px] flex items-center justify-center lg:justify-between mb-6 font-montserrat flex-wrap'>
                                <p className='font-medium text-sm text-[#FF8682]'>
                                    <Link to='/Bus'>
                                        Bus
                                    </Link></p>
                                <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                                <p className='font-medium text-sm text-[#FF8682]'>
                                    <Link to={'/Bus'}>
                                        {bookingInfo?.busName}
                                    </Link>
                                </p>
                                <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>

                                <p className='font-medium text-sm whitespace-nowrap text-[#FF8682]'>
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
                                <p className='font-medium text-sm text-[#112211] text-opacity-70'>Details</p>
                            </div>
                        </div>
                        <div className=" flex lg:flex-col  ">
                            <div className="w-full">
                                <div className="mt-10 ms:mt-5 ms:hidden block bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
                                    <div className="flex justify-between">
                                        <h5 className="text-xl text-[#112211]">
                                            {/* Return {endingDate[0].endDate.toDateString()} */}
                                            {bookingInfo?.formatedDate}
                                        </h5>
                                        <h5 className="text-xl text-[#112211]">
                                            {/* {flightDataState.flightDuration} */}
                                            {bookingInfo?.busDuration}
                                        </h5>
                                    </div>
                                    <div className="flex justify-between md:gap-5 md:flex-col mt-5">
                                        <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                                            <img
                                                src={flightLogo}
                                                alt="flightLogoMini"
                                                className=""
                                            />
                                            <div className="">
                                                <h2 className="font-semibold text-2xl">Emirates</h2>
                                                <p className="text-[#112211] opacity-[0.6] font-[500]">
                                                    {/* {flightDataState.flightName} */}
                                                    {bookingInfo?.busName}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            {" "}
                                            <img src={feature} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center lg:w-[70vw] w-[52vw] mx-auto mt-5">
                                        <div className="">
                                            <div>
                                                <span className="font-bold">
                                                    {/* {flightDataState.departureTime} */}
                                                    {
                                                        bookingInfo?.departureTime
                                                    }
                                                </span>

                                                <span className="ml-2">
                                                    {/* {currentDestinationFilter} */}
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
                                                {/* {flightDataState.arrivalTime} */}
                                                {bookingInfo?.arrivalTime}
                                            </span>
                                            <span className="ml-2">
                                                {/* {nextDestinationFilter} */}
                                                {bookingInfo?.nextDestination}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ms:flex flex-row hidden bg-white rounded-xl  inset-x-0  w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] ">
                                    <div className="text-[#112211] flex items-center md:gap-5 gap-16  mx-auto py-auto md:px-8 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
                                        <div className="w-full">
                                            <div className="flex lexs:flex-col justify-between items-center md:gap-5">
                                                <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                                                    {/* <img
                                                        src={flightLogoMini}
                                                        alt="flightLogoMini"
                                                        className=""
                                                    /> */}
                                                    <img src={flightLogo} alt="" />
                                                    <div className="">
                                                        <h2 className="font-semibold text-2xl">Emirates</h2>
                                                        <p className="text-[#112211] opacity-[0.6] font-[500]">
                                                            {/* {flightDataState.flightName} */}
                                                            {
                                                                bookingInfo?.busCompanyName
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-xl whitespace-nowrap text-blue-500 font-bold">
                                                    {/* ₹ {netTotal}{" "} */}
                                                    ₹{totalPrice}
                                                </div>
                                            </div>
                                            {/* <hr className="ms:block hidden my-3" /> */}
                                            <div className="flex justify-between items-center ">
                                                <div className="ms:block hidden text-start">
                                                    <div>
                                                        <span className="text-[3.72vw]">
                                                            {/* {flightData.currentDestination} */}
                                                            {bookingInfo?.currentDestination}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="ms:flex hidden ms:mt-3 items-center text-[#FF8682]">
                                                    <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                                                    <span>
                                                        {/* <IoIosAirplane className="w-6 h-6" /> */}
                                                        <img
                                                            // src={shipIconMini}
                                                            src={busicon}
                                                            className="w-full md:h-6 h-12"
                                                            alt="shipIcon"
                                                        />
                                                    </span>
                                                    <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                                                </div>
                                                <div className="ms:block hidden">
                                                    <span className="text-[3.72vw] whitespace-nowrap">
                                                        {/* {flightData.nextDestination} */}
                                                        {bookingInfo.nextDestination}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ms:flex justify-between items-center mt-3 hidden">
                                                <div className="font-bold text-[#BDBDC2]">
                                                    {/* {flightData.departureTime} */}
                                                    {bookingInfo.departureTime}
                                                </div>
                                                <div className="font-bold">
                                                    {/* {flightData.flightDuration} */}
                                                    {bookingInfo.busDuration}
                                                </div>
                                                <div className="font-bold text-[#BDBDC2]">
                                                    {/* {flightData.arrivalTime} */}
                                                    {bookingInfo.arrivalTime}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={featureShadow}
                                    // src={flightMobile}
                                    alt="Fight-log"
                                    className="ms:block hidden mt-10 w-full"
                                />
                                <div>
                                    <p className="text-xl font-thin text-slate-400 italic my-4">
                                        Payment Method
                                    </p>
                                    <div>
                                        <div className="flex justify-between border border-[#17183B] opacity-20 rounded-sm p-4">
                                            <div className="flex flex-wrap">
                                                <input type="radio" className="default:ring-2 ..." />
                                                <img src={visa} alt="" className="mx-3" />
                                                <p className="lexs:mr-2 mr-10">.....6754</p>
                                                <p>Expires 06/2021</p>
                                            </div>
                                            <p>Remove</p>
                                        </div>
                                        <div className="flex justify-between border border-[#17183B] opacity-20 rounded-sm p-4">
                                            <div className="flex flex-wrap">
                                                <input type="radio" className="default:ring-2 ..." />
                                                <img
                                                    // src={master} 
                                                    src={visa}
                                                    alt="" className="mx-3" />
                                                <p className="lexs:mr-2 mr-10">.....5643</p>
                                                <p>Expires 11/2025</p>
                                            </div>
                                            <p>Remove</p>
                                        </div>
                                        <div className="flex items-center my-8">
                                            <MdAdd className="mr-6 text-cyan-500 text-xl" />
                                            <p>Add Payment method</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[50%] lg:w-full lg:mt-0 mt-10 lg:pl-0 pl-8">
                                {/* <h1 className="text-[26px] text-[#699c78] md:text-2xl  font-semibold">
                  Trip Summary
                </h1> */}
                                {/* {tripData.length === 0 ? (
                                    <h1>Please select seats to proceed with booking.</h1>
                                ) : (
                                    tripData
                                )} */}
                                <div className="p-4 lg:w-full  bg-white" >
                                    {" "}
                                    <div className=" flex flex-wrap items-center gap-5 ">
                                        {/* <img src={flightLogo} alt="flightLogo" className="w-24 h-24" /> */}
                                        <img src={bookingInfo.busLogo} alt="" />
                                        <div>
                                            <p className="font-[500] text-black/75">
                                                {/* {passengerClass} */}
                                            </p>
                                            <p className="font-semibold text-lg">
                                                {/* {flightDataState.flightName} */}
                                                {bookingInfo.busCompanyName}
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="my-5" />
                                    <p>
                                        Your booking is protected by <b>golobe</b>
                                    </p>
                                    <hr className="my-5" />
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold">Price Details</h1>
                                        <div className="flex justify-between">
                                            <p className="font-[500] text-md">Base Fare</p>
                                            <p className="font-[600] text-md">₹

                                                {/* {totalFare} */}
                                                {totalPrice}

                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-[500] text-md">Discount</p>
                                            <p className="font-[600] text-md">₹


                                                {/* {discount} */}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-[500] text-md">Taxes</p>
                                            <p className="font-[600] text-md">₹
                                                {/* {taxes} */}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-[500] text-md">Service Fee</p>
                                            <p className="font-[600] text-md">₹
                                                {/* {fee} */}
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                        <p className="font-[500] text-md">Total</p>
                                        <p className="font-[600] text-md">₹
                                            {totalPrice}
                                            {/* {netTotal} */}
                                        </p>
                                    </div>
                                    <button
                                        // onClick={handleSubmit}
                                        onClick={handleShowAlert}
                                        className="w-full bg-[#FF8682] rounded py-4 mt-3 text-white text-md"
                                    >
                                        Confirm and Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[90%] mx-auto font-Nunito_Sans">
            <h1 ref={policiesRef} className="text-3xl font-semibold my-4">
              Read Before you Book
            </h1>
            <div className="flex flex-wrap gap-5 mb-10">
              <div className="flex flex-col w-[30rem]">
                <h1 className="text-lg font-semibold">Confirmation</h1>
                <hr className="border-t border-gray-300 w-[95%]" />
                <p className="mt-2">
                  This is not a confirmed booking. This is an order to confirm the
                  booking and SublimeIsland will confirm the booking on the best
                  effort basis in the next 3-4 hours, maximum being 24 hours.
                </p>
              </div>
  
              <div className="flex flex-col w-[30rem]">
                <h1 className="text-lg font-semibold">Cancellation</h1>
                <hr className="border-t border-gray-300 w-[95%]" />
                <p className="mt-2">
                  48 hours before the departure, INR 250/person/ticket. 24 – 48
                  hours before the departure 50% of the tickets. Within 24 hours,
                  100% of the ticket.
                </p>
              </div>
  
              <div className="flex flex-col w-[30rem]">
                <h1 className="text-lg font-semibold">Reporting Time</h1>
                <hr className="border-t border-gray-300" />
                <p className="mt-2">
                  Please report at the operator’s check-in at Jetty 1 hour before
                  the departure.
                </p>
              </div>
  
              <div className="flex flex-col w-[30rem]">
                <h1 className="text-lg font-semibold">Rescheduling</h1>
                <hr className="border-t border-gray-300 w-[95%]" />
                <p className="mt-2">
                  Rescheduling will be treated as cancellation and rebooking, will
                  be charged as per the cancellation policy.
                </p>
              </div>
  
              <div className="flex flex-col w-[30rem]">
                <h1 className="text-lg font-semibold">Ferry Seat Category</h1>
                <hr className="border-t border-gray-300 w-[95%]" />
                <p className="mt-2">
                  The ferries will usually have 3 seat categories: Economy, Luxury
                  and Royal. While different operators use different terms but the
                  facilities are similar for each category, there still exist some
                  differences between operators.
                </p>
              </div>
  
              <div className="flex flex-col w-[30rem]">
                <h1 className="text-lg font-semibold">Luggage Policy</h1>
                <hr className="border-t border-gray-300 w-[95%]" />
                <p className="mt-2">
                  25 KG/person, mostly not too strict. You’ll be able to carry
                  more than what you can carry in a flight.
                </p>
              </div>
  
              <div className="flex flex-col w-[30rem]">
                <h1 className="text-lg font-semibold">
                  Reschedule/Cancellations by Operator
                </h1>
                <hr className="border-t border-gray-300 w-[95%]" />
                <p className="mt-2">
                  The operator reserves the right to change or cancel based on
                  weather or technical issues. In that case, you’ll be endorsed to
                  a different ferry or given a full refund.
                </p>
              </div>
  
              <div className="flex flex-col w-[30rem]">
                <h1 className="text-lg font-semibold">Ferry Boarding Points</h1>
                <hr className="border-t border-gray-300 w-[95%]" />
                <p className="mt-2">
                  Port Blair: Haddo Jetty, Havelock: Havelock Jetty (only Jetty in
                  Havelock Island), Neil Island: Neil Jetty (only Jetty in Neil
                  Island).
                </p>
              </div>
  
              <div className="flex flex-col w-[30rem]">
                <h1 className="text-lg font-semibold">Infant Policy</h1>
                <hr className="border-t border-gray-300 w-[95%]" />
                <p className="mt-2">
                  A child above 12 months/1 years will be charged a full ticket
                  amount.
                </p>
              </div>
            </div>
          </div> */}
            </div>
            <Footer />
        </>
    );
};

export default BusPayment;