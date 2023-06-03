import React, { lazy, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDataContext } from "../../context/useDataContext";
import mail from "../../images/image_source_for_shiptab/mail_arrow.png";
import "./FlightSearch.css";
import ReturnDate from "./ReturnDate";
const Locations = lazy(() => import("./Locations"));
const DepartDate = lazy(() => import("./DepartDate"));
const Options = lazy(() => import("./Options"));

const FlightSearch = (props) => {
  // const [origin, setOrigin] = useState("Port Blair");
  // const [destination, setDestination] = useState("Chennai");
  const { twoWay, setTwoWay, setStartingDate, setFlightSearch } =
    useDataContext();
  const [departDate, setDepartDate] = useState("Chennai");
  const [returnDate, setReturnDate] = useState("Port Blair");
  const [startingDateState, setStartingDateState] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setCurrentDestinationFilter(departDate);
    props.setNextDestinationFilter(returnDate);
    setStartingDateState(startingDateState);
  };

  return (
    <div className="flex flex-col h-full w-full lg:py-0 relative py-6 z-50">
      <div className="absolute -top-10 left-[-4vw] right-[-4vw] h-[340px] z-[-1] ms:bg-[#FF8682]" />
      <div className="flex gap-6 mx-auto">
        <span
          onClick={() => {
            setTwoWay(false);
          }}
          className={`${
            !twoWay && "ms:text-slate-800 text-slate-800 font-[500] bg-white"
          } font-lg text-slate-400 ms:text-slate-100 font-mono border-2 ms:rounded-3xl px-4 py-2 hover:bg-white  hover:text-slate-800 cursor-pointer`}
        >
          One Way
        </span>
        <span
          onClick={() => {
            setTwoWay(true);
          }}
          className={`${
            twoWay && "text-slate-800 ms:text-slate-800 font-[500] bg-white"
          } font-lg text-slate-400 ms:text-slate-100 font-mono border-2 ms:rounded-3xl px-4 py-2 hover:bg-white  hover:text-slate-800 cursor-pointer`}
        >
          Two Way
        </span>
        {/* <span className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'>
          Multi-City
        </span> */}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="font-medium text-slate-800 flex h-auto w-full bg-white z-50 px-4 my-4 py-4 mx-auto ms:rounded-md flex-row sxl:flex-col shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
            <Locations
              {...props}
              setDepartDate={setDepartDate}
              departDate={departDate}
              setReturnDate={setReturnDate}
              returnDate={returnDate}
            />
            <DepartDate />
            {twoWay && <ReturnDate />}
            <Options />
            <button
              onClick={() => setFlightSearch(true)}
              type="submit"
              className="bg-[#FF8682] sxl:flex sxl:items-center sxl:justify-center h-auto  my-2 sxl:py-3 px-2 text-white sxl:rounded-md rounded-r"
            >
              <img src={mail} alt="" className="hidden sxl:block mr-3" />
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightSearch;
