import React, { useState } from 'react';
import BambooflatChatham from './Ferry/BambooflatChatham';
import ChatamBambooflat from './Ferry/ChathamBambooflat';
import HaddoToHavelock from './Ferry/HaddoToHavelock';
import HavelockHaddo from './Ferry/HavelockHaddo';
import MarineToBambooflat from './Ferry/MarineToBambooflat';
import BambooflatMarine from './Ferry/BambooflatMarine';
import ChathamDunduspoint from './Ferry/ChathamDunduspoint';
import DunduspointChatham from './Ferry/DunduspointChatham';
import MarinePanighat from './Ferry/MarinePanighat';
import PanighatMarine from './Ferry/PanighatMarine';
import arrow from '../images/image_source_for_shiptab/arrow_all.png';
// import ChathamBambooflat from './Ferry/ChathamBambooflat';

const Ferry = () => {
  const [selectedOption, setSelectedOption] = useState('BambooflatChatham');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col w-full mx-auto items-center mt-12" style={{fontFamily:"Montserrat"}}>
      <div className='drop-shadow-xl  w-4/12 mx-auto lg:w-10/12 mb-5 bg-white'>
        <div className="flex border border-slate-900 justify-center items-center font-bold py-2 text-black">
          <p className='text-sm'>Select Routes</p>
          <img src={arrow} alt="" className='px-2 w-7 h-3'/>
          <select id="option-select" value={selectedOption} onChange={handleOptionChange} className='text-sm py-2 px-4 appearance-none' >
            <option className='text-slate-700' value="BambooflatChatham">Bambooflat-Chatham</option>
            <option className='text-slate-700' value="ChathamBambooflat">Chatham-Bambooflat</option>
            <option className='text-slate-700' value="HaddoHavelock">Haddo-Havelock</option>
            <option className='text-slate-700' value="HavelockHaddo">Havelock-Haddo</option>
            <option className='text-slate-700' value="MarineBambooflat">Marine-Bambooflat</option>
            <option className='text-slate-700' value="BambooflatMarine">Bambooflat-Marine</option>
            <option className='text-slate-700' value="ChathamDunduspoint">Chatham-Dunduspoint</option>
            <option className='text-slate-700' value="DunduspointChatham">Dunduspoint-Chatham</option>
            <option className='text-slate-700' value="MarinePanighat">Marine-Panighat</option>
            <option className='text-slate-700' value="PanighatMarine">Panighat-Marine</option>
          </select>
        </div>
      </div>
      <div className="mx-auto w-full h-screen flex self-center pl-8">
        {selectedOption === 'BambooflatChatham' && <BambooflatChatham className="border-4 " />}
        {selectedOption === 'ChathamBambooflat' && <ChatamBambooflat className="border-4" />}
        {selectedOption === 'HaddoHavelock' && <HaddoToHavelock className="border-4" />}
        {selectedOption === 'HavelockHaddo' && <HavelockHaddo className="border-4" />}
        {selectedOption === 'MarineBambooflat' && <MarineToBambooflat className="border-4" />}
        {selectedOption === 'BambooflatMarine' && <BambooflatMarine className="border-4" />}
        {selectedOption === 'ChathamDunduspoint' && <ChathamDunduspoint className="border-4" />}
        {selectedOption === 'DunduspointChatham' && <DunduspointChatham className="border-4" />}
        {selectedOption === 'MarinePanighat' && <MarinePanighat className="border-4" />}
        {selectedOption === 'PanighatMarine' && <PanighatMarine className="border-4" />}
      </div>
    </div>
  );
};

export default Ferry;
