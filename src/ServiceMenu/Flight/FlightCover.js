// import { useEffect } from "react";
import { IoIosAirplane } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/useDataContext";
import flightIcon from "../../images/flightIcon.png";
// import flightLogo from "../../images/flightlogo.png";

// Always remember, the data we fetch from firebase is in objects, so, we will have to convert it into an array of objects that's why we have used
// here Object.values in flightsData

const FlightCover = (props) => {
  const { flightLogo } = props;
  const { startingDate, travellerInfo, setCoverData, passengerClass } = useDataContext();

  const handleFlightDetail = () => {
    setCoverData({ ...props, startingDate, travellerInfo, passengerClass })
  }

  console.log(props)
  // const totalPrice = props.adultPrice + 1000;
  const totalPrice = props?.fare + props?.tax + props?.convenience + 1000 - props?.discount;

  return (
    <div key={props.flightID}>
      <Link onClick={handleFlightDetail} to={"/FlightPreview"} className="py-3 flex-col mx-auto my-auto">
        {/* flight ? <div>{JSON.stringify(flight)}</div> : <div>Loading...</div> */}
        <div className="flex-row bg-white rounded-xl w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] transition:origin-center hover:ease-in-out hover:scale-105 transition:duration-1000 transition-transform">
          <div className="text-[#112211] flex items-center md:gap-5 gap-16  mx-auto py-auto md:px-8 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
            <div className="ms:hidden">
              {/* todo image */}
              <img src={flightLogo} alt="flight-logo" className="w-28 mb-4" />{" "}
              {/* <h4 className="text-lg font-semibold">Emirates</h4>{" "} */}
              <p className="text-[#112211] text-sm">{props.flightNo[0]}</p>
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <div className="text-start">
                  <p className="font-semibold">{props.flightName}</p>
                  <p>{startingDate[0].startDate.toDateString()}</p>
                </div>
                <div className="ms:block hidden text-end">
                  <p className="font-semibold">₹ {totalPrice}</p>
                  <p>
                    {`${travellerInfo.adult +
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
                      ₹ {totalPrice}
                    </span>{" "}
                  </p>
                  {/* <p>{props.flightDuration?.length > 1 ? props.flightIntervalTime : props.flightDuration[0]} </p> */}
                  <p>{props.totalFlightDuration}</p>
                </div>
              </div>
              <hr className="ms:block hidden my-3" />
              <div className="flex justify-between items-center">
                <div className="ms:block hidden text-start">
                  <div>
                    <span className="text-[3.72vw]">
                      {props.currentDestination[0]}
                    </span>
                  </div>
                </div>
                <div className="ms:hidden">
                  <div>
                    <span className="font-bold">{props.departureTime[0]}</span>

                    <span className="ml-2">{props.currentDestination[0]}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 ms:hidden">
                  <span>
                    {" "}
                    <img
                      src={flightIcon}
                      className="w-full md:h-8 h-12"
                      alt="flightIcon"
                    />{" "}
                  </span>
                  <span className={`text-sm ${props.flightInterval === 'Direct' ? 'text-[#0c838a]' : 'text-red-300'}`}>
                    {props?.flightInterval}
                  </span>
                </div>
                <div className="ms:flex hidden items-center text-[#FF8682]">
                  <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                  <span>
                    <IoIosAirplane className="w-6 h-6" />
                  </span>
                  <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                </div>
                <div className="ms:block hidden">
                  {/* <span className="font-bold">{props.arrivalTime}</span> */}
                  <span className="text-[3.72vw]">{props.nextDestination.length > 1 ? props.nextDestination[1] : props.nextDestination[0]}</span>
                </div>
                <div className="ms:hidden">
                  <span className="font-bold">{props.arrivalTime[0]}</span>
                  <span className="ml-2">{props.nextDestination.length > 1 ? props.nextDestination[1] : props.nextDestination[0]}</span>
                </div>
              </div>
              <div className="ms:flex justify-between items-center mt-3 hidden">
                <div className="font-bold text-[#BDBDC2]">
                  {props.departureTime[0]}
                </div>
                <div className="font-bold">{props.totalFlightDuration[0]}</div>
                <div className="font-bold text-[#BDBDC2]">
                  {props.arrivalTime[0]}
                </div>
              </div>
              <Link
                to={"/FlightPreview"}
                className="ms:hidden flex justify-end mt-3"
              >
                <button
                  onClick={() => handleFlightDetail(props)}
                  className="bg-[#FF8682] font-semibold rounded p-[8px_16px]">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
      <br />
    </div>
  );
};

export default FlightCover;
