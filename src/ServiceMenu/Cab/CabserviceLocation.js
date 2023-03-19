import React from 'react';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '50%',
  width: '70%',
};

const CabserviceLocation  = (props) => {
    const [lat, setlat] = useState({
      lat: 11.687574
    });
    const [lng, setlng] = useState({
      lng: 92.715889,
    });
    useEffect(() => {
      const locationRef = firebase.database().ref('locations');
      locationRef.on('value', (snapshot) => {
        snapshot.forEach(location => {
          console.log(location.val().latitude);
          setlat(location.val().latitude)
          console.log(location.val().longitude);
          setlng(location.val().longitude);
        });
      });
      return () => {
        locationRef.off();
      };
    }, []);
  
    return (
      <Map google={props.google} zoom={14} style={mapStyles} center={{lat: lat, lng: lng}}>
        <Marker position={{lat: lat, lng: lng}} />
      </Map>
    );
  };

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyATyrJWZVXed10msibEhg2KPAKzKjA3ykY',
  })(CabserviceLocation);
  