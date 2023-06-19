import React, { useState } from 'react';
import { HiMinus, HiOutlineArrowsRightLeft, HiOutlineCalendarDays, HiOutlineMinusSmall, HiOutlinePlus } from 'react-icons/hi2'
import { FaUser } from 'react-icons/fa';
// import { FiFilter } from 'react-icons/fi';
import './busSearch.css'
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
// import DetailsCard from '../DetailsCard/DetailsCard';

import { BusContext } from '../../../../context/UseBusDataContext';
import { useContext } from 'react';
import UseHook from '../Hook/UseHook';
import BusSearchResult from '../BusSearchResult/BusSearchResult';

// location 
import allArrow from "../../../../images/image_source_for_shiptab/arrow_all.png";
import topbottomArrow from "../../../../images/image_source_for_shiptab/up-and-downarrow.png";
// import bus from "../../../../Data/Bus-Section/bus";
import { bus } from '../../Bus/bus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import mail from "../../../../images/image_source_for_shiptab/mail_arrow.png";


const Search = ({ bus: category }) => {
    // const [buses] = UseHook()
    console.log(category)
    const filterBus = bus?.filter((bus) => bus?.category === category)

    const { searchResults, setSearchResults, adult, setAdult, children, setChildren, infant, setInfant } = useContext(BusContext)

    // const [clickFrom, setClickFrom] = useState(false);
    const [locationFrom, setLocationFrom] = useState('Chennai')
    // const [clickTo, setClickTo] = useState(false)
    const [locationTo, setLocationTo] = useState('Mumbai')
    const [selected, setSelected] = useState(new Date())
    // const [clickDate, setClickDate] = useState(false);
    const [travellers, setTravellers] = useState(1);
    // const [clickTraveller, setClickTraveller] = useState(false);

    // const [economy, setEconomy] = useState(null);
    // const [business, setBusiness] = useState(null);
    // const [first, setFirst] = useState(null);
    // const [busClass, setBusClass] = useState('Economy')

    const [isReverse, setIsReverse] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const [openTravellerInfo, setOpenTravellerInfo] = useState(false);
    const [openDeptDate, setOpenDeptDate] = useState(false);
    const [travellerInfo, setTravellerInfo] = useState({
        adult: 1,
        children: 0,
        infant: 0,
        traveller: 0,
    });

    // Depart State

    const [startingDate, setStartingDate] = useState([
        {
            startDate: new Date(),
            key: "selection",
        },
    ]);

    // Return State
    console.log(travellerInfo)
    const [endingDate, setEndingDate] = useState([
        {
            endDate: new Date(),
            key: "selection",
        },
    ]);
    // Flight Search State
    const [passengerClass, setPassengerClass] = useState("ECONOMY");
    const [flightSearch, setFlightSearch] = useState(false);


    // const handleButtonClick = () => {
    //     setClickFrom(false);
    //     setClickTo(false);
    // };
    // if (travellers < 0) {
    //     setTravellers(1)
    // }
    // if (adult < 1) {
    //     setAdult(1)
    // }
    // // console.log(travellers)
    // if (children < 0) {
    //     setChildren(0)
    // }
    // if (infant < 0) {
    //     setInfant(0)
    // }

    const handleDateChange = (date) => {
        setStartingDate([{ startDate: date, key: "selection" }]);
        setOpenDeptDate(!openDeptDate);
    };

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const search = filterBus?.filter((bus) => bus?.currentDestination === locationFrom && bus?.nextDestination === locationTo);
        // console.log(search)
        setSearchResults(search)
        setAdult(travellerInfo.adult)
        setChildren(travellerInfo.children)
        setInfant(travellerInfo.infant)
        setSelected(startingDate[0].startDate)
        setTravellers(adult + children + infant)
    }
    const travellersInfo = {
        adult, children, infant
    }
    // console.log(travellers)
    console.log(travellerInfo)

    const currentDestinationOptions = Array.from(
        new Set(bus.map((busInfo) => busInfo.currentDestination))
    );
    const nextDestinationOptions = Array.from(
        new Set(bus.map((busInfo) => busInfo.nextDestination))
    );


    return (
        <>
            <>
                {/* <div className='w-full max-w-[1152px] h-28 xl:bg-none bg-white shadow-md rounded-2xl xl:rounded-none mx-auto custom-box-shadow xl:shadow-none mt-[53px] xl:mb-96 ms:mt-0'>
                <div className='w-full max-w-[1152px] h-[374px] ms:bg-[#FF8682] mx-auto ms:mx-0 ms:py-20 ms:px-6'>
                    <form action=""
                        onClick={handleSubmit}
                        className='xxl:ml-2 w-full max-w-[1152px] xxl:mr-6 xl:ml-0 xl:mr-0 flex items-center h-28 mx-auto xl:bg-white xl:h-[374px] xl:flex-col xl:py-4 xl:px-[14px] xl:mb-4 ms:rounded-2xl ms:ml-0'
                    >
                        location from 
                        <div
                            className='w-[250px] ms:w-full ms:h-12 xl:w-full h-12 relative xl:mb-4 z-50'>

                            <input
                                value={locationFrom}
                                onClick={() => setClickFrom(!clickFrom)}
                                autoComplete='off'
                                readOnly
                                className='outline-none rounded xl:w-full w-[300px] h-12 shadow border border-[#FAFBFC] pl-32 font-montserrat text-lg font-medium pt-1 cursor-pointer' type="text" name="from" id="" />
                            <label htmlFor="From"
                                onClick={() => setClickFrom(!clickFrom)}
                                className='font-montserrat text-lg cursor-pointer font-normal text-[#112211] flex items-center absolute top-3 left-5'>
                                <HiOutlineArrowsRightLeft className='text-2xl text-[#000000] mr-4'></HiOutlineArrowsRightLeft>
                                From
                                <HiOutlineMinusSmall className=''></HiOutlineMinusSmall>
                            </label>

                            {
                                clickFrom && <div
                                    className='w-full max-w-[250px] h-32 bg-[#FFFFFF] mt-10 flex flex-col shadow-md items-center rounded-md border-2 border-[#FAFBFC]'>
                                    <button
                                        className='font-montserrat font-medium w-40 h-9 rounded-md hover:scale-105 hover:bg-[#FF8682] hover:text-[#FFFFFF]'
                                        onClick={() => { setLocationFrom('Chennai'); handleButtonClick(); }}
                                    >Chennai</button>
                                    <button
                                        className='font-montserrat font-medium w-40 h-9 rounded-md hover:scale-105 hover:bg-[#FF8682] hover:text-[#FFFFFF]'
                                        onClick={() => { setLocationFrom('Mumbai'); handleButtonClick(); }}
                                    >Mumbai</button>
                                    <button
                                        className='font-montserrat font-medium w-40 h-9 rounded-md hover:scale-105 hover:bg-[#FF8682] hover:text-[#FFFFFF]'
                                        onClick={() => { setLocationFrom('Port Blair'); handleButtonClick(); }}
                                    >Port Blair</button>

                                </div>
                            }
                        </div>
                        location from finish

                        location to start 
                        <div className='w-[300px] ms:w-full h-12 relative xl:w-full xl:mb-4 z-40'>
                            <label htmlFor="To"
                                onClick={() => setClickTo(!clickTo)}
                                className='font-montserrat text-lg font-normal text-[#000000] flex items-center absolute top-3 left-5 cursor-pointer'>
                                <HiOutlineArrowsRightLeft className='text-2xl text-[#000000] mr-4'></HiOutlineArrowsRightLeft>
                                To
                                <HiOutlineMinusSmall className=''></HiOutlineMinusSmall>
                            </label>
                            <input
                                value={locationTo}
                                onClick={() => setClickTo(!clickTo)}
                                autoComplete='off'
                                readOnly
                                className='outline-none bg-[#FFFFFF] rounded xl:w-full w-[300px] h-12 shadow border border-[#FAFBFC] ml-[1px] pl-24 font-montserrat text-lg font-medium pt-1 cursor-pointer'
                                type="text" name="locationto" id="" />
                            {
                                clickTo && <div
                                    className='w-full max-w-[324px] h-32 bg-[#FFFFFF] mt-10 flex flex-col shadow-md items-center rounded-md border-2 border-[#FAFBFC]'>
                                    <button
                                        className='font-montserrat font-medium w-40 h-9 rounded-md hover:scale-105 hover:bg-[#FF8682] hover:text-[#FFFFFF]'
                                        onClick={() => { setLocationTo('Chennai'); handleButtonClick(); }}
                                    >Chennai</button>
                                    <button
                                        className='font-montserrat font-medium w-40 h-9 rounded-md hover:scale-105 hover:bg-[#FF8682] hover:text-[#FFFFFF]'
                                        onClick={() => { setLocationTo('Mumbai'); handleButtonClick(); }}
                                    >Mumbai</button>
                                    <button
                                        className='font-montserrat font-medium w-40 h-9 rounded-md hover:scale-105 hover:bg-[#FF8682] hover:text-[#FFFFFF]'
                                        onClick={() => { setLocationTo('Port Blair'); handleButtonClick(); }}
                                    >Port Blair</button>

                                </div>
                            }
                        </div>
                        location to finish 

                        date start here 
                        <div className='w-[252px] ms:w-full xl:w-full h-12 relative xl:mb-4'>
                            <label
                                onClick={() => setClickDate(!clickDate)}
                                htmlFor="Depart" className='font-montserrat text-lg font-normal text-[#000000] flex items-center absolute top-3 left-5 cursor-pointer'>
                                <HiOutlineCalendarDays className='text-2xl text-[#000000] mr-4'></HiOutlineCalendarDays>
                                Depart
                                <HiOutlineMinusSmall></HiOutlineMinusSmall>
                            </label>
                            <input
                                value={(format(selected, 'PP'))}
                                readOnly
                                onClick={() => setClickDate(!clickDate)}
                                autoComplete='off'
                                className='outline-none rounded w-[300px] ms:w-full xl:w-full h-12 shadow border border-[#FAFBFC] ml-[1px] pl-[140px] font-montserrat text-lg cursor-pointer pt-1 z-50' type="text" name="date" id="" />
                            {
                                clickDate && <div
                                    className='w-full xl:w-48 h-[300px] bg-[#FFFFFF] border-2 border-[#FAFBFC] shadow-md z-50'
                                >

                                    <DayPicker
                                        mode='single'
                                        selected={selected}
                                        onSelect={setSelected}
                                        // disableNavigation
                                        className={`bg-white z-30 xl:absolute`}
                                        required
                                    ></DayPicker>

                                </div>
                            }
                        </div>
                        date finish here 

                        total traveller starts here 
                        <div className='w-[250px] xl:w-full h-12 relative cursor-pointer z-10 xl:mb-4'>
                            <label htmlFor="From"
                                onClick={() => setClickTraveller(!clickTraveller)}
                                className='font-montserrat text-lg font-normal text-[#000000] flex items-center absolute top-3 xxl:left-4 cursor-pointer'>
                                <FaUser className='text-2xl xl:ml-1 text-[#000000] mr-7 cursor-pointer'></FaUser>
                                Traveller's
                            </label>
                            <input
                                value={travellers}
                                // onClick={() => setTravellers()}
                                onClick={() => setClickTraveller(!clickTraveller)}
                                readOnly
                                className='outline-none rounded cursor-pointer w-[250px] ms:w-full xl:w-full h-12 shadow border border-[#FAFBFC] ml-[1px] xl:pl-16 font-montserrat text-xl pt-1 ms:mr-6
                            ' type="text" name="traveller" id="" />
                            {

                                clickTraveller && <div className='w-full max-w-[200px]
                             h-[263px] bg-[#FFFFFF] mt-10 flex flex-col shadow-md items-center rounded-md xl:ml-0 ml-12 border-2 border-[#FAFBFC] z-50'>
                                    <div className='flex flex-row items-center justify-between gap-5'>
                                        <div className='flex flex-col'>
                                            <span className='text-lg font-montserrat font-medium'>Adult</span>
                                            <span className='text-lg font-montserrat font-medium'>Children</span>
                                            <span className='text-lg font-montserrat font-medium'>Infant</span>
                                        </div>
                                        <div className='flex flex-col items-center justify-between'>
                                            <div className='space-x-6'>
                                                <button
                                                    disabled={travellers <= 1 ? true : false}
                                                    onClick={() => { setAdult(adult - 1); setTravellers(travellers - 1); }}
                                                >
                                                    <HiMinus className='text-base'></HiMinus>
                                                </button>
                                                <span className='font-montserrat text-base font-medium'>{adult}</span>
                                                <button
                                                    onClick={() => { setAdult(adult + 1); setTravellers(travellers + 1); }}
                                                >
                                                    <HiOutlinePlus className='text-base'></HiOutlinePlus>
                                                </button>
                                            </div>
                                            <div className='space-x-6'>
                                                <button
                                                    onClick={() => { setChildren(children - 1); setTravellers(travellers - 1) }}
                                                >
                                                    <HiMinus className='text-base'></HiMinus>
                                                </button>
                                                <span className='font-montserrat text-base font-medium'>{children}</span>

                                                <button
                                                    onClick={() => { setChildren(children + 1); setTravellers(travellers + 1) }}
                                                >
                                                    <HiOutlinePlus className='text-base'></HiOutlinePlus>
                                                </button>
                                            </div>
                                            <div className='space-x-6'>
                                                <button
                                                    onClick={() => {
                                                        setInfant(infant - 1);
                                                        setTravellers(travellers - 1)
                                                    }}
                                                >
                                                    <HiMinus className='text-base'></HiMinus>
                                                </button>
                                                <span className='font-montserrat text-base font-medium'>{infant}</span>
                                                <button
                                                    onClick={() => { setInfant(infant + 1); setTravellers(travellers + 1) }}
                                                >
                                                    <HiOutlinePlus className='text-base'></HiOutlinePlus>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className='font-montserrat font-medium w-40 h-9 rounded-md hover:scale-105 hover:bg-[#FF8682] hover:text-[#FFFFFF]'
                                            onClick={() => { setBusClass('Economy'); setClickTraveller(!clickTraveller) }}
                                        >Economy</button>
                                        <button
                                            className='font-montserrat font-medium w-40 h-9 rounded-md hover:scale-105 hover:bg-[#FF8682] hover:text-[#FFFFFF]'
                                            onClick={() => {
                                                setBusClass('Business');
                                                setClickTraveller(!clickTraveller)
                                            }}
                                        >Business</button>
                                        <button
                                            className='font-montserrat font-medium w-40 h-9 rounded-md hover:scale-105 hover:bg-[#FF8682] hover:text-[#FFFFFF]'
                                            onClick={() => {
                                                setBusClass('First');
                                                setClickTraveller(!clickTraveller)
                                            }}
                                        >First</button>
                                    </div>
                                </div>
                            }
                            <input className={`w-24 h-12 rounded-r-[4px] bg-[#FF8682] text-white-400 font-normal text-lg cursor-pointer leading-6 absolute top-0 -right-[60px]
                            ms:w-full xl:w-full xl:top-7 xl:text-white xl:right-0 xl:relative xl:rounded`} type="submit" value="Search" />

                        </div>
                        total traveller ends here 
                    </form >
                </div>
            </div> */}
            </>

            <div
                className="pt-10 h-full w-full relative"
                style={{ fontFamily: "Montserrat" }}
            >

                <div className="flex flex-col h-full w-full lg:py-0 relative py-6 z-50">
                    <div className="absolute -top-10 left-[-4vw] right-[-4vw] h-[340px] z-[-1] ms:bg-[#FF8682]" />

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="font-medium text-slate-800 flex h-auto w-full bg-white z-50 px-4 my-4 py-4 mx-auto ms:rounded-md flex-row sxl:flex-col shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
                                {/* <Locations
                                    {...props}
                                    setlocationFrom={setlocationFrom}
                                    locationFrom={locationFrom}
                                    setReturnDate={setReturnDate}
                                    locationTo={locationTo}
                                /> */}
                                <>
                                    <div className=" relative">
                                        <div className="hidden sxl:flex justify-center items-center place-content-center border border-slate-700 rounded-full w-12 h-12 pl-3 absolute top-16 right-10 z-10 bg-white">
                                            <img
                                                className="max-w-none mr-3"
                                                src={topbottomArrow}
                                                alt="..."
                                                onClick={() => setIsReverse((prev) => !prev)}
                                            />
                                        </div>
                                        <div
                                            className={`${isReverse && "transform sxl:translate-y-20"
                                                } transition-transform duration-300 ease-linear h-auto sxl:w-full w-48  flex flex-col gap-y-3 mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}
                                        >
                                            <fieldset
                                                className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
                                                onClick={() => setIsVisible((prev) => !prev)}
                                            >
                                                <legend className="hidden sxl:block">From</legend>
                                                <img src={allArrow} alt="" height={16} width={16} />
                                                <span className="whitespace-nowrap">
                                                    {" "}
                                                    <span className="inline sxl:hidden">FROM - </span>
                                                    {locationFrom && <span className="">{locationFrom}</span>}
                                                </span>
                                            </fieldset>

                                            {isVisible && (
                                                <div
                                                    // key={destination}
                                                    className=" bg-white w-56 col-span-1 rounded absolute top-20 left-0 z-10 py-3 text-start px-5 space-y-2 border-solid border-2"
                                                // onClick={() => setNextDestinationFilter(destination)}
                                                >
                                                    {currentDestinationOptions.map((destination) => (
                                                        <button
                                                            className="hover:bg-[#FF8682] hover:text-white w-full text-start block cursor-pointer p-1 rounded"
                                                            onClick={() =>
                                                                setIsVisible((prev) => !prev, setLocationFrom(destination))
                                                            }
                                                        >
                                                            {destination}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={`${isReverse && "transform sxl:-translate-y-20"
                                            } transition-transform duration-300 ease-linear h-auto w-full flex flex-col gap-y-3 relative mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent`}
                                    >
                                        <fieldset
                                            className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
                                            onClick={() => setIsVisible2((prev) => !prev)}
                                        >
                                            <legend className="hidden sxl:block">To</legend>
                                            <img src={allArrow} alt="" height={16} width={16} />
                                            <span className="inline sxl:hidden"> TO - </span>{" "}
                                            {locationTo && <span> {locationTo}</span>}
                                        </fieldset>

                                        {isVisible2 && (
                                            <div
                                                // key={destination}
                                                className=" bg-white w-56 col-span-1 rounded absolute top-20 left-0 z-10 py-3 px-5  space-y-2 border-solid  border-2"
                                            // onClick={() => setNextDestinationFilter(destination)}
                                            >
                                                {nextDestinationOptions.map((destination) => (
                                                    <button
                                                        className="hover:bg-[#FF8682] hover:text-white w-full text-start block cursor-pointer p-1 rounded"
                                                        onClick={() =>
                                                            setIsVisible2((prev) => !prev, setLocationTo(destination))
                                                        }
                                                    >
                                                        {destination}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </>
                                {/* <locationFrom setStartingDateState={setStartingDateState} /> */}
                                <>
                                    <div className="relative h-auto w-full flex flex-col gap-y-3  mx-auto px-auto py-2 airbnbml:items-center airbnbml:border-b-transparent">
                                        <span
                                            onClick={() => setOpenDeptDate(!openDeptDate)}
                                            className="flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
                                        >
                                            <FontAwesomeIcon
                                                icon={faCalendarDays}
                                                className="text-slate-400 mr-2"
                                            />
                                            DEPART{" "}
                                            {startingDate && (
                                                <small className="lexs:whitespace-normal whitespace-nowrap">
                                                    - {startingDate[0]?.startDate.toDateString()}
                                                </small>
                                            )}
                                        </span>
                                        <>
                                            {/* <span className=" text-slate-400 font-bold text-lg mx-auto">
          {`${format(startingDate[0].startDate, "dd/MM/yyyy")}`}
        </span> */}
                                            {/* <Modal
          isOpen={openDeptDate}
          onRequestClose={() => setOpenDeptDate(false)}
          overlayClassName="modal-overlay bg-black opacity"
          className="modal-content w-auto h-auto"
        >
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setStartingDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={startingDate}
            className={`${classes.responsivee} absolute -bottom-[6.8rem] -mx- left-[39%]  lg:-bottom-[8.45rem] lg:left-[30%]  md:-bottom-[20rem] md:left-[12.5rem] sm:bottom-4 sm:left-2 responsivee`}
          />
        </Modal> */}
                                        </>
                                        {openDeptDate && (
                                            // <DateRange
                                            //   editableDateInputs={true}
                                            //   onChange={(item) => setStartingDate([item.selection])}
                                            //   moveRangeOnFirstSelection={false}
                                            //   ranges={startingDate}
                                            //   className={`absolute z-10 top-20 left-0`}
                                            // />
                                            <DayPicker
                                                mode="single"
                                                selected={startingDate[0].startDate}
                                                onDayClick={handleDateChange}
                                                // footer={footer}
                                                className={`absolute z-50 top-16 left-0 bg-white px-2 py-2 rounded shadow`}
                                            />
                                        )}
                                        {/* airbnbml:left-56 airbnbml:-bottom-10  */}
                                    </div>
                                </>

                                {/* <Options /> */}
                                <div className="relative h-auto w-full mx-auto px-auto flex flex-col gap-y-3 py-2 airbnbml:items-center airbnbml:border-b-transparent">
                                    <span
                                        onClick={() => setOpenTravellerInfo(!openTravellerInfo)}
                                        className=" flex items-center space-x-2 cursor-pointer border w-full p-2 bottom-1"
                                    >
                                        <FaUser className="mr-2" />
                                        {`${travellerInfo.adult + travellerInfo.children + travellerInfo.infant
                                            }`}{" "}
                                        Traveller(s)
                                    </span>

                                    {openTravellerInfo && (
                                        <div
                                            className={`bg-white rounded absolute top-20 right-0 z-10 w-autopy-3 mx-auto px-auto space-x-4 border-solid border-2 `}
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
                                <button
                                    onClick={() => setFlightSearch(true)}
                                    type="submit"
                                    className="bg-[#FF8682] sxl:flex sxl:items-center sxl:justify-center h-auto  my-2 sxl:py-3 px-2 text-white sxl:rounded-md rounded-r"
                                >
                                    <img src={mail} alt="" className="hidden sxl:block mr-3" />
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="pt-2 w-full text-center">

                    {flightSearch ? (
                        flightData.length === 0 ? (
                            <center>
                                <h1 className="my-5">No results found...</h1>
                            </center>
                        ) : (
                            flightData
                        )
                    ) : (
                        <center>
                            <h1 className="my-32 text-3xl font bold">
                                Search your destination
                            </h1>
                        </center>
                    )}
                </div> */}
                {/* <BestPrices /> */}
            </div>






            {/* search parts ends here  */}
            {/* Details card start here  */}
            <div className='mt-[61px] w-full max-w-[1220px] mx-auto'>
                <div className='flex items-center justify-between mb-[21px]'>
                    {/* show bus found result title  */}
                    {/* <p className='font-montserrat font-semibold text-sm text-black-200'>showing {searchResults?.length || 0} of <span className='text-[#FF8682] font-montserrat text-sm'>{filterBus?.length || 0} Bus</span></p> */}
                    <>
                        {/* <p className='flex items-center justify-center font-montserrat text-sm font-normal'>
                        <FiFilter className='text-sm mr-3'></FiFilter>
                        sort by <span className='font-montserrat text-sm font-semibold ml-1'> Recomended</span>
                        <MdOutlineKeyboardArrowDown className='text-xs text-[#000000]'></MdOutlineKeyboardArrowDown>
                    </p> */}
                    </>
                </div>
                {
                    searchResults?.map((result, index) => <BusSearchResult
                        key={result?.id || index}
                        result={result}
                        selected={selected}
                        travellerInfo={travellerInfo}
                        travellers={travellers}
                    ></BusSearchResult>)
                }
                {/* <div className='mt-[50px] mb-20 flex items-center justify-center mx-auto'>
                    <button

                        className='w-full bg-[#27273F] font-montserrat font-semibold text-sm h-12 rounded text-[#FFFFFF] max-w-[840px] block'>Show More Results</button>
                </div> */}
            </div>
            {/* details card ends here  */}
        </>
    );
};

export default Search;