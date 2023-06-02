import React from "react";
import ship from "../Data/Ship-Section/ship";

// import { useDataContext } from "../context/useDataContext";
// import FlightSearch from "./Flight/FlightSearch";
// const FlightCover = lazy(() => import('./Flight/FlightCover'));
import { useShipDataContext } from "../context/useShipDataContext";
import ShipCover from "./Ship/ShipCover";
import ShipSearch from "./Ship/ShipSearch";

// const BestPrices = lazy(() => import("./Ship/BestPrices"));

const Ships = () => {
  //Filter feature
  // const [currentDestinationFilter, setCurrentDestinationFilter] = useState('');
  // const [nextDestinationFilter, setNextDestinationFilter] = useState('');
  const {
    currentDestinationFilter,
    setCurrentDestinationFilter,
    nextDestinationFilter,
    setNextDestinationFilter,
    flightSearch,
  } = useShipDataContext();
  const flightData = ship
    .filter(
      (airplane) =>
        currentDestinationFilter === "" ||
        airplane.currentDestination === currentDestinationFilter
    )
    .filter(
      (airplane) =>
        nextDestinationFilter === "" ||
        airplane.nextDestination === nextDestinationFilter
    )
    .map((airplane, index) => {
      return (
        <>
          {" "}
          {flightSearch && <ShipCover key={airplane.flightID} {...airplane} />}
        </>
      );
    });

  return (
    <div
      className="pt-10 h-full w-full relative"
      style={{ fontFamily: "Montserrat" }}
    >
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
      <ShipSearch
        currentDestinationFilter={currentDestinationFilter}
        nextDestinationFilter={nextDestinationFilter}
        setCurrentDestinationFilter={setCurrentDestinationFilter}
        setNextDestinationFilter={setNextDestinationFilter}
      />
      <div className="pt-2 w-full text-center">
        {/* <span className="text-slate-400 text-3xl font-bold font-mono mb-6 mx-auto w-full">
          Search Results
        </span> */}
        {flightSearch ? (
          flightData.length === 0 ? (
            <center>
              <h1 className="my-5">No results found...</h1>
            </center>
          ) : (
            flightData
          )
        ) : (
          <center>
            <h1 className="my-32 text-3xl font bold">
              Search your destination
            </h1>
          </center>
        )}
      </div>
      {/* <BestPrices /> */}
    </div>
  );
};

export default Ships;
