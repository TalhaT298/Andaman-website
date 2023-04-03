import React from 'react';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import ReactGoogleAutocomplete from 'react-google-autocomplete';

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
    const [address, setAddress] = useState('');
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
  
    const handlePlaceSelected = (place) => {
      setAddress(place.formatted_address);
  
      // const destinationLat = place.geometry.location.lat();
      // const destinationLng = place.geometry.location.lng();
  
      // const calculatedDistance = getDistance(lat, lng, destinationLat, destinationLng);
      // setDistance(calculatedDistance.toFixed(2));
    };
    
    return (
      <><ReactGoogleAutocomplete
        apiKey='AIzaSyDnSNNGQQ8AhLEmcsXJbmz1_MVrbOz55rM'
        onPlaceSelected={handlePlaceSelected}
        types={['address']}
      >
        {/* <input
      type='text'
      placeholder='Enter a location'
      value={address}
      onChange={(e) => setAddress(e.target.value)}
    /> */}
      </ReactGoogleAutocomplete>
      <Map google={props.google} zoom={14} style={mapStyles} center={{ lat: lat, lng: lng }}>
          <Marker position={{ lat: lat, lng: lng }} />
      </Map></>
    );
  };

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDnSNNGQQ8AhLEmcsXJbmz1_MVrbOz55rM',
  })(CabserviceLocation);
  