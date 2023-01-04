// When using Webpack you need to require images in order for Webpack to process them, which would explain why external images load while
// internal do not, so instead of <img src={"/images/resto.png"} /> you need to use <img src={require('/images/image-name.png')} /> replacing
// image-name.png with the correct image name for each of them. That way Webpack is able to process and replace the source img.

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
// import Featured from './Featured';

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
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

  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  return (
    <div className='h-full flex flex-col text-md font-medium pt-10 pb-8 inset-0 bg-opacity-50 font-Nunito_Sans'>
      <button
        onClick={() => setToggleSearchBar(!toggleSearchBar)}
        className='flex rounded border-none bg-gradient-to-br from-red-500 to-amber-700 h-10 text-center justify-content items-center px-2 mx-auto font-semibold text-md w-auto px-auto transition-all ease-in-out duration-300 delay-300 shadow-lg drop-shadow-lg shadow-amber-700 hover:shadow-amber-700 hover:shadow-2xl'
      >
        Search Your Destination 😁✨
      </button>
      {toggleSearchBar && (
        <div className='pt-4 pb-10 bg-inherit w-auto h-96 items-center mx-auto'>
          <div className='drop-shadow-md shadow-pink-500 shadow-sm h-auto bg-white border-4 rounded-md border-solid border-black flex flex-wrap sm: lexs:flex-col xs:flex-col sm:flex-nowrap md:flex-nowrap ml:flex-nowrap flex-row gap-2 md:gap-y-4 items-center justify-between mx-auto ml:w-auto md:w-auto sm:w-auto xs:w-88 lexs:max-w-xs w-auto'>
            <div className='flex items-center justify-center gap-2 xs:pl-20'>
              <FontAwesomeIcon icon={faBed} className='text-black' />
              <span className='text-black font-extralight cursor-pointer w-auto'>
                <input
                  type='text'
                  placeholder='Destination 😄'
                  className='border-none outline-none w-auto'
                />
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faCalendarDays} className='text-black' />
              <span
                onClick={() => setOpenDate(!openDate)}
                className='text-black font-extralight cursor-pointer w-auto'
              >
                {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(
                  date[0].endDate,
                  'dd/MM/yyyy'
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className='absolute top-12 ml:top-14 md:top-14 sm:top-20 xs:top-16 -mx-14 overflow-y-auto z-auto overflow-visible h-fit'
                />
              )}
            </div>
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
                      <span className='optionCounterNumber'>
                        {options.adult}
                      </span>
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
                      <span className='optionCounterNumber'>
                        {options.children}
                      </span>
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
                      <span className='optionCounterNumber'>
                        {options.room}
                      </span>
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
            <div className='flex items-center gap-2'>
              <button className='bg-rose-600 w-20 rounded-sm h-10 font-bold text-white hover:bg-gradient-to-br hover:to-red-500 hover:bg-red-600 hover:from-amber-500'>
                Search
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <img
        src={require('../../images/hotel.jpg')}
        alt='A suite - A luxurious hotel bed room'
        className='drop-shadow-xl shadow-black shadow-lg'
      /> */}

      {/* <Featured /> */}
    </div>
  );
};

export default Header;
