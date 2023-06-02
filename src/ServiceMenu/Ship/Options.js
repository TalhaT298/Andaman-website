import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useShipDataContext } from "../../context/useShipDataContext";

const Options = () => {
  const [openTravellerInfo, setOpenTravellerInfo] = useState(false);
  const { travellerInfo, setTravellerInfo } = useShipDataContext();

  const handleTravellerInfo = (category, arithmetricOperation) => {
    setTravellerInfo((prev) => {
      return {
        ...prev,
        [category]:
          arithmetricOperation === "i"
            ? travellerInfo[category] + 1
            : travellerInfo[category] - 1,
      };
    });
  };

  return (
    <div className="relative h-auto w-full mx-auto px-auto flex flex-col gap-y-3 py-2 airbnbml:items-center airbnbml:border-b-transparent">
      <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className=" flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
      >
        <FaUser className="mr-2" />
        {`${
          travellerInfo.adult + travellerInfo.children + travellerInfo.infant
        }`}{" "}
        Traveller(s)
      </span>

      {openTravellerInfo && (
        <div
          className={`bg-white rounded absolute top-20 right-0 z-10 w-auto
            py-3 mx-auto px-auto space-x-4 border-solid border-2 `}
        >
          <div className="flex flex-row gap-6 px-6">
            <div className="flex flex-col gap-y-5 py-2">
              <span className="optionText">Adult</span>
              <span className="optionText">Children</span>
              <span className="optionText">Infant</span>
            </div>
            <div className="text-start flex flex-col justify-between">
              <div className="space-x-6">
                <button
                  disabled={travellerInfo.adult <= 1}
                  onClick={() => handleTravellerInfo("adult", "d")}
                  className="disabled:cursor-not-allowed  w-6 h-8"
                >
                  <span className="">
                    <AiOutlineMinus />
                  </span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.adult}
                </span>
                <button
                  onClick={() => handleTravellerInfo("adult", "i")}
                  className="  w-6 h-8"
                >
                  <span className="">
                    <AiOutlinePlus />
                  </span>
                </button>
              </div>
              <div className="space-x-6">
                <button
                  disabled={travellerInfo.children <= 0}
                  onClick={() => handleTravellerInfo("children", "d")}
                  className="disabled:cursor-not-allowed "
                >
                  <span className="">
                    <AiOutlineMinus />
                  </span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.children}
                </span>
                <button
                  onClick={() => handleTravellerInfo("children", "i")}
                  className=" "
                >
                  <span className="">
                    <AiOutlinePlus />
                  </span>
                </button>
              </div>
              <div className="space-x-6">
                <button
                  disabled={travellerInfo.infant <= 0}
                  onClick={() => handleTravellerInfo("infant", "d")}
                  className="disabled:cursor-not-allowed "
                >
                  <span className="">
                    <AiOutlineMinus />
                  </span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.infant}
                </span>
                <button
                  onClick={() => handleTravellerInfo("infant", "i")}
                  className="  w-6 h-8"
                >
                  <span className="">
                    <AiOutlinePlus />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Options;
