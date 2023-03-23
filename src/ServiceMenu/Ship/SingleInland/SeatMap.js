import React from "react";

const SeatMap = () => {
  return (
    <div>
      <h1
        style={{ fontFamily: "Glook" }}
        className=" text-5xl lg:text-3xl font-bold lg:mb-12 text-center"
      >
        Book your Seats Now
      </h1>
    </div>
  );
};

export default SeatMap;

// import {seatData} from "./Data/seatData"; // import seat data from a separate file

// const Seat = ({ id, status, onClick }) => {
//   const seatStatusClass =
//     status === "booked"
//       ? "bg-red-500 cursor-default"
//       : status === "selected"
//       ? "bg-blue-500 cursor-pointer"
//       : "bg-gray-200 cursor-pointer";

//   return (
//     <div
//       className={`w-10 h-10 ${seatStatusClass} rounded-full flex items-center justify-center`}
//       onClick={() => onClick(id)}
//     >
//       <span className="sr-only">{status}</span>
//     </div>
//   );
// };

// const SeatBooking = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [seatList, setSeatList] = useState(seatData); // initialize state with seat data

//   const handleSeatClick = (seatId) => {
//     const updatedSeatList = seatList.map((seat) => {
//       if (seat.id === seatId && seat.status === "available") {
//         return { ...seat, status: "selected" };
//       }
//       return seat;
//     });
//     setSeatList(updatedSeatList);
//   };

//   const handleBookSeats = () => {
//     const bookedSeatIds = selectedSeats.map((seatId) => {
//       const bookedSeat = seatList.find((seat) => seat.id === seatId);
//       return { ...bookedSeat, status: "booked" };
//     });
//     setSeatList([...seatList, ...bookedSeatIds]);
//     setSelectedSeats([]);
//   };

//   // const handleAddSeat = () => {
//   //   const newSeatId = seatList.length + 1;
//   //   setSeatList([...seatList, { id: newSeatId, status: "available" }]);
//   // };

//   return (
//     <div className="p-4 sm:p-8">
//       <h1 className="text-2xl font-bold mb-4">Select your seats</h1>
//       <div className="flex flex-wrap gap-2">
//         {seatList.map((seat) => (
//           <Seat
//             key={seat.id}
//             id={seat.id}
//             status={seat.status}
//             onClick={handleSeatClick}
//           />
//         ))}
//       </div>
//       <div className="mt-4">
//         {/* <button
//           className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 mr-2"
//           onClick={handleAddSeat}
//         >
//           Add Seat
//         </button> */}
//         <button
//           className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
//           onClick={handleBookSeats}
//           disabled={selectedSeats.length === 0}
//         >
//           Book {selectedSeats.length} seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SeatBooking;
