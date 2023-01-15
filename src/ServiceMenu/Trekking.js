import React from 'react';
import trekking from '../Data/Trekking-Section/trekking';
import TrekkingCover from './Trekking/TrekkingCover';

const Trekking = () => {
  const trekkingData = trekking.map((trekking, index) => {
    return <TrekkingCover key={index} {...trekking} />;
  });

  return (
    <div className='flex flex-wrap items-center m-auto p-auto font-normal text-lg font-Nunito_Sans'>
      {trekkingData}
    </div>
  );
};

export default Trekking;
