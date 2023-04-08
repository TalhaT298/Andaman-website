import React, { useState } from 'react'
import Navforwithout from '../../../Navforwithout'
import ShipBookingSearch from './ShipBookingSearch';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaidIcon from '@mui/icons-material/Paid';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const ShipBooking = () => {

    //search feature
    const [searchOriginTerm, setSearchOriginTerm] = useState('');
    const [searchDestTerm, setSearchDestTerm] = useState('');  
    
  return (
    <>
    <Navforwithout />

    <div className="pt-10 h-full w-auto cursor-pointer">
      <div className="flex">
        <div className="flex-col mx-auto mt-5 mb-10 space-y-5">
          <p className="text-3xl font-Nunito_Sans font-semibold text-slate-600">
            Book Your Ferry
          </p>          
        </div>
      </div>
      <ShipBookingSearch
        setSearchOriginTerm={setSearchOriginTerm}
        setSearchDestTerm={setSearchDestTerm}
      />
      
    </div>
    <div className='w-[80%] mx-auto mt-14 mb-16'>
        <h1 className='text-3xl font-Nunito_Sans font-semibold text-slate-600 text-center'>Ferry Booking Process</h1>

        <div className='mt-16 text-xl flex flex-wrap gap-y-6 gap-x-3 [&>div]:basis-[23%] lg:[&>div]:basis-[48%] justify-center items-baseline'>
            <div className='flex flex-col gap-2 justify-center items-center '>
                <ContentPasteSearchIcon fontSize='large' className='text-orange-500 scale-125'/> 
                <p className='text-orange-500 text-[22px] '>Search</p>
                <p className='text-[16px] w-[90%] text-center font-Nunito_Sans'>and compare ferries from a large selection</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <CreditCardIcon fontSize='large' className='text-pink-500 scale-125'/> 
                <p className='text-pink-500 text-[22px]'>Order</p>
                <p className='text-[16px] w-[90%] text-center font-Nunito_Sans'>tickets by securely paying only ₹ 200 per ticket</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center '>
                <PaidIcon fontSize='large' className='text-blue-500 scale-125'/> 
                <p className='text-blue-500 text-[22px]'>Receive</p>
                <p className='text-[16px] w-[90%] text-center font-Nunito_Sans'>your confirmed ticket in 3-4 working hours</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center '>
                <CreditScoreIcon fontSize='large' className='text-green-500 scale-125'/> 
                <p className='text-green-500 text-[22px]'>Pay</p>
                <p className='text-[16px] w-[90%] text-center font-Nunito_Sans'>the balance money in the next 24 hours & enjoy your trip</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default ShipBooking