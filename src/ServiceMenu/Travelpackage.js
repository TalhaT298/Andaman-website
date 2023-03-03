import React from 'react';
import travelpackage from '../Data/TravelPackage-Section/travelpackage';
import TravelPackageCover from './TravelPackage/TravelPackageCover';


const Travelpackage = () => {
  
  const travelPackageData = travelpackage.map((travelPackage, index) => {
    return <TravelPackageCover key={index} {...travelPackage} />;
  });
  return (
    <div className='flex flex-wrap items-center m-auto p-auto font-normal text-lg font-Nunito_Sans py-10'>
      {travelPackageData}
    </div>
  );
};

export default Travelpackage;
