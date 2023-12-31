import React from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import Locations from './Locations';
import DepartDate from './DepartDate';
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

const BusSearch = (props) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='flex flex-col h-full w-full my-6'>
      <div className='flex gap-6 mx-auto'>
        <span className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'>
          One Way
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='font-medium text-slate-800 flex h-auto w-full my-4 mx-auto flex-row airbnbml:flex-col ml:w-auto airbnbml:w-96  xs:w-64'>
          <Locations {...props} />

          <DepartDate />
          <Options />

          <div className='bg-gradient-to-br to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600 hover:text-white h-auto w-full flex flex-col gap-y-3 border-solid border-2 border-slate-300 mx-auto px-2 px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center'>
            <button
              type='submit'
              className='text-center text-white text-xl font-medium font-Nunito_Sans mx-auto my-auto w-full h-auto'
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusSearch;
