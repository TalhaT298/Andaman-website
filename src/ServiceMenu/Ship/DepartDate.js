import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DateRange } from "react-date-range";

import { useDataContext } from "../../context/useDataContext";

const DepartDate = () => {
  const [openDeptDate, setOpenDeptDate] = useState(false);
  const [startingDate, setStartingDate] = useState([
    { startDate: new Date(), key: "selection" },
  ]);
  const { selectedDate, setSelectedDate } = useDataContext();

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
      className="relative h-auto w-full flex flex-col gap-y-3  mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent"
      onClick={toggleDateModal}
    >
      {/* <FontAwesomeIcon
        icon={faCalendarDays}
        onClick={toggleDateModal}
        className="text-slate-900 mr-3"
      /> */}
      {/* {selectedDate ? (
        <span className="text-black text-lg">
          {`${format(selectedDate, "dd/MM/yyyy")}`}
        </span>
      ) : (
        <span className="text-slate-600">DEPART DATE</span>
      )} */}
      <span className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1">
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="text-slate-400 mr-2"
        />
        DEPART -
        {selectedDate && (
          <small className="lexs:whitespace-normal whitespace-nowrap">
            {selectedDate.toDateString()}
          </small>
        )}
      </span>

      {/* <Modal
        isOpen={openDeptDate}
        onRequestClose={toggleDateModal}
        overlayClassName="modal-overlay bg-black opacity"
        className="modal-content w-auto h-auto"
      > */}
      {openDeptDate && (
        <DateRange
          editableDateInputs={true}
          onChange={handleDateSelect}
          moveRangeOnFirstSelection={false}
          ranges={startingDate}
          className={`absolute z-10 top-20 left-0`}
        />
      )}
      {/* </Modal> */}
    </div>
  );
};

export default DepartDate;
