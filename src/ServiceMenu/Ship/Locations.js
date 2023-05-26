import React from 'react';
// import { useState } from 'react';
import ship from '../../Data/Ship-Section/ship';
import allArrow from '../../images/image_source_for_shiptab/arrow_all.png'
import topbottomArrow from '../../images/image_source_for_shiptab/up-and-downarrow.png'

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
  <div className='flex flex-row lg:flex-col lg:w-full relative'>
    <fieldset className='border border-slate-300 py-3 lg:pb-3 lg:pt-2 px-3 hover:border-2 hover:border-rose-400 hover:rounded-md lg:mb-3'>
      <legend className='hidden lg:block'>From</legend>
      <div className='flex w-64 lg:w-full'>
        <img class="max-w-none mr-3" src={allArrow} alt="..." />
        <select
            id="currentDestinationFilter"
            className='text-black appearance-none w-full pl-2'
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
    </fieldset>
    <div className='hidden lg:flex justify-center items-center place-content-center border border-slate-700 rounded-full w-12 h-12 pl-3 absolute top-14 left-72 bg-white'>
      <img class="max-w-none mr-3" src={topbottomArrow} alt="..." />
    </div>
    <fieldset className='border border-slate-300 py-3 lg:pb-3 lg:pt-2 px-3 hover:border-2 hover:border-rose-400 hover:rounded-md lg:mb-3'>
      <legend className='hidden lg:block'>To</legend>
      <div className='flex w-64 lg:w-full'>
      <img class="max-w-none mr-3" src={allArrow} alt="..." />
        <select
            id="nextDestinationFilter"
            className='text-black appearance-none w-full  pl-2'
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
    </fieldset>
  </div>
  );
};

export default Locations;
