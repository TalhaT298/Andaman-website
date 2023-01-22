import React from 'react';
import { useEffect, useState } from 'react';
// import { fire } from '../../fire';
import firebase from 'firebase/app';
import 'firebase/database';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '70%',
  width: '70%',
};

const MyMapComponent = (props) => {
  const [location, setLocation] = useState({
    lat: 11.687574,
    lng: 92.715889,
  });

  useEffect(() => {
    const locationRef = firebase.database().ref('locations');
    locationRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      setLocation(snapshot.val());
    });
    return () => {
      locationRef.off();
    };
  }, []);

  return (
    <Map google={props.google} zoom={14} style={mapStyles} center={location}>
      <Marker position={location} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyATyrJWZVXed10msibEhg2KPAKzKjA3ykY',
})(MyMapComponent);
