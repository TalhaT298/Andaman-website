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


const Search = ({ bus: category }) => {
    const [buses] = UseHook()
    // console.log(buses)
    const filterBus = buses?.filter((bus) => bus?.category === category)

    const { searchResults, setSearchResults, adult, setAdult, children, setChildren, infant, setInfant } = useContext(BusContext)
    const [clickFrom, setClickFrom] = useState(false);
    const [locationFrom, setLocationFrom] = useState('Chennai')

    const [clickTo, setClickTo] = useState(false)
    const [locationTo, setLocationTo] = useState('Mumbai')

    const [selected, setSelected] = useState(new Date())
    const [clickDate, setClickDate] = useState(false);

    const [travellers, setTravellers] = useState(1);
    const [clickTraveller, setClickTraveller] = useState(false);

    // const [economy, setEconomy] = useState(null);
    // const [business, setBusiness] = useState(null);
    // const [first, setFirst] = useState(null);
    const [busClass, setBusClass] = useState('Economy')


    const handleButtonClick = () => {
        setClickFrom(false);
        setClickTo(false);
    };
    if (travellers < 0) {
        setTravellers(1)
    }
    if (adult < 1) {
        setAdult(1)
    }
    // console.log(travellers)
    if (children < 0) {
        setChildren(0)
    }
    if (infant < 0) {
        setInfant(0)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const search = filterBus?.filter((bus) => bus?.currentDestination === locationFrom && bus?.nextDestination === locationTo);
        setSearchResults(search)
    }

    const travellersInfo = {
        adult, children, infant, busClass
    }

    return (
        <>
            <div className='w-full max-w-[1232px] h-28 bg-[#FFFFFF] shadow-md rounded-2xl mx-auto custom-box-shadow mt-[53px]'>
                <form action=""
                    onClick={handleSubmit}
                    className='ml-2 w-full max-w-[1232px] mr-6 flex items-center h-28 mx-auto'
                >
                    {/* location from  */}
                    <div
                        className='w-full max-w-[300px] h-12 relative'>

                        <input
                            value={locationFrom}
                            onClick={() => setClickFrom(!clickFrom)}
                            autoComplete='off'
                            readOnly
                            className='outline-none rounded w-full max-w-[324px] h-12 shadow border border-[#FAFBFC] pl-32 font-montserrat text-lg font-medium pt-1 cursor-pointer' type="text" name="from" id="" />
                        <label htmlFor="From"
                            onClick={() => setClickFrom(!clickFrom)}
                            className='font-montserrat text-lg cursor-pointer font-normal text-[#112211] flex items-center absolute top-3 left-5'>
                            <HiOutlineArrowsRightLeft className='text-2xl text-[#000000] mr-4'></HiOutlineArrowsRightLeft>
                            From
                            <HiOutlineMinusSmall className=''></HiOutlineMinusSmall>
                        </label>

                        {
                            clickFrom && <div
                                className='w-full max-w-[324px] h-32 bg-[#FFFFFF] mt-10 flex flex-col shadow-md items-center rounded-md border-2 border-[#FAFBFC]'>
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
                    {/* location from finish */}

                    {/* location to start  */}
                    <div className='w-full max-w-[300px] h-12 relative'>
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
                            className='outline-none bg-[#FFFFFF] rounded w-full max-w-[324px] h-12 shadow border border-[#FAFBFC] ml-[1px] pl-24 font-montserrat text-lg font-medium pt-1 cursor-pointer'
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
                    {/* location to finish  */}

                    {/* date start here  */}
                    <div className='w-full max-w-[252px] h-12 relative'>
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
                            className='outline-none rounded w-full max-w-[324px] h-12 shadow border border-[#FAFBFC] ml-[1px] pl-[140px] font-montserrat text-lg cursor-pointer pt-1' type="text" name="date" id="" />
                        {
                            clickDate && <div
                                className='w-full h-[300px] bg-[#FFFFFF] border-2 border-[#FAFBFC] shadow-md'
                            >

                                <DayPicker
                                    mode='single'
                                    selected={selected}
                                    onSelect={setSelected}
                                    // disableNavigation
                                    required
                                ></DayPicker>

                            </div>
                        }
                    </div>
                    {/* date finish here  */}

                    {/* total traveller starts here  */}
                    <div className='w-full max-w-[200px] h-12 relative cursor-pointer'>
                        <label htmlFor="From"
                            onClick={() => setClickTraveller(!clickTraveller)}
                            className='font-montserrat text-lg font-normal text-[#000000] flex items-center absolute top-3 left-5 cursor-pointer'>
                            <FaUser className='text-2xl text-[#000000] mr-4 cursor-pointer'></FaUser>
                            Traveller's
                        </label>
                        <input
                            value={travellers}
                            // onClick={() => setTravellers()}
                            onClick={() => setClickTraveller(!clickTraveller)}
                            readOnly
                            className='outline-none rounded cursor-pointer w-full max-w-[324px] h-12 shadow border border-[#FAFBFC] ml-[1px]
                            pl-12 font-montserrat text-xl pt-1
                            ' type="text" name="traveller" id="" />
                        {

                            clickTraveller && <div className='w-full max-w-[200px]
                             h-[263px] bg-[#FFFFFF] mt-10 flex flex-col shadow-md items-center rounded-md ml-12 border-2 border-[#FAFBFC]'>
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


                        <input className='w-24 h-12 rounded-r-[4px] bg-[#FF8682] text-white-400 font-normal text-lg cursor-pointer leading-6 absolute top-0 -right-[60px]' type="submit" value="Search" />
                    </div>
                    {/* total traveller ends here  */}
                </form >
            </div >
            {/* search parts ends here  */}

            {/* Details card start here  */}
            <div className='mt-[61px] w-full max-w-[1220px] mx-auto'>
                <div className='flex items-center justify-between mb-[21px]'>
                    {/* show bus found result title  */}
                    <p className='font-montserrat font-semibold text-sm text-black-200'>showing {searchResults?.length || 0} of <span className='text-[#FF8682] font-montserrat text-sm'>{filterBus?.length || 0} Bus</span></p>
                    {/* <p className='flex items-center justify-center font-montserrat text-sm font-normal'>
                        <FiFilter className='text-sm mr-3'></FiFilter>
                        sort by <span className='font-montserrat text-sm font-semibold ml-1'> Recomended</span>
                        <MdOutlineKeyboardArrowDown className='text-xs text-[#000000]'></MdOutlineKeyboardArrowDown>
                    </p> */}
                </div>
                {
                    searchResults?.map((result, index) => <BusSearchResult
                        key={result?.id || index}
                        result={result}
                        selected={selected}
                        travellers={travellers}
                        travellersInfo={travellersInfo}
                    ></BusSearchResult>)
                }
                <div className='mt-[50px] mb-20 flex items-center justify-center mx-auto'>
                    <button

                        className='w-full bg-[#27273F] font-montserrat font-semibold text-sm h-12 rounded text-[#FFFFFF] max-w-[840px] block'>Show More Results</button>
                </div>
            </div>
            {/* details card ends here  */}
        </>
    );
};

export default Search;