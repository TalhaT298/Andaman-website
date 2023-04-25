import React from 'react';
import { useState } from 'react';
import Lists from './Hotel/Cards/Lists.js';
// import Header from './Hotel/Header.js';
import { list } from '../Data/Hotel-Section/cards-list';
// import { list2 } from '../Data/Hotel-Section/cards-list';

const Hotel = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className='h-full w-auto font-Nunito_Sans text-md scroll-smooth'>
      {/* <Header /> */}
      {selectedFilter === 0 ? <Lists list={list} /> : <Lists list={list} />}
    </div>
  );
};

export default Hotel;
