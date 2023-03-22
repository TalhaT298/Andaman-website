import React, { useMemo } from "react";
import { useTable } from "react-table";
import { data as Bus } from "./Data/Schedule";

const PrivateBuses = React.forwardRef((props, ref) => {

  const data = useMemo(() => Bus, []);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Departure Time",
        accessor: "Departure",
      },
      {
        Header: "Arrival Time",
        accessor: "Arrival",
      },
      {
        Header: "Service",
        accessor: "Service",
      },
      
      {
        Header: "From Station",
        accessor: "From",
      },
      {
        Header: "To Station",
        accessor: "To",
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div id="inland" className="" ref={ref}>
      <h1
        className={` text-2xl sm:text-xl mb-8 font-bold mt-[4rem] sm:mr-[-1rem] lg:mb-10 sm:mb-[-1rem] text-center tracking-wide`}
      >
        Private Inter-Island Bus Schedule
      </h1>
      {/* Table */}
      <div className="pb-12 text-center" >      
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mt-6">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
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
                              className="px-6 py-3 text-center text-base font-medium text-gray-300 tracking-wider normal-case"
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
    </div>
  );
});

export default PrivateBuses;
