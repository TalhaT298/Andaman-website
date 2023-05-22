import React from 'react';
import { MdKeyboardArrowRight, MdLocationPin } from "react-icons/md";
import { RiDoorLockFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ship from '../../Data/Ship-Section/ship';
import { useDataContext } from '../../context/useDataContext';

const ShipBookingPreview = () => {
    const  {
        currentDestinationFilterShip,
        nextDestinationFilterShip,
        shipDataState,
        setShipDataState,
    } = useDataContext()
    const filerShip = ship.filter((ship) => ship.currentDestination === currentDestinationFilterShip)
    setShipDataState(filerShip)

    return (
        <div>
            <div>
                <span className='text-black'>Ferry</span>
                <MdKeyboardArrowRight />
                <span className='text-black'>{shipDataState.shipName}</span>
            </div>
            
        </div>
    );
};

export default ShipBookingPreview;