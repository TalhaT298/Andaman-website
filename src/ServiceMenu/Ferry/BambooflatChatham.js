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
  const [lat, setLat] = useState(11.7056);
  const [lng, setLng] = useState(92.7158);


  useEffect(() => {
    const locationRef = firebase.database().ref('bambooflatchatham');
    locationRef.on('value', (snapshot) => {
      snapshot.forEach((bamboochat) => {
        const newLat = bamboochat.val().latitude;
        const newLng = bamboochat.val().longitude;
        setLat(newLat)
        setLng(newLng)
      });
    });
    return () => {
      locationRef.off();
    };
  }, []);

  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        center={{ lat : 11.696603, lng : 92.719163 }}
      >
        <Marker icon={Boat} position={{lat: lat, lng: lng}} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnSNNGQQ8AhLEmcsXJbmz1_MVrbOz55rM',
})(BambooflatChatham);