// import React, { useEffect } from "react";
import { IoIosAirplane } from "react-icons/io";
import { MdKeyboardArrowRight, MdLocationPin } from "react-icons/md";
import { RiDoorLockFill } from "react-icons/ri";
import { FaSuitcaseRolling } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navforwithout from "../../Navforwithout";
import { useDataContext } from "../../context/useDataContext";
import flightFeature from "../../images/SVG/flightDetails.svg";
import flightIcon from "../../images/flightIcon.png";
import { format, parse } from "date-fns";
// import flight from "../../Data/Flight-Section/flight";
// import flightLogoMini from "../../images/flightLogoMini.png";
// import flightLogo from "../../images/flightlogo.png";

const FlightPreview = () => {
  const {
    // currentDestinationFilter,
    // nextDestinationFilter,
    // startingDate: date,
    // setFlightDataState,
    // flightDataState,
    // travellerInfo,
    // endingDate,
    passengerClass,
    setPassengerClass,
    coverData,
    setCoverData

  } = useDataContext();
  // console.log(coverData)
  // const { startingDate } = coverData || {};

  // const flightData = flight.find(
  //   (airplane) => airplane.currentDestination === currentDestinationFilter
  // );
  // const totalAdultFare = travellerInfo.adult * flightDataState.adultPrice;
  // const totalInfantFare = travellerInfo.infant * flightDataState.infantPrice;
  // const totalChildrenFare =
  //   travellerInfo.children * flightDataState.childrenPrice;
  // const totalFare = totalAdultFare + totalInfantFare + totalChildrenFare;
  // const discount = 200;
  // const taxes = totalFare * (3 / 100);
  // const fee = 400;
  // const netTotal = totalFare + discount + taxes + fee;
  // useEffect(() => {
  //   setFlightDataState(flightData);
  // }, [flightData, setFlightDataState]);

  const handleInput = (e) => {
    setPassengerClass(e.target.value);
  };

  // const dynamicTicket = [coverData].map((flight, index) => (<div className="mt-10 ms:mt-5 ms:hidden block bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
  //   <div className="flex justify-between">

  //     <h5 className="text-xl text-[#112211]">
  //       Start On {startingDate ? startingDate[0]?.startDate?.toDateString() : ''}</h5>
  //     <h5 className="text-xl text-[#112211]">
  //       {coverData?.flightDuration && coverData?.flightDuration[0]}
  //     </h5>
  //   </div>
  //   <div className="flex justify-between md:gap-5 md:flex-col mt-5">
  //     <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
  //       <img
  //         src={coverData?.flightLogo}

  //         alt="flightLogoMini" className="w-full max-w-[64px] h-11" />
  //       <div className="">
  //         <h2 className="font-semibold text-2xl">{coverData?.flightName}</h2>
  //         <p className="text-[#112211] opacity-[0.6] font-[500]">
  //         </p>
  //       </div>
  //     </div>
  //     <div className="">
  //       {" "}
  //       <img src={flightFeature} alt="" />
  //     </div>
  //   </div>
  //   <div className="flex justify-between items-center lg:w-[70vw] w-[52vw] mx-auto mt-5">
  //     <div className="">
  //       <div>
  //         <span className="font-bold">
  //           {coverData?.departureTime && coverData?.departureTime[0]}
  //         </span>

  //         <span className="ml-2">{coverData?.currentDestination && coverData?.currentDestination[0]}</span>
  //       </div>
  //     </div>
  //     <div className="flex gap-2">
  //       <span>
  //         {" "}
  //         <img
  //           src={flightIcon}
  //           className="w-full h-8"
  //           alt="flightIcon"
  //         />{" "}
  //       </span>
  //     </div>
  //     <div>
  //       <span className="font-bold">{coverData?.arrivalTime && coverData?.arrivalTime?.length > 1 ? coverData?.arrivalTime[1] : coverData?.arrivalTime[0]}</span>
  //       <span className="ml-2">{coverData?.nextDestination && coverData?.nextDestination > 1 ? coverData?.nextDestination[1] : coverData?.nextDestination[0]}</span>
  //     </div>
  //   </div>
  // </div>))


  const currentDestinationLength = coverData?.currentDestination?.length;

  const mappedArr = Array.from({ length: currentDestinationLength }, (_, index) => ({
    ...coverData,
    flightNo: coverData?.flightNo[index],
    travelRoute: (
      index < coverData?.travelRoute?.length - 1
        ? `${coverData?.travelRoute[index]},${coverData?.travelRoute[index + 1]}`
        : coverData?.travelRoute[index]
    ),
    currentDestination: coverData?.currentDestination[index],
    nextDestination: coverData?.nextDestination[index],
    departureTime: coverData?.departureTime[index],
    arrivalTime: coverData?.arrivalTime[index],
    flightDuration: coverData?.flightDuration[index],
    flightLocationFrom: coverData?.flightLocationFrom[index],
    flightLocationTo: coverData?.flightLocationTo[index],
  }));

  // console.log(mappedArr)

  const parsedDate = mappedArr?.map((flight, index) => {
    const parsedDate = parse(flight?.flightDate[index], 'dd-MM-yyyy', new Date())
    const formatedDate = format(parsedDate, 'EEE MMM dd yyyy')
    return formatedDate;
  });
  // console.log(parsedDate)

  const desktopDynamicTicket = mappedArr?.map((flight, index) => {
    const flightParsedDate = parsedDate[index];
    return (
      <>
        <div key={index} className="mt-10 ms:mt-5 ms:hidden block bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
          <div className="flex justify-between">
            <span className="font-bold">{flight?.flightName} | {flight?.flightNo}</span>
            <span className={`${flight?.refund === 'Non Refundable' ? 'bg-red-200 text-red-500' : 'bg-green-200 text-green-600 '} px-7 py-1 rounded font-semibold`}>
              <span className="ml-2">{flight?.refund}</span>
            </span>
          </div>

          <div className="flex justify-between">
            <h5 className="text-xl text-[#112211]">
              Start On:{flightParsedDate}
            </h5>
            <h5 className="text-xl text-[#112211]">Duration:
              {' '}{flight?.flightDuration}
            </h5>
          </div>
          <div className="flex justify-between md:gap-5 md:flex-col mt-5">
            <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
              <img
                src={flight?.flightLogo}
                alt="flightLogoMini" className="w-full max-w-[64px] h-11" />
              <div className="">
                <h2 className="font-semibold text-2xl">{flight?.flightName}</h2>
                <p className="text-[#112211] opacity-[0.6] font-[500]">
                </p>
              </div>
            </div>
            <div>
              {" "}
              <img src={flightFeature} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center lg:w-[70vw] w-[52vw] mx-auto my-4">
            {flight?.travelRoute?.split(',')?.map((route, index) => (
              <>
                <span className="font-bold" key={index}>
                  {route}
                </span>
                {index < flight?.travelRoute?.split(',')?.length - 1 && <p className="">{flight?.flightInterval}</p>}
              </>
              // console.log(flight.travelRoute)
            ))}
          </div>
          <div className="flex justify-between items-center lg:w-[70vw] w-[52vw] mx-auto my-4">
            <div>
              <span className="font-bold">
                {flight?.departureTime}
              </span>
              <span className="ml-2">{flight?.currentDestination}</span>
              {/* <span className="ml-2">{flight?.travelRoute}</span> */}
            </div>
            <div className="flex gap-2">
              <span>
                {" "}
                <img
                  src={flightIcon}
                  className="w-full h-8"
                  alt="flightIcon"
                />{" "}
              </span>
            </div>
            <div>
              <span className="font-bold">{flight?.arrivalTime}</span>
              <span className="ml-2">{flight?.nextDestination}</span>
              {/* <span className="ml-2">{flight?.travelRoute}</span> */}
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{flight?.flightLocationFrom}</span>
            <span className="font-semibold">{flight?.flightLocationTo}</span>
          </div>

          <div className="flex justify-between">
            <span className="flex items-center justify-center text-sm font-bold">Baggage -<GiSchoolBag className="text-lg mx-2" />{flight?.baggage?.handBag} Cabin<FaSuitcaseRolling className="text-lg mx-2" />{flight?.baggage?.checkIn} Check-In</span>
            <span className="font-bold text-sm">Meals: {flight?.meals}</span>
          </div>
        </div>

        {/* <div>
        <p className='text-center'>{flight?.flightIntervalTime} Layover in Kolkata</p>
      </div> */}

      </>
    )
  })

  const mobileDynamicTicket = mappedArr?.map((flight, index) => (
    <div key={index}
      className={`ms:flex flex-row hidden bg-white rounded-xl mx-3 inset-x-0 w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] mb-5`}>
      <div className="text-[#112211] flex items-center md:gap-5 gap-16 mx-auto py-auto md:px-8 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
        <div className="w-full">
          <div className="flex lexs:flex-col justify-between items-center md:gap-5">
            <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
              <img
                src={flight?.flightLogo}
                alt="flightLogoMinix"
                className="w-full max-w-[64px] h-16"
              />
              <div className="">
                <h2 className="font-semibold text-2xl">{flight?.flightName}</h2>
                <p className="text-[#112211] opacity-[0.6] font-[500]">
                  {flight?.flightName}
                </p>
              </div>
            </div>
            <div className="text-xl whitespace-nowrap text-blue-500 font-bold">
              {/* ₹ {netTotal}{" "} */}
            </div>
          </div>
          {/* <hr className="ms:block hidden my-3" /> */}
          <div className="flex justify-between items-center ">
            <div className="ms:block hidden text-start">
              <div>
                <span className="text-[3.72vw]">
                  {flight?.currentDestination}
                </span>
              </div>
            </div>
            <div className="ms:flex hidden items-center text-[#FF8682]">
              <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
              <span>
                <IoIosAirplane className="w-6 h-6" />
              </span>
              <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
            </div>
            <div className="ms:block hidden">
              <span className="text-[3.72vw] whitespace-nowrap">
                {flight?.nextDestination}
              </span>
            </div>
          </div>
          <div className="ms:flex justify-between items-center mt-3 hidden">
            <div className="font-bold text-[#BDBDC2]">
              {flight?.departureTime}
            </div>
            <div className="font-bold">
              {/* {flight?.flightDuration?.length > 1 ? flight.flightIntervalTime : flight.flightDuration && flight?.flightDuration[0]} */}

              {flight?.flightDuration}
            </div>
            <div className="font-bold text-[#BDBDC2]">
              {flight?.arrivalTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))

  // const tests = mappedArr.map((flight) => flight.travelRoute)
  // console.log(mappedArr.map((flight) => flight.travelRoute))
  const handleConfirmBooking = () => {
    setCoverData({ ...coverData, mappedArr, parsedDate })
  }

  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Navforwithout />
      <div className="ms:mx-0 ms:mt-0 lg:mx-6 mx-20 mt-10 ms:mb-5 mb-16">
        {/* <div className="absolute -top-10 left-[-4vw] right-[-4vw] h-[340px] z-[-1] ms:bg-[#FF8682]" /> */}
        <div className="ms:bg-[#FF8682] ms:pt-10 lexs:px-2 ms:px-6 ms:h-[240px]">
          <div className=" flex items-center mt-5 gap-2 z-50">
            <a href="Flights" className="ms:text-slate-100 text-[#FF8682] ">
              Flight
            </a>
            <span>
              <MdKeyboardArrowRight />
            </span>
            {/* <span>{flightDataState.flightName}</span> */}
            <span>{coverData?.flightName}</span>
          </div>
          <div className="text-2xl font-bold ms:pb-1 pb-4">
            {/* <span>{flightDataState.flightName}</span> */}
            <span>{coverData?.flightName}</span>
          </div>
          <div className="flex gap-1 items-center z-50">
            <span>
              <MdLocationPin />
            </span>
            {/* <span className="sxs:text-xs">
              {flightDataState.flightLocation}
            </span> */}
            <span className="sxs:text-xs">
              {coverData?.flightLocationFrom && coverData?.flightLocationFrom[0]}
            </span>
          </div>
          <div className="ms:hidden flex lg:flex-col lg:gap-3 justify-between mt-6">
            <div className="">
              <h2 className="text-2xl font-bold">{passengerClass} Luxuries</h2>
              <img src={flightFeature} alt="" />
            </div>
            <div className="">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center gap-2">
                  {/* <label htmlFor="economy"> */}
                  <input
                    type="checkbox"
                    name="economy"
                    id="economy"
                    value={"ECONOMY"}
                    checked={passengerClass === "ECONOMY"}
                    onChange={handleInput}
                    className="inline-block h-6 w-6"
                  />
                  {/* </label> */}

                  <label htmlFor="economy" className="font-bold">
                    Economy
                  </label>
                </div>
                {/* <div className="flex items-center justify-center gap-2">
                  <>
                    <input
                      type="checkbox"
                      name="business"
                      id="business"
                      value={"BUSINESS"}
                      checked={passengerClass === "BUSINESS"}
                      onChange={handleInput}
                      className="inline-block h-6 w-6"
                    />
                  </>

                  <label htmlFor="business" className="font-bold">
                    Business Class
                  </label>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <label htmlFor="first">
                    <input
                      type="checkbox"
                      name="first"
                      id="first"
                      value={"FIRST"}
                      checked={passengerClass === "FIRST"}
                      onChange={handleInput}
                      className="inline-block h-6 w-6"
                    />
                  </label>
                  <label htmlFor="first" className="font-bold">
                    First Class
                  </label>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="ms:mx-2 ms:-mt-20">
          {/* mobile device flight ticket start here  */}
          {
            mobileDynamicTicket
          }
          {/* mobile device flight ticket finish here  */}
          <div className="lexs:mt-52 ms:mt-36 mt-10 bg-[rgba(255,134,130,0.6)] rounded-lg p-6">
            {/* <h2 className="text-2xl font-bold">Emirates Airlines Policies</h2> */}
            <h2 className="text-2xl font-bold">{coverData?.flightName} Airlines Policies</h2>
            <div className="flex lg:flex-col lg:gap-5 gap-20 mt-3">
              <div className="flex items-center gap-1">
                <RiDoorLockFill className="w-8 h-8" />
                <span>
                  Pre-flight cleaning, installation of cabin HEPA filters.
                </span>
              </div>
              <div className="flex items-center gap-1">
                <RiDoorLockFill className="w-8 h-8" />
                <span>
                  Pre-flight cleaning, installation of cabin HEPA filters.
                </span>
              </div>
            </div>
          </div>

          {/* desktop ticket details start here*/}

          {/* <div className="mt-10 ms:mt-5 ms:hidden block bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
            <div className="flex justify-between">
              <h5 className="text-xl text-[#112211]">
                Return {endingDate[0].endDate.toDateString()}
              </h5>
              <h5 className="text-xl text-[#112211]">
                Start On {startingDate ? startingDate[0]?.startDate?.toDateString() : ''}</h5>
              <h5 className="text-xl text-[#112211]">
                {flightDataState.flightDuration}
                {coverData?.flightDuration && coverData?.flightDuration[0]}
              </h5>
            </div>
            <div className="flex justify-between md:gap-5 md:flex-col mt-5">
              <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                <img
                  src={flightLogoMini}
                  src={coverData?.flightLogo}

                  alt="flightLogoMini" className="w-full max-w-[64px] h-11" />
                <div className="">
                  <h2 className="font-semibold text-2xl">{coverData?.flightName}</h2>
                  <p className="text-[#112211] opacity-[0.6] font-[500]">
                    {flightDataState.flightName}
                  </p>
                </div>
              </div>
              <div className="">
                {" "}
                <img src={flightFeature} alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center lg:w-[70vw] w-[52vw] mx-auto mt-5">
              <div className="">
                <div>
                  <span className="font-bold">
                    {flightDataState.departureTime}
                    {coverData?.departureTime && coverData?.departureTime[0]}
                  </span>

                  <span className="ml-2">{currentDestinationFilter}</span>
                  <span className="ml-2">{coverData?.currentDestination && coverData?.currentDestination[0]}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <span>
                  {" "}
                  <img
                    src={flightIcon}
                    className="w-full h-8"
                    alt="flightIcon"
                  />{" "}
                </span>
              </div>
              <div>
                <span className="font-bold">{flightDataState.arrivalTime}</span>
                <span className="font-bold">{coverData?.arrivalTime && coverData?.arrivalTime?.length > 1 ? coverData?.arrivalTime[1] : coverData?.arrivalTime[0]}</span>
                <span className="ml-2">{nextDestinationFilter}</span>
                <span className="ml-2">{coverData?.nextDestination && coverData?.nextDestination > 1 ? coverData?.nextDestination[1] : coverData?.nextDestination[0]}</span>
              </div>
            </div>
          </div> */}
          {
            desktopDynamicTicket
          }
          {/* desktop ticket details finish here  */}
          {/* mobile ticket details start here  */}

          {/* {
            mobileDynamicTicket
          } */}
          {/* <div className="ms:flex flex-row hidden bg-white rounded-xl absolute top-[12rem] mx-3 inset-x-0  w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
            <div className="text-[#112211] flex items-center md:gap-5 gap-16  mx-auto py-auto md:px-8 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
              <div className="w-full">
                <div className="flex lexs:flex-col justify-between items-center md:gap-5">
                  <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                    <img
                      src={flightLogoMini}
                      src={coverData?.flightLogo}
                      alt="flightLogoMinix"
                      className="w-full max-w-[64px] h-16"
                    />
                    <div className="">
                      <h2 className="font-semibold text-2xl">{coverData?.flightName}</h2>
                      <p className="text-[#112211] opacity-[0.6] font-[500]">
                        {flightDataState.flightName}
                        {coverData?.flightName}
                      </p>
                    </div>
                  </div>
                  <div className="text-xl whitespace-nowrap text-blue-500 font-bold">
                    ₹ {netTotal}{" "}
                  </div>
                </div>
                <hr className="ms:block hidden my-3" />
                <div className="flex justify-between items-center ">
                  <div className="ms:block hidden text-start">
                    <div>
                      <span className="text-[3.72vw]">
                        {flightData.currentDestination}
                        {coverData?.currentDestination && coverData?.currentDestination[0]}
                      </span>
                    </div>
                  </div>
                  <div className="ms:flex hidden items-center text-[#FF8682]">
                    <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                    <span>
                      <IoIosAirplane className="w-6 h-6" />
                    </span>
                    <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                  </div>
                  <div className="ms:block hidden">
                    <span className="text-[3.72vw] whitespace-nowrap">
                      {flightData.nextDestination}
                      {coverData?.nextDestination && coverData?.nextDestination[1]}
                    </span>
                  </div>
                </div>
                <div className="ms:flex justify-between items-center mt-3 hidden">
                  <div className="font-bold text-[#BDBDC2]">
                    {flightData.departureTime}
                    {coverData?.departureTime && coverData?.departureTime[0]}
                  </div>
                  <div className="font-bold">
                    {flightData.flightDuration}
                    {coverData?.flightDuration?.length > 1 ? coverData.flightIntervalTime : coverData.flightDuration && coverData?.flightDuration[0]}
                  </div>
                  <div className="font-bold text-[#BDBDC2]">
                    {flightData.arrivalTime}
                    {coverData.arrivalTime && coverData.arrivalTime[1]}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* mobile ticket details finis here  */}
          <div className="mt-10 bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl flex flex-wrap lg:gap-5 justify-between">
            <div className=" flex justify-start md:w-full md:justify-between items-center gap-3">
              <img
                // src={flightLogo} 
                src={coverData?.flightLogo}
                alt="flightLogo" className="w-24 h-24" />
              <div>
                <p>{passengerClass}</p>
                {/* <p>{flightDataState.flightName}</p> */}
                <p>{coverData?.flightName}</p>
              </div>
            </div>
            <div className="lg:flex justify-between md:w-full items-center flex-col">
              <div className="md:w-full w-96 ">
                {" "}
                <div className="flex justify-between">
                  <h5 className="text-xl font-[500] text-[#000000]">
                    {/* {endingDate[0].endDate.toDateString()} */}
                  </h5>
                  {/* <h5 className="text-xl font-[500] text-[#000000]">
                    {flightDataState.flightDuration}
                  </h5> */}
                  <h5 className="text-xl font-[500] text-[#000000]">
                    {coverData.flightDuration && coverData.flightDuration[0]}
                  </h5>
                </div>
                <h6 className="text-lg font-[700] text-[#112211]">
                  Price Details
                </h6>
                <div className="flex justify-between md:w-full w-96">
                  <h5 className="text-xl font-[500] text-[#112211]">
                    Base Fare
                  </h5>
                  <h5 className="text-xl font-[700] text-[#425D97]">
                    {/* ₹ {flightDataState.adultPrice} */}
                    ₹ {coverData?.adultPrice}
                  </h5>
                </div>
                <Link to={"/ReviewFlight"}
                >
                  <button
                    onClick={handleConfirmBooking}
                    className=" w-full flex justify-center items-center bg-[#27273F] text-white py-2 rounded mt-5">
                    Confirm Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlightPreview;
