import React, { createContext, useState } from 'react';

export const BusContext = createContext(null)

const UseBusDataContext = ({ children: Main }) => {
    const [searchResults, setSearchResults] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [bookingInfo, setBookingInfo] = useState({});
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0)
    const [infant, setInfant] = useState(0)
    // const [twoWay, setTwoWay] = useState()
    // console.log(searchResults)
    // console.log(bookingInfo)

    const busInfo = {
        searchResults,
        selectedDate,
        bookingInfo,
        adult,
        children,
        infant,
        setChildren,
        setInfant,
        setAdult,
        setSearchResults,
        setSelectedDate,
        setBookingInfo,
    }
    return (
        <BusContext.Provider value={busInfo}>
            {
                // children
                Main
            }
        </BusContext.Provider>
    );
};

export default UseBusDataContext;