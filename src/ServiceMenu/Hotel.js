import React, { useState } from "react";
import { list } from "../Data/Hotel-Section/cards-list";
import Lists from "./Hotel/Cards/Lists.js";
// import Header from "./Hotel/Header.js";
import HotelSearch from "./Hotel/Search/HotelSearch";
// import { list2 } from '../Data/Hotel-Section/cards-list';

const Hotel = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="h-full w-full font-montserrat text-md scroll-smooth">
      {/* <Header /> */}
      <HotelSearch />
      {selectedFilter === 0 ? <Lists list={list} /> : <Lists list={list} />}
    </div>
  );
};

export default Hotel;
