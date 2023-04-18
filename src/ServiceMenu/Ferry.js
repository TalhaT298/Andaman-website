import React, { useState } from 'react';
import BambooflatChatham from './Ferry/BambooflatChatham';
import HaddoToHavelock from './Ferry/HaddoToHavelock';
import MarineToBambooflat from './Ferry/MarineToBambooflat';
// import ChathamBambooflat from './Ferry/ChathamBambooflat';

const Ferry = () => {
  const [selectedOption, setSelectedOption] = useState('BambooflatChatham');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center mt-5">
      <div className="flex rounded-lg border-none bg-gradient-to-br from-blue-500 to-blue-800 justify-between text-md px-auto transition-all ease-in-out duration-300 delay-300 shadow-lg drop-shadow-lg shadow-black-700 hover:shadow-black-700 hover:shadow-2xl mx-auto w-2/5  lg:w-full mb-5 mt-2 text-center font-bold px-4 py-2 text-white">
        <p className='text-center text-xl font-bold'>Select Routes</p>
        <select id="option-select" value={selectedOption} onChange={handleOptionChange} className='text-sm font-semibold font-Nunito_Sans w-4/5 bg-gradient-to-br from-blue-500 to-blue-800 ml-3 py-2 px-5' >
          <option className='text-slate-700' value="BambooflatChatham">Bambooflat Jetty to Chatam Jetty</option>
          <option className='text-slate-700' value="HaddoToHavelock">Marine Jetty to Bambooflat Jetty</option>
          <option className='text-slate-700' value="MarineToBambooflat">Haddo Jetty to Havelock Jetty</option>
        </select>
      </div>
      <div className="mx-auto w-full h-screen items-center justify-center">
        {selectedOption === 'BambooflatChatham' && <BambooflatChatham className="border-4" />}
        {selectedOption === 'HaddoToHavelock' && <HaddoToHavelock />}
        {selectedOption === 'MarineToBambooflat' && <MarineToBambooflat />}
      </div>
    </div>
  );
};

export default Ferry;
