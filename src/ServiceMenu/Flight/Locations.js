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
  // console.log(currentDestinationOptions)
  // console.log(nextDestinationOptions)

  return (
    <>
      <div className='h-auto w-full flex flex-col gap-y-3 px-4 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
        <span className='text-slate-500 font-bold text-xl font-mono'>FROM</span>
        <select
            id="currentDestinationFilter"
            className='bg-transparent text-slate-400 font-bold tracking-widest'
            value={currentDestinationFilter}
            onChange={(e) => setCurrentDestinationFilter(e.target.value)}
          >
            {currentDestinationOptions.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
      </div>
      <div className='h-auto w-full flex flex-col gap-y-3 px-4 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
        <span className='text-slate-500 font-bold text-xl font-mono'>TO</span>
        <select
            id="nextDestinationFilter"
            className='bg-transparent text-slate-400 font-bold tracking-widest'
            value={nextDestinationFilter}
            onChange={(e) => setNextDestinationFilter(e.target.value)}
          >
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
