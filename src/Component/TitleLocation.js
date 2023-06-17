import React from "react";
import { ImLocation2 } from "react-icons/im";
import { IoIosStar } from "react-icons/io";

const TitleLocation = ({ singleData }) => {
  return (
    <>
      {" "}
      {/* -----------------Title & Price--------------- */}
      <div className="flex justify-between items-center">
        <div className="flex md:flex-col md:items-start items-center">
          <h1 className="text-2xl lexs:text-sm sm:text-xl font-bold">
            {singleData?.title || singleData?.name}{" "}
          </h1>
          <span className="md:ml-0 ml-4 flex items-center">
            {[...Array(5)].map((_, i) => (
              <IoIosStar
                key={i}
                className="inline  fill-[#FF8682] ms:fill-white"
              />
            ))}
            <span className="text-xs font-semibold ml-1">5 Star Hotel</span>
          </span>
        </div>
        <div className="text-[#27273F] sm:hidden sm:text-xl text-[32px] font-[900]">
          ₹{singleData?.price || 5000}
          <sub className="text-md">/night</sub>
        </div>
      </div>
      {/*----------------- Location------------------- */}
      <div className="flex items-center gap-1">
        <ImLocation2 />
        <p className="ms:text-sm text-justify">
          {singleData?.location || "Port Blair , Andaman Island"}
        </p>
      </div>
      {/* ---------------Sub Review------------ */}
      <div className="flex justify-between items-center">
        <div className="">
          <div className="flex items-center gap-1">
            <div className="px-2 ms:border-none ms:font-medium rounded-md border">
              {singleData?.rating || 5}
            </div>
            <p className="text-sm ms:font-medium">
              <span className="font-bold ms:font-medium">Very Good</span> 371
              reviews
            </p>
          </div>
        </div>
        <div>{/* <BookButton Click={handleClick}>Book Now</BookButton> */}</div>
      </div>
    </>
  );
};

export default TitleLocation;
