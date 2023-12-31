import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Boat from '../../images/boat_final_copy.png';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '90%',
  width: '82%',
  // borderImage: 'linear-gradient(to right, #f7b733, #fc4a1a) 1',
  // borderStyle: 'solid',
  // borderWidth: '5px'
};

const PanighatMarine = (props) => {
  const [lat, setLat] = useState(11.6860);
  const [lng, setLng] = useState(92.7218);


  useEffect(() => {
    const locationRef = firebase.database().ref('PanighatMarine');
    locationRef.on('value', (snapshot) => {
      snapshot.forEach((chathamDundduspoint) => {
        const newLat = chathamDundduspoint.val().latitude;
        const newLng = chathamDundduspoint.val().longitude;
        setLat(newLat)
        setLng(newLng)
        // smoothUpdateLat(newLat);
        // smoothUpdateLng(newLng);
      });
    });
    return () => {
      locationRef.off();
    };
  }, []);
  // const smoothUpdateLat = (newLat) => {
  //   const latStep = (newLat - lat) / 10;
  //   let currentLat = lat;

  //   for (let i = 1; i <= 10; i++) {
  //     // eslint-disable-next-line no-loop-func
  //     setTimeout(() => {
  //       currentLat += latStep;
  //       setLat(currentLat);
  //     }, i * 10);
  //   }
  // };

  // const smoothUpdateLng = (newLng) => {
  //   const lngStep = (newLng - lng) / 10;
  //   let currentLng = lng;

  //   for (let i = 1; i <= 10; i++) {
  //     // eslint-disable-next-line no-loop-func
  //     setTimeout(() => {
  //       currentLng += lngStep;
  //       setLng(currentLng);
  //     }, i * 10);
  //   }
  // };


  return (
    <div>
      <Map
        google={props.google}
        zoom={10}
        style={mapStyles}
        center={{ lat : lat, lng : lng }}
      >
        <Marker icon={Boat} position={{lat: lat, lng: lng}} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnSNNGQQ8AhLEmcsXJbmz1_MVrbOz55rM',
})(PanighatMarine);
