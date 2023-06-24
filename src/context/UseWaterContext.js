import React, { createContext, useState } from 'react';
import elements from '../Data/ActivityData'
export const WaterContext = createContext(null)

const UseWaterContext = ({ children }) => {
    const [waterBookingInfo, setWaterBookingInfo] = useState({});
    const places = elements.find(place => place?.name === waterBookingInfo?.activity)
    // console.log(places)
    const waterInfo = {
        waterBookingInfo,
        places,
        setWaterBookingInfo
    }

    return (
        <WaterContext.Provider value={waterInfo}>
            {children}
        </WaterContext.Provider>
    );
};

export default UseWaterContext;