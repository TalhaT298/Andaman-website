import React from "react";
import { MdKeyboardArrowRight, MdLocationPin } from "react-icons/md";
import { RiDoorLockFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import flight from "../../Data/Flight-Section/flight";
import Navforwithout from "../../Navforwithout";
import { useDataContext } from "../../context/useDataContext";
import flightFeature from "../../images/flightFeature.png";
import flightIcon from "../../images/flightIcon.png";
import flightLogoMini from "../../images/flightLogoMini.png";
import flightLogo from "../../images/flightlogo.png";
import Footer from "../../Component/Footer/Footer";

const FlightPreview = () => {
  const {
    currentDestinationFilter,
    nextDestinationFilter,
    endingDate,
    passengerClass,
    setPassengerClass,
    setFlightDataState,
    flightDataState,
  } = useDataContext();

  const flightData = flight.find(
    (airplane) => airplane.currentDestination === currentDestinationFilter
  );
  setFlightDataState(flightData);
  const handleInput = (e) => {
    setPassengerClass(e.target.value);
  };
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Navforwithout />
      <div className="mx-20 mt-10 mb-16">
        <div className="flex items-center gap-2 ">
          <span className="text-[#FF8682] ">Flight</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span>{flightDataState.flightName}</span>
        </div>
        <div>
          <span className="text-2xl font-bold my-4">
            {flightDataState.flightName}
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <span>
            <MdLocationPin />
          </span>
          <span>{flightDataState.flightLocation}</span>
        </div>
        <div className="flex justify-between mt-6">
          <div className="">
            <h2 className="text-2xl font-bold">Basic Economy Feature</h2>
            <img src={flightFeature} alt="" />
          </div>
          <div className="">
            <div className="flex items-center gap-5">
              <div class="flex items-center justify-center gap-2">
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
              <div class="flex items-center justify-center gap-2">
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
              <div class="flex items-center justify-center gap-2">
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
        <div className="mt-10 bg-[rgba(255,134,130,0.6)] rounded-lg p-6">
          <h2 className="text-2xl font-bold">Emirates Airlines Policies</h2>
          <div className="flex gap-20 mt-3">
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
        <div className="mt-12 bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
          <div className="flex justify-between">
            <h5 className="text-xl text-[#112211]">
              Return {endingDate[0].endDate.toDateString()}
            </h5>
            <h5 className="text-xl text-[#112211]">
              {flightDataState.flightDuration}
            </h5>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex items-center w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
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
          <div className="flex justify-between items-center w-[45vw] mx-auto mt-5">
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
        <div className="mt-12 bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl flex justify-between">
          <div className=" flex items-center gap-3">
            <img src={flightLogo} alt="flightLogo" className="w-24 h-24" />
            <div>
              <p>{passengerClass}</p>
              <p>{flightDataState.flightName}</p>
            </div>
          </div>
          <div className="">
            {" "}
            <div className="flex justify-between w-96 ">
              <h5 className="text-xl font-[500] text-[#000000]">
                {endingDate[0].endDate.toDateString()}
              </h5>
              <h5 className="text-xl font-[500] text-[#000000]">
                {flightDataState.flightDuration}
              </h5>
            </div>
            <h6 className="text-lg font-[700] text-[#112211]">Price Details</h6>
            <div className="flex justify-between w-96 ">
              <h5 className="text-xl font-[500] text-[#112211]">Base Fare</h5>
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
      <Footer />
    </div>
  );
};

export default FlightPreview;
