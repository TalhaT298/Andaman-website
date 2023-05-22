import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DateRange } from "react-date-range";

import { useDataContext } from "../../context/useDataContext";

const DepartDate = ({startingDateState,setStartingDateState}) => {
  const [openDeptDate, setOpenDeptDate] = useState(false);

  // const {startingDate, setStartingDate} = useDataContext();

  return (
    <>
      <div
        onClick={() => setOpenDeptDate(!openDeptDate)}
        className="relative h-auto w-full mx-auto px-auto flex flex-col gap-y-3  ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent"
      >
        <span className="flex items-center space-x-2 cursor-pointer border p-2 bottom-1">
        <FontAwesomeIcon icon={faCalendarDays} className="text-slate-400 mr-2" />
          DEPART
        </span>
        {/* <span className=" text-slate-400 font-bold text-lg mx-auto">
          {`${format(startingDate[0].startDate, "dd/MM/yyyy")}`}
        </span> */}
        {/* <Modal
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
            className={`${classes.responsivee} absolute -bottom-[6.8rem] -mx- left-[39%]  lg:-bottom-[8.45rem] lg:left-[30%]  md:-bottom-[20rem] md:left-[12.5rem] sm:bottom-4 sm:left-2 responsivee`}
          />
        </Modal> */}
           {openDeptDate &&
          <DateRange
            editableDateInputs={true}
            onChange={(item) =>setStartingDateState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={startingDateState}
            className={`absolute z-10 top-20 right-[-2.5rem]`}
          />
        }
        {/* airbnbml:left-56 airbnbml:-bottom-10  */}
      </div>
    </>
  );
};

export default DepartDate;
