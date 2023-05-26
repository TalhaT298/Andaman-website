import React, { useState } from "react";

const Locations = ({ setOrigin, setDestination }) => {
  const [firstSelect, setFirstSelect] = useState("Port Blair");
  const [secondSelect, setSecondSelect] = useState("Havelock");

  const handleFirstSelectChange = (event) => {
    const value = event.target.value;
    setOrigin(event.target.value);
    setFirstSelect(value);
  };

  const handleSecondSelectChange = (event) => {
    const value = event.target.value;
    setDestination(event.target.value);
    setSecondSelect(value);
  };

  return (
    <>
      <div className="bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent">
        <span className="text-slate-600 text-sm font-normal">FROM</span>

        <select
          className="p-2 w-[9rem] font-bold"
          value={firstSelect}
          onChange={handleFirstSelectChange}
        >
          <option
            value="Port Blair"
            disabled={secondSelect === "Port Blair"}
            selected
          >
            Port Blair
          </option>
          <option value="Havelock" disabled={secondSelect === "Havelock"}>
            Havelock
          </option>
          <option value="Neil Island" disabled={secondSelect === "Neil Island"}>
            Neil Island
          </option>
        </select>
      </div>
      <div className="bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent">
        <span className="text-slate-600 text-sm font-normal">TO</span>

        <select
          className="p-2 w-[9rem] font-bold"
          value={secondSelect}
          onChange={handleSecondSelectChange}
        >
          <option value="Port Blair" disabled={firstSelect === "Port Blair"}>
            Port Blair
          </option>
          <option
            value="Havelock"
            disabled={firstSelect === "Havelock"}
            selected
          >
            Havelock
          </option>
          <option value="Neil Island" disabled={firstSelect === "Neil Island"}>
            Neil Island
          </option>
        </select>
      </div>
    </>
  );
};

export default Locations;
