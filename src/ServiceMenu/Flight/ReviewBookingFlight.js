import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { MdAdd, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import { useScrollRestoration } from "../../Component/Hooks/ScrollRestoration";
import Navforwithout from "../../Navforwithout";
import { useDataContext } from "../../context/useDataContext";
import flightFeature from "../../images/flightFeature.png";
import flightIcon from "../../images/flightIcon.png";
// import flight from "../../Data/Flight-Section/flight";
// import flightLogoMini from "../../images/flightLogoMini.png";
// import flightMobile from "../../images/flightMobile.png";
// import flightLogo from "../../images/flightlogo.png";
import master from "../../images/image_source_for_shiptab/mastercard.png";
import visa from "../../images/image_source_for_shiptab/visa.png";
import { GiSchoolBag } from "react-icons/gi";
import { FaSuitcaseRolling } from "react-icons/fa";

const ReviewBookingFlight = () => {
  //scroll to policies
  // const policiesRef = useRef(null);
  // const scrollToPolicies = (ref) => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // };
  // const location = useLocation();
  // const { state } = location
  // const {
  //   travellerInfo,
  //   currentDestinationFilter,
  //   startingDate,
  //   nextDestinationFilter,
  //   twoWay,
  //   endingDate,
  //   adultDetails,
  //   setAdultDetails,
  //   childrenDetails,
  //   setChildrenDetails,
  //   infantDetails,
  //   setInfantDetails,
  //   contactDetails,
  //   setContactDetails,
  //   setFlightDataState,
  //   flightDataState
  // } = state
  const {
    // travellerInfo,
    // currentDestinationFilter,
    // nextDestinationFilter,
    // passengerClass,
    // endingDate,
    // flightDataState,
    coverData
  } = useDataContext();

  // console.log(coverData)

  // calculating fares
  // const flightData = flight.find(
  //   (airplane) => airplane.currentDestination === currentDestinationFilter
  // );
  // const totalAdultFare = travellerInfo.adult * flightDataState.adultPrice;
  // const totalInfantFare = travellerInfo.infant * flightDataState.infantPrice;
  // const totalChildrenFare =
  //   travellerInfo.children * flightDataState.childrenPrice;
  // const totalFare = totalAdultFare + totalInfantFare + totalChildrenFare;
  // let totalTripFare = totalFare;
  // const discount = 200;
  // const taxes = totalFare * (3 / 100);
  // const fee = 400;
  // const netTotal = totalFare + discount + taxes + fee;
  // let num = 1;

  const navigate = useNavigate();
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Paid!");
    navigate("/Flight");
  };

  const tripData = coverData?.mappedArr.slice(0, 1).map((flight, index) => (
    <div className="p-4 lg:w-full  bg-white" key={index}>
      {" "}
      <div className=" flex flex-wrap items-center gap-5 ">
        <img src={flight?.flightLogo} alt="flightLogo" className="w-24 h-24 ms:w-28 ms:h-20" />
        <div>
          <p className="font-[500] text-black/75">{flight?.passengerClass} Class</p>
          <p className="font-semibold text-lg">{flight?.flightName}</p>
        </div>
      </div>
      <hr className="my-5" />
      {/* <p>
        Your booking is protected by <b>golobe</b>
      </p> */}
      {/* <hr className="my-5" /> */}
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Price Details</h1>
        <div className="flex justify-between">
          <p className="font-[500] text-md">Base Fare</p>
          <p className="font-[600] text-md">₹ {flight?.fare + 1000}</p>
        </div>
        {/* <div className="flex justify-between">
          <p className="font-[500] text-md">Fee</p>
          <p className="font-[600] text-md">₹ {flight?.fee}</p>
        </div> */}
        <div className="flex justify-between">
          <p className="font-[500] text-md">Discount</p>
          <p className="font-[600] text-md">₹ {flight?.discount}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-[500] text-md">Taxes</p>
          <p className="font-[600] text-md">₹ {flight?.tax}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-[500] text-md">Convenience Fee</p>
          <p className="font-[600] text-md">₹ {flight?.convenience}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="font-[500] text-md">Total</p>
        <p className="font-[600] text-md">₹ {flight?.fare + flight?.tax + flight?.convenience + flight?.fee - flight?.discount}</p>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-[#FF8682] rounded py-4 mt-3 text-white text-md"
      >
        Confirm and Pay
      </button>
    </div>
  ));
  // console.log(tripData)

  const dynamicDesktopTicket = coverData?.mappedArr?.map((flight, index) => (
    <div className="w-full">
      <div className="mt-10 ms:mt-5 ms:hidden block bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
        <div className="flex justify-between mb-2">
          <span className="font-bold">{flight?.flightName} | {flight?.flightNo}</span>
          <span className={`${flight?.refund === 'Non Refundable' ? 'bg-red-200 text-red-500' : 'bg-green-200 text-green-600 '} px-7 py-1 rounded font-semibold`}>
            <span className="ml-2">{flight?.refund}</span>
          </span>
        </div>
        <div className="flex justify-between">
          <h5 className="text-xl text-[#112211]">
            Trip-{index + 1}: {flight.flightDate[index]}
          </h5>
          <h5 className="text-xl text-[#112211]">
            {flight?.flightDuration}
          </h5>
        </div>
        <div className="flex justify-between md:gap-5 md:flex-col mt-5">
          <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
            <img
              src={flight?.flightLogo}
              alt="flightLogoMini"
              className="w-16 h-11"
            />
            <div>
              {/* <h2 className="font-semibold text-2xl">{flight?.flightNo}</h2> */}
              <p className="text-[#112211] opacity-[0.6] font-[500]">
                {flight?.flightName}
              </p>
            </div>
          </div>
          <div className="">
            {" "}
            <img src={flightFeature} alt="" />
          </div>
        </div>
        {/* ticket flight route code name  */}
        <div className="flex justify-between items-center lg:w-[70vw] w-[52vw] mx-auto my-4">
          {flight?.travelRoute?.split(',')?.map((route, index) => (
            <>
              <span className="font-bold" key={index}>
                {route}
              </span>
              {index < flight?.travelRoute?.split(',')?.length - 1 && <p className="">{flight?.flightInterval}</p>}
            </>
          )
          )}
        </div>
        {/* ticket flight time and location details  */}
        <div className="flex justify-between items-center lg:w-[70vw] w-[52vw] mx-auto my-4">
          <div>
            <div>
              <span className="font-bold">
                {flight?.departureTime}
              </span>
              <span className="ml-2">{flight?.currentDestination}</span>
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
            <span className="font-bold">
              {flight?.arrivalTime}
            </span>
            <span className="ml-2">{flight?.nextDestination}</span>
          </div>
        </div>
        {/* ticket airport location details  */}
        {/* <div className="flex justify-between">
          <span className="font-semibold">{flight?.flightLocationFrom}</span>
          <span className="font-semibold">{flight?.flightLocationTo}</span>
        </div> */}
        {/* ticket baggage details */}
        <div className="flex justify-between items-center">
          <span className="flex items-center justify-center text-sm font-bold">Baggage -<GiSchoolBag className="text-lg mx-2" />{flight?.baggage?.handBag} Cabin<FaSuitcaseRolling className="text-lg mx-2" />{flight?.baggage?.checkIn} Check-In</span>
          <span className="font-bold text-sm">Meals: {flight?.meals}</span>
        </div>
      </div>
      {/* mobile device dynamic ticket start here */}
      <div className="ms:flex flex-row hidden bg-white rounded-xl  inset-x-0  w-auto py-8 h-auto shadow-[0px_4px_16px_rgba(17,34,17,0.05)] mb-5">
        <div className="text-[#112211] flex items-center md:gap-5 gap-16  mx-auto py-auto md:px-8 px-10 text-center  w-full xs:flex-col xs:py-2 xs:gap-y-3">
          <div className="w-full">
            <div className="flex lexs:flex-col justify-between items-center md:gap-5">
              <div className="flex items-center md:w-56 w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                <img
                  src={flight.flightLogo}
                  alt="flightLogoMinimobile"
                  className="w-10 h-10 ms:w-10 ms:h-7"
                />
                <div className="">
                  <h2 className="font-semibold text-2xl">{flight.flightNo}</h2>
                  <p className="text-[#112211] opacity-[0.6] font-[500]">
                    {flight?.flightName}
                  </p>
                </div>
              </div>
              <div className="text-xl whitespace-nowrap text-blue-500 font-bold">
                ₹ {flight?.fare + flight?.tax + flight?.convenience + 1000 - flight?.discount}{" "}
              </div>
            </div>
            {/* <hr className="ms:block hidden my-3" /> */}
            <div className="flex justify-between items-center ">
              <div className="ms:block hidden text-start">
                <div>
                  <span className="text-[3.72vw]">
                    {flight.currentDestination}
                  </span>
                </div>
              </div>
              <div className="ms:flex hidden items-center text-[#FF8682]">
                <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
                <span>
                  <IoIosAirplane className="w-6 h-6" />
                </span>
                <span className="border border-[#FF8682] border-dashed w-[11vw]"></span>
              </div>
              <div className="ms:block hidden">
                <span className="text-[3.72vw] whitespace-nowrap">
                  {flight?.nextDestination}
                </span>
              </div>
            </div>
            <div className="ms:flex justify-between items-center mt-3 hidden">
              <div className="font-bold text-[#BDBDC2]">
                {flight?.departureTime}
              </div>
              <div className="font-bold">
                {flight?.flightDuration}
              </div>
              <div className="font-bold text-[#BDBDC2]">
                {flight?.arrivalTime}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile device dynamic ticket finish here */}
      {/* <img
        src={flight?.flightLogo}
        alt="Fight-log"
        className="ms:block hidden mt-10 w-full"
      /> */}
    </div>
  ))

  const cardData = <div>
    <p className="text-xl font-thin text-slate-400 italic my-4">
      Payment Method
    </p>
    <div>
      <div className="flex justify-between border border-[#17183B] opacity-20 rounded-sm p-4">
        <div className="flex flex-wrap">
          <input type="radio" className="default:ring-2 ..." />
          <img src={visa} alt="" className="mx-3" />
          <p className="lexs:mr-2 mr-10">.....6754</p>
          <p>Expires 06/2021</p>
        </div>
        <p>Remove</p>
      </div>
      <div className="flex justify-between border border-[#17183B] opacity-20 rounded-sm p-4">
        <div className="flex flex-wrap">
          <input type="radio" className="default:ring-2 ..." />
          <img src={master} alt="" className="mx-3" />
          <p className="lexs:mr-2 mr-10">.....5643</p>
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

  // const tripData = [...Array(num)].reverse().map((_, index) => (
  //   <div className="p-4 lg:w-full  bg-white" key={index}>
  //     {" "}
  //     <div className=" flex flex-wrap items-center gap-5 ">
  //       <img src={flightLogo} alt="flightLogo" className="w-24 h-24" />
  //       <div>
  //         <p className="font-[500] text-black/75">{passengerClass} Class</p>
  //         <p className="font-semibold text-lg">{flightDataState.flightName}</p>
  //       </div>
  //     </div>
  //     <hr className="my-5" />
  //     <p>
  //       Your booking is protected by <b>golobe</b>
  //     </p>
  //     <hr className="my-5" />
  //     <div className="flex flex-col gap-4">
  //       <h1 className="font-bold">Price Details</h1>
  //       <div className="flex justify-between">
  //         <p className="font-[500] text-md">Base Fare</p>
  //         <p className="font-[600] text-md">₹ {totalFare}</p>
  //       </div>
  //       <div className="flex justify-between">
  //         <p className="font-[500] text-md">Discount</p>
  //         <p className="font-[600] text-md">₹ {discount}</p>
  //       </div>
  //       <div className="flex justify-between">
  //         <p className="font-[500] text-md">Taxes</p>
  //         <p className="font-[600] text-md">₹ {taxes}</p>
  //       </div>
  //       <div className="flex justify-between">
  //         <p className="font-[500] text-md">Service Fee</p>
  //         <p className="font-[600] text-md">₹ {fee}</p>
  //       </div>
  //     </div>
  //     <hr className="my-4" />
  //     <div className="flex justify-between">
  //       <p className="font-[500] text-md">Total</p>
  //       <p className="font-[600] text-md">₹ {netTotal}</p>
  //     </div>
  //     <button
  //       onClick={handleSubmit}
  //       className="w-full bg-[#FF8682] rounded py-4 mt-3 text-white text-md"
  //     >
  //       Confirm and Pay
  //     </button>
  //   </div>
  // ));
  // const paymentData = [...Array(num)].reverse().map((_, index) => (
  //   <div key={index}>
  //     {" "}
  //     <div className="text-sm mt-4">
  //       <h1 className="font-bold">
  //         Trip-:{index + 1} [
  //         {index === 1 ? currentDestinationFilter : nextDestinationFilter} -&gt;{" "}
  //         {index === 1 ? nextDestinationFilter : currentDestinationFilter}]
  //       </h1>
  //       <h1 className="font-bold">
  //         {index === 1 ? currentDestinationFilter : nextDestinationFilter} -&gt;{" "}
  //         {index === 1 ? nextDestinationFilter : currentDestinationFilter}
  //       </h1>
  //       <h1 className="font-bold">
  //         {flightData.flightName}(
  //         <span className="italic font-normal">
  //           {flightData.travelRoute} Class
  //         </span>
  //         )
  //       </h1>
  //       <h1 className="font-bold">
  //         {flightData.departureTime} |{" "}
  //         {index === 1
  //           ? endingDate[0].endDate.toDateString()
  //           : startingDate[0].startDate.toDateString()}
  //       </h1>
  //     </div>
  //     <div className="flex justify-between flex-wrap gap-y-2 mt-1">
  //       <div>
  //         <h1>Passengers </h1>
  //         <h1>Adult -&gt; {travellerInfo.adult}</h1>
  //         <h1>Children -&gt; {travellerInfo.children}</h1>
  //         <h1>Infant -&gt; {travellerInfo.infant} </h1>
  //       </div>

  //       <div>
  //         <h1 className="font-semibold">Price</h1>
  //         <h1>₹{flightData.adultPrice}</h1>
  //         <h1>₹{flightData.childrenPrice}</h1>
  //         <h1>₹{flightData.infantPrice}</h1>
  //       </div>
  //       <div>
  //         <h1 className="font-semibold">Convenience Fee</h1>
  //         <h1>₹0</h1>
  //         <h1>₹0</h1>
  //         <h1>₹0</h1>
  //       </div>
  //       <div>
  //         <h1 className="font-semibold">Sum</h1>
  //         <h1>₹{totalAdultFare}</h1>
  //         <h1>₹{totalInfantFare}</h1>
  //         <h1>₹{totalChildrenFare}</h1>
  //       </div>
  //     </div>
  //     {/* </div> */}
  //   </div>
  // ));
  useScrollRestoration();
  return (
    <>
      <Navforwithout />
      <div className="h-full w-auto" style={{ fontFamily: "Montserrat" }}>
        <div className="ms:bg-[#FF8682]  ms:px-2 ms:h-[390px]">
          <div className="w-[90%] mx-auto ms:mt-0 ms:pt-10 mt-12 mb-8">
            <div className="ms:hidden flex items-center mt-5  gap-2 z-50">
              <Link to={"/Flight"} className="text-[#FF8682] ">
                Flight
              </Link>
              <span>
                <MdKeyboardArrowRight />
              </span>
              <Link to={"/FlightPreview"} className="text-[#FF8682] ">
                {coverData?.flightName}
              </Link>
              <span>
                <MdKeyboardArrowRight />
              </span>
              <Link to={"/ReviewFlight"} className="text-[#FF8682] ">
                Travellers Details
              </Link>
              <span>
                <MdKeyboardArrowRight />
              </span>
              <span>Payment</span>
            </div>
            <div className="flex lg:flex-col">
              <div className="flex flex-col">
                {
                  dynamicDesktopTicket
                }
                {
                  cardData
                }
              </div>

              <div className="w-[50%] lg:w-full lg:mt-0 mt-10 lg:pl-0 pl-8">
                {tripData.length === 0 ? (
                  <h1>Please select seats to proceed with booking.</h1>
                ) : (
                  tripData
                )}
              </div>
            </div>
          </div>
        </div>
        <>
          {/* <div className="w-[90%] mx-auto font-Nunito_Sans">
          <h1 ref={policiesRef} className="text-3xl font-semibold my-4">
            Read Before you Book
          </h1>
          <div className="flex flex-wrap gap-5 mb-10">
            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Confirmation</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                This is not a confirmed booking. This is an order to confirm the
                booking and SublimeIsland will confirm the booking on the best
                effort basis in the next 3-4 hours, maximum being 24 hours.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Cancellation</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                48 hours before the departure, INR 250/person/ticket. 24 – 48
                hours before the departure 50% of the tickets. Within 24 hours,
                100% of the ticket.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Reporting Time</h1>
              <hr className="border-t border-gray-300" />
              <p className="mt-2">
                Please report at the operator’s check-in at Jetty 1 hour before
                the departure.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Rescheduling</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                Rescheduling will be treated as cancellation and rebooking, will
                be charged as per the cancellation policy.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Ferry Seat Category</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                The ferries will usually have 3 seat categories: Economy, Luxury
                and Royal. While different operators use different terms but the
                facilities are similar for each category, there still exist some
                differences between operators.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Luggage Policy</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                25 KG/person, mostly not too strict. You’ll be able to carry
                more than what you can carry in a flight.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">
                Reschedule/Cancellations by Operator
              </h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                The operator reserves the right to change or cancel based on
                weather or technical issues. In that case, you’ll be endorsed to
                a different ferry or given a full refund.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Ferry Boarding Points</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                Port Blair: Haddo Jetty, Havelock: Havelock Jetty (only Jetty in
                Havelock Island), Neil Island: Neil Jetty (only Jetty in Neil
                Island).
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Infant Policy</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                A child above 12 months/1 years will be charged a full ticket
                amount.
              </p>
            </div>
          </div>
        </div> */}
        </>
      </div>
      <Footer />
    </>
  );
};

export default ReviewBookingFlight;
