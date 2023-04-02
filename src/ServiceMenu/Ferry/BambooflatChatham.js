import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Boat from '../../images/boat_final_copy.png';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '50%',
  width: '70%',
};

const BambooflatChatham = (props) => {
  const [lat, setLat] = useState(11.687574);
  const [lng, setLng] = useState(92.715889);

  useEffect(() => {
    const locationRef = firebase.database().ref('locations');
    locationRef.on('value', (snapshot) => {
      snapshot.forEach((location) => {
        // console.log(location.val().latitude);
        setLat(location.val().latitude);
        // console.log(location.val().longitude);
        setLng(location.val().longitude);
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
        center={{ lat, lng }}
      >
        <Marker icon={Boat} position={{lat: lat, lng: lng}} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnSNNGQQ8AhLEmcsXJbmz1_MVrbOz55rM',
})(BambooflatChatham);
