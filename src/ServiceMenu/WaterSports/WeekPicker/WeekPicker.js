import React, { useContext, useState } from 'react';
// import 'react-day-picker/lib/style.css';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { format, addDays, startOfMonth, endOfMonth } from 'date-fns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { WaterContext } from '../../../context/UseWaterContext';

const WeekPicker = () => {
    const [currentMonth, setcurrentMonth] = useState(new Date());
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [showCalender, setShowCalender] = useState(false);
    const [isCurrentDate, setIsCurrentDate] = useState('')
    console.log(isCurrentDate)
    const { setWaterBookingInfo } = useContext(WaterContext)
    // const [isCurrentMonth, setIsCurrentMonth] = useState(null);

    const handleSelectDate = (month, date, day) => {
        const fullDate = { day, month, date };
        setWaterBookingInfo(fullDate)
        setIsCurrentDate(fullDate);
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
                    onClick={() => handleSelectDate(format(date, 'MMMM'), dateNumber, dayName)}
                    className={`font-popins flex items-center justify-center flex-col cursor-pointer ${isSelected ? 'bg-red-300 rounded w-16' : ''}`}
                >
                    <p className="text-xl font-medium">{dayName}</p>
                    <p className="text-xl font-medium">{dateNumber}</p>
                </div>
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
    const renderWeekdays = () => {
        const weekdays = [];
        const startDate = new Date(currentWeek);
        const today = new Date();
        const currentMonth = getCurrentMonth();
        const dates = renderDates();

        for (let i = 0; i < 7; i++) {
            const currentDate = addDays(startDate, i);
            const dayName = format(currentDate, 'EEE');
            const dateNumber = format(currentDate, 'd');
            const isCurrentDate = currentDate.toDateString() === today.toDateString();
            const isCurrentMonth = currentMonth === format(currentDate, 'MMMM');

            weekdays.push(
                <div
                    key={dateNumber}
                    onClick={() => handleSelectDate(currentMonth, dateNumber, dayName)}
                    className={`font-popins flex items-center justify-center flex-col cursor-pointer ${isCurrentDate && isCurrentMonth ? 'bg-red-300 px-4 py-4 text-white rounded' : ''
                        } `}
                >
                    <p className="text-xl font-medium">{dayName}</p>
                    <p className="text-xl font-medium">{dateNumber}</p>
                </div>
            );
        }

        return <div className="flex items-center justify-between gap-4">{weekdays}</div>;
    };

    const handleShowCalendar = () => {
        // console.log(showCalender)
        setShowCalender(!showCalender);
    };

    return (
        <div className='text-center mb-5'>
            <div className='flex items-center justify-between w-full max-w-2xl mb-4'>
                <button
                    className='text-2xl font-extrabold text-[#FF8682]'
                    onClick={handlePreviousWeek}>
                    <FaChevronLeft></FaChevronLeft>
                </button>
                <div className={`${showCalender ? 'grid grid-cols-7 gap-4' : ''}`}>
                    {
                        showCalender
                            ?
                            renderDates()
                            :
                            renderWeekdays()
                    }
                </div>
                <button
                    className='text-2xl font-extrabold text-[#FF8682]'
                    onClick={handleNextWeek}>
                    <FaChevronRight></FaChevronRight>
                </button>
            </div>
            <button
                onClick={() => handleShowCalendar()}
                className='px-16 py-4 bg-red-300 rounded font-medium'>Show Calender</button>
            {/* <DayPicker
                selected={null} // Set the selected date here
                initialMonth={currentWeek}
            /> */}
        </div>
    );
};

export default WeekPicker;
