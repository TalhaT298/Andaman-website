import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Boat from '../../images/boat_final_copy.png';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles =  [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
]

const BambooflatChatham = (props) => {
  const [lat, setLat] = useState(11.704840);
  const [lng, setLng] = useState(92.715733);


  useEffect(() => {
    const locationRef = firebase.database().ref('bambooflatchatham');
    locationRef.on('value', (snapshot) => {
      snapshot.forEach((bamboochat) => {
        const newLat = bamboochat.val().latitude;
        const newLng = bamboochat.val().longitude;
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
        zoom={14}
        style={{ height: '90%', width: '82%' }}
        styles={mapStyles}
        center={{ lat : lat, lng : lng }}
        mapTypeControl={false}
      >
        <Marker icon={Boat} position={{lat: lat, lng: lng}} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnSNNGQQ8AhLEmcsXJbmz1_MVrbOz55rM',
})(BambooflatChatham);