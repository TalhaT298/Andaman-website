import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import trailingIcon from "../../../images/trailing-icon.png";

const HotelSearch = () => {
  const [search, setSearch] = useState(null);
  const [clickFrom, setClickFrom] = useState(true);
  const [locationFrom, setLocationFrom] = useState("");

  const [clickTo, setClickTo] = useState(false);
  //   const [locationTo, setLocationTo] = useState("");

  const [selected, setSelected] = useState(new Date());
  const [clickDate, setClickDate] = useState(false);

  const [travellers, setTravellers] = useState(1);
  const [clickTraveller, setClickTraveller] = useState(false);

  // const [economy, setEconomy] = useState(null);
  // const [business, setBusiness] = useState(null);
  // const [first, setFirst] = useState(null);
  const [busClass, setBusClass] = useState("Economy");
  const [isVisible, setIsVisible] = useState(false);
  const [isReverse, setIsReverse] = useState(false);
  const [openCheckIn, setOpenCheckIn] = useState(false);
  const [startingDate, setStartingDate] = useState(null);
  const [openCheckOut, setOpenCheckOut] = useState(false);
  const [checkOut, setCheckOutDate] = useState(null);

  const hotel = ["Mumbai", "Delhi", "Havlock Island"];
  const handleDateChange = (date) => {
    setStartingDate(date);
    setOpenCheckIn((prev) => !prev);
  };
  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
    setOpenCheckOut((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="">
        <form
          onClick={handleSubmit}
          className="font-medium text-slate-800 flex h-auto w-full bg-white z-50 px-4 my-4 py-4 mx-auto ms:rounded-md flex-row sxl:flex-col shadow-[0px_4px_16px_rgba(17,34,17,0.05)]"
        >
          {/* ------location--------- */}
          <>
            <div className=" relative">
              <div
                className={`${
                  isReverse && "transform sxl:translate-y-20"
                } transition-transform duration-300 ease-linear h-auto sxl:w-full w-48  flex flex-col gap-y-3 mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}
              >
                <fieldset
                  className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
                  onClick={() => setIsVisible((prev) => !prev)}
                >
                  <legend className="hidden sxl:block">
                    Enter Destination
                  </legend>
                  <img src={trailingIcon} alt="" height={16} width={16} />
                  <span className="whitespace-nowrap">
                    {" "}
                    {locationFrom ? (
                      <span>{locationFrom}</span>
                    ) : (
                      <span>Enter Destination</span>
                    )}
                  </span>
                </fieldset>

                {isVisible && (
                  <div
                    // key={destination}
                    className=" bg-white w-56 col-span-1 rounded absolute top-20 left-0 z-10 
              py-3 text-start px-5  space-y-2 border-solid border-2"
                    // onClick={() => setNextDestinationFilter(destination)}
                  >
                    {hotel.map((destination) => (
                      <button
                        className="hover:bg-[#FF8682] hover:text-white w-full text-start block cursor-pointer p-1 rounded"
                        onClick={() => setLocationFrom(destination)}
                      >
                        {destination}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
          {/* Check In */}
          <>
            <div className="relative h-auto w-full flex flex-col gap-y-3  mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent">
              <span
                onClick={() => setOpenCheckIn((prev) => !prev)}
                className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
              >
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-black/80 mr-2"
                />
                Check In{" "}
                {startingDate && (
                  <small className="lexs:whitespace-normal whitespace-nowrap">
                    - {format(startingDate, "PP")}
                  </small>
                )}
              </span>

              {openCheckIn && (
                <DayPicker
                  mode="single"
                  styles={{ width: "100px" }}
                  selected={startingDate}
                  onDayClick={(date) => handleDateChange(date)}
                  className={`absolute z-50 ms:-left-9 top-16 left-0 bg-white px-2 py-2 rounded shadow`}
                />
              )}
            </div>
          </>
          {/* Check In */}
          <>
            <div className="relative h-auto w-full flex flex-col gap-y-3  mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent">
              <span
                onClick={() => setOpenCheckIn((prev) => !prev)}
                className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
              >
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-black/80 mr-2"
                />
                Check Out{" "}
                {startingDate && (
                  <small className="lexs:whitespace-normal whitespace-nowrap">
                    - {format(startingDate, "PP")}
                  </small>
                )}
              </span>

              {openCheckIn && (
                <DayPicker
                  mode="single"
                  styles={{ width: "100px" }}
                  selected={startingDate}
                  onDayClick={(date) => handleCheckOutDateChange(date)}
                  className={`absolute z-50 ms:-left-9 top-16 left-0 bg-white px-2 py-2 rounded shadow`}
                />
              )}
            </div>
          </>
        </form>
      </div>
    </>
  );
};

export default HotelSearch;
