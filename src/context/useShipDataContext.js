import React, { createContext, useContext, useState } from "react";

// Create the DataContext
const DataContext = createContext(null);

// Create the DataProvider component
export const ShipDataProvider = ({ children }) => {
  // Location State
  const [currentDestinationFilter, setCurrentDestinationFilter] =
    useState("Chennai");
  const [nextDestinationFilter, setNextDestinationFilter] =
    useState("Port Blair");
  const [currentDestinationFilterShip, setcurrentDestinationFilterShip] =
    useState("Chennai");
  const [nextDestinationFilterShip, setnextDestinationFilterShip] =
    useState("Port Blair");
  // Option State

  const [travellerInfo, setTravellerInfo] = useState({
    adult: 1,
    children: 0,
    infant: 0,
    traveller: 0,
  });

  // Depart State

  const [startingDate, setStartingDate] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);

  // Return State

  const [endingDate, setEndingDate] = useState([
    {
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Flight Search State
  const [passengerClass, setPassengerClass] = useState("ECONOMY");
  const [flightSearch, setFlightSearch] = useState(false);

  // TripSummary
  const [flightDataState, setFlightDataState] = useState({});
  const [coverData, setCoverData] = useState({});

  const [adultDetails, setAdultDetails] = useState([]);
  const [childrenDetails, setChildrenDetails] = useState([]);
  const [infantDetails, setInfantDetails] = useState([]);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    altPhone: "",
  });

  const state = {
    travellerInfo,
    setTravellerInfo,
    startingDate,
    setStartingDate,
    currentDestinationFilter,
    setCurrentDestinationFilter,
    nextDestinationFilter,
    setNextDestinationFilter,
    currentDestinationFilterShip,
    nextDestinationFilterShip,
    setcurrentDestinationFilterShip,
    setnextDestinationFilterShip,
    endingDate,
    setEndingDate,
    flightDataState,
    setFlightDataState,
    adultDetails,
    setAdultDetails,
    childrenDetails,
    setChildrenDetails,
    infantDetails,
    setInfantDetails,
    contactDetails,
    setContactDetails,
    passengerClass,
    setPassengerClass,
    flightSearch,
    setFlightSearch,
    coverData,
    setCoverData,
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

// Create the useShipDataContext hook to access the context
export const useShipDataContext = () => useContext(DataContext);
