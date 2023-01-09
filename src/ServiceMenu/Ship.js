import React from 'react';

import ShipSearch from './Ship/ShipSearch';

import ship from '../Data/Ship-Section/ship';
import ShipCover from './Ship/ShipCover';

const Ship = () => {
  const shipData = ship.map((airplane, index) => {
    return <ShipCover key={index} {...airplane} />;
  });
  return (
    <div className='pt-10 h-full w-auto cursor-pointer'>
      <div className='flex'>
        <div className='flex mx-auto mt-10 mb-10'>
          <span className='text-3xl font-Nunito_Sans font-semibold text-slate-800 '>
            😎 Comfortable Reliable Experience 😁 🚢
          </span>
        </div>
      </div>
      <ShipSearch />
      <span className='text-2xl font-normal mb-3 mx-2'>Featured Ships</span>
      <div className='pt-2'>{shipData}</div>
    </div>
  );
};

export default Ship;
