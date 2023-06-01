import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/useDataContext";
import flightImage from "../../images/flightlogo.png";
import boat from "../../images/image_source_for_shiptab/Groupboat.png";
import miniBoat from "../../images/image_source_for_shiptab/icon.png";

const Shipoverview = (props) => {
  console.log("🚀 ~ file: Shipoverview.js:9 ~ Shipoverview ~ props:", props);
  const { selectedDate, travellerInfo, setShipDataState } = useDataContext();
  const navigate = useNavigate();
  return (
    <div key={props.shipID}>
      <Link
        to={"/ShipBookingPreview"}
        state={props.shipID}
        className="py-3 flex-col  mx-auto my-auto "
      >
        {/* ship ? <div>{JSON.stringify(ship)}</div> : <div>Loading...</div> */}
        <div className="flex-row bg-white rounded-xl w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] transition:origin-center hover:ease-in-out hover:scale-105 transition:duration-1000 transition-transform">
          <div className="text-[#112211] flex items-center md:gap-5 gap-16  mx-auto py-auto md:px-8 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
            <div className="ms:hidden">
              <img src={flightImage} alt="ship-logo" className="w-20 h-14" />{" "}
              <h4 className="text-lg font-semibold">Emirates</h4>{" "}
              <p className="text-[#112211] text-sm">{props.shipName}</p>
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <div className="self-end">{selectedDate.toDateString()}</div>
                <div className="ms:block hidden">
                  <p>
                    {`${
                      travellerInfo.adult +
                      travellerInfo.children +
                      travellerInfo.infant
                    }`}{" "}
                    Seat
                  </p>
                </div>
                <div className="ms:hidden flex flex-col items-end gap-4">
                  <p>
                    Starting from{" "}
                    <span className="block text-right text-[#425D97] text-xl font-bold">
                      ₹ {props.adultPrice}
                    </span>{" "}
                  </p>
                  <p>{props.shipDuration} </p>
                </div>
              </div>
              <hr className="ms:block hidden my-3" />
              <div className="flex justify-between items-center ">
                <div className="ms:block hidden text-start">
                  <div>
                    <span className="text-[3.72vw]">
                      {props.currentDestination}
                    </span>
                  </div>
                </div>
                <div className="ms:hidden">
                  <div>
                    <span className="font-bold">{props.departureTime}</span>

                    <span className="ml-2">{props.currentDestination}</span>
                  </div>
                </div>
                <div className="flex gap-2 ms:hidden">
                  <span>
                    {" "}
                    <img
                      src={boat}
                      className="w-full md:h-8 h-12"
                      alt="shipIcon"
                    />{" "}
                  </span>
                </div>
                <div className="ms:flex hidden items-center text-[#FF8682]">
                  <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                  <span>
                    <img src={miniBoat} alt="Boat-img" className="w-6 h-6" />
                  </span>
                  <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                </div>
                <div className="ms:block hidden">
                  {/* <span className="font-bold">{props.arrivalTime}</span> */}
                  <span className="text-[3.72vw]">{props.nextDestination}</span>
                </div>
                <div className="ms:hidden">
                  <span className="font-bold">{props.arrivalTime}</span>
                  <span className="ml-2">{props.nextDestination}</span>
                </div>
              </div>
              <div className="ms:flex justify-between items-center mt-3 hidden">
                <div className="font-bold text-[#BDBDC2]">
                  {props.departureTime}
                </div>
                <div className="font-bold">{props.shipDuration}</div>
                <div className="font-bold text-[#BDBDC2]">
                  {props.arrivalTime}
                </div>
              </div>
              <div
                className="ms:hidden flex justify-end mt-3"
                onClick={
                  (() => setShipDataState(props.shipID),
                  navigate("/ShipBookingPreview"))
                }
              >
                <button className="bg-[#FF8682] font-semibold rounded p-[8px_16px]">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <br />
    </div>
  );
};

export default Shipoverview;
