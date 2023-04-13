import React from 'react'
import Navforwithout from '../../../Navforwithout'
import ShipCover from './ShipCover'
import ship from '../../../Data/Ship-Section/BookingShips';
import { useLocation } from 'react-router-dom';

const ShipResults = () => {

    const location = useLocation();
    const { state } = location
    const { origin, destination, departDate, returnDate } = state

    const shipData = ship
      .filter((ship) =>
        ship.currentDestination
          .toLowerCase()
          .includes(origin.toLowerCase())
      )
      .filter((ship) =>
        ship.nextDestination
          .toLowerCase()
          .includes(destination.toLowerCase())
      )
      .map((ship, index) => {
        return <ShipCover key={ship.shipID} {...ship} />;
      });


  return (
    <>
    <Navforwithout />

  <div>
    <h1 className='text-2xl text-center font-semibold mt-12 '>
      {origin} <span className='text-2xl'>to</span> {destination}
    </h1>
    <h1 className='text-xl text-center font-semibold mb-10 text-slate-500 italic'>{departDate.slice(3)}</h1>

    <div className='w-[80%] mx-auto'>
    <div className="pt-2 w-full text-center">
        <span className="text-3xl font-semibold mb-6 mx-auto w-full text-slate-800">
          Ferry Results
        </span>
        {shipData.length === 0 ? (
          <center>
            <h1 className="my-5">No ferries found...</h1>
          </center>
        ) : (
          shipData
        )}
      </div>
    </div>
    </div>

    <div>

    </div>
    </>
  )
}

export default ShipResults