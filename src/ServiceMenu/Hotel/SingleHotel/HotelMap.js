import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { datas } from '../../../Data/Hotel-Section/HotelsData/hotelsData';
import { useParams } from 'react-router-dom';
const HotelMap = () => {
  const { id } = useParams();
  const data = datas.find((hotel) => hotel.id === parseInt(id));
  const { HotelLocation } = data;
  console.log(HotelLocation);

  return (
    <div className="mt-16 ">
      <div className="text-center ">
        <h1 className=" text-center text-black font-semibold text-4xl mt-16 mb-10">
          Location{' '}
          <span>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="sm"
              style={{ color: '#0af' }}
            />
          </span>
        </h1>
      </div>

      <iframe
        src={HotelLocation}
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
