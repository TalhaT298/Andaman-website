import { useContext, useState } from "react";
import { HiMinus, HiOutlinePlus } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import Facilities from "../../Component/Facilities";
import Footer from "../../Component/Footer/Footer";
import PhotoCompo from "../../Component/PhotoCompo";
import TitleLocation from "../../Component/TitleLocation";
import UsersReview from "../../Component/UsersReview";
import Navforwithout from "../../Navforwithout";
import { WaterContext } from "../../context/UseWaterContext";
import WeekPicker from "../WaterSports/WeekPicker/WeekPicker";
import PackageFooterStepper from "./PackageFooterStepper";
import PackageStepper from "./PackageStepper";

const TravelPackageDetails = () => {
  const location = useLocation();
  const { state } = location;
  console.log(
    "🚀 ~ file: TravelPackageDetails.js:19 ~ TravelPackageDetails ~ state:",
    state
  );
  const { props } = state;
  const { waterBookingInfo } = useContext(WaterContext);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    phone: "",
  });
  const [totalTicket, setTotalTicket] = useState(1);
  const handleIncreaseTicket = () => {
    setTotalTicket(totalTicket + 1);
  };
  const handleDecreaseTicket = () => {
    if (totalTicket === 1) {
      return;
    } else {
      setTotalTicket(totalTicket - 1);
    }
  };
  const handleUserInfo = (e) => {
    let userInfo = { ...bookingDetails };
    userInfo[e.target.name] = e.target.value;
    console.log(userInfo);
    setBookingDetails(userInfo);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/package-payment", {
      state: { props, totalTicket, waterBookingInfo },
    });
  };
  return (
    <>
      <Navforwithout />
      <section className="lg:px-10 sm:px-5 px-[104px] ms:h-96 xs:h-[360px] sxs:h-[340px] ms:bg-[#FF8682] sm:py-5 py-[60px] text-[#112211] font-montserrat">
        {/* -------------------Navigation---------------- */}
        <div className=" flex items-center ms:mb-3 mb-[30px] gap-2">
          <a href={"/Package"} className="text-[#FF8682] ms:text-slate-100">
            Package
          </a>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span className="text-[#112211] ">{props?.name}</span>
        </div>
        {/* -------------Title Location ------------*/}
        <TitleLocation singleData={props} />
        {/*------------------ Room Images---------------- */}
        <PhotoCompo singleData={props} />
        {/* ----------steps ------------*/}
        <div className="flex flex-col w-auto h-auto font-Nunito_Sans  my-10">
          <div className="mx-auto">
            <span className="text-3xl font-semibold text-slate-900">
              Package Details
            </span>
          </div>
          <div className="flex flex-row justify-between py-3 mx-4">
            <span className="text-2xl text- font-semibold text-black">
              {props.name}
            </span>
          </div>
          {/* --------Stepper--------- */}
          <PackageStepper {...props} />
        </div>
        {/*------------------------- date ----------------------*/}
        <div className="flex items-center  justify-between">
          <div className="w-full">
            <WeekPicker />
          </div>
          {/* ticket part starts here */}
          <div
            className="flex items-center flex-col justify-between mb-[18px] font-popins py-6 px-11 rounded-xl w-full max-w-lg bg-white"
            style={{
              boxShadow: "0px 4px 16px 0px #1122110D",
            }}
          >
            <div className="flex items-center justify-between w-full mb-4">
              <p className="font-popins font-semibold text-2xl text-[#262630]">
                No. Of People
              </p>
              <div className="flex items-center justify-between gap-3">
                {/* increase ticket  */}
                <button
                  onClick={() => handleIncreaseTicket()}
                  className="w-8 h-8 rounded-full border border-[#BDBDC2] border-opacity-20 flex items-center justify-center"
                >
                  <HiOutlinePlus className="text-base" />
                </button>
                <p className="p-3 border border-[#FF8682] rounded flex items-center justify-center font-montserrat text-xs font-medium mx-3">
                  {totalTicket}
                </p>

                {/* decrease ticket  */}
                <button
                  onClick={() => handleDecreaseTicket()}
                  className="w-8 h-8 rounded-full border border-[#BDBDC2] border-opacity-20 flex items-center justify-center"
                >
                  <HiMinus className="text-base" />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-between flex-col mb-4">
              <label className="font-bold text-base" htmlFor="Name">
                Name
              </label>
              <input
                onChange={handleUserInfo}
                className="border-gray-300 border w-full py-2 placeholder:pl-2 pl-2 rounded"
                type="text"
                name="name"
                id="name"
                placeholder="Provide Your Name Here"
              />
            </div>
            <div className="w-full flex justify-between flex-col mb-4">
              <label className="font-bold text-base" htmlFor="Contact">
                Contact
              </label>
              <input
                onChange={handleUserInfo}
                className="border-gray-300 border w-full py-2 placeholder:pl-2 pl-2 rounded"
                type="number"
                name="contact"
                id="contact"
                placeholder="Provide Your Contact Number"
              />
            </div>
            <button
              onClick={handleClick}
              className="bg-[#27273F] text-white rounded font-medium text-base px-36 py-4"
            >
              Confirm Booking
            </button>
          </div>
        </div>
        {/* packageFooter */}
        <PackageFooterStepper />
        {/* Facilities */}
        <Facilities />
        {/* User Review */}
        <UsersReview />
      </section>

      <Footer />
    </>
  );
};

export default TravelPackageDetails;
