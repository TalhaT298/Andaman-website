import { format } from "date-fns";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import BookButton from "../../../Component/BookButton";
import { datas } from "../../../Data/Hotel-Section/HotelsData/hotelsData";
import pglogo from "../../../images/pglogo.png";
const HotelSearchResult = ({ searchState }) => {
  //   const location = useLocation();
  //   const { state } = location;
  //   const { searchState } = state;
  const { checkInDate, checkOutDate, locationFrom } = searchState;
  const filteredData = datas.filter((data) =>
    data.location.toLowerCase().includes(locationFrom.toLowerCase())
  );

  return (
    <div className="min-h-[50vh] h-full">
      {filteredData?.map((item) => (
        <div key={item?.id}>
          <Link to={"/FlightPreview"} className=" flex-col  mx-auto my-auto ">
            {/* flight ? <div>{JSON.stringify(flight)}</div> : <div>Loading...</div> */}
            <div className="flex-row bg-white rounded-xl w-auto  h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] transition:origin-center hover:ease-in-out hover:scale-105 transition:duration-1000 transition-transform">
              <div className="text-[#112211] flex items-center gap-5  mx-auto py-auto md:px-8  text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
                <div className="ms:hidden">
                  <img
                    src={item.imgSrc[0]}
                    alt="flight-logo"
                    className="max-w-[334px] w-full rounded-l-md h-[318px] object-cover"
                  />{" "}
                  {/* <h4 className="text-lg font-semibold">Emirates</h4>{" "}
                  <p className="text-[#112211] text-sm">{item.title}</p> */}
                </div>
                <div className="w-full py-[30px] pr-8">
                  <div className="flex justify-between">
                    <div className="self-start">
                      {/* -----------------Title & Price--------------- */}
                      <div className="flex justify-between items-center">
                        <div className="flex md:flex-col md:items-start items-center">
                          <h1 className="text-2xl sm:text-xl font-bold">
                            {item?.title}{" "}
                          </h1>
                        </div>
                      </div>
                      {/*----------------- Location------------------- */}
                      <div className="flex items-center gap-1">
                        <ImLocation2 />
                        <p className="ms:text-sm text-justify">
                          {item?.location}
                        </p>
                      </div>
                      <div className="flex items-center my-2">
                        {[...Array(5)].map((_, i) => (
                          <IoIosStar
                            key={i}
                            className="inline  fill-[#FF8682] ms:fill-white"
                          />
                        ))}
                        <span className="text-xs font-semibold ml-1">
                          5 Star Hotel
                        </span>
                      </div>
                      {/* ---------------Sub Review------------ */}
                      <div className="flex justify-between items-center">
                        <div className="">
                          <div className="flex items-center gap-1">
                            <div className="px-2 ms:border-none ms:font-medium rounded-md border">
                              {item?.Rating}
                            </div>
                            <p className="text-sm ms:font-medium">
                              <span className="font-bold ms:font-medium">
                                Very Good
                              </span>{" "}
                              {item?.Reviews}
                            </p>
                          </div>
                        </div>
                        <div>
                          {/* <BookButton Click={handleClick}>Book Now</BookButton> */}
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-start">starting from</p>
                      <div className="text-[#FF8682] sm:hidden sm:text-xl text-[24px] font-[700]">
                        ₹ {item?.price}
                        <sub className="text-md">/night</sub>
                      </div>
                      <p className="text-end">excl. tax</p>
                    </div>
                  </div>
                  {/* check in and check out */}
                  <div className="flex justify-between items-center  w-full  mx-auto mt-5">
                    <div className="">
                      <div>
                        <p className="font-semibold text-xl ms:text-[#BDBDC2] ms:text-lg ms:translate-y-8 transition-transform duration-200">
                          {" "}
                          {format(new Date(checkInDate), "EEE, MMM d")}
                        </p>

                        <p className="font-[500] ms:text-md text-start transform ms:-translate-y-4 transition-transform duration-200">
                          Check-In
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        {" "}
                        <img
                          src={pglogo}
                          className="block ms:hidden w-full h-8"
                          alt="flightIcon"
                        />{" "}
                      </span>
                      <div className="ms:flex items-center hidden">
                        <span className="border border-[#cccccc] border-dashed w-[12vw]"></span>
                        <span>
                          <img
                            src={"pgHomeIcon"}
                            className=" w-full h-8"
                            alt="flightIcon"
                          />
                        </span>
                        <span className="border border-[#cccccc] border-dashed w-[12vw]"></span>
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <p className="font-semibold text-xl ms:text-[#BDBDC2] ms:text-lg ms:translate-y-8 transition-transform duration-200">
                          {format(checkOutDate, "EEE, MMM d")}
                        </p>

                        <p className="font-[500] ms:text-md text-end ms:-translate-y-4 transition-transform duration-200">
                          Check-Out
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={"/hotel-search-details"}
                    state={{ id: item?.id, searchState }}
                    className="flex justify-end mt-6"
                  >
                    <BookButton>Book Now</BookButton>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default HotelSearchResult;
