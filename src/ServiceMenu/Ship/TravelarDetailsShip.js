import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navforwithout from "../../Navforwithout";
import { useDataContext } from "../../context/useDataContext";

const TravelarDetailsShip = () => {
    const {} = useDataContext();
    const navigate = useNavigate()
    return (
        <div>
            <Navforwithout />
            
        </div>
    );
};

export default TravelarDetailsShip;