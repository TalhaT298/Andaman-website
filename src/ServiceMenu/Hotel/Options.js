import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

const Options = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className='flex items-center gap-2'>
      <FontAwesomeIcon icon={faPerson} className='text-black' />
      <span
        onClick={() => setOpenOptions(!openOptions)}
        className='text-black font-extralight cursor-pointer w-auto'
      >
        {`${options.adult} adult . ${options.children} children . ${options.room} room`}
      </span>
      {openOptions && (
        <div className='absolute top-12 ml:top-14 md:top-14 sm:top-20 xs:top-28 ml:left-80 md:left-80 sm:left-60 xs:left-12 text-black rounded-md shadow-md shadow-black drop-shadow-md w-auto bg-white border-solid border-black border-2'>
          <div className='w-52 flex justify-between m-6 gap-2 my-4'>
            <span className='optionText'>Adult</span>
            <div className='flex items-center gap-8 text-l text-black'>
              <button
                disabled={options.adult <= 1}
                onClick={() => handleOption('adult', 'd')}
                className='px-1 cursor-pointer bg-amber-500 border-black border-solid border-2 text-xl text-center -my-2 disabled:cursor-not-allowed'
              >
                -
              </button>
              <span className='optionCounterNumber'>{options.adult}</span>
              <button
                onClick={() => handleOption('adult', 'i')}
                className='px-1 cursor-pointer bg-amber-500 border-black border-solid border-2 text-xl text-center -my-2'
              >
                +
              </button>
            </div>
          </div>
          <div className='w-52 flex justify-between m-6 gap-2'>
            <span className='optionText'>Children</span>
            <div className='flex items-center gap-8 text-l text-black'>
              <button
                disabled={options.children <= 0}
                onClick={() => handleOption('children', 'd')}
                className='px-1 cursor-pointer bg-amber-500 border-black border-solid border-2 text-xl text-center -my-2 disabled:cursor-not-allowed'
              >
                -
              </button>
              <span className='optionCounterNumber'>{options.children}</span>
              <button
                onClick={() => handleOption('children', 'i')}
                className='px-1 cursor-pointer bg-amber-500 border-black border-solid border-2 text-xl text-center -my-2'
              >
                +
              </button>
            </div>
          </div>
          <div className='w-52 flex justify-between m-6 gap-2'>
            <span className='optionText'>Room</span>
            <div className='flex items-center gap-8 text-l text-black'>
              <button
                disabled={options.room <= 1}
                onClick={() => handleOption('room', 'd')}
                className='px-1 cursor-pointer bg-amber-500 border-black border-solid border-2 text-xl text-center -my-2 disabled:cursor-not-allowed'
              >
                -
              </button>
              <span className='optionCounterNumber'>{options.room}</span>
              <button
                onClick={() => handleOption('room', 'i')}
                className='px-1 cursor-pointer bg-amber-500 border-black border-solid border-2 text-xl text-center -my-2'
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Options;
