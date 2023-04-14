import React from 'react';
// import { useState } from 'react';
import flight from '../../Data/Flight-Section/flight'
const Locations = ( {currentDestinationFilter, nextDestinationFilter, setCurrentDestinationFilter, setNextDestinationFilter} ) => {

  // const [openOrigin, setOpenOrigin] = useState(false);
  // const [openDestination, setOpenDestination] = useState(false);

  // //search feature
  // setSearchOriginTerm(origin)
  // setSearchDestTerm(destination)

  const currentDestinationOptions = Array.from(
    new Set(flight.map((airplane) => airplane.currentDestination))
  );
  const nextDestinationOptions = Array.from(
    new Set(flight.map((airplane) => airplane.nextDestination))
  );
  console.log(currentDestinationOptions)
  console.log(nextDestinationOptions)

  return (
    <>
      <div className='bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
        <span className='text-slate-600 text-sm font-normal'>FROM</span>
        <select
            id="currentDestinationFilter"
            value={currentDestinationFilter}
            onChange={(e) => setCurrentDestinationFilter(e.target.value)}
          >
            <option value="">All</option>
            {currentDestinationOptions.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
      </div>
      <div className='bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
        <span className='text-slate-600 text-sm font-normal'>TO</span>
        <select
            id="nextDestinationFilter"
            value={nextDestinationFilter}
            onChange={(e) => setNextDestinationFilter(e.target.value)}
          >
            <option value="">All</option>
            {nextDestinationOptions.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
      </div>
    </>
  );
};

export default Locations;
