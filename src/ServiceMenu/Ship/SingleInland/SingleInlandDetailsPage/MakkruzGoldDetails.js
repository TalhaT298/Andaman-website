import React, { useRef, useMemo } from "react";
import NavforWithout from "../../../../Navforwithout";
// import Schedule from "../Schedule";
// import ImageSection from "../ImageSection";
// import Features from "../Features";
// import SeatMap from "../SeatMap";
import classes from "../Schedule.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data as Inland } from "../Data/FerriesData";
import { useTable } from "react-table";
import {
  // faConciergeBell,
  // faUtensils,
  // faGlobe,
  // faChild,
  faWifi3,
  faUmbrellaBeach,
  // faMountainCity,
  faCamera,
  // faMartiniGlass,
  // faDog,
  // faDumbbell,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const MakkruzGoldDetails = () => {
  const { Table } = Inland.find((hotel) => hotel.id === 6);
  console.log(Table)
  const scheduleRef = useRef(null);
  const handleScrollToSchedule = () => {
    console.log(scheduleRef.current)
    scheduleRef.current.scrollIntoView({ behavior: "smooth" });
  };


  const data = useMemo(() => Table, [Table]);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Arrival",
        accessor: "Arrival",
      },
      {
        Header: "Start_Day",
        accessor: "Start_Day",
      },
      {
        Header: "Port",
        accessor: "Port",
      },
      {
        Header: "Departure",
        accessor: "Departure",
      },
      {
        Header: "End_Day",
        accessor: "End_Day",
      },
      {
        Header: "VOY_NO",
        accessor: "VOY_NO",
      },
      {
        Header: "Time (in Hrs)",
        accessor: "Time",
      },
      {
        Header: "Remarks",
        accessor: "Remarks",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  
  return (
    <>
      <NavforWithout />
      <div className=" pt-[3rem] px-44 lg:px-10">
        <div>
          <h1 className="font-bold text-4xl lg:text-3xl text-center" style={{ fontFamily: "Glook" }}>
          Makkruz Gold
          </h1>
          <div className="pt-12">
            <img className="swiper-container drop-shadow-2xl shadow-lg shadow-black rounded-xl object-cover w-[1500px] h-[610px] md:w-full md:h-full" src="https://tourtravelandaman.com/images/Makruzz-Gold.jpg" alt="" />
          </div>
          <div className="flex justify-center mt-8">
            <button type="button" className={classes.btn_donate}>
              Check Schedule
            </button>
          </div>
        </div>
        <div className="pt-[3rem] pt:lg-12">
          <h2 style={{ fontFamily: "Glook" }} className=" text-5xl lg:text-3xl font-bold lg:mb-12 text-center">
          Key Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-gray-200 rounded-full p-3">
                <FontAwesomeIcon icon={faWifi3} size="2x" style={{ color: "#000" }}
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-lg font-bold">High speed Internet</h3>
                <p className="mt-2 text-gray-600 text-center">Our friendly concierge is always available to help you plan your day and make the most of your stay.</p>
              </div>
            </div>
            <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-gray-200 rounded-full p-3">
                <FontAwesomeIcon icon={faNetworkWired} size="2x" style={{ color: "#000" }}
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-lg font-bold">Dedicated workspace</h3>
                <p className="mt-2 text-gray-600 text-center">Dedicated workspace available for you to work in your peace of mind</p>
              </div>
            </div>
            <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-gray-200 rounded-full p-3">
                <FontAwesomeIcon icon={faUmbrellaBeach} size="2x" style={{ color: "#0af" }}
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-lg font-bold">Beach nearby</h3>
                <p className="mt-2 text-gray-600 text-center">Worldclass beach with campfire available</p>
              </div>
            </div>
            <div className="p-20 lg:p-14 lg:mb-8 bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-gray-200 rounded-full p-3">
                <FontAwesomeIcon icon={faCamera} size="2x" style={{ color: "#4d4d4d" }}
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-lg font-bold">Pet Friendly</h3>
                <p className="mt-2 text-gray-600 text-center">We keep an eye out for you while you enjoy your stay</p>
              </div>
            </div>
          </div>
        </div>
          <h4 className ={`${classes.main} text-4xl lg:text-3xl font-bold lg:mb-12 pt-12 text-center`} style={{ fontFamily: "Glook" }}
        >
          Schedule
        </h4>
        <div className="pb-12  text-center ">
          <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mt-10">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
                  <div className="bg-gray-800 shadow-md border-2 border-gray-700 sm:rounded-lg overflow-hidden ">
                    <table {...getTableProps()} className="min-w-full divide-y divide-gray-700">
                      <thead className="bg-gray-700">
                        {headerGroups.map((headerGroup) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                              <th
                                {...column.getHeaderProps()}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                              >
                                {column.render("Header")}
                              </th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody {...getTableBodyProps()} className="bg-gray-900 divide-y divide-gray-700">
                        {rows.map((row, rowIndex) => {
                          prepareRow(row);
                          return (
                            <tr
                              {...row.getRowProps()}
                              className={`${
                                rowIndex % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                              }`}
                            >
                              {row.cells.map((cell) => (
                                <td
                                  {...cell.getCellProps()}
                                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 cursor-pointer transition-all duration-200 hover:bg-[#0AF] hover:text-white rounded-lg"
                                >
                                  {cell.render("Cell")}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {/* <SeatMap /> */}
        </div>
      </div>
    </>
  );
};

export default MakkruzGoldDetails;
