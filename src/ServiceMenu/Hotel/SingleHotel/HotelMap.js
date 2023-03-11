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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15608.970846717191!2d92.99377098395905!3d12.026804664356003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088d36c0203f8ff%3A0x3144749d5e158dc1!2sGreen%20Imperial%20Resort!5e0!3m2!1sen!2sin!4v1678537420174!5m2!1sen!2sin" 
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
