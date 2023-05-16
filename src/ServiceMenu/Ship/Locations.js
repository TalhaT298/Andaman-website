import React from 'react';
// import { useState } from 'react';
import ship from '../../Data/Ship-Section/ship';

const Locations = ( { currentDestinationFilterShip, nextDestinationFilterShip, setcurrentDestinationFilterShip,
  setnextDestinationFilterShip} ) => {
  // const [openOrigin, setOpenOrigin] = useState(false);
  // const [openDestination, setOpenDestination] = useState(false);
  // const [origin, setOrigin] = useState('Port Blair');
  // const [destination, setDestination] = useState('Chennai');

  const currentDestinationOptions = Array.from(
    new Set(ship.map((ship) => ship.currentDestination))
  );
  const nextDestinationOptions = Array.from(
    new Set(ship.map((ship) => ship.nextDestination))
  );

   //search feature
  //  setSearchOriginTerm(origin)
  //  setSearchDestTerm(destination)

  return (
    <>
    <div className='h-auto w-full flex flex-col gap-y-3 px-4 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
      <span className='text-slate-500 font-bold text-xl font-mono'>FROM</span>
      <select
          id="currentDestinationFilter"
          className='bg-transparent text-slate-400 font-bold tracking-widest'
          value={currentDestinationFilterShip}
          onChange={(e) => setcurrentDestinationFilterShip(e.target.value)}
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
          value={nextDestinationFilterShip}
          onChange={(e) => setnextDestinationFilterShip(e.target.value)}
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
