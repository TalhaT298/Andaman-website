import React from "react";
import { useState } from "react";
import classes from './options.module.css'
import Modal from "react-modal";
import person from '../../images/image_source_for_shiptab/person.png';

const Options = () => {
  const [openTravellerInfo, setOpenTravellerInfo] = useState(false);
  const [travellerInfo, setTravellerInfo] = useState({
    adult: 1,
    children: 0,
    infant: 0,
    traveller: 0,
  });

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
    <div className="w-52 lg:w-full flex items-center  border border-slate-300 py-3 px-3 hover:border-2 hover:border-rose-400 hover:rounded-md lg:mb-3">
      <img class="max-w-none mr-3" src={person} alt="..." />
      <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className="font-medium text-black text-lg"
      >
        {`${
          travellerInfo.adult + travellerInfo.children + travellerInfo.infant
        }`}{" "} Adult
      </span>

      <Modal
        isOpen={openTravellerInfo}
        overlayClassName="modal-overlay bg-black opacity"
        className="modal-content w-auto h-auto ml-96"
      >
        <div
          className={`${classes.responsive} flex flex-col absolute bg-white -bottom-[-12rem] lg:right-[8rem] md:bottom-[27rem] sm:bottom-[20rem] 
         lexs:right-20  lexs:-bottom-24 w-auto h-auto py-3 mx-auto px-auto space-x-4 border-solid border-2 border-rose-400 rounded-md shadow-md shadow-black drop-shadow-md`}
        >
          <div className="flex flex-row gap-6 px-6">
            <div className="flex flex-col gap-y-5 py-2">
              <span className="optionText">Adult</span>
              <span className="optionText">Children</span>
              <span className="optionText">Infant</span>
            </div>
            <div className="text-center">
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.adult <= 1}
                  onClick={() => handleTravellerInfo("adult", "d")}
                  className="disabled:cursor-not-allowed text-rose-400 text-2xl w-6 h-8 my-1.5"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.adult}
                </span>
                <button
                  onClick={() => handleTravellerInfo("adult", "i")}
                  className="text-rose-400 text-2xl w-6 h-8 my-1.5"
                >
                  <span className="">+</span>
                </button>
              </div>
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.children <= 0}
                  onClick={() => handleTravellerInfo("children", "d")}
                  className="disabled:cursor-not-allowed text-rose-400 text-2xl w-6 h-8 my-1.5"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.children}
                </span>
                <button
                  onClick={() => handleTravellerInfo("children", "i")}
                  className="text-rose-400 text-2xl w-6 h-8 my-1.5"
                >
                  <span className="">+</span>
                </button>
              </div>
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.infant <= 0}
                  onClick={() => handleTravellerInfo("infant", "d")}
                  className="disabled:cursor-not-allowed text-rose-400 text-2xl w-6 h-8 my-1.5"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.infant}
                </span>
                <button
                  onClick={() => handleTravellerInfo("infant", "i")}
                  className="text-rose-400 text-2xl w-6 h-8 my-1.5"
                >
                  <span className="">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Options;
