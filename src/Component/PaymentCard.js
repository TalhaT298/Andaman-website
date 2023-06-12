import { format } from "date-fns";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import pgHomeIcon from "../images/pg-home-icon.png";
import pgIcon from "../images/pglogo.png";
const PaymentCard = ({ singleData, formValues }) => {
  const { user_arrival, staying, user_people, user_name, room } = formValues;
  // let baseFare; // Declare baseFare variable outside the if statement
  let people = parseInt(user_people);
  if (parseInt(user_people) % 2 !== 0) {
    people += 1;
  }

  let baseFare =
    (parseInt(singleData.price.replace(/,/g, ""), 10) *
      people *
      parseInt(staying) *
      parseInt(room)) / 2;

  console.log(singleData?.price);
  const handleSubmit = () => {
    alert(
      "Thank you for taking your time. Sublime Island will reach out to you in 2-3 hours or as soon as possible 😁✌🏻"
    );
  };
  const date = new Date(user_arrival);
  const anotherDate = date.setDate(date.getDate() + Number(staying));
  return (
    <div className=" flex lg:flex-col  ">
      <div className="w-full">
        <div className="mt-10 ms:mt-5 bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
          <div className="flex justify-between items-center font-bold">
            <h5 className="text-2xl ml:text-lg leading-none w-full ms:max-w-[300px] max-w-[491px] text-[#112211]">
              Superior room - 1 double bed or 2 twin beds
            </h5>
            <div className="text-[#27273F] ml:text-lg  text-[32px] font-[900]">
              ₹{singleData?.price}
              <sub className="text-md">/night</sub>
            </div>
          </div>
          <div className="flex justify-between md:gap-5 md:flex-col mt-5">
            <div className="flex items-center  w-full ms:justify-center justify-start bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
              <img
                src={singleData?.imgSrc[2]}
                alt="flightLogo"
                className="block ms:hidden w-20 h-20 rounded object-cover"
                loading="lazy"
              />
              <img
                src={singleData?.imgSrc[2]}
                alt="flightLogoMini"
                className="ms:block hidden w-16 h-16 rounded object-cover"
                loading="lazy"
              />

              <div className="">
                <h2 className="font-semibold ml:text-lg text-2xl">
                  {singleData?.title}
                </h2>
                <div className="flex items-center">
                  <ImLocation2 className="ms:w-3 ms:h-4" />
                  <p className="text-[#112211] ml:text-md opacity-[0.6] font-[500]">
                    {singleData?.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center  lg:w-full w-[52vw] lg:mx-0 mx-auto mt-5">
            <div className="">
              <div>
                <p className="font-semibold text-xl ms:text-[#BDBDC2] ms:text-lg ms:translate-y-8 transition-transform duration-200">
                  {" "}
                  {format(new Date(user_arrival), "EEE, MMM d")}
                </p>

                <p className="font-[500] ms:text-md transform ms:-translate-y-4 transition-transform duration-200">
                  Check-In
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <span>
                {" "}
                <img
                  src={pgIcon}
                  className="block ms:hidden w-full h-8"
                  alt="flightIcon"
                />{" "}
              </span>
              <div className="ms:flex items-center hidden">
                <span className="border border-[#cccccc] border-dashed w-[12vw]"></span>
                <span>
                  <img
                    src={pgHomeIcon}
                    className=" w-full h-8 object-cover"
                    alt="flightIcon"
                  />
                </span>
                <span className="border border-[#cccccc] border-dashed w-[12vw]"></span>
              </div>
            </div>
            <div className="">
              <div>
                <p className="font-semibold text-xl ms:text-[#BDBDC2] ms:text-lg ms:translate-y-8 transition-transform duration-200">
                  {format(anotherDate, "EEE, MMM d")}
                </p>

                <p className="font-[500] ms:text-md ms:text-end ms:-translate-y-4 transition-transform duration-200">
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
              src={singleData?.imgSrc[2]}
              alt="flightLogo"
              className="w-24 h-24 rounded object-cover"
            />
            <div>
              <p className="font-[500] text-black/75">{singleData?.title}</p>
              <p className="font-semibold text-lg">{singleData?.location}</p>
            </div>
          </div>
          <hr className="my-5" />
          <p>
            Your booking is protected by <b>golobe</b>
          </p>
          <hr className="my-5" />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Booking Details</h1>
            <div className="flex justify-between">
              <p className="font-[500] text-md">Name</p>
              <p className="font-[600] text-md">{user_name}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-[500] text-md">No. Of Person</p>
              <p className="font-[600] text-md">{user_people}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-[500] text-md">No. Of Room </p>
              <p className="font-[600] text-md">{room}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-[500] text-md">No. Of Days Staying</p>
              <p className="font-[600] text-md">{staying}</p>
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
  );
};

export default PaymentCard;
