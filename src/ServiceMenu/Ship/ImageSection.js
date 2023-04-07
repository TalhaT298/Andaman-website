import React from "react";
import { Link } from "react-router-dom";

const ImageSection = ({ handleClick }) => {
  return (
    <>
      <div className="flex flex-row lg:flex-col mt-10 pt-6 rounded-2xl shadow-2xl bg-gray-100">
        <div
          className="flex-1 text-center p-4 relative cursor-pointer"
          onClick={() => handleClick("mainland")}
        >
          <img
            className="w-full h-[28rem] lg:h-[25rem] md:h-[20rem] sm:h-[16rem] xs:w-full xs:h-[15.5 rem] rounded-lg"
            src="https://images7.alphacoders.com/560/560824.jpg"
            // src="https://images8.alphacoders.com/541/541455.jpg"
            alt="Left"
          />
          <p
            className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-2xl font-bold"
            style={{ fontFamily: "Glook" }}
          >
            Mainland Freight
          </p>
        </div>
        <Link to='/ShipBooking' target="_blank" >
        <div
          className="flex-1 text-center p-4 relative cursor-pointer"
          // onClick={() => handleClick("inland")}
        >
          <img
            className="w-full h-[28rem] lg:h-[25rem] md:h-[20rem] sm:h-[16rem] xs:w-full xs:h-full rounded-lg"
            src="https://wallpaperaccess.com/full/1921731.jpg"
            // src="https://c4.wallpaperflare.com/wallpaper/755/228/962/sea-trees-nature-rocks-wallpaper-preview.jpg"
            alt="Right"
          />
          <p
            className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold sm:text-2xl"
            style={{ fontFamily: "Glook" }}
          >
            Inland Freight
          </p>
        </div>
        </Link>
        <div className="flex flex-col gap-y-3"></div>
      </div>
    </>
  );
};

export default ImageSection;
