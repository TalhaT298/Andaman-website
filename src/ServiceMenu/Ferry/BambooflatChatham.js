import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Boat from '../../images/boat_final_copy.png';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '66%',
  width: '82%',
  // borderImage: 'linear-gradient(to right, #f7b733, #fc4a1a) 1',
  // borderStyle: 'solid',
  // borderWidth: '5px'
};

const BambooflatChatham = (props) => {
  const [lat, setLat] = useState(11.687574);
  const [lng, setLng] = useState(92.715889);


  useEffect(() => {
    const locationRef = firebase.database().ref('locations');
    locationRef.on('value', (snapshot) => {
      snapshot.forEach((location) => {
        const newLat = location.val().latitude;
        const newLng = location.val().longitude;
        smoothUpdateLat(newLat);
        smoothUpdateLng(newLng);
      });
    });
    return () => {
      locationRef.off();
    };
  }, []);
  const smoothUpdateLat = (newLat) => {
    const latStep = (newLat - lat) / 200;
    let currentLat = lat;

    for (let i = 1; i <= 200; i++) {
      // eslint-disable-next-line no-loop-func
      setTimeout(() => {
        currentLat += latStep;
        setLat(currentLat);
      }, i * 100);
    }
  };

  const smoothUpdateLng = (newLng) => {
    const lngStep = (newLng - lng) / 200;
    let currentLng = lng;

    for (let i = 1; i <= 200; i++) {
      // eslint-disable-next-line no-loop-func
      setTimeout(() => {
        currentLng += lngStep;
        setLng(currentLng);
      }, i * 100);
    }
  };

  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        center={{ lat : 11.698336, lng : 92.718586 }}
      >
        <Marker icon={Boat} position={{lat: lat, lng: lng}} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnSNNGQQ8AhLEmcsXJbmz1_MVrbOz55rM',
})(BambooflatChatham);
