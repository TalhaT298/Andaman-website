import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";

const ReturnDate = () => {
  const [openArrDate, setOpenArrDate] = useState(false);

  const [endingDate, setEndingDate] = useState([
    {
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
      <div
        onClick={() => setOpenArrDate(!openArrDate)}
        className="bg-slate-300 h-auto w-full mx-auto px-auto flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent"
      >
        <span className="mx-auto text-slate-600 text-sm font-normal">
          RETURN DATE
        </span>
        <span className="font-medium text-black text-lg mx-auto">{`${format(
          endingDate[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        <Modal
          isOpen={openArrDate}
          onRequestClose={() => setOpenArrDate(false)}
          overlayClassName="modal-overlay bg-black opacity"
          className="modal-content w-auto h-auto"
        >
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setEndingDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={endingDate}
            className="absolute -bottom-24 -mx- left-1/2 airbnbml:left-56 airbnbml:-bottom-16 sm:-bottom-16 sm:left-2"
          />
        </Modal>
        <FontAwesomeIcon icon={faCalendarDays} className="text-slate-400" />
      </div>
    </>
  );
};

export default ReturnDate;
