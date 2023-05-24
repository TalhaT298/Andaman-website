import React from "react";

import { useState } from "react";
import flightIcon from "../../images/flightIcon.png";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Link } from "react-router-dom";
import flightLogo from "../../images/flightlogo.png";
import { useDataContext } from "../../context/useDataContext";
// Always remember, the data we fetch from firebase is in objects, so, we will have to convert it into an array of objects that's why we have used
// here Object.values in flightsData

const FlightCover = (props) => {
  const { startingDate: date } = useDataContext();

  // const [showFlightInfo, setShowFlightInfo] = useState(false);

  // const [flight, setFlight] = useState([]);

  // useEffect(() => {
  //   const ref = fire
  //     .database()
  //     .ref('flights')
  //     .orderByChild('from')
  //     .equalTo('Port Blair')
  //     .orderByChild('to')
  //     .equalTo('Kolkata')
  //     .orderByChild('schedule')
  //     .equalTo('2023-02-20');
  //   const unsubscribe = ref.on('value', (snapshot) => {
  //     setFlight(snapshot.val());
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <>
      <div className="py-3 flex-col  mx-auto my-auto ">
        {/* flight ? <div>{JSON.stringify(flight)}</div> : <div>Loading...</div> */}
        <div
          // onClick={() => {
          //   setShowFlightInfo(!showFlightInfo);
          // }}
          className="flex-row bg-white rounded-xl w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
        >
          <div className="text-[#112211] flex items-center gap-16  mx-auto py-auto lg:px-0 px-4 text-center px-auto w-full xs:flex-col xs:py-2 xs:gap-y-3">
            <div className="">
              <img src={flightLogo} alt="flight-logo" className="w-32 h-24" />{" "}
              <h4 className="text-xl font-semibold">Emirates</h4>{" "}
              <p className="text-[#112211]">{props.flightName}</p>
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <div className="self-end">{date[0].startDate.toDateString()}</div>
                <div className="flex flex-col items-end gap-4">
                  <p>
                    Starting from{" "}
                    <span className="block text-right text-[#425D97] text-xl font-bold">
                      ₹ {props.adultPrice}
                    </span>{" "}
                  </p>
                  <p>{props.flightDuration} </p>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <div className="">
                  <div>
                    <span className="font-bold">{props.departureTime}</span>

                    <span className="ml-2">{props.currentDestination}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span>
                    {" "}
                    <img
                      src={flightIcon}
                      className="w-full h-8"
                      alt="flightIcon"
                    />{" "}
                  </span>
                </div>
                <div>
                  <span className="font-bold">{props.arrivalTime}</span>
                  <span className="ml-2">{props.nextDestination}</span>
                </div>
              </div>
              <Link
                to={"/FlightPreview"}
                className="flex justify-end mt-3"
              >
                <button className="bg-[#FF8682] font-semibold rounded p-[8px_16px]">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightCover;
