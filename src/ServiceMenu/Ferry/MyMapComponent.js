import React from 'react';

// import { useEffect, useState } from 'react';
// import { fire } from '../../fire';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '70%',
  width: '70%',
};

// useEffect(() => {

//   return () => {
//   }
// }, [])


const MyMapComponent = (props) => (

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(function (position) {
  //       console.log('Latitude is :', position.coords.latitude);
  //       console.log('Longitude is :', position.coords.longitude);
  //       return () => {
  //         <Map
  //           google={props.google}
  //           zoom={14}
  //           style={mapStyles}
  //           initialCenter={{
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           }}
  //         >
  //           <Marker
  //             position={{
  //               lat: position.coords.latitude,
  //               lng: position.coords.longitude,
  //             }}
  //           />
  //         </Map>;
  //       };
  //     });
  //   }
  // }, [props.google]);

  <Map
    google={props.google}
    zoom={14}
    style={mapStyles}
    initialCenter={{
      lat: 11.687574,
      lng: 92.715889,
    }}
  >
    <Marker
      position={{
        lat: 11.687574,
        lng: 92.715889,
      }}
    />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDCd5c-NQ1Omd4A1nT_ZSk73Sct_78-KGQ',
})(MyMapComponent);
