import React from 'react';

import CabSearch from './Cab/CabSearch';

import cab from '../Data/Cab-Section/cab';
import CabCover from './Cab/CabCover';

const Cabs = () => {
  const cabData = cab.map((airplane, index) => {
    return <CabCover key={index} {...airplane} />;
  });
  return (
    <div className='pt-10 h-full w-auto cursor-pointer'>
      <div className='flex'>
        <div className='flex mx-auto mt-10 mb-10'>
          <span className='text-3xl font-Nunito_Sans font-semibold text-slate-800'>
            🤫 Reliable Cab Service 😉 🚀
          </span>
        </div>
      </div>
      <CabSearch />
      <span className='text-2xl font-normal mb-3 mx-2'>Featured Cabs</span>
      <div className='pt-2'>{cabData}</div>
    </div>
  );
};

export default Cabs;
