import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import Modal from 'react-modal';

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

function searchShip(origin, destination, startingDate) {
  const endpoint = 'https://example.com/api/ship';
  const params = {
    origin: origin,
    destination: destination,
    starting_Date: startingDate,
  };

  return fetch(endpoint + '?' + new URLSearchParams(params))
    .then((response) => response.json())
    .then((data) => {
      return data.ship;
    })
    .catch((error) => {
      console.error(error);
    });
}

const ShipSearch = () => {
  const [openOrigin, setOpenOrigin] = useState(false);
  const [openDestination, setOpenDestination] = useState(false);
  const [origin, setOrigin] = useState('Port Blair');
  const [destination, setDestination] = useState('Banglore');
  const [ship, setShip] = useState([]);
  const [openDeptDate, setOpenDeptDate] = useState(false);
  const [openArrDate, setOpenArrDate] = useState(false);
  const [passengerClass, setPassengerClass] = useState('ECONOMY');
  const [startingDate, setStartingDate] = useState([
    {
      startDate: new Date(),
      key: 'selection',
    },
  ]);

  const [endingDate, setEndingDate] = useState([
    {
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openTravellerInfo, setOpenTravellerInfo] = useState(false);
  const [travellerInfo, setTravellerInfo] = useState({
    adult: 1,
    children: 0,
    infant: 0,
    traveller: 0,
  });

  const handleTravellerInfo = (category, arithmetricOperation) => {
    setTravellerInfo((prev) => {
      return {
        ...prev,
        [category]:
          arithmetricOperation === 'i'
            ? travellerInfo[category] + 1
            : travellerInfo[category] - 1,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchShip(origin, destination, startingDate).then((results) => {
      setShip(results);
    });
  };

  const [twoWay, setTwoWay] = useState(false);

  return (
    <div className='flex flex-col h-full w-full my-6'>
      <div className='flex'></div>
      <div className='flex gap-6 mx-auto'>
        <span
          onClick={() => {
            setTwoWay(false);
          }}
          className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'
        >
          One Way
        </span>
        <span
          onClick={() => {
            setTwoWay(true);
          }}
          className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'
        >
          Two Way
        </span>
        {/* <span className='font-medium border-solid border-2 px-1 py-1 hover:bg-rose-500 rounded-md hover:border-none'>
          Multi-City
        </span> */}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='font-medium text-slate-800 flex h-auto w-full my-4 mx-auto flex-row airbnbml:flex-col ml:w-auto airbnbml:w-96  xs:w-64'>
          <div className='bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
            <span className='text-slate-600 text-sm font-normal'>FROM</span>
            <span
              onClick={() => {
                setOpenOrigin(!openOrigin);
              }}
              className='font-bold text-black text-lg uppercase'
            >
              {origin}
            </span>
            <span className='text-slate-800  text-xs'>[BOM]</span>
            {openOrigin && (
              <input
                type='text'
                value={origin}
                onChange={(event) => setOrigin(event.target.value)}
                className='absolute'
              />
            )}
          </div>
          <div className='bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
            <span className='text-slate-600 text-sm font-normal'>TO</span>
            <span
              onClick={() => {
                setOpenDestination(!openDestination);
              }}
              className='font-bold text-black text-lg uppercase'
            >
              {destination}
            </span>
            <span className='text-slate-800  text-xs'>[BLR]</span>{' '}
            {/* w-full whitespace-nowrap overflow-hidden text-ellipsis */}
            {openDestination && (
              <input
                type='text'
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                className='absolute'
              />
            )}
          </div>
          

          <div
            onClick={() => setOpenDeptDate(!openDeptDate)}
            className='bg-slate-300 h-auto w-full mx-auto px-auto flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'
            >
            <span className='mx-auto text-slate-600 text-sm font-normal'>
              DEPART DATE
            </span>
            <span className='font-medium text-black text-lg mx-auto'>
              {`${format(startingDate[0].startDate, 'dd/MM/yyyy')}`}
            </span>
            <Modal
              isOpen={openDeptDate}
              onRequestClose={() => setOpenDeptDate(false)}
              overlayClassName='modal-overlay bg-black opacity'
              className='modal-content w-auto h-auto'
            >
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setStartingDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={startingDate}
                className='absolute -bottom-24 -mx- left-1/3 airbnbml:left-56 airbnbml:-bottom-10 sm:bottom-4 sm:left-2'
              />
            </Modal>
            <FontAwesomeIcon icon={faCalendarDays} className='text-slate-400' />
          </div>

          {twoWay && (
            <div
              onClick={() => setOpenArrDate(!openArrDate)}
              className='bg-slate-300 h-auto w-full mx-auto px-auto flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'
            >
              <span className='mx-auto text-slate-600 text-sm font-normal'>
                RETURN DATE
              </span>
              <span className='font-medium text-black text-lg mx-auto'>{`${format(
                endingDate[0].endDate,
                'dd/MM/yyyy'
              )}`}</span>
              <Modal
                isOpen={openArrDate}
                onRequestClose={() => setOpenArrDate(false)}
                overlayClassName='modal-overlay bg-black opacity'
                className='modal-content w-auto h-auto'
              >
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setEndingDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={endingDate}
                  className='absolute -bottom-24 -mx- left-1/2 airbnbml:left-56 airbnbml:-bottom-16 sm:-bottom-16 sm:left-2'
                />
              </Modal>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className='text-slate-400'
                />
            </div>
          )}
          <div className='bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
            <span className='mx-auto text-slate-600 text-sm font-normal'>
              TRAVELLER & CLASS
            </span>
            <span
              onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
              className='font-medium text-black text-lg mx-auto'
            >
              {`${
                travellerInfo.adult +
                travellerInfo.children +
                travellerInfo.infant
              }`}{' '}
              Traveller(s)
            </span>
            <span className='mx-auto text-slate-800 text-xs'>
              {passengerClass}
            </span>

            <Modal
              isOpen={openTravellerInfo}
              overlayClassName='modal-overlay bg-black opacity'
              className='modal-content w-auto h-auto ml-96'
            >
              <div className='flex flex-col absolute bg-slate-100 bottom-16 right-96 airbnbml:-bottom-10 sm:right-44 sm:-bottom-10 w-auto h-auto py-3 mx-auto px-auto space-x-4'>
                <div className='flex flex-row mx-auto px-auto items-center gap-x-4'>
                  <span className='optionText'>Adult</span>
                  <div className='mx-auto px-auto space-x-6'>
                    <button
                      disabled={travellerInfo.adult <= 1}
                      onClick={() => handleTravellerInfo('adult', 'd')}
                      className='disabled:cursor-not-allowed'
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>
                      {travellerInfo.adult}
                    </span>
                    <button
                      onClick={() => handleTravellerInfo('adult', 'i')}
                      className=''
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='flex flex-row mx-auto px-auto items-center gap-x-4 '>
                  <span className='optionText'>Children</span>
                  <div className='mx-auto px-auto space-x-6'>
                    <button
                      disabled={travellerInfo.children <= 1}
                      onClick={() => handleTravellerInfo('children', 'd')}
                      className='disabled:cursor-not-allowed'
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>
                      {travellerInfo.children}
                    </span>
                    <button
                      onClick={() => handleTravellerInfo('children', 'i')}
                      className=''
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='flex flex-row mx-auto px-auto items-center gap-x-4'>
                  <span className='optionText'>Infant</span>
                  <div className='mx-auto px-auto space-x-6'>
                    <button
                      disabled={travellerInfo.infant <= 1}
                      onClick={() => handleTravellerInfo('infant', 'd')}
                      className='disabled:cursor-not-allowed'
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>
                      {travellerInfo.infant}
                    </span>
                    <button
                      onClick={() => handleTravellerInfo('infant', 'i')}
                      className=''
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='flex flex-col pt-3'>
                  <span
                    onClick={() => setPassengerClass('ECONOMY')}
                    className=''
                  >
                    Economy
                  </span>
                  <span
                    onClick={() => setPassengerClass('BUSINESS')}
                    className=''
                  >
                    Business
                  </span>
                  <span onClick={() => setPassengerClass('FIRST')} className=''>
                    First
                  </span>
                </div>
              </div>
            </Modal>
          </div>
          <div className='bg-gradient-to-br to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600 hover:text-white h-auto w-full flex flex-col gap-y-3 border-solid border-2 border-slate-300 mx-auto px-2 px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center'>
            <button
              type='submit'
              className='text-center text-white text-xl font-medium font-Nunito_Sans mx-auto my-auto w-full h-auto'
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShipSearch;
