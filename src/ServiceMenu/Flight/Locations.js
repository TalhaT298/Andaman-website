import { useEffect, useState } from "react";
// import flight from "../../Data/Flight-Section/flight";
import flight from "../../Data/Flight-Section/real";
// import arrow from "../../images/arrow.png";
import topbottomArrow from "../../images/image_source_for_shiptab/up-and-downarrow.png";
import { BsArrowRightSquareFill } from "react-icons/bs";

const Locations = (props) => {
  const { returnDate, departDate, setDepartDate, setReturnDate } = props;
  // const [openOrigin, setOpenOrigin] = useState(false);
  // const [openDestination, setOpenDestination] = useState(false);

  // //search feature
  // setSearchOriginTerm(origin)
  // setSearchDestTerm(destination)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isReverse, setIsReverse] = useState(false);
  // const currentDestinationOptions = Array.from(
  //   new Set(flight.map((airplane) => airplane.currentDestination))
  // );
  const uniqueCurrentDestinations = flight?.map((airplane, index) => airplane.currentDestination).flat();
  const currentDestinationOptions = Array.from(new Set(uniqueCurrentDestinations))

  const uniqueNextDestinations = flight?.map((airplane, index) => airplane.nextDestination).flat();
  const nextDestinationOptions = Array.from(new Set(uniqueNextDestinations))

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);


  return (
    <>
      <div className="relative">
        {/* <div className="hidden sxl:flex justify-center items-center place-content-center border border-slate-700 rounded-full w-12 h-12 pl-3 absolute top-16 right-10 z-10 bg-white">
          <img
            className="max-w-none mr-3"
            src={topbottomArrow}
            alt="change location pictures"
            onClick={() => setIsReverse((prev) => !prev)}
          />
        </div> */}
        {/* my changes */}
        <div className={`flex justify-center items-center place-content-center border border-slate-700 rounded-full w-12 h-12 pl-3 absolute z-10 bg-white ${screenWidth < 1141 ? 'top-16 right-10' : 'left-52 top-2'}`}>
          <img
            className={`${screenWidth > 1141 && "rotate-90"} max-w-none mr-3 cursor-pointer`}
            src={topbottomArrow}
            alt="change location pictures"
            onClick={() => setIsReverse((prev) => !prev, setDepartDate(returnDate), setReturnDate(departDate))}
          />
        </div>
        <div
          className={`${isReverse && "transform sxl:translate-y-20"
            } transition-transform duration-300 ease-linear h-auto sxl:w-full w-60 flex flex-col gap-y-3 mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}
        >
          {/* my changes  */}
          {/* <div
          className={`${isReverse && screenWidth > 1141 && "transform translate-x-[286.5px]"} ${isReverse && screenWidth < 1141 && "transform sxl:translate-y-20"} transition-transform duration-300 ease-linear h-auto w-full flex flex-col gap-y-3 mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}
        > */}
          <fieldset
            className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            <legend className="hidden sxl:block">From</legend>
            <BsArrowRightSquareFill className="text-xl text-red-400" />
            {/* <img src={arrow} alt="" height={16} width={16} /> */}
            <span className="whitespace-nowrap">
              {" "}
              {/* <span className="inline sxl:hidden">FROM - </span>
              {departDate && <span className="">{departDate}</span>}
            </span> */}
              {/* my changes */}
              <span className="inline sxl:hidden">FROM - </span>
              {departDate && <span className="">{departDate}</span>}
            </span>
          </fieldset>

          {isVisible && (
            <div
              // key={destination}
              className=" bg-white w-56 col-span-1 rounded absolute top-20 left-0 z-10 
              py-3 text-start px-5 space-y-2 border-solid border-2"
            // onClick={() => setNextDestinationFilter(destination)}
            >
              {currentDestinationOptions?.map((destination) => (
                <button
                  key={destination}
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
      <div className={`${isReverse && "transform sxl:-translate-y-20"
        } transition-transform duration-300 ease-linear h-auto w-full flex flex-col gap-y-3 mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}>
        {/* <div
        className={`${isReverse && screenWidth > 1141 && "transform -translate-x-[187.3px]"} ${isReverse && screenWidth < 1141 && "transform sxl:-translate-y-20"} transition-transform duration-300 ease-linear h-auto w-full flex flex-col gap-y-3 relative mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}
      > */}
        <fieldset
          className="flex items-center space-x-3 cursor-pointer border w-full p-2 bottom-1"
          onClick={() => setIsVisible2((prev) => !prev)}
        >
          <legend className="hidden sxl:block">To</legend>
          {/* <img src={arrow} alt="" height={16} width={16} /> */}
          <BsArrowRightSquareFill className="text-red-400 text-xl" />
          {/* <span className="inline sxl:hidden"> TO - </span>{" "}
          {returnDate && <span> {returnDate}</span>} */}
          <span className="inline sxl:hidden"> TO - </span>{" "}
          {returnDate && <span> {returnDate}</span>}
        </fieldset>

        {isVisible2 && (
          <div
            // key={destination}
            className=" bg-white w-56 col-span-1 rounded absolute top-20 left-0 z-10 
              py-3 px-5 space-y-2 border-solid border-2"
          // onClick={() => setNextDestinationFilter(destination)}
          >
            {nextDestinationOptions?.map((destination) => (
              <button
                key={destination}
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
      </div >
    </>
  );
};

export default Locations;
