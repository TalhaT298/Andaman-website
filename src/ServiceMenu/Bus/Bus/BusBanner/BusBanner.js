import React, { useState } from "react";
import { TbBus } from "react-icons/tb";
import { Link } from "react-router-dom";
import govt from "../../images/bannerbus.png";
import BusSearch from "../BusSearch/BusSearch";
import "./busBanner.css";

const BusBanner = () => {
  const [show, setShow] = useState(true);
  const [bus, setBus] = useState(null);
  // console.log(bus)

  const handleSelectedBus = (select) => {
    setShow(!show);
    setBus(select);
  };

  const buses = [
    {
      title: "Government Bus",
      subTitle: "Search Goverment STS Inter-Island Seater Bus Schedule",
      buttonTitle: "Show bus",
      schedule: "Government-Bus",
    },
    {
      title: "Private Bus",
      subTitle: "Search Private Inter-Island Seater Bus Schedule",
      buttonTitle: "Show bus",
      schedule: "Private-Bus",
    },
  ];
  return (
    <>
      <div
        className={`w-full max-w-[1232px] h-[550px] flex flex-wrap items-center justify-between mx-auto gap-6 my-20 ${
          show ? "block" : "hidden"
        }`}
      >
        {buses?.map((bus) => (
          <div
            key={bus?.title}
            className="w-full max-w-[604px] h-[550px] relative rounded-[20px] overflow-hidden mx-auto"
          >
            <p className="text-center mb-5 text-xl text-[#112211] font-montserrat">
              Check The Schedule Of {bus?.title}
              <Link
                className=" font-montserrat text-xl underline text-blue-600 ml-2"
                to={`/bus/schedules/${bus?.schedule}`}
              >
                Click Here
              </Link>
            </p>

            <img className="w-full max-w-[604px] h-[550px]" src={govt} alt="" />
            <div className="w-full max-w-[604px] h-[280px] absolute top-[280px] rounded-bl-lg rounded-br-lg custom">
              <div className="w-full max-w-[389px] h-[161px] absolute left-[98px] top-[93px] text-center flex flex-col items-center justify-center">
                {/* bus name */}
                <h1 className="font-montserrat font-bold text-[40px] text-[#FFFFFF] leading-[49px]">
                  {bus?.title}
                </h1>
                {/* bus Schedule */}
                <p
                  className={`font-montserrat font-normal text-base text-[#FFFFFF] mb-4 leading-5 w-[350px] mx-auto ${
                    bus.title === "Private Bus" ? "w-[290px]" : "w-[350px]"
                  }`}
                >
                  {bus?.subTitle}
                </p>

                {/* navigate button  */}
                <button
                  onClick={() => handleSelectedBus("government")}
                  className="w-[122px] h-12 bg-[#FF8682] rounded font-montserrat font-medium text-sm text-[#112211] leading-4 flex items-center justify-center"
                >
                  <TbBus className="text-base mr-[5px] text-[#112211]"></TbBus>
                  {bus?.buttonTitle}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!show && <BusSearch bus={bus}></BusSearch>}
    </>
  );
};

export default BusBanner;
