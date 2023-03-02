import React from 'react';
import { useState } from 'react';

const Locations = ( {setSearchOriginTerm, setSearchDestTerm} ) => {
  const [openOrigin, setOpenOrigin] = useState(false);
  const [openDestination, setOpenDestination] = useState(false);
  const [origin, setOrigin] = useState('Port Blair');
  const [destination, setDestination] = useState('Chennai');

  //search feature
  setSearchOriginTerm(origin)
  setSearchDestTerm(destination)

  return (
    <>
      <div className='bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
        <span className='text-slate-600 text-sm font-normal'>FROM</span>
        <span
          onClick={() => {
            setOpenOrigin(!openOrigin);
          }}
          className='font-bold text-black text-lg uppercase'
        >
          {origin}
        </span>
        <span className='text-slate-800  text-xs'>[IXZ]</span>
        {openOrigin && (
          <input
            type='text'
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
            className='absolute'
          />
        )}
      </div>
      <div className='bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
        <span className='text-slate-600 text-sm font-normal'>TO</span>
        <span
          onClick={() => {
            setOpenDestination(!openDestination);
          }}
          className='font-bold text-black text-lg uppercase'
        >
          {destination}
        </span>
        <span className='text-slate-800  text-xs'>[MAA]</span>{' '}
        {/* w-full whitespace-nowrap overflow-hidden text-ellipsis */}
        {openDestination && (
          <input
            type='text'
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className='absolute'
          />
        )}
      </div>
    </>
  );
};

export default Locations;
