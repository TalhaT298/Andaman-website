import React, { lazy } from 'react';
// import flight from '../Data/Flight-Section/flight';
import flight from '../Data/Flight-Section/real';

import { useDataContext } from '../context/useDataContext';
import FlightSearch from './Flight/FlightSearch';
// const FlightCover = lazy(() => import('./Flight/FlightCover'));
import FlightCover from './Flight/FlightCover';
import { format, parse } from 'date-fns';

const BestPrices = lazy(() => import('./Flight/BestPrices'));

const Flights = () => {
  // const flight = [
  //   {
  //     flightID: 64,
  //     flightDate: ['29-07-2023', '29-07-2023'],
  //     flightGateway: 'Terminal 1',
  //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
  //     flightName: 'Indigo',
  //     flightNo: ['6E-987', '6E-345'],
  //     travelRoute: ['MAA', 'CCU', 'IXZ'],
  //     currentDestination: ['Chennai', 'Kolkata'],
  //     flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
  //     flightIntervalTime: ['01h 35m'],
  //     nextDestination: ['Kolkata', 'Port Blair'],
  //     departureTime: ['05.10', '09.15'],
  //     arrivalTime: ['07:40', '11.25'],
  //     flightDuration: ['02h 30m', '02h 10m'],
  //     flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
  //     flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
  //     adultPrice: 9559,
  //     fare: 8448,
  //     tax: 1111,
  //     discount: 0,
  //     childrenPrice: 3000, // this is just dummy price
  //     infantPrice: 2000, // this is just dummy price
  //     convenience: 400,
  //     totalFlightDuration: ['6h 15m'],
  //     refund: 'Partially Refundable',
  //     meals: 'Not Mentioned',
  //     baggage: {
  //       handBag: '7 kgs',
  //       checkIn: '15 kgs',
  //     }
  //   },

  //   {
  //     flightID: 65,
  //     flightDate: ['29-07-2023', '30-07-2023'],
  //     flightGateway: 'Terminal 1',
  //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
  //     flightName: 'Indigo',
  //     flightNo: ['6E-6411', '6E-2788'],
  //     travelRoute: ['MAA', 'CCU', 'IXZ'],
  //     currentDestination: ['Chennai', 'Kolkata'],
  //     flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
  //     flightIntervalTime: ['07h 25m'],
  //     nextDestination: ['Kolkata', 'Port Blair'],
  //     departureTime: ['19:55', '05:50'],
  //     arrivalTime: ['22:25', '08:10'],
  //     flightDuration: ['02h 30m', '02h 20m'],
  //     flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
  //     flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
  //     adultPrice: 9559,
  //     fare: 8448,
  //     tax: 1111,
  //     discount: 0,
  //     childrenPrice: 3000, // this is just dummy price
  //     infantPrice: 2000, // this is just dummy price
  //     convenience: 400,
  //     totalFlightDuration: ['12h 15m'],
  //     refund: 'Partially Refundable',
  //     meals: 'Not Mentioned',
  //     baggage: {
  //       handBag: '7 kgs',
  //       checkIn: '15 kgs',
  //     }
  //   },

  //   {
  //     flightID: 66,
  //     flightDate: ['29-07-2023', '29-07-2023', '30-07-2023'],
  //     flightGateway: 'Terminal 1',
  //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
  //     flightName: 'Indigo',
  //     flightNo: ['6E-5278', '6E-5287', '6E-2788'],
  //     travelRoute: ['MAA', 'BOM', 'CCU', 'IXZ'],
  //     currentDestination: ['Chennai', 'Mumbai', 'Kolkata'],
  //     flightInterval: '2 stop BOM,CCU', // 1 stoppages // 2 stoppages
  //     flightIntervalTime: ['01h 35m', '4h 35m'],
  //     nextDestination: ['Mumbai', 'Kolkata', 'Port Blair'],
  //     departureTime: ['19:15', '22.40', '05:50'],
  //     arrivalTime: ['21:05', '01.15', '08:10'],
  //     flightDuration: ['01h 50m', '2h 35m', '02h 20m'],
  //     flightLocationFrom: ["Chennai International Airport, India", "Chhatrapati Shivaji International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
  //     flightLocationTo: ["Chhatrapati Shivaji International Airport, India", "Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
  //     adultPrice: 9874,
  //     fare: 8333,
  //     tax: 1541,
  //     discount: 0,
  //     childrenPrice: 3000, // this is just dummy price
  //     infantPrice: 2000, // this is just dummy price
  //     convenience: 400,
  //     totalFlightDuration: ['12h 55m'],
  //     refund: 'Partially Refundable',
  //     meals: 'Not Mentioned',
  //     baggage: {
  //       handBag: '7 kgs',
  //       checkIn: '15 kgs',
  //     }
  //   },

  //   {
  //     flightID: 35,
  //     flightDate: ['30-07-2023'],
  //     flightGateway: 'Terminal 1',
  //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
  //     flightName: 'SpiceJet',
  //     flightNo: ['SG- 609'],
  //     travelRoute: ['MAA', 'IXZ'],
  //     currentDestination: ['Chennai'],
  //     flightInterval: 'Direct', // 1 stoppages // 2 stoppages
  //     nextDestination: ['Port Blair'],
  //     departureTime: ['08:40'],
  //     arrivalTime: ['10:55'],
  //     flightDuration: ['02h 15m'],
  //     flightLocationFrom: ["Chennai International Airport, India"],
  //     flightLocationTo: ["Veer Savarkar International Airport, India"],
  //     adultPrice: 6675,
  //     fare: 5800,
  //     tax: 875,
  //     discount: 560,
  //     childrenPrice: 3000, // this is just dummy price
  //     infantPrice: 2000, // this is just dummy price
  //     convenience: 400,
  //     totalFlightDuration: ['02h 15m'],
  //     refund: 'Refundable',
  //     meals: 'Not Mentioned',
  //     baggage: {
  //       handBag: '7 kgs',
  //       checkIn: '15 kgs',
  //     }
  //   },
  // ]

  //Filter feature
  // const [currentDestinationFilter, setCurrentDestinationFilter] = useState('');
  // const [nextDestinationFilter, setNextDestinationFilter] = useState('');
  const { currentDestinationFilter, setCurrentDestinationFilter, nextDestinationFilter, setNextDestinationFilter, flightSearch, startingDate } = useDataContext();

  const parseDate = parse(startingDate[0].startDate.toDateString(), 'EEE MMM dd yyyy', new Date());
  const formatedDate = format(parseDate, 'dd-MM-yyyy')

  const flightData = flight
    .filter((airplane) =>
      currentDestinationFilter === '' ||
      airplane.currentDestination[0]?.toLowerCase() === currentDestinationFilter?.toLowerCase()
    )
    .filter((airplane) =>
      nextDestinationFilter === '' ||
        airplane.nextDestination?.length > 1 ?
        airplane.nextDestination[0]?.toLowerCase() : airplane.nextDestination[0]?.toLowerCase() === nextDestinationFilter?.toLowerCase()
    )
    .filter((airplane) => airplane.flightDate[0] === formatedDate)
    .map((airplane, index) => {
      return (
        <>
          {
            flightSearch &&
            <FlightCover key={airplane.flightID} {...airplane} />
          }
        </>
      );
    });

  return (
    <div className="pt-10 h-full w-full relative" style={{ fontFamily: "Montserrat" }}>

      {/* <div className="flex">
        <div className="flex-col mx-auto mt-5 mb-10 space-y-5">
          <p className="lg:text-2xl text-3xl font-Nunito_Sans font-semibold text-slate-400">
            🤫 Lowest Prices Here 🚀
          </p>
          <Link to="/FlightContactForm" target="_blank">
            <div>
              <p className="lg:text-xs text-base font-Nunito_Sans font-semibold text-slate-300 hover:underline hover:italic">
                If you don't find the flight you're looking for, then click here
              </p>
            </div>
          </Link>
        </div>
      </div> */}
      <FlightSearch
        currentDestinationFilter={currentDestinationFilter}
        nextDestinationFilter={nextDestinationFilter}
        setCurrentDestinationFilter={setCurrentDestinationFilter}
        setNextDestinationFilter={setNextDestinationFilter}
      />
      <div className="pt-2 w-full text-center">
        {/* <span className="text-slate-400 text-3xl font-bold font-mono mb-6 mx-auto w-full">
          Search Results
        </span> */}
        {
          flightSearch ? (flightData.length === 0 ? (
            <center>
              <h1 className="my-5">No results found...</h1>
            </center>
          ) : (
            flightData
          )) : (<center>
            <h1 className="my-20 text-3xl font bold">Search your destination</h1>
          </center>)
        }

      </div>
      <BestPrices />
    </div>
  );
};

export default Flights;
