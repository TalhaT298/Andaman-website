import React from 'react';
import { useState } from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

const ActivityCover = (props) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [showFlightInfo, setShowFlightInfo] = useState(false);

  return (
    <div className='py-3 flex-col w-5/6 mx-auto my-auto '>
      <div
        onClick={() => {
          setShowFlightInfo(!showFlightInfo);
        }}
        className='flex-row rounded-lg bg-slate-900 w-auto py-8 h-auto drop-shadow-2xl shadow-black shadow-lg transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform'
      >
        <div className='text-slate-200 flex items-center justify-between mx-auto py-auto px-4 text-center px-auto w-auto xs:flex-col xs:py-2 xs:gap-y-3'>
          <span className='uppercase'>{props.flightName}</span>
          <span>{props.travelRoute}</span>
          <span>{`${format(date[0].startDate, 'dd/MM/yyyy')}`}</span>

          <div className='flex gap-2'>
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
        <div className='mx-auto h-60 w-auto bg-slate-900 my-6 text-white px-auto rounded-lg'>
          <div className='h-60 w-auto bg-slate-900 mx-auto px-auto rounded-lg'>
            <div className='flex flex-col h-60 w-full justify-between mx-auto py-3 p-1 text-center px-auto'>
              <div className='flex flex-row px-auto'>
                <div className='flex flex-col mx-auto py-1 w-36 px-auto'>
                  <span className='text-lg uppercase font-thin py-1 my-auto'>
                    {props.flightName}
                  </span>
                  <span className='text-sm uppercase font-thin py-1 my-auto'>
                    {props.flightGateway}
                  </span>
                </div>
                <div className='flex flex-col mx-auto py-2 w-36'>
                  <span className='text-base uppercase font-thin my-auto'>
                    {props.travelRoute}
                  </span>
                </div>
                <div className='flex flex-col mx-auto py-2 w-36'>
                  <span className='text-xl uppercase font-bold my-auto'>
                    ₹ {props.adultPrice}
                  </span>
                  {/* <span>₹ {props.childrenPrice}</span> */}
                </div>
              </div>
              <div className='flex flex-row px-auto'>
                <div className='flex flex-col mx-auto py-2 w-32'>
                  <span className='text-xl uppercase font-medium py-1 my-auto'>
                    {props.departureTime}
                  </span>
                  <span className='text-sm uppercase font-thin py-1'>
                    {props.currentDestination}
                  </span>
                </div>
                <div className='flex flex-col mx-auto py-2 w-32'>
                  <span className='text-base uppercase font-thin py-1'>
                    {props.flightDuration}
                  </span>
                  <span className='text-xs uppercase font-thin py-1'>
                    {props.flightInterval}
                  </span>
                </div>
                <div className='flex flex-col mx-auto py-2 w-32'>
                  <span className='text-xl uppercase font-medium py-1 my-auto'>
                    {props.arrivalTime}
                  </span>
                  <span className='text-sm uppercase font-thin py-1'>
                    {props.nextDestination}
                  </span>
                </div>
              </div>
              <div className='flex flex-col mx-auto py-1 w-32'>
                <button className='pb-1 rounded-md h-10 bg-gradient-to-br to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600'>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityCover;
