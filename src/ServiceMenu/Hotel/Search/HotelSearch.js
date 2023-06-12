import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import mail from "../../../images/image_source_for_shiptab/mail_arrow.png";
import trailingIcon from "../../../images/trailing-icon.png";

const HotelSearch = ({ searchState, setSearchState }) => {
  const hotel = ["Port Blair", "Havelock", "Neil Island"];

  const handleCheckInDateChange = (date) => {
    setSearchState((prev) => ({
      ...prev,
      checkInDate: date,
      openCheckIn: !prev.openCheckIn,
    }));
  };

  const handleCheckOutDateChange = (date) => {
    setSearchState((prev) => ({
      ...prev,
      checkOutDate: date,
      openCheckOut: !prev.openCheckOut,
    }));
  };

  const handleTravellerInfo = (category, arithmeticOperation) => {
    setSearchState((prev) => ({
      ...prev,
      travellerInfo: {
        ...prev.travellerInfo,
        [category]:
          arithmeticOperation === "i"
            ? prev.travellerInfo[category] + 1
            : prev.travellerInfo[category] - 1,
      },
    }));
  };
  // const navigate = useNavigate();
  const handleSubmit = () => {
    if (
      searchState.checkInDate === null ||
      searchState.checkOutDate === null ||
      searchState.locationFrom === ""
    )
      alert("Please Fill Up All The Input Field");
    else {
      setSearchState((prev) => ({ ...prev, selectedFilter: true }));
      // navigate("/hotel-search-result", { state: { searchState } });
    }
  };
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const disableBeforeTodayDate = (date) => {
    return date < yesterday;
  };

  const disableBeforeDate = (date) => {
    const checkInDate = searchState.checkInDate;
    if (!checkInDate) {
      return disableBeforeTodayDate(date);
    }

    const comparisonDate = new Date(checkInDate);
    comparisonDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison

    return date < comparisonDate || disableBeforeTodayDate(date);
  };

  return (
    <section className="relative z-50 ms:pt-5 ms:mt-5">
      <div className="absolute -top-2 left-[-4vw] right-[-4vw] h-[310px] z-[-1] ms:bg-[#FF8682]" />
      <div
        // onSubmit={handleSubmit}
        className="font-medium text-slate-800 flex h-auto w-full bg-white z-50 sxl:pl-6 pl-2 pr-6 my-4 sxl:py-4 py-8 mx-auto ms:rounded-md rounded-lg flex-row sxl:flex-col shadow-[0px_4px_16px_rgba(17,34,17,0.05)]"
      >
        {/* ------location--------- */}
        <>
          <div className="relative">
            <div
              className={`h-auto sxl:w-full w-56 flex flex-col gap-y-3 mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}
            >
              <fieldset
                className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
                onClick={() =>
                  setSearchState((prev) => ({
                    ...prev,
                    isVisible: !prev.isVisible,
                  }))
                }
              >
                <legend className="hidden sxl:block">Enter Destination</legend>
                <img src={trailingIcon} alt="" height={16} width={16} />
                <span className="whitespace-nowrap">
                  {searchState.locationFrom ? (
                    <span>{searchState.locationFrom}</span>
                  ) : (
                    <span>Enter Destination</span>
                  )}
                </span>
              </fieldset>

              {searchState.isVisible && (
                <div className="bg-white w-56 col-span-1 rounded absolute top-20 left-0 z-10 py-3 text-start px-5 space-y-2 border-solid border-2">
                  {hotel.map((destination) => (
                    <button
                      key={destination}
                      className="hover:bg-[#FF8682] hover:text-white w-full text-start block cursor-pointer p-1 rounded"
                      onClick={() =>
                        setSearchState((prev) => ({
                          ...prev,
                          locationFrom: destination,
                          isVisible: !prev.isVisible,
                        }))
                      }
                    >
                      {destination}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
        <div className="contents ms:flex gap-3 justify-between">
          {/* ------------Check In------------------ */}
          <>
            <div className="relative h-auto w-full  flex flex-col gap-y-3  mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent ms:rounded-lg">
              <fieldset
                onClick={() =>
                  setSearchState((prev) => ({
                    ...prev,
                    openCheckIn: !prev.openCheckIn,
                  }))
                }
                className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
              >
                <legend className="hidden sxl:block">Check In</legend>
                <span className="inline-block ms:hidden">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-black/80 pr-2"
                  />
                  Check In{" "}
                  {searchState.checkInDate && (
                    <small className="lexs:whitespace-normal whitespace-nowrap">
                      - {format(searchState.checkInDate, "PP")}
                    </small>
                  )}
                </span>
                <span className="hidden ms:block text-lg">
                  {searchState.checkInDate ? (
                    <small className="lexs:whitespace-normal  whitespace-nowrap">
                      {format(searchState.checkInDate, "PP")}
                    </small>
                  ) : (
                    <span>{format(new Date(), "PP")}</span>
                  )}
                </span>
              </fieldset>

              {searchState.openCheckIn && (
                <DayPicker
                  mode="single"
                  styles={{ width: "100px" }}
                  disabled={disableBeforeTodayDate}
                  selected={searchState.checkInDate}
                  onDayClick={handleCheckInDateChange}
                  className={`absolute z-50 ms:-left-9 top-16 left-0 bg-white px-2 py-2 rounded shadow`}
                />
              )}
            </div>
          </>
          {/*----------- Check Out------------------ */}
          <>
            <div className="relative h-auto w-full flex flex-col gap-y-3  mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent">
              <fieldset
                onClick={() =>
                  setSearchState((prev) => ({
                    ...prev,
                    openCheckOut: !prev.openCheckOut,
                  }))
                }
                className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
              >
                <legend className="hidden sxl:block">Check Out</legend>
                <span className="inline-block ms:hidden">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-black/80 pr-2"
                  />
                  Check Out{" "}
                  {searchState.checkOutDate && (
                    <small className="lexs:whitespace-normal whitespace-nowrap">
                      - {format(searchState.checkOutDate, "PP")}
                    </small>
                  )}
                </span>
                <span className="hidden ms:block text-lg">
                  {searchState.checkOutDate ? (
                    <small className="lexs:whitespace-normal  whitespace-nowrap">
                      {format(searchState.checkOutDate, "PP")}
                    </small>
                  ) : (
                    <span>{format(new Date(), "PP")}</span>
                  )}
                </span>
              </fieldset>

              {searchState.openCheckOut && (
                <DayPicker
                  mode="single"
                  styles={{ width: "100px" }}
                  selected={searchState.checkOutDate}
                  disabled={disableBeforeDate}
                  onDayClick={handleCheckOutDateChange}
                  className={`absolute z-50 ms:left-[-36%] sxs:left-[-85%] top-16 left-0 bg-white px-2 py-2 rounded shadow`}
                />
              )}
            </div>
          </>
        </div>
        {/* ------Travelller Info-------- */}
        <>
          <div className="relative h-auto w-full mx-auto px-auto flex flex-col gap-y-3 py-2 airbnbml:items-center airbnbml:border-b-transparent">
            <span
              onClick={() =>
                setSearchState((prev) => ({
                  ...prev,
                  openTravellerInfo: !prev.openTravellerInfo,
                }))
              }
              className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
            >
              <FaUser className="mr-2" />
              <span>{searchState.travellerInfo.room} Room,</span>
              {`${
                searchState.travellerInfo.adult +
                searchState.travellerInfo.children +
                searchState.travellerInfo.infant
              }`}{" "}
              Guest(s)
            </span>

            {searchState.openTravellerInfo && (
              <div
                className={`bg-white rounded absolute top-20 left-0 z-10  py-3 mx-auto px-auto space-x-4 border-solid border-2 w-full max-w-[235px]`}
              >
                <div className="flex flex-row justify-between px-6">
                  <div className="flex flex-col gap-y-5">
                    <span className="optionText">Adult</span>
                    <span className="optionText">Children</span>
                    <span className="optionText">Infant</span>
                    <span className="optionText">Room</span>
                  </div>
                  <div className="text-start flex flex-col gap-y-5">
                    <div className="flex justify-between w-20 items-center">
                      <button
                        disabled={searchState.travellerInfo.adult <= 1}
                        onClick={() => handleTravellerInfo("adult", "d")}
                        className="disabled:cursor-not-allowed "
                      >
                        <span className="">
                          <AiOutlineMinus />
                        </span>
                      </button>
                      <span className="optionCounterNumber">
                        {searchState.travellerInfo.adult}
                      </span>
                      <button
                        onClick={() => handleTravellerInfo("adult", "i")}
                        className=" "
                      >
                        <span className="">
                          <AiOutlinePlus />
                        </span>
                      </button>
                    </div>
                    <div className="flex justify-between w-20 items-center">
                      <button
                        disabled={searchState.travellerInfo.children <= 0}
                        onClick={() => handleTravellerInfo("children", "d")}
                        className="disabled:cursor-not-allowed "
                      >
                        <span className="">
                          <AiOutlineMinus />
                        </span>
                      </button>
                      <span className="optionCounterNumber">
                        {searchState.travellerInfo.children}
                      </span>
                      <button
                        onClick={() => handleTravellerInfo("children", "i")}
                        className=" "
                      >
                        <span className="">
                          <AiOutlinePlus />
                        </span>
                      </button>
                    </div>
                    <div className="flex justify-between w-20 items-center">
                      <button
                        disabled={searchState.travellerInfo.infant <= 0}
                        onClick={() => handleTravellerInfo("infant", "d")}
                        className="disabled:cursor-not-allowed "
                      >
                        <span className="">
                          <AiOutlineMinus />
                        </span>
                      </button>
                      <span className="optionCounterNumber">
                        {searchState.travellerInfo.infant}
                      </span>
                      <button
                        onClick={() => handleTravellerInfo("infant", "i")}
                        className=" "
                      >
                        <span className="">
                          <AiOutlinePlus />
                        </span>
                      </button>
                    </div>
                    <div className="flex justify-between w-20 items-center">
                      <button
                        disabled={searchState.travellerInfo.room <= 1}
                        onClick={() => handleTravellerInfo("room", "d")}
                        className="disabled:cursor-not-allowed "
                      >
                        <span className="">
                          <AiOutlineMinus />
                        </span>
                      </button>
                      <span className="optionCounterNumber">
                        {searchState.travellerInfo.room}
                      </span>
                      <button
                        onClick={() => handleTravellerInfo("room", "i")}
                        className=" "
                      >
                        <span className="">
                          <AiOutlinePlus />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>

        {/* ---------Search Button-------- */}
        <>
          <button
            onClick={handleSubmit}
            type="button"
            className="bg-[#FF8682] sxl:flex sxl:items-center sxl:justify-center h-auto  my-2 sxl:py-3 px-2 text-white sxl:rounded-md rounded-r"
          >
            <img src={mail} alt="" className="hidden sxl:block mr-3" />
            Search <span className="ms:inline hidden ml-1"> Hotel</span>
          </button>
        </>
      </div>
    </section>
  );
};

export default HotelSearch;
