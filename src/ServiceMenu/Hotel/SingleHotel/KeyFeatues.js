import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { datas } from "../../../Data/Hotel-Section/HotelsData/hotelsData";
import { useParams } from "react-router-dom";

const KeyFeatures = () => {
  const { id } = useParams();
  const { keyFeatures } = datas.find((hotel) => hotel.id === parseInt(id));

  return (
    <div className="pt-8 pt:lg-12">
      <h2
        // style={{ fontFamily: "Glook" }}
        className=" text-5xl lg:text-3xl font-extrabold lg:mb-12 text-center"
      >
        Key Features
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {keyFeatures.map(({ icon, iconColor, title, description }, index) => (
          <div
            key={index}
            className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="bg-gray-200 rounded-full p-3">
              <FontAwesomeIcon
                icon={icon}
                size="2x"
                style={{ color: `${iconColor}` }}
              />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-gray-600 text-center">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
