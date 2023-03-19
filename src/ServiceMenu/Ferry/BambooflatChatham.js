import React from 'react';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '50%',
  width: '70%',
};

const BambooflatChatham = (props) => {
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
    <div className='mx-auto items-center justify-start w-full'>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        center={{ lat: 11.687574, lng: 92.715889 }}
      >
        <Marker position={{ lat: 11.687574, lng: 92.715889 }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAvzhppT3C5ZCX5QtihqcYv8nVFuHyucdc',
})(BambooflatChatham);
