import React, { useState } from "react";
// import { useState } from 'react';
import ship from "../../Data/Ship-Section/ship";
import allArrow from "../../images/image_source_for_shiptab/arrow_all.png";
import topbottomArrow from "../../images/image_source_for_shiptab/up-and-downarrow.png";

const Locations = ({
  returnDate,
  departDate,
  setDepartDate,
  setReturnDate,
}) => {
  // const [openOrigin, setOpenOrigin] = useState(false);
  // const [openDestination, setOpenDestination] = useState(false);

  // //search feature
  // setSearchOriginTerm(origin)
  // setSearchDestTerm(destination)
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isReverse, setIsReverse] = useState(false);
  const currentDestinationOptions = Array.from(
    new Set(ship.map((airplane) => airplane.currentDestination))
  );
  const nextDestinationOptions = Array.from(
    new Set(ship.map((airplane) => airplane.nextDestination))
  );

  return (
    <>
      <div className=" relative">
        <div className="hidden sxl:flex justify-center items-center place-content-center border border-slate-700 rounded-full w-12 h-12 pl-3 absolute top-16 right-10 z-10 bg-white">
          <img
            className="max-w-none mr-3"
            src={topbottomArrow}
            alt="..."
            onClick={() => setIsReverse((prev) => !prev)}
          />
        </div>
        <div
          className={`${
            isReverse && "transform sxl:translate-y-20"
          } transition-transform duration-300 ease-linear h-auto sxl:w-full w-48  flex flex-col gap-y-3 mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}
        >
          <fieldset
            className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            <legend className="hidden sxl:block">From</legend>
            <img src={allArrow} alt="" height={16} width={16} />
            <span className="whitespace-nowrap">
              {" "}
              <span className="inline sxl:hidden">FROM - </span>
              {departDate && <span className="">{departDate}</span>}
            </span>
          </fieldset>

          {isVisible && (
            <div
              // key={destination}
              className=" bg-white w-56 col-span-1 rounded absolute top-20 left-0 z-10 
              py-3 text-start px-5  space-y-2 border-solid border-2"
              // onClick={() => setNextDestinationFilter(destination)}
            >
              {currentDestinationOptions.map((destination) => (
                <button
                  className="hover:bg-[#FF8682] hover:text-white w-full text-start block cursor-pointer p-1 rounded"
                  onClick={() =>
                    setIsVisible((prev) => !prev, setDepartDate(destination))
                  }
                >
                  {destination}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={`${
          isReverse && "transform sxl:-translate-y-20"
        } transition-transform duration-300 ease-linear h-auto w-full flex flex-col gap-y-3 relative mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}
      >
        <fieldset
          className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
          onClick={() => setIsVisible2((prev) => !prev)}
        >
          <legend className="hidden sxl:block">To</legend>
          <img src={allArrow} alt="" height={16} width={16} />
          <span className="inline sxl:hidden"> TO - </span>{" "}
          {returnDate && <span> {returnDate}</span>}
        </fieldset>

        {isVisible2 && (
          <div
            // key={destination}
            className=" bg-white w-56 col-span-1 rounded absolute top-20 left-0 z-10 
              py-3 px-5  space-y-2 border-solid  border-2"
            // onClick={() => setNextDestinationFilter(destination)}
          >
            {nextDestinationOptions.map((destination) => (
              <button
                className="hover:bg-[#FF8682] hover:text-white w-full text-start block cursor-pointer p-1 rounded"
                onClick={() =>
                  setIsVisible2((prev) => !prev, setReturnDate(destination))
                }
              >
                {destination}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Locations;
