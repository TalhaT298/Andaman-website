// import React from "react";
// import { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DateRange } from "react-date-range";
// import { format } from "date-fns";
// import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

// import Modal from "react-modal";

// const ReturnDate = ({ setReturnDate }) => {
//   const [openArrDate, setOpenArrDate] = useState(false);

//   const [endingDateShip, setEndingDateShip] = useState([
//     {
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   //Depart Date
//   setReturnDate(endingDateShip[0].endDate.toDateString());

//   return (
//     <>
//       <div
//         onClick={() => setOpenArrDate(!openArrDate)}
//         className="relative bg-slate-300 h-auto w-full mx-auto px-auto flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent"
//       >
//         <span className="mx-auto text-slate-600 text-sm font-normal">
//           RETURN DATE
//         </span>
//         <span className="font-medium text-black text-lg mx-auto">{`${format(
//           endingDateShip[0].endDate,
//           "dd/MM/yyyy"
//         )}`}</span>
//         {/* <Modal
//           isOpen={openArrDate}
//           onRequestClose={() => setOpenArrDate(false)}
//           overlayClassName='modal-overlay bg-black opacity'
//           className='modal-content w-auto h-auto'
//         > */}

//         {openArrDate && (
//           <DateRange
//             editableDateInputs={true}
//             onChange={(item) => setEndingDateShip([item.selection])}
//             moveRangeOnFirstSelection={false}
//             ranges={endingDateShip}
//             className="absolute z-10 top-20 right-[-4rem]"
//           />
//         )}

//         {/* </Modal> */}
//         <FontAwesomeIcon icon={faCalendarDays} className="text-slate-400" />
//       </div>
//     </>
//   );
// };

// export default ReturnDate;
