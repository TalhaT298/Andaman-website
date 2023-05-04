import React, { useState } from 'react';
import BambooflatChatham from './Ferry/BambooflatChatham';
import ChatamBambooflat from './Ferry/ChathamBambooflat';
import HaddoToHavelock from './Ferry/HaddoToHavelock';
import HavelockHaddo from './Ferry/HavelockHaddo';
import MarineToBambooflat from './Ferry/MarineToBambooflat';
import BambooflatMarine from './Ferry/BambooflatMarine';
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
          <option className='text-slate-700' value="BambooflatChatham">Bambooflat-Chatham</option>
          <option className='text-slate-700' value="ChathamBambooflat">Chatham-Bambooflat</option>
          <option className='text-slate-700' value="HaddoHavelock">Haddo-Havelock</option>
          <option className='text-slate-700' value="HavelockHaddo">Havelock-Haddo</option>
          <option className='text-slate-700' value="MarineBambooflat">Marine-Bambooflat</option>
          <option className='text-slate-700' value="BambooflatMarine">Bambooflat-Marine</option>
        </select>
      </div>
      <div className="mx-auto w-full h-screen items-center justify-center">
        {selectedOption === 'BambooflatChatham' && <BambooflatChatham className="border-4" />}
        {selectedOption === 'ChathamBambooflat' && <ChatamBambooflat className="border-4" />}
        {selectedOption === 'HaddoHavelock' && <HaddoToHavelock className="border-4" />}
        {selectedOption === 'HavelockHaddo' && <HavelockHaddo className="border-4" />}
        {selectedOption === 'MarineBambooflat' && <MarineToBambooflat className="border-4" />}
        {selectedOption === 'BambooflatMarine' && <BambooflatMarine className="border-4" />}
      </div>
    </div>
  );
};

export default Ferry;
