import React from "react";

import GovtBus from "../../images/go2andaman_baratang_8445-1.avif";
import PvtBus from "../../images/Private Bus.jpg";

const BusImageSection = ({ handleClick }) => {
  return (
    <>
      <div className="flex flex-row lg:flex-col mt-10 pt-6 rounded-2xl shadow-2xl bg-gray-100">
        <div
          className="flex-1 text-center p-4 relative cursor-pointer"
          onClick={() => handleClick("govt")}
        >
          <img
            className="w-full h-96 lg:h-[25rem] md:h-[20rem] sm:h-[16rem] xs:w-full xs:h-[15.5 rem] rounded-lg"
            src={GovtBus}
            // src="https://images8.alphacoders.com/541/541455.jpg"
            alt="Left"
          />
          <p
            className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-2xl font-bold"
            style={{ fontFamily: "Glook" }}
          >
            Inter-Island Govt. Bus
          </p>
        </div>
        <div
          className="flex-1 text-center p-4 relative cursor-pointer"
          onClick={() => handleClick("private")}
        >
          <img
            className="w-full h-[24rem] lg:h-[25rem] md:h-[20rem] sm:h-[16rem] xs:w-full xs:h-full rounded-lg"
            src={PvtBus}
            // src="https://c4.wallpaperflare.com/wallpaper/755/228/962/sea-trees-nature-rocks-wallpaper-preview.jpg"
            alt="Right"
          />
          <p
            className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold sm:text-2xl"
            style={{ fontFamily: "Glook" }}
          >
            Inter-Island Pvt. Bus
          </p>
        </div>
        <div className="flex flex-col gap-y-3"></div>
      </div>
    </>
  );
};

export default BusImageSection;
