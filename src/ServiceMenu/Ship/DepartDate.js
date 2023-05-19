import React from 'react';
import { useState } from 'react';
import classes from './Ship.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import Modal from 'react-modal';

const DepartDate = () => {
  const [openDeptDate, setOpenDeptDate] = useState(false);
  const [startingDate, setStartingDate] = useState([{ startDate: new Date(), key: 'selection' }]);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleDateModal = () => {
    setOpenDeptDate(!openDeptDate);
  };

  const handleDateSelect = (item) => {
    setSelectedDate(item.selection.startDate);
    setStartingDate([item.selection]);
    setOpenDeptDate(false);
  };

  return (
    <div
      onClick={toggleDateModal}
      className='w-56 border border-slate-300 py-3 px-3 hover:border-2 hover:border-rose-400 hover:rounded-md'
    >
      <FontAwesomeIcon icon={faCalendarDays} className='text-slate-900 mr-3' />
      {selectedDate ? (
        <span className='text-black text-lg'>
          {`${format(selectedDate, 'dd/MM/yyyy')}`}
        </span>
      ) : (
        <span className='text-slate-600'>DEPART DATE</span>
      )}

      <Modal
        isOpen={openDeptDate}
        onRequestClose={toggleDateModal}
        overlayClassName='modal-overlay bg-black opacity'
        className='modal-content w-auto h-auto'
      >
        <DateRange
          editableDateInputs={true}
          onChange={handleDateSelect}
          moveRangeOnFirstSelection={false}
          ranges={startingDate}
          className={`${classes.responsivee} absolute -bottom-[-1rem] -mx- left-[45%]  lg:-bottom-[8.45rem] lg:left-[30%]  md:-bottom-[20rem] md:left-[12.5rem] sm:bottom-4 sm:left-2 responsivee`}
        />
      </Modal>
    </div>
  );
};

export default DepartDate;
