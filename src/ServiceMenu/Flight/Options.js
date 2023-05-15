import React, { useState } from 'react';
import { useDataContext } from '../../context/DataContext';

const Options = () => {
  const [openTravellerInfo, setOpenTravellerInfo] = useState(false);
  // const [travellerInfo, setTravellerInfo] = useState({
  //   adult: 1,
  //   children: 0,
  //   infant: 0,
  //   traveller: 0,
  // });
const {travellerInfo, setTravellerInfo}=useDataContext();
  const handleTravellerInfo = (category, arithmetricOperation) => {
    setTravellerInfo((prev) => {
      return {
        ...prev,
        [category]:
          arithmetricOperation === 'i'
            ? travellerInfo[category] + 1
            : travellerInfo[category] - 1,
      };
    });
  };

  const [passengerClass, setPassengerClass] = useState('ECONOMY');

  return (
    <div className="relative h-auto w-full flex flex-col gap-y-3 px-4 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent">
      <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className="mx-auto text-slate-500 font-bold text-xl font-mono"
      >
        TRAVELLER & CLASS
      </span>
      <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className=" text-slate-400 font-bold text-lg mx-auto"
      >
        {`${
          travellerInfo.adult + travellerInfo.children + travellerInfo.infant
        }`}{' '}
        Traveller(s)
      </span>
      <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className="mx-auto text-slate-200 tracking-widest text-xs"
      >
        {passengerClass}
      </span>
      {openTravellerInfo &&
          <div 
            className={`flex flex-col bg-white absolute top-20 right-0 z-10 w-auto
            py-3 mx-auto px-auto space-x-4 border-solid border-2 border-black rounded-md shadow-md shadow-black drop-shadow-md`}
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
                  onClick={() => handleTravellerInfo('adult', 'd')}
                  className="disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.adult}
                </span>
                <button
                  onClick={() => handleTravellerInfo('adult', 'i')}
                  className=" bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">+</span>
                </button>
              </div>
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.children <= 0}
                  onClick={() => handleTravellerInfo('children', 'd')}
                  className="disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.children}
                </span>
                <button
                  onClick={() => handleTravellerInfo('children', 'i')}
                  className=" bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">+</span>
                </button>
              </div>
              <div className="w-28 space-x-6">
                <button
                  disabled={travellerInfo.infant <= 0}
                  onClick={() => handleTravellerInfo('infant', 'd')}
                  className="disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.infant}
                </span>
                <button
                  onClick={() => handleTravellerInfo('infant', 'i')}
                  className=" bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">+</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-2">
            <span
              onClick={() => {
                setPassengerClass('ECONOMY');
                setOpenTravellerInfo(false);
              }}
              className="text-slate-200 hover:cursor-pointer"
            >
              Economy
            </span>
            <span
              onClick={() => {
                setPassengerClass('BUSINESS');
                setOpenTravellerInfo(false);
              }}
              className="hover:cursor-pointer"
            >
              Business
            </span>
            <span
              onClick={() => {
                setPassengerClass('FIRST');
                setOpenTravellerInfo(false);
              }}
              className="hover:cursor-pointer"
            >
              First
            </span>
          </div>         
          </div>
        }
      {/* <Modal
        isOpen={openTravellerInfo}
        overlayClassName="modal-overlay bg-black opacity"
        className="modal-content w-auto h-auto"
      >
        <div
          className={`flex flex-col bg-white absolute top-20 right-0 z-10 w-auto
          py-3 mx-auto px-auto space-x-4 border-solid border-2 border-black rounded-md shadow-md shadow-black drop-shadow-md`}
        >
          <div className="flex flex-row gap-6 px-6">
            <div className="flex flex-col gap-y-5 py-2">
              <span className="optionText">Adult text</span>
              <span className="optionText">Children</span>
              <span className="optionText">Infant</span>
            </div>
            <div className="text-center">
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.adult <= 1}
                  onClick={() => handleTravellerInfo('adult', 'd')}
                  className="disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.adult}
                </span>
                <button
                  onClick={() => handleTravellerInfo('adult', 'i')}
                  className=" bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">+</span>
                </button>
              </div>
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.children <= 0}
                  onClick={() => handleTravellerInfo('children', 'd')}
                  className="disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.children}
                </span>
                <button
                  onClick={() => handleTravellerInfo('children', 'i')}
                  className=" bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">+</span>
                </button>
              </div>
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.infant <= 0}
                  onClick={() => handleTravellerInfo('infant', 'd')}
                  className="disabled:cursor-not-allowed bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.infant}
                </span>
                <button
                  onClick={() => handleTravellerInfo('infant', 'i')}
                  className=" bg-amber-500 border-black border-solid border-2 text-xl w-6 h-8 my-1.5"
                >
                  <span className="">+</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-2">
            <span
              onClick={() => {
                setPassengerClass('ECONOMY');
                setOpenTravellerInfo(false);
              }}
              className="text-slate-200 hover:cursor-pointer"
            >
              Economy
            </span>
            <span
              onClick={() => {
                setPassengerClass('BUSINESS');
                setOpenTravellerInfo(false);
              }}
              className="hover:cursor-pointer"
            >
              Business
            </span>
            <span
              onClick={() => {
                setPassengerClass('FIRST');
                setOpenTravellerInfo(false);
              }}
              className="hover:cursor-pointer"
            >
              First
            </span>
          </div>
        </div>
      </Modal> */}
    </div>
  );
};

export default Options;
