import React, { useEffect } from "react";
import { IoIosAirplane } from "react-icons/io";
import { MdKeyboardArrowRight, MdLocationPin } from "react-icons/md";
import { RiDoorLockFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import flight from "../../Data/Flight-Section/flight";
import Navforwithout from "../../Navforwithout";
import { useDataContext } from "../../context/useDataContext";
import flightFeature from "../../images/SVG/flightDetails.svg";
import flightIcon from "../../images/flightIcon.png";
import flightLogoMini from "../../images/flightLogoMini.png";
import flightLogo from "../../images/flightlogo.png";

const FlightPreview = () => {
  const {
    currentDestinationFilter,
    nextDestinationFilter,
    endingDate,
    passengerClass,
    setPassengerClass,
    setFlightDataState,
    flightDataState,
    travellerInfo,
    startingDate: date,
  } = useDataContext();

  const flightData = flight.find(
    (airplane) => airplane.currentDestination === currentDestinationFilter
  );
  const totalAdultFare = travellerInfo.adult * flightDataState.adultPrice;
  const totalInfantFare = travellerInfo.infant * flightDataState.infantPrice;
  const totalChildrenFare =
    travellerInfo.children * flightDataState.childrenPrice;
  const totalFare = totalAdultFare + totalInfantFare + totalChildrenFare;
  const discount = 200;
  const taxes = totalFare * (3 / 100);
  const fee = 400;
  const netTotal = totalFare + discount + taxes + fee;
  useEffect(() => {
    setFlightDataState(flightData);
  }, [flightData, setFlightDataState]);

  const handleInput = (e) => {
    setPassengerClass(e.target.value);
  };
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Navforwithout />
      <div className="ms:mx-0 ms:mt-0  lg:mx-6   mx-20 mt-10 ms:mb-5 mb-16">
        {/* <div className="absolute -top-10 left-[-4vw] right-[-4vw] h-[340px] z-[-1] ms:bg-[#FF8682]" /> */}
        <div className="ms:bg-[#FF8682] ms:pt-10 lexs:px-2 ms:px-6 ms:h-[240px]">
          <div className=" flex items-center mt-5 gap-2 z-50">
            <a href="Flights" className="ms:text-slate-100 text-[#FF8682] ">
              Flight
            </a>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <span>{flightDataState.flightName}</span>
          </div>
          <div className="text-2xl font-bold ms:pb-1 pb-4">
            <span>{flightDataState.flightName}</span>
          </div>
          <div className="flex gap-1 items-center z-50">
            <span>
              <MdLocationPin />
            </span>
            <span className="sxs:text-xs">
              {flightDataState.flightLocation}
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
                <div className="flex items-center justify-center gap-2">
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
                  {/* <label htmlFor="first"> */}
                  <input
                    type="checkbox"
                    name="first"
                    id="first"
                    value={"FIRST"}
                    checked={passengerClass === "FIRST"}
                    onChange={handleInput}
                    className="inline-block h-6 w-6"
                  />
                  {/* </label> */}
                  <label htmlFor="first" className="font-bold">
                    First Class
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ms:mx-2">
          <div className="lexs:mt-52 ms:mt-36 mt-10 bg-[rgba(255,134,130,0.6)] rounded-lg p-6">
            <h2 className="text-2xl font-bold">Emirates Airlines Policies</h2>
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
          <div className="mt-10 ms:mt-5 ms:hidden block bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
            <div className="flex justify-between">
              <h5 className="text-xl text-[#112211]">
                Return {endingDate[0].endDate.toDateString()}
              </h5>
              <h5 className="text-xl text-[#112211]">
                {flightDataState.flightDuration}
              </h5>
            </div>
            <div className="flex justify-between md:gap-5 md:flex-col mt-5">
              <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                <img src={flightLogoMini} alt="flightLogoMini" className="" />
                <div className="">
                  <h2 className="font-semibold text-2xl">Emirates</h2>
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
                  </span>

                  <span className="ml-2">{currentDestinationFilter}</span>
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
                <span className="ml-2">{nextDestinationFilter}</span>
              </div>
            </div>
          </div>
          <div className="ms:flex flex-row hidden bg-white rounded-xl absolute top-[12rem] mx-3 inset-x-0  w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
            <div className="text-[#112211] flex items-center md:gap-5 gap-16  mx-auto py-auto md:px-8 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
              <div className="w-full">
                <div className="flex lexs:flex-col justify-between items-center md:gap-5">
                  <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                    <img
                      src={flightLogoMini}
                      alt="flightLogoMini"
                      className=""
                    />
                    <div className="">
                      <h2 className="font-semibold text-2xl">Emirates</h2>
                      <p className="text-[#112211] opacity-[0.6] font-[500]">
                        {flightDataState.flightName}
                      </p>
                    </div>
                  </div>
                  <div className="text-xl whitespace-nowrap text-blue-500 font-bold">
                    ₹ {netTotal}{" "}
                  </div>
                </div>
                {/* <hr className="ms:block hidden my-3" /> */}
                <div className="flex justify-between items-center ">
                  <div className="ms:block hidden text-start">
                    <div>
                      <span className="text-[3.72vw]">
                        {flightData.currentDestination}
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
                    </span>
                  </div>
                </div>
                <div className="ms:flex justify-between items-center mt-3 hidden">
                  <div className="font-bold text-[#BDBDC2]">
                    {flightData.departureTime}
                  </div>
                  <div className="font-bold">{flightData.flightDuration}</div>
                  <div className="font-bold text-[#BDBDC2]">
                    {flightData.arrivalTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl flex flex-wrap lg:gap-5 justify-between">
            <div className=" flex justify-start md:w-full md:justify-between items-center gap-3">
              <img src={flightLogo} alt="flightLogo" className="w-24 h-24" />
              <div>
                <p>{passengerClass}</p>
                <p>{flightDataState.flightName}</p>
              </div>
            </div>
            <div className="lg:flex justify-between md:w-full items-center flex-col">
              <div className="md:w-full w-96 ">
                {" "}
                <div className="flex justify-between">
                  <h5 className="text-xl font-[500] text-[#000000]">
                    {endingDate[0].endDate.toDateString()}
                  </h5>
                  <h5 className="text-xl font-[500] text-[#000000]">
                    {flightDataState.flightDuration}
                  </h5>
                </div>
                <h6 className="text-lg font-[700] text-[#112211]">
                  Price Details
                </h6>
                <div className="flex justify-between md:w-full w-96 ">
                  <h5 className="text-xl font-[500] text-[#112211]">
                    Base Fare
                  </h5>
                  <h5 className="text-xl font-[700] text-[#425D97]">
                    ₹ {flightDataState.adultPrice}
                  </h5>
                </div>
                <Link to={"/ReviewFlight"}>
                  <button className=" w-full flex justify-center items-center bg-[#27273F] text-white py-2 rounded mt-5">
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
