import React, { useContext, useEffect, useState } from 'react';
import { WaterContext } from '../../../context/UseWaterContext';
import { HiMinus, HiOutlineChevronRight, HiOutlinePlus } from 'react-icons/hi';
import Navforwithout from '../../../Navforwithout';
// import banner from '../images/Banana-Boat-Rides-full.png'
import { FaStopwatch } from 'react-icons/fa';
import WeekPicker from '../WeekPicker/WeekPicker';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import WaterSportActivity from '../WaterSportActivity/WaterSportActivity';

const WaterBookingTickets = () => {
    const [totalTicket, setTotalTicket] = useState(1)
    const [bookingDetails, setBookingDetails] = useState({
        location: '',
        name: '',
        phone: ''
    })
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { waterBookingInfo, setWaterBookingInfo, places } = useContext(WaterContext);
    console.log(waterBookingInfo);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);

    const { fullDate } = waterBookingInfo;

    const date = new Date().toDateString();
    // console.log(date)

    const handleIncreaseTicket = () => {
        setTotalTicket(totalTicket + 1)
    }
    const handleDecreaseTicket = () => {
        if (totalTicket === 1) {
            return
        }
        else {
            setTotalTicket(totalTicket - 1)
        }
    }

    const selectedDate = fullDate
        ? `${fullDate?.month} ${fullDate?.date} ${fullDate?.year}`
        : new Date().toDateString();

    const tripdetails = [{
        'Location': bookingDetails?.location,
        'Tickets': totalTicket,
        'Date': selectedDate
    }].map((detail) => {
        return `Location:${detail?.Location}
        Tickets:${detail?.Tickets}
        Date:${detail?.Date}
        `
    })
    console.log(tripdetails)
    const contactEmailContent = [bookingDetails]?.map(contact => {
        return `Name: ${contact?.name}
        phone: ${contact?.phone}`;
    }).join('\n\n');
    const detailEmail = {
        from_name: bookingDetails?.name,
        // from_email: contactDetails?.email,
        message: `${contactEmailContent}\n\n${tripdetails}`
    }

    const handleUserInfo = (e) => {
        e.preventDefault()
        let userInfo = { ...bookingDetails };
        userInfo[e.target.name] = e.target.value;
        setBookingDetails(userInfo);
    };

    const navigate = useNavigate()
    const handleBookTickets = (e) => {
        e.preventDefault()
        if (bookingDetails.location === '' && bookingDetails.name === '' && bookingDetails.phone === '') {
            return;
        }
        else {
            emailjs.send(
                'service_qq74o06',
                'template_u18e64r',
                detailEmail,
                'fGjyaVSDV4-ihWS2s')

                .then((result) => {
                    console.log(result.text);
                    setWaterBookingInfo({ ...waterBookingInfo, bookingDetails, totalTicket })
                    navigate('/water/payment')
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return (
        <>
            <Navforwithout></Navforwithout>
            <div className={`w-full max-w-[1232px] font-montserrat my-20 mx-auto ${screenWidth < 1280 ? 'px-5' : ''}`}>
                <div className='w-full max-w-[300px] h-4 flex items-center justify-between mb-[22px]'>
                    <p className='font-medium text-sm text-black'>
                        {/* <Link to={'/Bus'}>Bus</Link> */}
                        <a href={`${places ? '/Water-Sports' : '/Trekking'}`}>{places ? 'Water-sports' : 'Trekking'}</a>
                    </p>
                    <HiOutlineChevronRight className='text-[#112211] mx-[14px]'></HiOutlineChevronRight>
                    <p className='font-medium text-sm  whitespace-nowrap text-[#FF8682]'>
                        {/* <Link to={'/Bus'}>
                            {bookingInfo?.busName}
                        </Link> */}
                        <a href='/water/tickets'>
                            {waterBookingInfo?.activity}
                        </a>
                    </p>

                </div>
                <h1 className='text-2xl text-[#112211] font-bold'>
                    {waterBookingInfo?.activity}
                </h1>
                {/* <p className='text-sm font-medium flex items-center mb-2 text-[10px] ms:mb-0 ms:hidden'>
                    <ImLocation2 className='text-xs text-[#112211] mr-2 ms:text-[8px]'></ImLocation2>
                    North landing Guide road. No:8, Chennai 34437</p> */}

                <div className='flex items-center justify-between w-full max-w-[181px] h-8 text-[#112211] ms:justify-start'>
                    <p className='w-10 h-8 border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mr-2'>4.2</p>
                    <p className='font-montserrat font-medium text-xs'><span className='font-montserrat font-bold text-xs'>very good</span> 54 reviews</p>
                </div>

                {/* image section starts here */}
                <div className='my-[49px] ms:my-5 w-full'>
                    <img className='w-full rounded-[10px] h-96 object-cover' src={waterBookingInfo?.image} alt="location banner picturee" />
                </div>
                {/* image section finish here  */}

                {/* water activity starts here  */}
                <div className='font-montserrat mb-10'>
                    <h3 className='text-center text-3xl font-extrabold mb-5'>Activity Details</h3>
                    <WaterSportActivity></WaterSportActivity>
                </div>
                <div className={`flex items-center justify-between ${screenWidth < 973 ? 'flex-col' : ''}`}>
                    <div className='w-full'>
                        <WeekPicker></WeekPicker>
                        <div className={`mb-[49px] bg-[#FF8682] bg-opacity-60 rounded-lg py-4 pl-4 w-full ${screenWidth < 973 ? 'max-w-full' : 'max-w-2xl'}`}>
                            <p className='font-bold text-2xl text-[#112211] mb-4'>{waterBookingInfo?.activity}</p>
                            {/* <div className='flex items-center flex-col ml:justify-start ml:items-start'> */}
                            <div className='flex items-center w-full max-w-[570px] mb-5'>
                                <FaStopwatch className='text-xl text-[#112211] mr-[19px]'></FaStopwatch>
                                <p className='font-medium text-base text-[#112211] text-opacity-75'>
                                    Open Hours : 10am - 6pm
                                </p>
                            </div>
                            <div className='flex items-center w-full max-w-[570px]'>
                                <FaStopwatch className='text-xl text-[#112211] mr-[19px]'></FaStopwatch>
                                <p className='font-medium text-base text-[#112211] text-opacity-75'>
                                    First come first serve Basis
                                </p>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    {/* ticket part starts here */}
                    <div
                        // onSubmit={handleBookTickets}
                        className={`flex items-center flex-col justify-between mb-[18px] font-popins py-6 px-11 rounded-xl w-full max-w-lg`} style={{
                            boxShadow: '0px 4px 16px 0px #1122110D'
                        }}>
                        <div className='flex items-center justify-between w-full mb-4'>
                            <p className='font-popins font-semibold text-2xl text-[#262630]'>
                                Tickets
                            </p>
                            <div className='flex items-center justify-between gap-3'>
                                {/* increase ticket  */}
                                <button
                                    onClick={() => handleIncreaseTicket()}
                                    className='w-8 h-8 rounded-full border border-[#BDBDC2] border-opacity-20 flex items-center justify-center'>
                                    <HiOutlinePlus className='text-base'></HiOutlinePlus>
                                </button>
                                <p className='p-3 border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mx-3'>
                                    {totalTicket}
                                </p>
                                {/* decrease ticket  */}
                                <button
                                    onClick={() => handleDecreaseTicket()}
                                    className='w-8 h-8 rounded-full border border-[#BDBDC2] border-opacity-20 flex items-center justify-center'>
                                    <HiMinus className='text-base'></HiMinus>
                                </button>
                            </div>
                        </div>

                        <form
                            onSubmit={handleBookTickets}
                            className={`${screenWidth < 410 ? 'hidden' : ''}`}
                            action="">
                            {/* location */}
                            <div className={`w-full flex justify-between mb-4`}>
                                <label className='font-bold text-base' htmlFor="Location">Location</label>
                                <select
                                    id="location"
                                    name="location"
                                    // value={infant.gender}
                                    onChange={handleUserInfo}
                                    className="p-1 border border-gray-300 ml-[35px]"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="Port Blair">Port Blair</option>
                                    <option value="North Island">North Bay</option>
                                    <option value="Havock Island">Havelock Island</option>
                                    <option value="Neil Island">Neil Island</option>
                                </select>
                            </div>
                            <div className='flex items-center justify-between mb-4'>
                                <p className='font-bold text-base'>You have selected Date</p>
                                <p className='font-semibold'>

                                    {
                                        fullDate?.month && fullDate?.date && fullDate?.year
                                            ?
                                            (
                                                <>
                                                    {fullDate?.month} {fullDate?.date}, {fullDate?.year}
                                                </>
                                            )
                                            :
                                            (
                                                date
                                            )
                                    }
                                </p>
                            </div>
                            <div className='w-full flex justify-between flex-col mb-4'>
                                <label className='font-bold text-base' htmlFor="Name">Name</label>
                                <input
                                    onChange={handleUserInfo}
                                    className='border-gray-300 border w-full py-2 placeholder:pl-2 rounded'
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder='Provide Your Name Here'
                                    required
                                />
                            </div>
                            <div className='w-full flex justify-between flex-col mb-4'>
                                <label className='font-bold text-base' htmlFor="Contact">Contact</label>
                                <input
                                    onChange={handleUserInfo}
                                    className='border-gray-300 border w-full py-2 placeholder:pl-2 rounded'
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder='Provide Your Contact Number'
                                    required
                                />
                            </div>
                            <button className='bg-[#27273F] text-white rounded font-medium text-base px-36 py-4'>Confirm Booking</button>
                        </form>
                        <form
                            onSubmit={handleBookTickets}
                            action=""
                            className={`${screenWidth > 410 ? 'hidden' : ''}`}
                        >
                            {/* location */}
                            <div className={`w-full flex justify-between mb-4`}>
                                <label className='font-bold text-base' htmlFor="Location">Location</label>
                                <select
                                    id="location"
                                    name="location"
                                    // value={infant.gender}
                                    onChange={handleUserInfo}
                                    className="p-1 border border-gray-300 ml-[35px]"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="Port Blair">Port Blair</option>
                                    <option value="North Island">North Island</option>
                                    <option value="Havock Island">Havock Island</option>
                                    <option value="Neil Island">Neil Island</option>
                                </select>
                            </div>
                            <div className='flex items-center justify-between mb-4'>
                                <p className='font-bold text-base'>You have selected Date</p>
                                <p className='font-semibold'>

                                    {
                                        fullDate?.month && fullDate?.date && fullDate?.year
                                            ?
                                            (
                                                <>
                                                    {fullDate?.month} {fullDate?.date}, {fullDate?.year}
                                                </>
                                            )
                                            :
                                            (
                                                date
                                            )
                                    }
                                </p>
                            </div>
                            <div className='w-full flex justify-between flex-col mb-4'>
                                <label className='font-bold text-base' htmlFor="Name">Name</label>
                                <input
                                    onChange={handleUserInfo}
                                    className='border-gray-300 border w-full py-2 placeholder:pl-2 rounded'
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder='Provide Your Name Here'
                                    required
                                />
                            </div>
                            <div className='w-full flex justify-between flex-col mb-4'>
                                <label className='font-bold text-base' htmlFor="Contact">Contact</label>
                                <input
                                    onChange={handleUserInfo}
                                    className='border-gray-300 border w-full py-2 placeholder:pl-2 rounded'
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder='Provide Your Contact Number'
                                    required
                                />
                            </div>
                            <button className='bg-[#27273F] text-white rounded font-medium text-base py-4 w-full'>Confirm Booking</button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
};

export default WaterBookingTickets;