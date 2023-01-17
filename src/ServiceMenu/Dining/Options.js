import React from 'react';
import { useState } from 'react';

const Options = () => {
  const [customerInfo, setCustomerInfo] = useState({
    family_table: 0,
    couple_table: 0,
    friends_table: 0,
    per_person: 0,
  });

  const handleCustomerInfo = (category, arithmetricOperation) => {
    setCustomerInfo((prev) => {
      return {
        ...prev,
        [category]:
          arithmetricOperation === 'i'
            ? customerInfo[category] + 1
            : customerInfo[category] - 1,
      };
    });
  };

  return (
    <div className='flex-col my-4'>
      <div className='flex gap-x-24 space-y-4 xs:flex-col'>
        <div className='pt-5'>
          <span className='optionText'>Family_Table</span>
        </div>
        <div className='xs:pl-0 space-x-4 pl-2'>
          <button
            disabled={customerInfo.family_table <= 0}
            onClick={() => handleCustomerInfo('family_table', 'd')}
            className='disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8'
          >
            <span className=''>-</span>
          </button>
          <span className='optionCounterNumber'>
            {customerInfo.family_table}
          </span>
          <button
            onClick={() => handleCustomerInfo('family_table', 'i')}
            className=' bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8'
          >
            <span className=''>+</span>
          </button>
        </div>
      </div>
      <div className='flex gap-x-24 space-y-4 xs:flex-col'>
        <div className='pt-5'>
          <span className='optionText'>Couple_Table</span>
        </div>
        <div className='xs:pl-0 space-x-4 pl-1'>
          <button
            disabled={customerInfo.couple_table <= 0}
            onClick={() => handleCustomerInfo('couple_table', 'd')}
            className='disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8'
          >
            <span className=''>-</span>
          </button>
          <span className='optionCounterNumber'>
            {customerInfo.couple_table}
          </span>
          <button
            onClick={() => handleCustomerInfo('couple_table', 'i')}
            className=' bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8'
          >
            <span className=''>+</span>
          </button>
        </div>
      </div>
      <div className='flex gap-x-24 space-y-4 xs:flex-col'>
        <div className='pt-5'>
          <span className='optionText'>Friends_Table</span>
        </div>
        <div className='xs:pl-0 space-x-4 pl-0.5'>
          <button
            disabled={customerInfo.friends_table <= 0}
            onClick={() => handleCustomerInfo('friends_table', 'd')}
            className='disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8'
          >
            <span className=''>-</span>
          </button>
          <span className='optionCounterNumber'>
            {customerInfo.friends_table}
          </span>
          <button
            onClick={() => handleCustomerInfo('friends_table', 'i')}
            className=' bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8'
          >
            <span className=''>+</span>
          </button>
        </div>
      </div>
      <div className='flex gap-x-28 space-y-4 xs:flex-col'>
        <div className='pt-5'>
          <span className='optionText'>Per_Person</span>
        </div>
        <div className='xs:pl-0 space-x-4 pl-1'>
          <button
            disabled={customerInfo.per_person <= 0}
            onClick={() => handleCustomerInfo('per_person', 'd')}
            className='disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8'
          >
            <span className=''>-</span>
          </button>
          <span className='optionCounterNumber'>
            {customerInfo.per_person}
          </span>
          <button
            onClick={() => handleCustomerInfo('per_person', 'i')}
            className=' bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8'
          >
            <span className=''>+</span>
          </button>
        </div>
      </div>

      <div className='text-center -my-7'></div>
    </div>
  );
};

export default Options;
