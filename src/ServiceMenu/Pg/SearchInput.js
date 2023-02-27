import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
  const [destination, setDestination] = useState('');

  return (
    <div className='flex items-center justify-center gap-2 xs:pl-20'>
      <FontAwesomeIcon icon={faLocationDot} className='text-black' style={{paddingLeft:"5px"}} />
      <span className='text-black font-extralight cursor-pointer w-auto'>
        <input
          type='text'
          placeholder='Search Here'
          value={destination}
          className='border-none outline-none w-auto text-md font-bold text-blue-500'
          onChange={(event) => {
            setDestination(event.target.value);
          }}
        />
      </span>
    </div>
  );
};

export default SearchInput;
