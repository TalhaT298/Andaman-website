import React, { useState } from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import mail from '../../images/image_source_for_shiptab/mail_arrow.png'

import Locations from './Locations';
import DepartDate from './DepartDate';
// import ReturnDate from './ReturnDate';
import Options from './Options';

// This below code is for fetching data from local storage for json file
// function searchFlights(origin, destination, departureDate) {
//   // Use the file:// protocol to read the local JSON file
//   return fetch('file:///path/to/flights.json')
//     .then(response => response.json())
//     .then(data => {
//       // Filter the flights by the specified origin, destination, and departure date
//       const filteredFlights = data.flights.filter(flight => {
//         return flight.origin === origin && flight.destination === destination && flight.departure_date === departureDate;
//       });

//       return filteredFlights;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// This below code is for fetching data from local storage for javascript file
// import fs from 'fs';
// function searchFlights(origin, destination, departureDate) {
//   // Use the file:// protocol and the fs module to read the local JavaScript file
//   return new Promise((resolve, reject) => {
//     fs.readFile('file:///path/to/flights.js', 'utf8', (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         // Parse the data from the file as JSON
//         const flights = JSON.parse(data);

//         // Filter the flights by the specified origin, destination, and departure date
//         const filteredFlights = flights.filter(flight => {
//           return flight.origin === origin && flight.destination === destination && flight.departure_date === departureDate;
//         });

//         resolve(filteredFlights);
//       }
//     });
//   });
// }

const ShipSearch = (props) => {
  const { handleSearch } = props

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const [twoWay, setTwoWay] = useState(false);

  return (
    <div className='py-5 mb-3 mt-12 drop-shadow-xl bg-white rounded-lg  w-11/12 mx-auto px-6'>
      {/* <div className='flex gap-6 mx-auto'>
        <span
          onClick={() => {
            setTwoWay(false);
          }}
          className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'
        >
          One Way
        </span>
        <span
          onClick={() => {
            setTwoWay(true);
          }}
          className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'
        >
          Two Way
        </span>
        <span className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'>
          Multi-City
        </span>
      </div> */}
      <form onSubmit={handleSubmit} className=''>
        <div className='flex flex-row lg:flex-col justify-center'>
          <Locations {...props} />

          <DepartDate />
          {/* {twoWay && <ReturnDate />} */}

          <Options />
          <button
            type='submit'
            className='lg:flex lg:items-center lg:justify-center w-20 bg-rose-400 px-3 py-3 text-white rounded-md lg:w-full'
            onClick={handleSearch}
          >
            <img src={mail} alt=""  className='hidden lg:block mr-3'/>
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipSearch;
