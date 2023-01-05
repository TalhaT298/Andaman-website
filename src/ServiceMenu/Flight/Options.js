import React from 'react';
import { useState } from 'react';

import Modal from 'react-modal';

const Options = () => {
  const [openTravellerInfo, setOpenTravellerInfo] = useState(false);
  const [travellerInfo, setTravellerInfo] = useState({
    adult: 1,
    children: 0,
    infant: 0,
    traveller: 0,
  });

  const handleTravellerInfo = (category, arithmetricOperation) => {
    setTravellerInfo((prev) => {
      return {
        ...prev,
        [category]:
          arithmetricOperation === 'i'
            ? travellerInfo[category] + 1
            : travellerInfo[category] - 1,
      };
    });
  };

  const [passengerClass, setPassengerClass] = useState('ECONOMY');

  return (
    <div className='bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
      <span className='mx-auto text-slate-600 text-sm font-normal'>
        TRAVELLER & CLASS
      </span>
      <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className='font-medium text-black text-lg mx-auto'
      >
        {`${
          travellerInfo.adult + travellerInfo.children + travellerInfo.infant
        }`}{' '}
        Traveller(s)
      </span>
      <span className='mx-auto text-slate-800 text-xs'>{passengerClass}</span>

      <Modal
        isOpen={openTravellerInfo}
        overlayClassName='modal-overlay bg-black opacity'
        className='modal-content w-auto h-auto ml-96'
      >
        <div className='flex flex-col absolute bg-slate-100 bottom-16 right-96 airbnbml:-bottom-10 sm:right-44 sm:-bottom-10 w-auto h-auto py-3 mx-auto px-auto space-x-4'>
          <div className='flex flex-row mx-auto px-auto items-center gap-x-4'>
            <span className='optionText'>Adult</span>
            <div className='mx-auto px-auto space-x-6'>
              <button
                disabled={travellerInfo.adult <= 1}
                onClick={() => handleTravellerInfo('adult', 'd')}
                className='disabled:cursor-not-allowed'
              >
                -
              </button>
              <span className='optionCounterNumber'>{travellerInfo.adult}</span>
              <button
                onClick={() => handleTravellerInfo('adult', 'i')}
                className=''
              >
                +
              </button>
            </div>
          </div>
          <div className='flex flex-row mx-auto px-auto items-center gap-x-4 '>
            <span className='optionText'>Children</span>
            <div className='mx-auto px-auto space-x-6'>
              <button
                disabled={travellerInfo.children <= 1}
                onClick={() => handleTravellerInfo('children', 'd')}
                className='disabled:cursor-not-allowed'
              >
                -
              </button>
              <span className='optionCounterNumber'>
                {travellerInfo.children}
              </span>
              <button
                onClick={() => handleTravellerInfo('children', 'i')}
                className=''
              >
                +
              </button>
            </div>
          </div>
          <div className='flex flex-row mx-auto px-auto items-center gap-x-4'>
            <span className='optionText'>Infant</span>
            <div className='mx-auto px-auto space-x-6'>
              <button
                disabled={travellerInfo.infant <= 1}
                onClick={() => handleTravellerInfo('infant', 'd')}
                className='disabled:cursor-not-allowed'
              >
                -
              </button>
              <span className='optionCounterNumber'>
                {travellerInfo.infant}
              </span>
              <button
                onClick={() => handleTravellerInfo('infant', 'i')}
                className=''
              >
                +
              </button>
            </div>
          </div>
          <div className='flex flex-col pt-3'>
            <span onClick={() => setPassengerClass('ECONOMY')} className=''>
              Economy
            </span>
            <span onClick={() => setPassengerClass('BUSINESS')} className=''>
              Business
            </span>
            <span onClick={() => setPassengerClass('FIRST')} className=''>
              First
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Options;
