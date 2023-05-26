import React from "react";

import { useState } from "react";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import { format } from 'date-fns';

// Always remember, the data we fetch from firebase is in objects, so, we will have to convert it into an array of objects that's why we have used
// here Object.values in flightsData

const FlightCover = (props) => {
  //   const [date, setDate] = useState([
  //     {
  //       startDate: new Date(),
  //       endDate: new Date(),
  //       key: 'selection',
  //     },
  //   ]);

  const [showFlightInfo, setShowFlightInfo] = useState(false);

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
      <div className="py-3 flex-col w-5/6 mx-auto my-auto ">
        {/* flight ? <div>{JSON.stringify(flight)}</div> : <div>Loading...</div> */}
        <div
          onClick={() => {
            setShowFlightInfo(!showFlightInfo);
          }}
          className="flex-row rounded-lg bg-gray-700 w-auto py-8 h-auto drop-shadow-2xl shadow-black shadow-lg transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
        >
          <div className="text-slate-200 flex items-center justify-between mx-auto py-auto px-4 text-center px-auto w-auto xs:flex-col xs:py-2 xs:gap-y-3">
            <span className="uppercase">{props.flightName}</span>
            <span>{props.travelRoute}</span>
            <span>{props.travelDate}</span>

            <div className="flex gap-2">
              <div>
                <span>{props.departureTime}</span>
              </div>
              <span> - </span>
              <div>
                <span>{props.arrivalTime}</span>
              </div>
            </div>
            <span>₹ {props.adultPrice}</span>
          </div>
        </div>

        {showFlightInfo && (
          <div className="mx-auto h-64 w-auto bg-slate-500 my-6 text-white px-auto rounded-lg">
            <div className="h-60 w-auto bg-slate-500 mx-auto px-auto rounded-lg">
              <div className="flex flex-col h-60 w-full justify-between mx-auto py-3 p-1 text-center px-auto">
                <div className="flex flex-row px-auto">
                  <div className="flex flex-col mx-auto py-1 w-36 px-auto">
                    <span className="text-lg uppercase font-thin py-1 my-auto">
                      {props.flightName}
                    </span>
                    <span className="text-sm uppercase font-thin py-1 my-auto">
                      {props.flightIDNo}
                    </span>
                  </div>
                  <div className="flex flex-col mx-auto py-2 w-36 px-auto">
                    <span className="text-base uppercase font-thin my-auto">
                      {props.travelRoute}
                    </span>
                    <span className="text-sm uppercase font-thin py-1 my-auto">
                      {props.flightBaggage}
                    </span>
                  </div>
                  <div className="flex flex-col mx-auto py-2 w-36 px-auto">
                    <span className="text-xl uppercase font-bold my-auto">
                      ₹ {props.adultPrice}
                    </span>
                    <span className="text-sm uppercase font-thin py-1 my-auto">
                      {props.flightFreebie}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row px-auto">
                  <div className="flex flex-col mx-auto py-2 w-32">
                    <span className="text-xl uppercase font-medium py-1 my-auto">
                      {props.departureTime}
                    </span>
                    <span className="text-sm uppercase font-thin py-1 tracking-widest">
                      {props.currentDestination}
                    </span>
                  </div>
                  <div className="flex flex-col mx-auto py-2 w-32">
                    <span className="text-base uppercase font-thin py-1">
                      {props.flightDuration}
                    </span>
                    <span className="text-xs uppercase font-thin py-1 tracking-widest">
                      {props.flightInterval}
                    </span>
                  </div>
                  <div className="flex flex-col mx-auto py-2 w-32">
                    <span className="text-xl uppercase font-medium py-1 my-auto">
                      {props.arrivalTime}
                    </span>
                    <span className="text-sm uppercase font-thin py-1">
                      {props.nextDestination}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mx-auto py-1 w-28">
                  <button className="pb-1 rounded-sm h-10 bg-pink-800 text-white">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FlightCover;
