import React from 'react';
import { useState } from 'react';
import classes from './Options.module.css';
import Modal from 'react-modal';

const Options = ( {setTravellerDetails} ) => {
  const [openTravellerInfo, setOpenTravellerInfo] = useState(false);
  const [travellerInfo, setTravellerInfo] = useState({
    adult: 1,
    infant: 0,
    traveller: 0,
  });

  setTravellerDetails(travellerInfo)

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
    <div className=" relative bg-slate-300 h-auto w-full flex flex-col gap-y-3 px-4 border-solid border-2 border-slate-300 mx-auto px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent">
      <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className="mx-auto text-slate-600 text-sm font-normal"
      >
        TRAVELLER 
      </span>
      <span
        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
        className="font-medium text-black text-lg mx-auto"
      >
        {`${
          travellerInfo.adult + travellerInfo.infant
        }`}{' '}
        Traveller(s)
      </span>      
        
      {/* <Modal
        isOpen={openTravellerInfo}
        overlayClassName="modal-overlay bg-black opacity"
        className="modal-content w-auto h-auto "
      > */}
        {/* <div
          className={`${classes.responsive} flex flex-col absolute bg-white bottom-[14rem] right-[21rem] lg:right-[8rem] md:bottom-[27rem] sm:bottom-[30rem] 
         lexs:right-20  lexs:-bottom-24 w-auto h-auto py-3 mx-auto px-auto space-x-4 border-solid border-2 border-black rounded-md shadow-md shadow-black drop-shadow-md`}
        > */}
        {/* <div 
          className={`flex flex-col absolute bg-white bottom-[13rem] right-[15%] xl:right-[4%] xl:bottom-[9.5rem] airbnbml:right-[10rem] airbnbml:bottom-[-12rem] sm:right-[8rem] sm:bottom-[-13rem]  
          xs:bottom-[-10rem] lexs:right-[1rem] lexs:bottom-[-14rem] w-auto h-auto py-3 mx-auto px-auto space-x-4 border-solid border-2 border-black rounded-md shadow-md shadow-black drop-shadow-md`}
        > */}

        {openTravellerInfo &&
          <div 
            className={`flex flex-col bg-white absolute top-20 right-0 z-10 w-auto
            py-3 mx-auto px-auto space-x-4 border-solid border-2 border-black rounded-md shadow-md shadow-black drop-shadow-md`}
          >
          
            <div className="flex flex-row gap-6 px-6">
              <div className="flex flex-col gap-y-5 py-2">
                <span className="optionText">Adult</span>
                <span className="optionText">Infant</span>
              </div>
              <div className="text-center">
                <div className="mx-auto px-auto space-x-6 flex items-center">
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
          </div>
        }
        
      {/* </Modal> */}
    </div>
  );
};

export default Options;
