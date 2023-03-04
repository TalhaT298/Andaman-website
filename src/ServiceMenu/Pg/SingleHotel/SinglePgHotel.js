import React from "react";
import SingleHotelHeader from "./Header";
import HotelImages from "./Images";
import Navforwithout from "../../../Navforwithout";
import Features from "./Features.js";
import ReviewSection from "./ReviewSection";
import HotelMap from "./HotelMap";
const SinglePgHotel = () => {
  return (
    <>
      <Navforwithout />
      <div className="container py-16 px-44 lg:px-10">
        <SingleHotelHeader />
        <HotelImages />
        <Features />
        <ReviewSection />
        <HotelMap />
      </div>
    </>
  );
};

export default SinglePgHotel;
