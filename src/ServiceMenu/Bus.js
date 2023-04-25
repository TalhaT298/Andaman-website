import React, { useRef } from 'react';
// import { useState } from 'react';
// import BusSearch from './Bus/BusSearch';
// import bus from '../Data/Bus-Section/bus';
// import BusCover from './Bus/BusCover';
import BusSchedule from './Bus/BusSchedule';
import BusImageSection from './Bus/BusImageSection';
import PrivateBuses from './Bus/PrivateBuses';

const Buss = () => {

  //search feature
  // const [searchOriginTerm, setSearchOriginTerm] = useState("")
  // const [searchDestTerm, setSearchDestTerm] = useState("")

  // const busData = bus
  //       .filter((bus) => 
  //         bus.currentDestination.toLowerCase().includes(searchOriginTerm.toLowerCase())
  //       )
  //       .filter((bus) => 
  //         bus.nextDestination.toLowerCase().includes(searchDestTerm.toLowerCase())
  //       )
  //       .map((bus, index) => {
  //         return <BusCover key={index} {...bus} />;
  //     });
  
  //refs
  const govtRef = useRef(null);
  const privateRef = useRef(null);

  const handleClick = (id) => {
    if (id === "govt" && govtRef.current) {
      govtRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (id === "private" && privateRef.current) {
      privateRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const busData = bus.map((airplane, index) => {
  //   return <BusCover key={index} {...airplane} />;
  // });

  return (
    <>
    <BusImageSection handleClick={handleClick} />
    <div className='pt-10 h-full w-auto cursor-pointer'>
      {/* <div className='flex'>
        <div className='flex mx-auto mt-10 mb-10'>
          <span className='text-3xl font-Nunito_Sans font-semibold text-slate-800'>
            😋 Experience the Fun On-Road Travel ✌🏻 🚌
          </span>
        </div>
      </div>
      <BusSearch setSearchOriginTerm={setSearchOriginTerm} setSearchDestTerm={setSearchDestTerm} />
      <span className='text-2xl font-normal mb-3 mx-2'>Featured Bus</span>
      <div className='pt-2'>{
          busData.length === 0 ?
          <center><h1>No results found...</h1></center>
          :
          busData
        }
      </div> */}
      <BusSchedule ref={govtRef} />
      <PrivateBuses ref={privateRef} />
    </div>
    </>
  );
};

export default Buss;
