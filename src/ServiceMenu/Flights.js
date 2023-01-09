import React from 'react';

import FlightSearch from './Flight/FlightSearch';

import flight from '../Data/Flight-Section/flight';
import FlightCover from './Flight/FlightCover';

const Flights = () => {
  const flightData = flight.map((airplane, index) => {
    return <FlightCover key={index} {...airplane} />;
  });
  return (
    <div className='pt-10 h-full w-auto cursor-pointer'>
      <div className='flex'>
        <div className='flex mx-auto mt-10 mb-10'>
          <span className='text-3xl font-Nunito_Sans font-semibold text-slate-800'>
            🤫 Lowest Price's Here 😉 🚀
          </span>
        </div>
      </div>
      <FlightSearch />
      <span className='text-2xl font-normal mb-3 mx-2'>Featured Flights</span>
      <div className='pt-2'>{flightData}</div>
    </div>
  );
};

export default Flights;
