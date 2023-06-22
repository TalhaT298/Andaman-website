import React, { useContext, useEffect, useState } from "react";
// import 'react-day-picker/lib/style.css';
import { addDays, endOfMonth, format, startOfMonth } from "date-fns";
import "react-day-picker/dist/style.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { WaterContext } from "../../../context/UseWaterContext";

const WeekPicker = () => {
  const [currentMonth, setcurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [showCalender, setShowCalender] = useState(false);
  const [isCurrentDate, setIsCurrentDate] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // console.log(isCurrentDate)
  const { waterBookingInfo, setWaterBookingInfo } = useContext(WaterContext)
  // const [isCurrentMonth, setIsCurrentMonth] = useState(null);
  const year = currentMonth.getFullYear();


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);
  const handleSelectDate = (month, date, day) => {
    const fullDate = { day, month, date, year };
    setWaterBookingInfo({ ...waterBookingInfo, fullDate })
    setIsCurrentDate(fullDate);
    setSelectedDate(fullDate)
  };

  const handlePreviousWeek = () => {
    const previousWeek = new Date(currentWeek);
    previousWeek.setDate(currentWeek.getDate() - 7);
    setCurrentWeek(previousWeek);

  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentWeek);
    nextWeek.setDate(currentWeek.getDate() + 7);
    setCurrentWeek(nextWeek);

  };

  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(currentMonth.getMonth() - 1);
    setcurrentMonth(previousMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);
    setcurrentMonth(nextMonth);
  };
  const getCurrentMonth = () => {
    const monthName = format(currentMonth, 'MMMM');
    return monthName;
  };
  const generateMonthDates = () => {
    const dates = [];
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);
    for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
      dates.push(date);
    }
    return dates;
  };
  const renderDates = () => {
    const dates = generateMonthDates();
    return dates.map((date, index) => {
      const dayName = format(date, 'EEE');
      const dateNumber = format(date, 'd');
      const isSelected =
        isCurrentDate.day === dayName &&
        isCurrentDate.month === format(date, 'MMMM') &&
        isCurrentDate.date === dateNumber;
      return (
        <div
          key={dateNumber}
          onClick={() => { handleSelectDate(format(date, 'MMMM'), dateNumber, dayName); handleShowCalendar(!showCalender) }
          }
          className={`font-popins flex items-center justify-center flex-col cursor-pointer ${isSelected ? 'bg-red-300 rounded w-16 py-2 text-white' : ''}`}
        >
          <p className="text-sm font-medium">{dayName}</p>
          <p className="text-sm font-medium">{dateNumber}</p>
        </div >
      );
    });
  };
  // const renderDates = () => {
  //     const dates = [];
  //     const startDate = new Date(currentWeek);
  //     for (let i = 0; i < 7; i++) {
  //         const currentDate = addDays(startDate, i);
  //         const dateNumber = format(currentDate, 'd');

  //         dates.push(dateNumber)
  //     }
  //     return dates;
  // };
  // let isCurrentDate = true;
  // let isCurrentMonth = true;
  // const renderWeekdays = () => {
  //     const weekdays = [];
  //     const months = getCurrentMonth();
  //     const dates = renderDates();
  //     const today = new Date()
  //     const startDate = new Date(currentWeek);
  //     for (let i = 0; i < 7; i++) {
  //         const currentDate = addDays(startDate, i);
  //         const dayName = format(currentDate, 'EEE');

  //         const dateNumber = format(currentDate, 'd');
  //         isCurrentDate = currentDate.toDateString() === today.toDateString();

  //         isCurrentMonth = currentMonth === format(currentDate, 'MMMM');

  //         const dateStyle = isCurrentDate && isCurrentMonth ? 'current-date' : '';
  //         weekdays.push(dayName)
  //         console.log(isCurrentDate, isCurrentMonth)
  //     }

  //     return (
  //         <div className='flex items-center justify-between gap-4'>
  //             {dates.map((date, index) => (
  //                 <div
  //                     // key={date.getDate()}
  //                     key={date}
  //                     onClick={() => handleSelectDate(date, weekdays[index], months)}
  //                     className={`font-popins flex items-center justify-center flex-col`}
  //                 >
  //                     <p className='text-xl font-medium'>
  //                         {weekdays[index]}
  //                     </p>
  //                     <p className='text-xl font-medium'>
  //                         {date}
  //                     </p>
  //                 </div>
  //             ))}
  //         </div>
  //     );
  // };

  const getMonthNumber = (month) => {
    const date = new Date(`${month} 1, 2000`);
    return date.getMonth();
  };

  const renderWeekdays = () => {
    const weekdays = [];
    const startDate = isCurrentDate ? new Date(isCurrentDate.year, getMonthNumber(isCurrentDate.month), isCurrentDate.date) : currentWeek;
    // const startDate = new Date(currentWeek);
    const today = new Date();
    const currentMonth = getCurrentMonth();
    // const dates = renderDates();

    for (let i = 0; i < 7; i++) {
      const currentDate = addDays(startDate, i);
      const dayName = format(currentDate, 'EEE');
      const dateNumber = format(currentDate, 'd');
      const isCurrentDate = currentDate.toDateString() === today.toDateString();
      const isCurrentMonth = currentMonth === format(currentDate, 'MMMM');
      const isSelected =
        selectedDate &&
        selectedDate?.day === dayName &&
        selectedDate?.month === format(currentDate, 'MMMM') &&
        selectedDate?.date === dateNumber;

      weekdays.push(
        <div
          key={dateNumber}
          onClick={() => handleSelectDate(currentMonth, dateNumber, dayName)}
          className={`font-popins flex items-center justify-center flex-col cursor-pointer ${isSelected && isCurrentMonth && 'bg-red-300 px-4 py-4 text-white rounded'
            } ${isCurrentDate && isCurrentMonth && 'bg-red-300 px-4 py-4 text-white rounded'}`}
        >
          <p className="text-sm font-medium">{dayName}</p>
          <p className="text-sm font-medium">{dateNumber}</p>
        </div>
      );
    }

    return <div className="flex items-center justify-between gap-4">{weekdays}</div>;
  };

  const handleShowCalendar = () => {
    setShowCalender(!showCalender);
  };

  const month = currentMonth.toLocaleString('default', { month: 'long' })
  return (
    <div className='text-center mb-5'>
      <div className={`flex items-center justify-between w-full mb-4 ${screenWidth < 973 ? 'max-w-full' : 'max-w-2xl'}`}>
        <button
          className='text-2xl font-extrabold text-[#FF8682]'
          onClick={showCalender ? handlePreviousMonth : handlePreviousWeek}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <div>
          {
            showCalender
              ?
              <div className='flex flex-col font-montserrat'>
                <h3 className="font-extrabold text-lg mb-5">Please Select A Date</h3>
                <div className='flex items-center justify-between px-4 mb-5 font-popins'>
                  <p className='text-sm font-medium'>{month}</p>
                  <p className='text-sm font-medium'>{year}</p>
                </div>
                <div className='grid grid-cols-7 gap-5'>
                  {
                    renderDates()
                  }
                </div>
              </div>
              :
              renderWeekdays()
          }
          <button
            onClick={() => handleShowCalendar()}
            className='mt-5 px-16 py-4 bg-red-300 rounded font-medium'>Show Calender</button>
        </div>
        <button
          className='text-2xl font-extrabold text-[#FF8682]'
          onClick={showCalender ? handleNextMonth : handleNextWeek}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>

      {/* <DayPicker
                selected={null} // Set the selected date here
                initialMonth={currentWeek}
            /> */}
    </div>
  );
};

export default WeekPicker;
