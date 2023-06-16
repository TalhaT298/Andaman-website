import React, { createContext, useState } from 'react';
export const WaterContext = createContext(null)
const UseWaterContext = ({ children }) => {
    const [waterBookingInfo, setWaterBookingInfo] = useState({});
    const waterInfo = {
        waterBookingInfo,
        setWaterBookingInfo
    }

    return (
        <WaterContext.Provider value={waterInfo}>
            {children}
        </WaterContext.Provider>
    );
};

export default UseWaterContext;