import React from "react";
import SingleHotelHeader from "./HotelHeader";
import HotelImages from "./HotelImages";
// import Navforwithout from "../../../Navforwithout";

const SingleHotel = () => {
  return (
    <>
      {/* <Navforwithout /> */}
      <div className="container py-16 px-44 lg:px-10">
        <SingleHotelHeader />
        <HotelImages />
      </div>
    </>
  );
};

export default SingleHotel;
