import React from "react";
import pgIcon1 from "../images/pg-icon1.png";
import pgIcon2 from "../images/pg-icon2.png";
import pgIcon3 from "../images/pg-icon3.png";
import pgIcon4 from "../images/pg-icon4.png";
import pgIcon5 from "../images/pg-icon5.png";
import pgIcon6 from "../images/pg-icon6.png";
import pgIcon7 from "../images/pg-icon7.png";
import pgIcon8 from "../images/pg-icon8.png";
const Facilities = () => {
  return (
    <div className="">
      <hr className="my-20 md:my-10 ms:my-5" />
      <h2 className="font-bold ms:text-lg text-xl">Amenities</h2>
      <div className="w-full max-w-[720px]  mt-8">
        <div className="flex justify-between mb-7">
          <div
            className="
    grid gap-y-7
  "
          >
            <div className="flex">
              <img src={pgIcon1} alt="icon" />
              <p className="ml-2 ms:text-sm">Outdoor pool</p>
            </div>
            <div className="flex">
              <img src={pgIcon1} alt="icon" />
              <p className="ml-2 ms:text-sm">Indoor pool</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <img src={pgIcon4} alt="icon" />
                <p className="ml-2 whitespace-nowrap ms:text-sm">
                  Spa and wellness center
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <img src={pgIcon6} alt="icon" />
                <p className="ml-2 whitespace-nowrap ms:text-sm">Restaurant</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={pgIcon8} className="w-[20px] h-[15px]" alt="icon" />
                <p className="ml-2 whitespace-nowrap ms:text-sm">
                  Room service
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-7">
            <div className="flex items-center">
              <img src={pgIcon2} alt="icon" className="w-[22.4px] h-[11.2px]" />
              <p className="ml-2 ms:text-sm">Outdoor pool</p>
            </div>
            <div className="flex items-center">
              <img src={pgIcon3} alt="icon" className="w-[15px] h-[18px]" />
              <p className="ml-2 ms:text-sm">Bar/Lounge</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={pgIcon5} alt="icon" className="w-6 h-6" />
                <p className="ml-2 ms:text-sm">Free Wi-Fi</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  src={pgIcon7}
                  alt="icon"
                  className="w-[19.5px] h-[17.25]"
                />
                <p className="ml-2 ms:text-sm">Tea/coffee machine</p>
              </div>
            </div>
            <div className="flex justify-between ms:text-sm">
              <p className="text-[#FF8682]">+24 more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
