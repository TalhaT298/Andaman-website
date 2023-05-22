import React, { useState } from 'react';

import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';

import { useDataContext } from '../../context/useDataContext';

const ReturnDate = () => {
  const [openArrDate, setOpenArrDate] = useState(false);

  // const [endingDate, setEndingDate] = useState([
  //   {
  //     endDate: new Date(),
  //     key: 'selection',
  //   },
  // ]);
const {endingDate, setEndingDate}=useDataContext();
  return (
    <>
      <div
        onClick={() => setOpenArrDate(!openArrDate)}
        className="relative h-auto w-full mx-auto px-auto flex flex-col gap-y-3  ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent"
        >
          <span className="flex items-center space-x-2 cursor-pointer border p-2 bottom-1">
          <FontAwesomeIcon icon={faCalendarDays} className="text-slate-400 mr-2" />
            RETURN
          </span>
        {/* <span className='font-medium text-black text-lg mx-auto'>{`${format(
          endingDate[0].endDate,
          'dd/MM/yyyy'
        )}`}</span> */}
        {/* <Modal
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
        </Modal> */}
           {openArrDate &&
          <DateRange
          editableDateInputs={true}
          onChange={(item) => setEndingDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={endingDate}
            className={`absolute z-10 top-20 right-[-2.5rem]`}
          />
        }
        {/* <FontAwesomeIcon icon={faCalendarDays} className='text-slate-400' /> */}
      </div>
    </>
  );
};

export default ReturnDate;
