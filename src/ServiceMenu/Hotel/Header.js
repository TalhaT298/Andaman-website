// When using Webpack you need to require images in order for Webpack to process them, which would explain why external images load while
// internal do not, so instead of <img src={"/images/resto.png"} /> you need to use <img src={require('/images/image-name.png')} /> replacing
// image-name.png with the correct image name for each of them. That way Webpack is able to process and replace the source img.

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Options from "./Options";
import Dates from "./Dates";
import SearchInput from "./SearchInput";

const Header = () => {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <div className="h-full flex flex-col text-md font-medium pt-10 pb-8 inset-0 bg-opacity-50 font-Nunito_Sans">
      <button
        onClick={() => setToggleSearchBar(!toggleSearchBar)}
        className="flex rounded-lg border-none bg-gradient-to-br from-blue-500 to-blue-800 h-10 text-center justify-content items-center px-2 mx-auto font-semibold text-md w-auto px-auto transition-all ease-in-out duration-300 delay-300 shadow-lg drop-shadow-lg shadow-black-700 hover:shadow-black-700 hover:shadow-2xl"
      >
        <span className="text-white text-md">
          Search Your Destination{" "}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ paddingLeft: "4px" }}
          />
        </span>{" "}
        {/* 😁✨ */}
      </button>
      {toggleSearchBar && (
        <form onSubmit={handleSearch}>
          <div className="pt-10 pb-10 bg-inherit w-auto h-96 items-center mx-auto">
            <div className="drop-shadow-md shadow-sm h-auto bg-white border-2 rounded-md border-solid border-black flex flex-wrap sm:lexs:flex-col xs:flex-col sm:flex-nowrap md:flex-nowrap ml:flex-nowrap  flex-row md:gap-y-4 items-center justify-between mx-auto ml:w-auto md:w-auto sm:w-auto xs:w-88 lexs:max-w-xs w-auto py-5 pl-3">
              <SearchInput />
              <Dates />
              <Options />
              <div className="flex items-center gap-2 px-2">
                {/* <button className="bg-blue-600 w-20 rounded-sm h-10 font-bold text-white ">
                  Search
                </button> */}
                <button class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-md font-medium rounded-md">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ paddingRight: "8px" }}
                  />
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Header;

export const Comment = () => {
  return (
    <div>
      {/* <FontAwesomeIcon icon={faCalendarDays} className='text-black' />
    <span
      onClick={() => setOpenDate(!openDate)}
      className='text-black font-extralight cursor-pointer w-auto'
    >
      {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(
        date[0].endDate,
        'dd/MM/yyyy'
      )}`}
    </span>
    {openDate && (
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className='absolute top-12 ml:top-14 md:top-14 sm:top-20 xs:top-16 -mx-14 overflow-y-auto z-auto overflow-visible h-fit'
      />
    )} */}
    </div>
  );
};
