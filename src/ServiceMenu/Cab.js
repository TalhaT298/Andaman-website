import React, { useState } from 'react';

import CabSearch from './Cab/CabSearch';

import cab from '../Data/Cab-Section/cab';
import CabCover from './Cab/CabCover';
import CabserviceLocation from './Cab/CabserviceLocation';

const Cabs = () => {

  //search feature
  const [searchOriginTerm, setSearchOriginTerm] = useState("")
  const [searchDestTerm, setSearchDestTerm] = useState("")

  const cabData = cab
        .filter((cab) => 
          cab.currentDestination.toLowerCase().includes(searchOriginTerm.toLowerCase())
        )
        .filter((cab) => 
          cab.nextDestination.toLowerCase().includes(searchDestTerm.toLowerCase())
        )
        .map((cab, index) => {
          return <CabCover key={index} {...cab} />;
      });

  // const cabData = cab.map((cab, index) => {
  //   return <CabCover key={index} {...cab} />;
  // });

  return (
    <div className='pt-10 h-full w-auto'>
      <div className='flex'>
        <div className='flex mx-auto mt-10 mb-10'>
          <span className='text-3xl font-Nunito_Sans font-semibold text-slate-800'>
            🤫 Reliable Cab Service 😉 🚀
          </span>
        </div>
      </div>
      <CabSearch setSearchOriginTerm={setSearchOriginTerm} setSearchDestTerm={setSearchDestTerm} />
      <span className='text-2xl font-normal mb-3 mx-2'>Featured Cabs</span>
      {/* <div className='pt-2'>{
          cabData.length === 0 ? 
          <center><h1>No results found...</h1></center> 
          : 
          cabData
        }
      </div> */}
      <CabserviceLocation></CabserviceLocation>
    </div>
  );
};

export default Cabs;
