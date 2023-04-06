import React, { useState } from 'react';
import Overview from './Ferry/Overview';
import BambooflatChatham from './Ferry/BambooflatChatham';

const Ferry = () => {
  const [selectedOption, setSelectedOption] = useState('Overview');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center">
      <div className="mx-auto w-full items-center justify-center mb-5 mt-2">
        <label htmlFor="option-select" className='font-bold text-2xl' >Select Route:</label>
        <select id="option-select" value={selectedOption} onChange={handleOptionChange} className='text-base font-semibold ml-2 font-Nunito_Sans' >
          <option value="Overview">Overview</option>
          <option value="BambooflatChatham">BambooflatChatham</option>
        </select>
      </div>
      <div className="mx-auto w-full h-screen items-center justify-center">
        {selectedOption === 'Overview' && <Overview />}
        {selectedOption === 'BambooflatChatham' && <BambooflatChatham />}
      </div>
    </div>
  );
};

export default Ferry;
