import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import mail from "../../images/image_source_for_shiptab/mail_arrow.png";

import DepartDate from "./DepartDate";
import Locations from "./Locations";
// import ReturnDate from './ReturnDate';
import Options from "./Options";

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
  const { handleSearch } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col h-full w-full lg:py-0 relative py-6 z-50">
      <div className="absolute top-0 left-[-4vw] right-[-4vw] h-[340px] z-[-1] ms:bg-[#FF8682]" />
      <form onSubmit={handleSubmit} className="">
        <div className="font-medium text-slate-800 flex h-auto w-full bg-white z-50 px-4 my-4 py-4 mx-auto ms:rounded-md flex-row sxl:flex-col shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
          <Locations {...props} />

          <DepartDate />

          <Options />
          <button
            type="submit"
            className="bg-[#FF8682] sxl:flex sxl:items-center sxl:justify-center h-auto  my-2 sxl:py-3 px-2 text-white sxl:rounded-md rounded-r"
            onClick={handleSearch}
          >
            <img src={mail} alt="" className="hidden lg:block mr-3" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipSearch;
