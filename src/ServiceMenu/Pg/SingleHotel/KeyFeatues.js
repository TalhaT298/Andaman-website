import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSwimmingPool } from "@fortawesome/free-solid-svg-icons";
import { faWifi3 } from "@fortawesome/free-solid-svg-icons";
import classes from "./SingleHotel.module.css";

const KeyFeatures = () => {
  return (
    <div className="pt-8 pt:lg-12">
      <h2
        // style={{ fontFamily: "Glook" }}
        className=" text-5xl lg:text-3xl font-extrabold lg:mb-12 text-center"
      >
        Key Features
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <FontAwesomeIcon
              icon={faHeart}
              size="2x"
              className={`${classes.heart_icon}`}
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">Highly rated</h3>
            <p className="mt-2 text-gray-600 text-center">
              Received 5-star ratings from 100% of recent guests.
            </p>
          </div>
        </div>

        <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <FontAwesomeIcon
              icon={faWifi3}
              size="2x"
              style={{ color: "#000" }}
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">High Speed 5G</h3>
            <p className="mt-2 text-gray-600 text-center">
              Our hotel offers lightning-fast 5G network for seamless
              connectivity.
            </p>
          </div>
        </div>
        <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <FontAwesomeIcon
              icon={faSwimmingPool}
              size="2x"
              style={{ color: "#0099ff" }}
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">Dive right in</h3>
            <p className="mt-2 text-gray-600 text-center">
              This is one of the few places in the area with a pool.
            </p>
          </div>
        </div>
        <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <FontAwesomeIcon
              icon={faDumbbell}
              size="2x"
              style={{ color: "#000" }}
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">Luxurious amenities</h3>
            <p className="mt-2 text-gray-600 text-center">
              Indulge in our world-class spa and wellness facilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
