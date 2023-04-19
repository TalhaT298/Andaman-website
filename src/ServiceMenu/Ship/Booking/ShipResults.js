import React, { useState } from 'react'
import Navforwithout from '../../../Navforwithout'
import ShipCover from './ShipCover'
import ship from '../../../Data/Ship-Section/BookingShips';
import { useLocation, useNavigate } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import CheckIcon from '@mui/icons-material/CheckCircle';

const ShipResults = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const { state } = location
    const { origin, destination, departDate, returnDate, travellerDetails } = state

    //filter Morning/evening
    const [selectedValue, setSelectedValue] = useState('');

    const handleRadioChange = (event) => {
      setSelectedValue(event.target.value);
    }

    //Two Way
    let returnOrigin = ""
    let returnDestination = ""
    if(returnDate){
      returnOrigin = destination
      returnDestination = origin
    }    

    //trip summarries
    const [tripSummaries, setTripSummaries] = useState([])
    const [count, setCount] = useState(0);    

    //display ship results
    let shipData
    if(tripSummaries.length === 1){
      shipData = ship
      .filter((ship) =>
        ship.currentDestination
          .toLowerCase()
          .includes(returnOrigin.toLowerCase())
      )
      .filter((ship) =>
        ship.nextDestination
          .toLowerCase()
          .includes(returnDestination.toLowerCase())
      )
      .filter(ship => selectedValue ? ship.shift === selectedValue : true)
      .map((ship, index) => {
        return <ShipCover key={ship.shipID} {...ship} tripSummaries={tripSummaries} setTripSummaries={setTripSummaries} />;
      });
    }
    else {
      shipData = ship
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
      .filter(ship => selectedValue ? ship.shift === selectedValue : true)
      .map((ship, index) => {
        return <ShipCover key={ship.shipID} {...ship} tripSummaries={tripSummaries} setTripSummaries={setTripSummaries} />;
      });
    }       

    //display tripSummaries
    const tripData = tripSummaries.map((trip, index) => {
      return <div key={index}>

      <div className='flex gap-3 mt-4 mb-2 text-[15px]'>
        <h1 className='border-b border-black font-bold'>Trip-{index+1}:</h1>
        <h1 className='font-bold'>{index === 1 ? trip.returnOrigin : trip.origin} -&gt; {index === 1 ? trip.returnDestination : trip.destination}</h1>  
      </div>

      <div className='flex flex-col gap-1 text-sm ml-1'>
      <div className='flex gap-2'>
        <h1>Date: </h1>
        <h1 className='font-bold'>{index === 1 ? trip.returnDate.slice(3) : trip.departDate.slice(3)}</h1>  
      </div>

      <div className='flex gap-2'>
        <h1>Time: </h1>
        <h1 className='font-bold'>{trip.departTime} to {trip.arrivalTime}</h1>  
      </div>

      <div className='flex gap-2'>
        <h1>Ferry: </h1>
        <h1 className='font-bold'>{trip.shipName}(<span className='italic font-normal'>{trip.shipClass} Class</span>)</h1>  
      </div>

      <div className='flex flex-wrap gap-x-2'>
        <h1>Total Fare: </h1>
        <h1 className='font-bold'>
        {trip.travellerDetails.adult} x Adult(₹ {trip.adultFare})
        {trip.travellerDetails.infant !== 0 ? 
          <span> + {trip.travellerDetails.infant} x Infant(₹ {trip.infantFare})
          </span> 
          : 
          "" 
        }
        <span> = ₹ {(trip.travellerDetails.adult * trip.adultFare) + (trip.travellerDetails.adult * trip.infantFare)}</span>
        </h1>  
      </div>
      </div> 
      </div>                    
    })  
    
    //navigate if tripSummaries is full
    if(tripSummaries.length === 2){
      navigate('/travellerDetails', { 
        state : {
          origin, 
          destination, 
          departDate,          
          travellerDetails,
          tripSummaries,
          adultFare: 1450,
          infantFare: 0
        } 
      })
    }

  return (
    <>
    <Navforwithout />

    <div className='w-[90%] mx-auto flex lg:flex-col gap-y-6'>

    {/* Filter Results */}
    <div className='mt-6'>      
      <h1 className="text-[22px] mb-3 text-[#699c78] md:text-xl font-Ubuntu_Mono font-semibold">
        Filter Your Result
      </h1> 

    <div className='mb-2'>
      <span 
        className='hover:cursor-pointer text-orange-400' 
        onClick={() => setSelectedValue("")}
      >
      Clear Filter
      </span>
    </div>

    <div>
      <input
          id='morning'
          type="radio"
          name="option"
          value="morning"
          checked={selectedValue === 'morning'}
          onChange={handleRadioChange}
          className='mr-1'
      />          
      <label htmlFor='morning' className={selectedValue === 'morning' ? "text-orange-400" : ""}> 
        Morning to Evening     
      </label>
    </div>   

    <div>
      <input
          id='evening'
          type="radio"
          name="option"
          value="evening"
          checked={selectedValue === 'evening'}
          onChange={handleRadioChange}
          className='mr-1'
      />          
      <label htmlFor='evening' className={selectedValue === 'evening' ? "text-orange-400" : ""}> 
        Evening to Morning   
      </label>
    </div>   
   

    </div>

    <div className='basis-[70%] '>
    {
      returnDate ? 
      <h1 className='text-[#699c78] text-center text-2xl font-semibold mt-6'>Two Way Trip</h1> 
      : 
      <h1 className='text-[#699c78] text-center text-2xl font-bold mt-6'>One Way Trip</h1>
    }
    

    <div className='mx-auto '>
      <div className='mt-5 lg:mt-3'>
        <h1 className='text-xl text-center font-semibold '>
          <CheckIcon fontSize='small' className={tripSummaries.length > 0? "text-green-600" : "text-gray-400"} /> {origin} <EastIcon fontSize='small' /> {destination}
        </h1>
        <h1 className='text-base text-center font-semibold text-slate-500 italic'>{departDate.slice(3)}</h1>
      </div>

      {returnDate && 
      <div className='mt-2'>
        <h1 className='text-xl text-center font-semibold'>
          <CheckIcon fontSize='small' className={tripSummaries.length > 1? "text-green-600" : "text-gray-400"} /> {returnOrigin} <EastIcon fontSize='small' /> {returnDestination}
        </h1>
        <h1 className='text-base text-center font-semibold text-slate-500 italic'>{returnDate.slice(3)}</h1>
      </div>
      }
    </div>
    

    <div className='w-full mx-auto mt-6'>
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

    <div className="mt-6 mb-8 ">    
      <h1 className="text-[26px] text-[#699c78] md:text-2xl font-Ubuntu_Mono font-semibold">
        Trip Summary
      </h1>  
      {
        tripData.length === 0 ? 
        <h1 className='mt-3'>Please select seats to proceed with booking.</h1> 
        : 
        tripData
      }
    </div>

    </div>
    </>
  )
}

export default ShipResults