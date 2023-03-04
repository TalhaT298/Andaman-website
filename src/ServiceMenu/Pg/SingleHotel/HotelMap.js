import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const HotelMap = () => {
  return (
    <div className="mt-16 ">
      <div className="text-center ">
        <h1
          
          className=" text-center text-black text-4xl mt-16 mb-10"
        >
          Location{" "}
          <span>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="sm"
              style={{ color: "#0af" }}
            />
          </span>
        </h1>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31730.749391464073!2d80.0566!3d6.21833!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677772502338!5m2!1sen!2sin"
        className="w-full h-96"
        title="Map"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default HotelMap;
