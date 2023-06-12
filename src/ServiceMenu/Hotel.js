import React, { useState } from "react";
import { list } from "../Data/Hotel-Section/cards-list";
import Lists from "./Hotel/Cards/Lists.js";
// import Header from "./Hotel/Header.js";
import HotelSearch from "./Hotel/Search/HotelSearch";
import HotelSearchResult from "./Hotel/Search/HotelSearchResult";
// import { list2 } from '../Data/Hotel-Section/cards-list';

const Hotel = () => {
  // const [selectedFilter, setSelectedFilter] = useState(false);
  const [searchState, setSearchState] = useState({
    checkInDate: null,
    checkOutDate: null,
    locationFrom: "",
    travellerInfo: {
      adult: 1,
      children: 0,
      infant: 0,
      room: 1,
    },
    isVisible: false,
    openCheckIn: false,
    openCheckOut: false,
    openTravellerInfo: false,
    selectedFilter: false,
  });
  return (
    <div className=" w-full font-montserrat text-md scroll-smooth">
      {/* <Header /> */}
      <HotelSearch searchState={searchState} setSearchState={setSearchState} />
      {/* {selectedFilter === 0 ? <Lists list={list} /> : <Lists list={list} />} */}
      {searchState.selectedFilter ? (
        <HotelSearchResult searchState={searchState} />
      ) : (
        <Lists list={list}></Lists>
      )}
    </div>
  );
};
export default Hotel;
