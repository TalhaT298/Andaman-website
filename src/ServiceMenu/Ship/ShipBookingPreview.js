import React from "react";
import { MdAdd, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import ship from "../../Data/Ship-Section/ship";
import Navforwithout from "../../Navforwithout";
import { useDataContext } from "../../context/useDataContext";
import boat from "../../images/image_source_for_shiptab/Groupboat.png";
import master from "../../images/image_source_for_shiptab/mastercard.png";
import visa from "../../images/image_source_for_shiptab/visa.png";

const ShipBookingPreview = () => {
  const { shipDataState, travellerInfo, selectedDate } = useDataContext();
  console.log(shipDataState);
  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const filerShip = ship.filter((ship) => ship.shipID === shipDataState);
  console.log(
    "🚀 ~ file: ShipBookingPreview.js:20 ~ ShipBookingPreview ~ filerShip:",
    filerShip
  );
  const location = useLocation();
  const filterData = filerShip[0];
  const adultPrice = travellerInfo.adult * filterData.adultPrice;
  console.log(
    "🚀 ~ file: ShipBookingPreview.js:22 ~ ShipBookingPreview ~ adultPrice:",
    adultPrice
  );
  const children = travellerInfo.children * filterData.childrenPrice;
  const infant = travellerInfo.infant * filterData.infantPrice;
  const totalPrice = adultPrice + children + infant;

  const taxes = totalPrice * (3 / 100);
  const serviceFee = 400;

  return (
    <>
      <Navforwithout />
      <div
        className="ms:bg-[#FF8682] ms:pt-10 lexs:px-2 ms:px-6 ms:h-[240px] h-full"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="flex items-center ms:hidden">
          <span className="text-rose-400">Ferry</span>
          <MdKeyboardArrowRight />
          <span className="text-slate-600">{filterData.shipName}</span>
        </div>
        <div className="flex flex-row lg:flex-col lexs:px-2 ms:px-6 px-10 mx-auto">
          <div className="w-3/5 lg:w-full mr-20">
            <div className="bg-white drop-shadow-lg rounded-lg p-7">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{filterData.shipName}</h1>
                <h2 className="flex items-center font-bold text-cyan-800 text-2xl">
                  ₹ {totalPrice}
                </h2>
              </div>
              <div className="flex justify-between my-5">
                <p className="font-bold">{formattedDate}</p>
                <p>{filterData.flightDuration}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex flex-row lg:flex-col items-center">
                  <span className="font-bold text-xl lg:text-sm mr-2">
                    {filterData?.departureTime}
                  </span>
                  <span>{filterData.currentDestination}</span>
                </p>
                <div className="flex items-center">
                  {/* <img src={lftarrow} alt="left-hand-side" /> */}
                  <img src={boat} alt="boat" className="mx-4" />
                  {/* <img src={rhsarrow} alt="right-hand-side" /> */}
                </div>
                <p className="flex flex-row lg:flex-col items-center">
                  <span className="font-bold text-xl lg:text-sm mr-2">
                    {filterData.arrivalTime}
                  </span>
                  <span>{filterData.nextDestination}</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl font-thin text-slate-400 italic my-4">
                Payment Method
              </p>
              <div>
                <div className="flex justify-between border border-slate-500 p-4">
                  <div className="flex">
                    <input type="radio" class="default:ring-2 ..." />
                    <img src={visa} alt="" className="mx-3" />
                    <p className="mr-10">.....6754</p>
                    <p>Expires 06/2021</p>
                  </div>
                  <p>Remove</p>
                </div>
                <div className="flex justify-between border border-slate-500 p-4">
                  <div className="flex">
                    <input type="radio" class="default:ring-2 ..." />
                    <img src={master} alt="" className="mx-3" />
                    <p className="mr-10">.....5643</p>
                    <p>Expires 11/2025</p>
                  </div>
                  <p>Remove</p>
                </div>
                <div className="flex items-center my-8">
                  <MdAdd className="mr-6 text-cyan-500 text-xl" />
                  <p>Add Payment method</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 lg:w-full bg-white drop-shadow-lg rounded-lg p-7 h-96">
            <p className="text-black font-bold text-xl mb-6">Price Details</p>
            <div className="flex items-center justify-between font-bold mb-4">
              <p>Base Fare</p>
              <p className="flex items-center">₹ {totalPrice}</p>
            </div>
            <div className="flex items-center justify-between font-bold mb-4">
              <p>Taxes</p>
              <p className="flex items-center">₹ {taxes}</p>
            </div>
            <div className="flex items-center justify-between font-bold mb-4">
              <p>Service Fee</p>
              <p className="flex items-center">₹ {serviceFee}</p>
            </div>
            <hr />
            <div className="flex items-center justify-between font-bold my-4">
              <p>Total</p>
              <p className="flex items-center">
                ₹ {totalPrice + taxes + serviceFee}
              </p>
            </div>
            <input
              type="text"
              placeholder="Cupon Code"
              className="w-full border border-slate-400 p-3 mb-4"
            />
            <Link to={"/travellerShip"}>
              <button className="text-white text-center w-full bg-rose-400 py-3 rounded-lg">
                Confirm and Pay
              </button>
            </Link>
          </div>
        </div>
        <div className="px-10 flex justify-between items-center pt-5 pb-14">
          <h2>Location Map</h2>
          <button className="text-white bg-rose-400 py-2 px-4">
            View on Google Map
          </button>
        </div>
      </div>
    </>
  );
};

export default ShipBookingPreview;
