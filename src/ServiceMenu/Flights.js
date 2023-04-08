import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import flight from '../Data/Flight-Section/flight';

const BestPrices = lazy(() => import('./Flight/BestPrices'));
const FlightSearch = lazy(() => import('./Flight/FlightSearch'));
const FlightCover = lazy(() => import('./Flight/FlightCover'));

const Flights = () => {
  //search feature
  const [searchOriginTerm, setSearchOriginTerm] = useState('');
  const [searchDestTerm, setSearchDestTerm] = useState('');

  const flightData = flight
    .filter((airplane) =>
      airplane.currentDestination
        .toLowerCase()
        .includes(searchOriginTerm.toLowerCase())
    )
    .filter((airplane) =>
      airplane.nextDestination
        .toLowerCase()
        .includes(searchDestTerm.toLowerCase())
    )
    .map((airplane, index) => {
      return <FlightCover key={airplane.flightID} {...airplane} />;
    });

  return (
    <div className="pt-10 h-full w-auto cursor-pointer">
      <div className="flex">
        <div className="flex-col mx-auto mt-5 mb-10 space-y-5">
          <p className="text-3xl font-Nunito_Sans font-semibold text-slate-800">
            🤫 Lowest Price's Here 😉 🚀
          </p>
          <Link to="/FlightContactForm" target="_blank">
            <div>
              <p className="text-base font-Nunito_Sans font-semibold text-slate-800 hover:underline hover:italic">
                If you don't find the flight you're looking for, then click here
              </p>
            </div>
          </Link>
        </div>
      </div>
      <FlightSearch
        setSearchOriginTerm={setSearchOriginTerm}
        setSearchDestTerm={setSearchDestTerm}
      />
      <div className="pt-2 w-full text-center">
        <span className="text-black text-3xl font-semibold mb-6 mx-auto w-full">
          Search Results
        </span>
        {flightData.length === 0 ? (
          <center>
            <h1 className="my-5">No results found...</h1>
          </center>
        ) : (
          flightData
        )}
      </div>
      <BestPrices />
    </div>
  );
};

export default Flights;
