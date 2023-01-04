// import React, { Component } from 'react'

// export default class Shop extends Component {
//   render() {
//     return (
//       <div>Shop</div>
//     )
//   }
// }

import React from 'react';
import shop from '../Data/Shop-Section/shop';
import ShopItemCover from './ShopItem/ShopItemCover';
import ShopItemSearch from './ShopItem/ShopItemSearch';

const ShopItem = () => {
  const shopItemData = shop.map((dine, index) => {
    return <ShopItemCover key={index} {...dine} />;
  });

  return (
    <div className='flex flex-col items-center h-full w-full p-auto m-auto font-Nunito_Sans'>
      <span className='flex mx-auto text- text-2xl font-extralight py-10'>
        💍 🪵Indigenic Well Crafted Items Of Andaman 🤩
      </span>
      <ShopItemSearch />
      <div className='flex flex-wrap items-center m-auto p-auto pt-4 font-normal text-lg font-Nunito_Sans'>
        {shopItemData}
      </div>
    </div>
  );
};

export default ShopItem;
