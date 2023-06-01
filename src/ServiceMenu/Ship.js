import React, { useState } from "react";
// import ShipSearch from "./Ship/ShipSearch";
// import Mainland from "./Ship/Mainland";
// import Inland from "./Ship/Inland";
import ship from "../Data/Ship-Section/ship";
import ShipOverview from "./Ship/Shipoverview";
// import ShipCover from "./Ship/ShipCover";
// import ImageSection from "./Ship/ImageSection";
import ShipSearch from "./Ship/ShipSearch";
// import MainlandDetails from "./Ship/MainlandDetails";
// import SecondSchedule from "./Ship/SecondSchedule";
import { useDataContext } from "../context/useDataContext";

const Ship = () => {
  //search feature
  // const [searchOriginTerm, setSearchOriginTerm] = useState("");
  // const [searchDestTerm, setSearchDestTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const {
    currentDestinationFilterShip,
    nextDestinationFilterShip,
    setcurrentDestinationFilterShip,
    setnextDestinationFilterShip,
  } = useDataContext();

  const handleSearch = () => {
    setShowResults(true);
  };

  const shipData = ship
    .filter(
      (getShip) =>
        currentDestinationFilterShip === "" ||
        getShip.currentDestination === currentDestinationFilterShip
    )
    .filter(
      (getShip) =>
        nextDestinationFilterShip === "" ||
        getShip.nextDestination === nextDestinationFilterShip
    )
    .map((getShip, index) => {
      return (
        <>
          <ShipOverview key={index} {...getShip} />
        </>
      );
    });

  // const mainlandRef = useRef(null);
  // const inlandRef = useRef(null);

  // const shipData = ship
  //   .filter((ship) =>
  //     ship.currentDestination
  //       .toLowerCase()
  //       .includes(searchOriginTerm.toLowerCase())
  //   )
  //   .filter((ship) =>
  //     ship.nextDestination.toLowerCase().includes(searchDestTerm.toLowerCase())
  //   )
  //   .map((ship, index) => {
  //     return <ShipCover key={index} {...ship} />;
  //   });

  // const handleClick = (id) => {
  //   if (id === "mainland" && mainlandRef.current) {
  //     mainlandRef.current.scrollIntoView({ behavior: "smooth" });
  //   } else if (id === "inland" && inlandRef.current) {
  //     inlandRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div style={{ fontFamily: "Montserrat" }}>
      {/* <ImageSection handleClick={handleClick} /> */}
      <ShipSearch
        currentDestinationFilterShip={currentDestinationFilterShip}
        nextDestinationFilterShip={nextDestinationFilterShip}
        setcurrentDestinationFilterShip={setcurrentDestinationFilterShip}
        setnextDestinationFilterShip={setnextDestinationFilterShip}
        handleSearch={handleSearch}
      />
      <div className="pt-2 w-full text-center">
        {showResults ? (
          shipData.length === 0 ? (
            <center>
              <h1 className="my-5">No results found...</h1>
            </center>
          ) : (
            shipData
          )
        ) : (
          <center>
            <h1 className="mt-28 text-3xl font bold">
              Search your destination
            </h1>
          </center>
        )}
      </div>
      <div className="pt-10 h-full w-auto cursor-pointer">
        {/* <div className="flex">
          <div className="flex mx-auto mt-10 mb-10">
            <span className="text-3xl font-Nunito_Sans font-semibold text-slate-800 ">
              😎 Comfortable Reliable Experience 😁 🚢
            </span>
          </div>
        </div>

        <ShipSearch
          setSearchOriginTerm={setSearchOriginTerm}
          setSearchDestTerm={setSearchDestTerm}
        />
        <span className="text-2xl font-normal mb-3 mx-2">Featured Ships</span>
        <div className="pt-2">
          {shipData.length === 0 ? (
            <center>
              <h1>No results found...</h1>
            </center>
          ) : (
            shipData
          )}
        </div> */}
        {/* <Mainland ref={mainlandRef} />
        <SecondSchedule />
        <MainlandDetails /> */}
        {/* <Inland ref={inlandRef} /> */}
      </div>
    </div>
  );
};

export default Ship;
