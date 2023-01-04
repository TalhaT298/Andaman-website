// import { Grid } from '@nextui-org/react';

// // import Card from '../Component/Card';

// export default function bus() {
//   return (
//     <Grid.Container gap={2} justify='flex-start'>
//       Bus
//       {/* <Grid xs={7} sm={3}>
//         <Card />
//       </Grid>
//       <Grid xs={7} sm={3}>
//         <Card />
//       </Grid>
//       <Grid xs={7} sm={3}>
//         <Card />
//       </Grid>
//       <Grid xs={7} sm={3}>
//         <Card />
//       </Grid>
//       <Grid xs={7} sm={3}>
//         <Card />
//       </Grid> */}
//     </Grid.Container>
//   );
// }

import React from 'react';

import BusSearch from './Bus/BusSearch';

import bus from '../Data/Bus-Section/bus';
import BusCover from './Bus/BusCover';

const Buss = () => {
  const busData = bus.map((airplane, index) => {
    return <BusCover key={index} {...airplane} />;
  });
  return (
    <div className='pt-10 h-full w-auto cursor-pointer'>
      <div className='flex'>
        <div className='flex mx-auto mt-10 mb-10'>
          <span className='text-3xl font-Nunito_Sans font-semibold text-white'>
            😋 Experience the Fun On-Road Travel ✌🏻 🚌
          </span>
        </div>
      </div>
      <BusSearch />
      <span className='text-2xl font-normal mb-3 mx-2'>Featured Buss</span>
      <div className='pt-2'>{busData}</div>
    </div>
  );
};

export default Buss;