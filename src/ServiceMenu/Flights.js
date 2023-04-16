import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import flight from '../Data/Flight-Section/flight';

const BestPrices = lazy(() => import('./Flight/BestPrices'));
const FlightSearch = lazy(() => import('./Flight/FlightSearch'));
const FlightCover = lazy(() => import('./Flight/FlightCover'));

const Flights = () => {
  //Filter feature
  const [currentDestinationFilter, setCurrentDestinationFilter] = useState('');
  const [nextDestinationFilter, setNextDestinationFilter] = useState('');

  const flightData = flight
    .filter((airplane) =>
      currentDestinationFilter === '' ||
      airplane.currentDestination === currentDestinationFilter
    )
    .filter((airplane) =>
      nextDestinationFilter === '' ||
      airplane.nextDestination === nextDestinationFilter
    )
    .map((airplane, index) => {
      return <FlightCover key={airplane.flightID} {...airplane} />;
    });

  return (
    <div className="pt-10 h-full w-full lg:px-5 px-20 bg-slate-900 mt-6">
      <div className="flex">
        <div className="flex-col mx-auto mt-5 mb-10 space-y-5">
          <p className="lg:text-2xl text-3xl font-Nunito_Sans font-semibold text-slate-400">
            🤫 Lowest Price's Here 😉 🚀
          </p>
          <Link to="/FlightContactForm" target="_blank">
            <div>
              <p className="lg:text-xs text-base font-Nunito_Sans font-semibold text-slate-300 hover:underline hover:italic">
                If you don't find the flight you're looking for, then click here
              </p>
            </div>
          </Link>
        </div>
      </div>
      <FlightSearch
        currentDestinationFilter={currentDestinationFilter}
        nextDestinationFilter={nextDestinationFilter}
        setCurrentDestinationFilter={setCurrentDestinationFilter}
        setNextDestinationFilter={setNextDestinationFilter}
      />
        <div className="pt-2 w-full text-center">
          <span className="text-slate-400 text-3xl font-bold font-mono mb-6 mx-auto w-full">
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
