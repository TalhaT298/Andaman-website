import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { useDataContext } from '../../context/useDataContext';
const Options = () => {
  const [openTravellerInfo, setOpenTravellerInfo] = useState(false);
  // const [travellerInfo, setTravellerInfo] = useState({
  //   adult: 1,
  //   children: 0,
  //   infant: 0,
  //   traveller: 0,
  // });
const {travellerInfo, setTravellerInfo, passengerClass, setPassengerClass}=useDataContext();
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


  return (
    <div className="relative h-auto w-full mx-auto px-auto flex flex-col gap-y-3  ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent">
      {/* <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className="mx-auto text-slate-500 font-bold text-xl font-mono"
        >
        TRAVELLER & CLASS
      </span> */}
      <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className=" flex items-center space-x-2 cursor-pointer border p-2 bottom-1"
        >
        <FaUser className='mr-2'/>
        {`${
          travellerInfo.adult + travellerInfo.children + travellerInfo.infant
        }`}{' '}
        Traveller(s)
      </span>
      {/* <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className="mx-auto text-slate-200 tracking-widest text-xs"
      >
        {passengerClass}
      </span> */}
    

          {openTravellerInfo && <div 
            className={`bg-white rounded absolute top-20 right-0 z-10 w-auto
            py-3 mx-auto px-auto space-x-4 border-solid border-2 `}
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
                  className="disabled:cursor-not-allowed  w-6 h-8 mb-3"
                >
                   <span className=""><AiOutlineMinus/></span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.adult}
                </span>
                <button
                  onClick={() => handleTravellerInfo('adult', 'i')}
                  className="  w-6 h-8 my-3"
                >
                   <span className=""><AiOutlinePlus/></span>
                </button>
              </div>
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.children <= 0}
                  onClick={() => handleTravellerInfo('children', 'd')}
                  className="disabled:cursor-not-allowed "
                >
                  <span className=""><AiOutlineMinus/></span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.children}
                </span>
                <button
                  onClick={() => handleTravellerInfo('children', 'i')}
                  className=" "
                >
                  <span className=""><AiOutlinePlus/></span>
                </button>
              </div>
              <div className="w-28 space-x-6">
                <button
                  disabled={travellerInfo.infant <= 0}
                  onClick={() => handleTravellerInfo('infant', 'd')}
                  className="disabled:cursor-not-allowed "
                >
                   <span className=""><AiOutlineMinus/></span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.infant}
                </span>
                <button
                  onClick={() => handleTravellerInfo('infant', 'i')}
                  className="  w-6 h-8 my-3"
                >
                   <span className=""><AiOutlinePlus/></span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-2">
            <span
              onClick={() => {
                setPassengerClass('ECONOMY');
                setOpenTravellerInfo(false);
              }}
              className=" hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
            >
              Economy
            </span>
            <span
              onClick={() => {
                setPassengerClass('BUSINESS');
                setOpenTravellerInfo(false);
              }}
              className="hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
            >
              Business
            </span>
            <span
              onClick={() => {
                setPassengerClass('FIRST');
                setOpenTravellerInfo(false);
              }}
              className="hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
            >
              First
            </span>
          </div>         
          </div>}
        
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
                  className="disabled:cursor-not-allowed  w-6 h-8 my-3"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.adult}
                </span>
                <button
                  onClick={() => handleTravellerInfo('adult', 'i')}
                  className="  w-6 h-8 my-3"
                >
                  <span className="">+</span>
                </button>
              </div>
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.children <= 0}
                  onClick={() => handleTravellerInfo('children', 'd')}
                  className="disabled:cursor-not-allowed  w-6 h-8 my-3"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.children}
                </span>
                <button
                  onClick={() => handleTravellerInfo('children', 'i')}
                  className="  w-6 h-8 my-3"
                >
                  <span className="">+</span>
                </button>
              </div>
              <div className="mx-auto px-auto space-x-6">
                <button
                  disabled={travellerInfo.infant <= 0}
                  onClick={() => handleTravellerInfo('infant', 'd')}
                  className="disabled:cursor-not-allowed  w-6 h-8 my-3"
                >
                  <span className="">-</span>
                </button>
                <span className="optionCounterNumber">
                  {travellerInfo.infant}
                </span>
                <button
                  onClick={() => handleTravellerInfo('infant', 'i')}
                  className="  w-6 h-8 my-3"
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
              className="text-slate-200 hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
            >
              Economy
            </span>
            <span
              onClick={() => {
                setPassengerClass('BUSINESS');
                setOpenTravellerInfo(false);
              }}
              className="hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
            >
              Business
            </span>
            <span
              onClick={() => {
                setPassengerClass('FIRST');
                setOpenTravellerInfo(false);
              }}
              className="hover:bg-[#FF8682] hover:text-white cursor-pointer p-1 rounded"
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
