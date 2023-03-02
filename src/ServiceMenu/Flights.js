import React, { useState } from 'react';

import FlightSearch from './Flight/FlightSearch';

import flight from '../Data/Flight-Section/flight';
import FlightCover from './Flight/FlightCover';

const Flights = () => {
  //search feature
  const [searchOriginTerm, setSearchOriginTerm] = useState("")
  const [searchDestTerm, setSearchDestTerm] = useState("")

  const flightData = flight
        .filter((airplane) => 
          airplane.currentDestination.toLowerCase().includes(searchOriginTerm.toLowerCase())
        )
        .filter((airplane) => 
          airplane.nextDestination.toLowerCase().includes(searchDestTerm.toLowerCase())
        )
        .map((airplane, index) => {
        return <FlightCover key={airplane.flightID} {...airplane} />;
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
      <FlightSearch setSearchOriginTerm={setSearchOriginTerm} setSearchDestTerm={setSearchDestTerm} />
      <span className='text-2xl font-normal mb-3 mx-2'>Featured Flights</span>
      <div className='pt-2 '>
        {
          flightData.length === 0 ? 
          <center><h1>No results found...</h1></center> 
          : 
          flightData
        }
      </div>
    </div>
  );
};

export default Flights;
