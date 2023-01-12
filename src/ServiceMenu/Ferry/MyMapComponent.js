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

const location = [
  {
    latitude: 11.687612,
    longitude: 92.715910,
  },
  {
    latitude: 11.687600,
    longitude: 92.715921,
  },
  {
    latitude: 11.687620,
    longitude: 92.715908,
  },
];

const latitude = 11.687574;
const longitude = 92.715889;

const MyMapComponent = (props) => (
  <Map
    google={props.google}
    zoom={14}
    style={mapStyles}
    initialCenter={{
      lat: location.latitude,
      lng: location.longitude,
    }}
  >
    <Marker
      position={{
        lat: location.latitude,
        lng: location.longitude,
      }}
    />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDCd5c-NQ1Omd4A1nT_ZSk73Sct_78-KGQ',
})(MyMapComponent);

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
