import React from 'react';
// import { useState } from 'react';
import ship from '../../Data/Ship-Section/ship';
import allArrow from '../../images/image_source_for_shiptab/arrow_all.png'

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
    <div className='flex w-64 border border-slate-300 py-3 px-3 hover:border-2 hover:border-rose-400 hover:rounded-md'>
      <img class="max-w-none mr-3" src={allArrow} alt="..." />
      <select
          id="currentDestinationFilter"
          className='text-black'
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
    <div className='flex w-64 border border-slate-300 py-3 px-3 hover:border-2 hover:border-rose-400 hover:rounded-md'>
    <img class="max-w-none mr-3" src={allArrow} alt="..." />
      <select
          id="nextDestinationFilter"
          className='text-black'
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
