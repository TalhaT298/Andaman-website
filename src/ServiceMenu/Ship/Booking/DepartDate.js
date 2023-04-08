import React from "react";
import { useState } from "react";
import classes from "./ship.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";

const DepartDate = ( {setDepartDate} ) => {
  const [openDeptDate, setOpenDeptDate] = useState(false);

  const [startingDate, setStartingDate] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);

  //Depart Date
  setDepartDate(startingDate[0].startDate.toDateString())

  return (
    <>
      <div
        onClick={() => setOpenDeptDate(!openDeptDate)}
        className="bg-slate-300 h-auto w-full mx-auto px-auto flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent"
      >
      
        <span className="mx-auto text-slate-600 text-sm font-normal">
          DEPART DATE 
        </span>
        <span className="font-medium text-black text-lg mx-auto">
          {`${format(startingDate[0].startDate, "dd/MM/yyyy")}`}
        </span>
        <Modal
          isOpen={openDeptDate}
          onRequestClose={() => setOpenDeptDate(false)}
          overlayClassName="modal-overlay bg-black opacity"
          className="modal-content w-auto h-auto"
        >
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setStartingDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={startingDate}
            className={`${classes.responsivee} absolute bottom-[-2rem] -mx- left-[39%]  lg:-bottom-[8.45rem] lg:left-[30%]  md:-bottom-[20rem] md:left-[12.5rem] sm:bottom-4 sm:left-2 responsivee`}
          />
        </Modal>
        {/* airbnbml:left-56 airbnbml:-bottom-10  */}
        <FontAwesomeIcon icon={faCalendarDays} className="text-slate-400" />
        
      </div>
    </>
  );
};

export default DepartDate;
