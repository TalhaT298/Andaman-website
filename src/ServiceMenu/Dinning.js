import React from 'react';
import dining from '../Data/Dining-Section/dining';
import DiningCover from './Dining/DiningCover';
import DiningSearch from './Dining/DiningSearch';

const Dining = () => {
  const diningData = dining.map((dine, index) => {
    return <DiningCover key={index} {...dine} />;
  });

  return (
    <div className='flex flex-col items-center h-full w-full p-auto m-auto font-Nunito_Sans'>
      <span className='flex mx-auto text- text-2xl font-extralight py-10'>
        😍 Well Known Dining Space's in Andaman 😋 🍽️
      </span>
      <DiningSearch />
      <div className='flex flex-wrap items-center m-auto p-auto pt-4 font-normal text-lg font-Nunito_Sans'>
        {diningData}
      </div>
    </div>
  );
};

export default Dining;
