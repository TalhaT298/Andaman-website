import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { format } from "date-fns";

const Dates = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="flex items-center gap-2 text-black">
      <FontAwesomeIcon icon={faCalendar} className="text-black" />
      <span
        onClick={() => setOpenDate(!openDate)}
        className="text-black font-extralight cursor-pointer w-auto"
      >
        {`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}
      </span>
      {/* {openDate && (
      
        )} */}
    </div>
  );
};

export default Dates;
