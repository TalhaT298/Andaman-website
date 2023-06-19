import { format } from "date-fns";
import React, { useContext } from "react";
import { MdAdd, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navforwithout from "../../Navforwithout";
import { WaterContext } from "../../context/UseWaterContext";
import pgHomeIcon from "../../images/SVG/groupHome.svg";
import pgIcon from "../../images/pglogo.png";
const PackagePayment = () => {
  const location = useLocation();
  const { state } = location;
  const { props, totalTicket } = state;
  const price = 5000;
  const baseFare = 5000 * totalTicket;
  const stayingDay = parseInt(props?.duration.match(/\d+/)[0]) + 1;
  const { waterBookingInfo } = useContext(WaterContext);
  const concatDate =
    waterBookingInfo.day +
    " " +
    waterBookingInfo.date +
    " " +
    waterBookingInfo.month +
    " " +
    waterBookingInfo.year;

  const checkInDate = new Date(concatDate);
  const dateCopy = new Date(concatDate);
  const checkOutDate = dateCopy.setDate(dateCopy.getDate() + stayingDay);

  const handleSubmit = () => {
    alert(
      "Thank you for taking your time. Sublime Island will reach out to you in 2-3 hours or as soon as possible 😁✌🏻"
    );
  };
  return (
    <>
      <Navforwithout />
      <section className="xl:px-10 sm:px-3 px-[104px] ms:h-60   exs:h-[16rem] ms:bg-[#FF8682] sm:py-5 py-[60px] text-[#112211] font-montserrat">
        {/* -------------------Navigation---------------- */}
        <div className=" flex items-center ms:mb-2 mb-[30px] ms:gap-0.5 gap-2">
          <a
            href={"/Hotels"}
            className="text-[#FF8682] ms:text-slate-100 ms:text-sm"
          >
            Packages
          </a>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <Link
            to={"/package-details"}
            state={{ props }}
            className="text-[#FF8682] ms:text-slate-100 ms:text-sm"
          >
            {props.name}
          </Link>

          <span>
            <MdKeyboardArrowRight />
          </span>
          <span className="text-[#112211]  ms:text-sm">payment</span>
        </div>
        {/* Main Layout */}
        {/* <PaymentCard singleData={singleData} formValues={formValues} /> */}
        <div className=" flex lg:flex-col  ">
          <div className="w-full">
            <div className="mt-10 ms:mt-5 bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
              <div className="flex justify-between items-center font-bold">
                <h5 className="text-2xl ml:text-lg leading-none w-full ms:max-w-[300px] max-w-[491px] text-[#112211]">
                  {props?.name}
                </h5>
                <div className="text-[#27273F] ml:text-lg  text-[32px] font-[900]">
                  ₹{price}
                  <sub className="text-md">/night</sub>
                </div>
              </div>
              <div className="flex justify-between gap-2 items-center  lg:w-full w-[52vw] lg:mx-0 mx-auto mt-5">
                <div className="">
                  <div>
                    <p className="font-semibold text-xl ms:text-[#BDBDC2] ms:text-lg ms:translate-y-8 transition-transform duration-200 whitespace-nowrap lexs:text-sm">
                      {" "}
                      {format(new Date(checkInDate), "EEE, MMM d")}
                    </p>

                    <p className="font-[500] ms:text-md transform ms:-translate-y-4 transition-transform duration-200">
                      Check-In
                    </p>
                  </div>
                </div>
                <div className="">
                  <span>
                    {" "}
                    <img
                      src={pgIcon}
                      className="block ms:hidden w-full h-8"
                      alt="flightIcon"
                    />{" "}
                  </span>
                  <div className="ms:flex items-center hidden">
                    {/* <span className="border border-[#cccccc] border-dashed w-full"></span> */}
                    <span>
                      <img
                        src={pgHomeIcon}
                        className="w-full h-8 object-cover"
                        alt="flightIcon"
                      />
                    </span>
                    {/* <span className="border border-[#cccccc] border-dashed w-full"></span> */}
                  </div>
                </div>
                <div className="">
                  <div>
                    <p className="font-semibold text-xl ms:text-[#BDBDC2] ms:text-lg ms:translate-y-8 transition-transform duration-200 whitespace-nowrap lexs:text-sm">
                      {format(checkOutDate, "EEE, MMM d")}
                    </p>

                    <p className="font-[500] ms:text-md ms:text-end ms:-translate-y-4 transition-transform duration-200 whitespace-nowrap">
                      Check-Out
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-[#17183B]  my-4 ms:mt-8">
                Payment Method
              </p>
              <div>
                <div className="flex justify-between border border-[#17183B] opacity-20 rounded-sm p-4">
                  <div className="flex flex-wrap">
                    <input type="radio" className="default:ring-2 ..." />
                    <img src={""} alt="" className="mx-3" />
                    <p className="lexs:mr-2 mr-10">.....6754</p>
                    <p>Expires 06/2021</p>
                  </div>
                  <p>Remove</p>
                </div>
                <div className="flex justify-between border border-[#17183B] opacity-20 rounded-sm p-4">
                  <div className="flex flex-wrap">
                    <input type="radio" className="default:ring-2 ..." />
                    <img src={""} alt="" className="mx-3" />
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
          </div>

          <div className="w-[50%] lg:w-full lg:mt-0 mt-10 lg:pl-0 pl-8">
            <div className="p-4 lg:w-full  bg-white">
              {" "}
              <div className=" flex sxl:flex-wrap items-center sxl:gap-3 gap-5 ">
                <img
                  src={props?.imageLink1}
                  alt="flightLogo"
                  className="w-24 h-24 rounded object-cover"
                />
                <div>
                  {/* <p className="font-[500] text-black/75">{props?.name}</p> */}
                  <p className="font-semibold text-lg">{props?.location}</p>
                </div>
              </div>
              <hr className="my-5" />
              <p>
                Your booking is protected by <b>golobe</b>
              </p>
              <hr className="my-5" />
              <div className="flex flex-col gap-4">
                <h1 className="font-bold">Booking Details</h1>
                {/* <div className="flex justify-between">
              <p className="font-[500] text-md">Name</p>
              <p className="font-[600] text-md">{user_name}</p>
            </div> */}
                <div className="flex justify-between">
                  <p className="font-[500] text-md">No. Of Ticket</p>
                  <p className="font-[600] text-md">{totalTicket}</p>
                </div>
              </div>
              <hr className="my-5" />
              <div className="flex flex-col gap-4">
                <h1 className="font-bold">Price Details</h1>
                <div className="flex justify-between">
                  <p className="font-[500] text-md">Base Fare</p>
                  <p className="font-[600] text-md">₹ {baseFare}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-[500] text-md">Discount</p>
                  <p className="font-[600] text-md">₹ 00</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-[500] text-md">Taxes</p>
                  <p className="font-[600] text-md">₹ 00</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-[500] text-md">Service Fee</p>
                  <p className="font-[600] text-md">₹ 00</p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="font-[500] text-md">Total</p>
                <p className="font-[600] text-md">₹ {baseFare}</p>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#FF8682] rounded py-4 mt-3 text-white text-md"
              >
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PackagePayment;
