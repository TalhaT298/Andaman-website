import React from 'react';
import { useState } from 'react';
import Lists from './Pg/Cards/Lists.js';
// import Featured from './Pg/Featured.js';
// import Filter from './Pg/Filter/Filter.js';
// import Header from './Pg/Header.js';
import { list, list2 } from '../Data/Pg-Section/cards-list';

const Pg = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className='h-full w-auto font-Nunito_Sans text-md scroll-smooth'>
      {/* <Header /> */}
      {/* <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      /> */}
      {selectedFilter === 0 ? <Lists list={list} /> : <Lists list={list} />}
    </div>
  );
};

export default Pg;
