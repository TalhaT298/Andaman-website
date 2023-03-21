import React, { useMemo } from "react";
import { useTable } from "react-table";
import { data as Inland } from "./Data/FerriesData";
import classes from "./Schedule.module.css";
import { useParams } from "react-router-dom";
const Schedule = React.forwardRef((props, ref) => {
  const { id } = useParams();
  const { Table } = Inland.find((hotel) => hotel.id === parseInt(id));
  // const { Table } = Inland.filter((hotel) => hotel.id === parseInt(id))[0];

  // console.log(Table);
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
      <h4
        className={`${classes.main} text-4xl lg:text-3xl font-bold lg:mb-12 pt-12 text-center`}
        style={{ fontFamily: "Glook" }}
        ref={ref}
      >
        Schedule
      </h4>
      <div className="pb-12  text-center ">
        <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mt-10">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
                <div className="bg-gray-800 shadow-md border-2 border-gray-700 sm:rounded-lg overflow-hidden ">
                  <table
                    {...getTableProps()}
                    className="min-w-full divide-y divide-gray-700"
                  >
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
                    <tbody
                      {...getTableBodyProps()}
                      className="bg-gray-900 divide-y divide-gray-700"
                    >
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
    </>
  );
});

export default Schedule;
