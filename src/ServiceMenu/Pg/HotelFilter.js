// import React, { useState } from "react";
import { links } from '../../Data/Pg-Section/images-links';

function Filter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className='border-t-2 border-solid border-gray-300 py-4 px-12 flex flex-start items-center overflow-x-auto airbnbml:p-2 pt-6 font-family'>
      {links.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col justify-center items-center mr-8 opacity-50 border-b-2 border-solid boder-white min-w-85 ${
            i === selectedFilter &&
            'opacity-100 border-b-2 border-solid border-black transition-all delay-300 duration-300'
          }`}
          onClick={() => {
            console.log('selecting key', i);
            setSelectedFilter(i);
          }}
        >
          <img
            src={item.imgSrc}
            className='w-6 h-6 object-contain'
            alt={item.label}
          />
          <p
            className={`text-xs font-semibold text-gray-300 ${
              i === selectedFilter && 'text-black'
            }`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
