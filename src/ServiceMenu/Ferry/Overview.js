import React from 'react';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Boat from '../../images/boat_final_copy.png';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '66%',
  width: '82%',
};

const Overview = (props) => {
  const [lat, setlat] = useState({
    lat: 11.687574,
  });
  const [lng, setlng] = useState({
    lng: 92.715889,
  });
  useEffect(() => {
    const locationRef = firebase.database().ref('locations');
    locationRef.on('value', (snapshot) => {
      snapshot.forEach((location) => {
        console.log(location.val().latitude);
        setlat(location.val().latitude);
        console.log(location.val().longitude);
        setlng(location.val().longitude);
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
        center={{ lat: lat, lng: lng }}
      >
        <Marker icon={Boat} position={{lat: lat, lng: lng}} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnSNNGQQ8AhLEmcsXJbmz1_MVrbOz55rM',
})(Overview);
