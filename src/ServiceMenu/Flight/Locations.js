import { useState } from "react";
import flight from "../../Data/Flight-Section/flight";
import arrow from "../../images/arrow.png";
import topbottomArrow from '../../images/image_source_for_shiptab/up-and-downarrow.png'
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
  const currentDestinationOptions = Array.from(
    new Set(flight.map((airplane) => airplane.currentDestination))
  );
  const nextDestinationOptions = Array.from(
    new Set(flight.map((airplane) => airplane.nextDestination))
  );

  return (
    <>
      <div className="relative h-auto w-full flex flex-col gap-y-3  mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent">

          <fieldset
            className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
            onClick={() => setIsVisible((prev) => !prev)}
          >
          <legend className="hidden lg:block">From</legend>
            <img src={arrow} alt="" height={16} width={16} />
            <span className="">
              {" "}
              <span className="inline lg:hidden">FROM - </span>
               {departDate && <span>{departDate}</span>}
            </span>
          </fieldset>
          <div className='hidden lg:flex justify-center items-center place-content-center border border-slate-700 rounded-full w-12 h-12 pl-3 absolute top-16 right-10 z-10 bg-white'>
      <img class="max-w-none mr-3" src={topbottomArrow} alt="..." />
    </div>
        {isVisible && (
          <div
            // key={destination}
            className=" bg-white w-56 col-span-1 rounded absolute top-20 right-0 z-10 
              py-3 text-start px-5  space-y-2 border-solid border-2"
            // onClick={() => setNextDestinationFilter(destination)}
          >
            {currentDestinationOptions.map((destination) => (
              <button
                className="hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
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
      <div className="relative h-auto w-full flex flex-col gap-y-3  mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent">
      <fieldset
            className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
            onClick={() => setIsVisible2((prev) => !prev)}
          >
          <legend className="hidden lg:block">To</legend>
          <img src={arrow} alt="" height={16} width={16} />
          <span className="inline lg:hidden">
            {" "}
            TO - </span> {returnDate && <span> {returnDate}</span>}
        </fieldset>

        {isVisible2 && (
          <div
            // key={destination}
            className=" bg-white col-span-1 rounded absolute top-20 right-0 z-10 
              py-3 px-5  space-y-2 border-solid w-full border-2"
            // onClick={() => setNextDestinationFilter(destination)}
          >
            {nextDestinationOptions.map((destination) => (
              <button
                className="hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
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
