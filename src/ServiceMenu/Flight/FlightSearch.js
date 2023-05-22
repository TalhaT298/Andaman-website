import React, { lazy, useState } from "react";
import './FlightSearch.css';
import ReturnDate from './ReturnDate';

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDataContext } from "../../context/useDataContext";
const Locations = lazy(() => import("./Locations"));
const DepartDate = lazy(() => import("./DepartDate"));
const Options = lazy(() => import("./Options"));

// This below code is for fetching data from local storage for json file
// function searchFlights(origin, destination, departureDate) {
//   // Use the file:// protocol to read the local JSON file
//   return fetch('file:///path/to/flights.json')
//     .then(response => response.json())
//     .then(data => {
//       // Filter the flights by the specified origin, destination, and departure date
//       const filteredFlights = data.flights.filter(flight => {
//         return flight.origin === origin && flight.destination === destination && flight.departure_date === departureDate;
//       });

//       return filteredFlights;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// This below code is for fetching data from local storage for javascript file
// import fs from 'fs';
// function searchFlights(origin, destination, departureDate) {
//   // Use the file:// protocol and the fs module to read the local JavaScript file
//   return new Promise((resolve, reject) => {
//     fs.readFile('file:///path/to/flights.js', 'utf8', (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         // Parse the data from the file as JSON
//         const flights = JSON.parse(data);

//         // Filter the flights by the specified origin, destination, and departure date
//         const filteredFlights = flights.filter(flight => {
//           return flight.origin === origin && flight.destination === destination && flight.departure_date === departureDate;
//         });

//         resolve(filteredFlights);
//       }
//     });
//   });
// }

const FlightSearch = (props) => {
  // const [origin, setOrigin] = useState("Port Blair");
  // const [destination, setDestination] = useState("Chennai");
  const {twoWay, setTwoWay,setStartingDate} = useDataContext();
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [startingDateState, setStartingDateState] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setCurrentDestinationFilter(departDate)
    props.setNextDestinationFilter(returnDate)
    setStartingDate(startingDateState)
    
  };


  return (
    <div className="flex flex-col h-full w-full lg:my-0 my-6">
      <div className="flex gap-6 mx-auto">
        <span
          onClick={() => {
            setTwoWay(false);
          }}
          className="font-lg text-slate-400 font-mono border-2 px-4 py-2 hover:bg-white  hover:text-slate-800 cursor-pointer"
        >
          One Way
        </span>
        <span
          onClick={() => {
            setTwoWay(true);
          }}
          className="font-lg text-slate-400 border-2  font-monopx-4 px-4 py-2 hover:bg-white  hover:text-slate-800 cursor-pointer"
        >
          Two Way
        </span>
        {/* <span className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'>
          Multi-City
        </span> */}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="font-medium text-slate-800 flex h-auto w-full bg-white px-4 my-4 py-4 mx-auto flex-row airbnbml:flex-col ml:w-auto airbnbml:w-96  xs:w-64 shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
            <Locations
              {...props} setDepartDate={setDepartDate} departDate={departDate} setReturnDate={setReturnDate} returnDate={returnDate}
            />
            <DepartDate startingDateState={startingDateState} setStartingDateState={setStartingDateState}/>
            {twoWay && <ReturnDate />}
            <Options />
            <button type="submit" className="bg-[#FF8682]  h-auto  my-2  px-5 text-white rounded-r">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightSearch;
