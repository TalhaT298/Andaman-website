import React, { useState,lazy } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";
const Locations = lazy(() => import("./Locations"));
const DepartDate = lazy(() => import("./DepartDate"));
const ReturnDate = lazy(() => import("./ReturnDate"));
const Options = lazy(() => import("./Options"));

const ShipBookingSearch = (props) => {
  const [twoWay, setTwoWay] = useState(false);

  //origin and destination
  const [origin, setOrigin] = useState("Port Blair");
  const [destination, setDestination] = useState("Havelock");
  //depart date
  const [departDate, setDepartDate] = useState("")
  //return date
  const [returnDate, setReturnDate] = useState("")

  //traveller details
  const [travellerDetails, setTravellerDetails] = useState({})

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/selectFerry', 
      { 
        state : {origin, destination, departDate, returnDate, travellerDetails} 
      }
    )
  };  
  
  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col h-full max-w-[80%] mx-auto my-6">
      <div className="flex gap-6 mx-auto">
        <span
          onClick={() => {
            setTwoWay(false);
          }}
          className="font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none"
        >
          One Way
        </span>
        <span
          onClick={() => {
            setTwoWay(true);
          }}
          className="font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none"
        >
          Two Way
        </span>
        {/* <span className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'>
          Multi-City
        </span> */}        
      </div>
      <div>
        <form onSubmit={submit}>
          <div className="font-medium text-slate-800 flex h-auto w-full my-4 mx-auto flex-row airbnbml:flex-col ml:w-auto airbnbml:w-96  xs:w-64">
            <Locations
              setOrigin={setOrigin}
              setDestination={setDestination}
            />
            <DepartDate setDepartDate={setDepartDate} />
            {twoWay && <ReturnDate setReturnDate={setReturnDate} />}

            <Options setTravellerDetails={setTravellerDetails} />

            <div className="bg-gradient-to-br to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600 hover:text-white h-auto w-full flex flex-col gap-y-3 border-solid border-2 border-slate-300 mx-auto px-2 px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-center text-white text-xl font-medium font-Nunito_Sans mx-auto my-auto w-full h-auto"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShipBookingSearch;
