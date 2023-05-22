import { useState } from "react";
import flight from "../../Data/Flight-Section/flight";
import arrow from "../../images/arrow.png";
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
    
      <div className="relative h-auto w-full flex flex-col gap-y-3  mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent">
        <div
          className="flex items-center space-x-2 cursor-pointer border p-2 bottom-1"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          <img src={arrow} alt="" height={16} width={16} />
          <span className=""> FROM {departDate && <span>- {departDate}</span> }</span>
        </div>
        {isVisible && (
          <div
            // key={destination}
            className=" bg-white w-56 col-span-1 rounded absolute top-20 right-0 z-10 
              py-3 text-start px-5  space-y-2 border-solid border-2"
            // onClick={() => setNextDestinationFilter(destination)}
          >
            {currentDestinationOptions.map((destination) => (
              <div
                className="hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
                onClick={() =>
                  setIsVisible(
                    (prev) => !prev,
                    setDepartDate(destination)
                  )
                }
              >
                {destination}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="relative h-auto w-full flex flex-col gap-y-3  mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent">
        <div
          className="flex items-center space-x-2 cursor-pointer border p-2 bottom-1"
          onClick={() => setIsVisible2((prev) => !prev)}
        >
          <img src={arrow} alt="" height={16} width={16} />
          <span className=""> TO {returnDate && <span>- {returnDate}</span> }</span>
        </div>

        {isVisible2 && (
          <div
            // key={destination}
            className=" bg-white w-56 col-span-1 rounded absolute top-20 right-0 z-10 
              py-3 px-5  space-y-2 border-solid border-2"
            // onClick={() => setNextDestinationFilter(destination)}
          >
            {nextDestinationOptions.map((destination) => (
              <div
                className="hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
                onClick={() =>
                  setIsVisible2(
                    (prev) => !prev,
                    setReturnDate(destination)
                  )
                }
              >
                {destination}
              </div>
            ))}
          </div>
          
        )}
      </div>
    </>
  );
};

export default Locations;
