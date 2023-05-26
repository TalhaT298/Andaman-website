import React, { lazy } from "react";
import { Link } from "react-router-dom";
import bestprices from "../../Data/Flight-Section/bestprices";
import { useDataContext } from "../../context/useDataContext";
import flightIcon from "../../images/flightIcon.png";
import flightLogo from "../../images/flightlogo.png";

const BestPricesCover = lazy(() => import("./BestPricesCover"));

const bestPrices = bestprices.map((bestprice, index) => {
  return <BestPricesCover {...bestprice} />;
});

const BestPrices = () => {
  const { startingDate: date } = useDataContext();

  return (
    <>
      <div className="py-3 flex-col  mx-auto my-auto ">
        <center className="text-slate-400 text-3xl font-bold font-mono mb-10">
          Best Flight Rates
        </center>
        {/* flight ? <div>{JSON.stringify(flight)}</div> : <div>Loading...</div> */}
        {bestprices.map((props, index) => (
          <>
            <div
              // onClick={() => {
              //   setShowFlightInfo(!showFlightInfo);
              // }}
              className="flex-row bg-white rounded-xl w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
            >
              <div className="text-[#112211] flex items-center gap-16  mx-auto py-auto md:px-4 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
                <div className="">
                  <img
                    src={flightLogo}
                    alt="flight-logo"
                    className="w-20 h-14"
                  />{" "}
                  <h4 className="text-lg font-semibold">Emirates</h4>{" "}
                  <p className="text-[#112211] text-sm">{props.flightName}</p>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="self-end">
                      {date[0].startDate.toDateString()}
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <p>
                        Starting from{" "}
                        <span className="block text-right text-[#425D97] text-xl font-bold">
                          ₹ {props.adultPrice}
                        </span>{" "}
                      </p>
                      <p>{props.flightDuration} </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center ">
                    <div className="">
                      <div>
                        <span className="font-bold">{props.departureTime}</span>

                        <span className="ml-2">{props.currentDestination}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        {" "}
                        <img
                          src={flightIcon}
                          className="w-full h-8"
                          alt="flightIcon"
                        />{" "}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">{props.arrivalTime}</span>
                      <span className="ml-2">{props.nextDestination}</span>
                    </div>
                  </div>
                  <Link to={"/FlightPreview"} className="flex justify-end mt-3">
                    <button className="bg-[#FF8682] font-semibold rounded p-[8px_16px]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>
    </>
  );
};

export default BestPrices;
