import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Dates = () => {

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    ]);

    return (
      <div className='flex items-center gap-2 text-black'>
        <FontAwesomeIcon icon={faCalendarDays} className='text-black' />
        <span
          onClick={() => setOpenDate(!openDate)}
          className='text-black font-extralight cursor-pointer w-auto'
        >
          {`${format(date[0].startDate, 'dd/MM/yyyy')} - ${format(
            date[0].endDate,
            'dd/MM/yyyy'
          )}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='absolute top-12 ml:top-14 md:top-14 sm:top-20 xs:top-16 -mx-14 overflow-y-auto z-auto overflow-visible h-fit'
          />
        )}
      </div>
    );
  };

export default Dates;
