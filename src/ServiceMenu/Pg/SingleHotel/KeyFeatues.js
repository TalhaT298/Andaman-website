import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { datas } from "../../../Data/Hotel-Section/HotelsData/hotelsData";

// import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faSwimmingPool } from "@fortawesome/free-solid-svg-icons";
// import { faWifi3 } from "@fortawesome/free-solid-svg-icons";
// import classes from "./SingleHotel.module.css";

const KeyFeatures = () => {
  // const {Manager,Beds,Bathrooms,Price,stay,Check_in_Time,Check_out_Time, Guests } = datas.find((hotel) => hotel.id === parseInt(id)); // find the corresponding data object based on the "id" using find

  const [{icon, iconColor, title, description}] = datas.keyFeatures;
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
              icon={icon}
              size="2x"
              className={`bg-${iconColor}`}
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-gray-600 text-center">
              {description}
            </p>
          </div>
        </div>

        <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              className={`bg-${iconColor}`}
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-gray-600 text-center">
             {description}
            </p>
          </div>
        </div>
        <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              className={`bg-${iconColor}`}
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-gray-600 text-center">
              {description}
            </p>
          </div>
        </div>
        <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-3">
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              className={`bg-${iconColor}`}
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-gray-600 text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
