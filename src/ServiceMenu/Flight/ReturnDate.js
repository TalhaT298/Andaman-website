import React, { useState } from "react";

import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { useDataContext } from "../../context/useDataContext";
import { DayPicker } from "react-day-picker";

const ReturnDate = () => {
  const [openArrDate, setOpenArrDate] = useState(false);

  // const [endingDate, setEndingDate] = useState([
  //   {
  //     endDate: new Date(),
  //     key: 'selection',
  //   },
  // ]);
  const { endingDate, setEndingDate } = useDataContext();
  let footer = <p>Please pick a day.</p>;
  if (endingDate[0]?.endDate) {
    footer = <p>You picked {format(endingDate[0]?.endDate, "PP")}.</p>;
  }
  const handleDateChange = (date) => {
    setEndingDate([{ startDate: date, key: "selection" }]);
    setOpenArrDate((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={() => setOpenArrDate((prev) => !prev)}
        className="relative h-auto w-full mx-auto px-auto flex flex-col gap-y-3 py-2 airbnbml:items-center airbnbml:border-b-transparent"
      >
        <span className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-slate-400 mr-2"
          />
          RETURN
          {endingDate && (
            <small className="whitespace-nowrap">
              - {endingDate[0]?.endDate.toDateString()}
            </small>
          )}
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
        {openArrDate && (
          // <DateRange
          //   editableDateInputs={true}
          //   onChange={(item) => setEndingDate([item.selection])}
          //   moveRangeOnFirstSelection={false}
          //   ranges={endingDate}
          //   className={`absolute z-10 top-20 left-0`}
          // />
          <DayPicker
            mode="single"
            selected={endingDate[0].endDate}
            onDayClick={handleDateChange}
            footer={footer}
            className={`absolute z-50 top-16 left-0 bg-white px-2 py-2 rounded shadow`}
          />
        )}
        {/* <FontAwesomeIcon icon={faCalendarDays} className='text-slate-400' /> */}
      </div>
    </>
  );
};

export default ReturnDate;
