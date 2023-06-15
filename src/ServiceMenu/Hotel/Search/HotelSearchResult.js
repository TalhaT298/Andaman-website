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
          <div
            // to={"/hotel-search-details"}
            // state={{ hotelId: item?.id, searchState }}
            className=" flex-col  mx-auto my-auto "
          >
            {/* Large Device min width -480px */}
            {/* flight ? <div>{JSON.stringify(flight)}</div> : <div>Loading...</div> */}
            <div className="sxs:hidden flex-row bg-white rounded-xl w-auto  h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] transition:origin-center hover:ease-in-out hover:scale-105 transition:duration-1000 transition-transform">
              <div className="text-[#112211] flex md:flex-wrap items-center md:gap-0 gap-5  mx-auto py-auto   text-center  w-full xs:flex-col ">
                <div className="md:w-full">
                  <img
                    src={item.imgSrc[0]}
                    alt="flight-logo"
                    className="md:max-w-full md:rounded-md max-w-[334px] w-full rounded-l-md h-[318px] object-cover"
                  />{" "}
                  {/* <h4 className="text-lg font-semibold">Emirates</h4>{" "}
                  <p className="text-[#112211] text-sm">{item.title}</p> */}
                </div>
                <div className="w-full lg:py-3 py-[30px] lg:pl-4 lg:pr-4 pr-8">
                  <div className="flex  gap-3 justify-between">
                    <div className="self-start">
                      {/* -----------------Title & Price--------------- */}
                      <h1 className="text-2xl md:text-xl font-bold text-start">
                        {item?.title}{" "}
                      </h1>

                      {/*----------------- Location------------------- */}
                      <div className="flex items-center gap-1">
                        <ImLocation2 />
                        <p className="md:text-sm text-justify">
                          {item?.location}
                        </p>
                      </div>
                      <div className="flex sm:items-start items-center my-2">
                        {[...Array(5)].map((_, i) => (
                          <IoIosStar
                            key={i}
                            className="inline  fill-[#FF8682]"
                          />
                        ))}
                        <span className="text-xs font-semibold ml-1">
                          5 Star Hotel
                        </span>
                      </div>
                      {/* ---------------Sub Review------------ */}
                      <div className="flex justify-between items-center">
                        <div className="">
                          <div className="flex ms:flex-wrap ms:items-start items-center gap-1">
                            <div className="px-2 whitespace-nowrap ms:border-none ms:font-medium rounded-md border">
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
                      <div className="text-[#FF8682] md:text-xl text-[24px] font-[700] whitespace-nowrap">
                        ₹ {item?.price}
                        <sub className="text-md">/night</sub>
                      </div>
                      <p className="text-end">excl. tax</p>
                    </div>
                  </div>
                  {/* check in and check out */}
                  <div className="flex justify-between items-center  w-full  mx-auto ms:mt-2 mt-5">
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
                          className="block  w-full h-8"
                          alt="flightIcon"
                        />{" "}
                      </span>
                      {/* <div className="ms:flex items-center hidden">
                        <span className="border border-[#cccccc] border-dashed w-[12vw]"></span>
                        <span>
                          <img
                            src={"pgHomeIcon"}
                            className=" w-full h-8"
                            alt="flightIcon"
                          />
                        </span>
                        <span className="border border-[#cccccc] border-dashed w-[12vw]"></span>
                      </div> */}
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
                    state={{ hotelId: item?.id, searchState }}
                    className="flex justify-end mt-6 xsx:hidden"
                  >
                    <BookButton>Book Now</BookButton>
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile Device max with -480 */}
          </div>
          <Link
            to={"/hotel-search-details"}
            state={{ hotelId: item?.id, searchState }}
            className="sxs:block hidden bg-white px-4 py-5 rounded-xl"
          >
            <div className="flex justify-between w-full">
              <div className="">
                <h1 className="text-[2.857vw] font-semibold text-start">
                  {item?.title}{" "}
                </h1>
              </div>
              <div className="text-[2.857vw] font-bold whitespace-nowrap">
                ₹ {item?.price}
              </div>
            </div>
            <div className="flex w-full gap-6 justify-between items-center mt-3">
              <img
                src={item?.imgSrc[0]}
                alt="hotel"
                className="max-w-[32.857vw] h-[100px] w-full object-cover rounded-xl"
              />

              <div className="">
                <h5 className="text-[#112211] text-[2.857vw] font-bold">
                  {item?.title}
                </h5>
                <h2 className="text-[#000000] text-[3.429vw] mt-1 font-bold">
                  {item?.location}
                </h2>
                <div className="flex items-center gap-1 mt-[6px]">
                  <div className="p-[6.5px] whitespace-nowrap text-[6px] rounded-md border border-[#FF8682]">
                    {item?.Rating}
                  </div>
                  <p className="text-[7px]">
                    <span className="">Very Good</span> {item?.Reviews}
                  </p>
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
