import React, { lazy } from 'react';

import bestprices from '../../Data/Flight-Section/bestprices';

const BestPricesCover = lazy(() => import('./BestPricesCover'));

const bestPrices = bestprices.map((bestprice, index) => {
  return <BestPricesCover {...bestprice} />;
});

const BestPrices = () => {
  return (
    <>
      <div className="mt-8 w-full text-center">
        <span className="text-black text-3xl font-semibold mb-6 mx-auto w-full">
          Best Flight Rates
        </span>
        {bestPrices}
      </div>
    </>
  );
};

export default BestPrices;
