import React, { useEffect, useState } from "react";
import govt from "../../images/bannerbus.png";
import { TbBus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "./busBanner.css";
import BusSearch from "../BusSearch/BusSearch";

const BusBanner = () => {
  const [show, setShow] = useState(true);
  const [bus, setBus] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // console.log(bus)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      // console.log(screenWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  const handleSelectedBus = (select) => {
    setShow(!show);
    setBus(select);
  };
  const navigate = useNavigate();
  const handleNaviateSchedule = (route) => {
    navigate(`/bus/schedules/${route}`);
  };

  const buses = [
    {
      title: "Government Bus",
      subTitle: "Search Goverment STS Inter-Island Seater Bus Schedule",
      buttonTitle: "Show bus",
      schedule: "Government-Bus",
      category: 'government'
    },
    {
      title: "Private Bus",
      subTitle: "Search Private Inter-Island Seater Bus Schedule",
      buttonTitle: "Show bus",
      schedule: "Private-Bus",
      category: 'private'
    },
  ];
  return (
    <div className="ms:my-0 w-full relative mb-20">
      <h3 className={`font-montserrat text-4xl mt-6 text-center font-bold mb-5 ${show ? 'block' : 'hidden'}`}>
        Inter Island Bus Service
      </h3>
      <div
        className={`w-full max-w-[1232px] h-[550px] flex items-center justify-between mx-auto gap-6 sxl:hidden ${show ? "block" : "hidden"}`}
      >
        {buses?.map((bus) => (
          <div
            key={bus?.title}
            className="w-full max-w-[604px] h-[550px] relative rounded-[20px] overflow-hidden mx-auto text-center"
          >
            <button
              onClick={() => handleNaviateSchedule(bus?.schedule)}
              className="w-full max-w-[300px] text-xl font-montserrat bg-[#FF8782] h-12 ml-5 rounded-md mb-5 text-white"
            >
              {bus?.title === 'Government Bus' ? 'Govt. Bus' : bus.title} Schedule
            </button>


            <img className="w-full max-w-[604px] h-[550px]" src={govt} alt="" />
            <div className="w-full max-w-[604px] h-[280px] absolute top-[280px] rounded-bl-lg rounded-br-lg custom">
              <div className="w-full max-w-[389px] h-[161px] absolute left-[98px] top-[93px] text-center flex flex-col items-center justify-center">
                {/* bus name */}
                <h1 className="font-montserrat font-bold text-[40px] text-[#FFFFFF] leading-[49px]">
                  {bus?.title}
                </h1>
                {/* bus Schedule */}
                <p
                  className={`font-montserrat font-normal text-base text-[#FFFFFF] mb-4 leading-5 w-[350px] mx-auto ${bus.title === "Private Bus" ? "w-[290px]" : "w-[350px]"
                    }`}
                >
                  {bus?.subTitle}
                </p>

                {/* navigate button  */}
                <button
                  onClick={() => handleSelectedBus(bus?.category)}
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
      <div className={`${show ? "block" : "hidden"}`}>
        <div className={`w-full max-w-[1232px] sxl:flex items-center justify-between mx-auto text-center gap-6 md:flex-col ${screenWidth > 1141 ? 'hidden' : 'block'}`}>
          {/* button  */}
          {
            buses?.map((bus) => <button
              onClick={() => handleNaviateSchedule(bus?.schedule)}
              className={`text-xl w-full font-montserrat text-zinc-100 bg-[#FF8782] h-12 mx-auto rounded-md px-2 ${screenWidth > 767 ? 'hidden' : 'block'}
              ${screenWidth < 767 ? 'max-w-[604px]' : ''}
              `}
            >
              {bus?.title === 'Government Bus' ? 'Govt. Bus' : bus.title} Schedule
            </button>)
          }

          {buses?.map((bus) => (
            <div
              key={bus?.title}
              className="w-full max-w-[604px] relative rounded-[20px] overflow-hidden mx-auto text-center"
            >
              <button
                onClick={() => handleNaviateSchedule(bus?.schedule)}
                className={`text-xl font-montserrat text-zinc-100 bg-[#FF8782] h-12 mx-auto rounded-md mb-5 px-2 ${screenWidth < 768 ? 'hidden' : 'block'}`}
              >
                {bus?.title === 'Government Bus' ? 'Govt. Bus' : bus.title} Schedule
              </button>


              <img className="w-full max-w-[604px]" src={govt} alt="" />
              {/* <div className="w-full max-w-[604px] h-[280px] absolute top-[280px] rounded-bl-lg rounded-br-lg custom"> */}
              <div className="w-full text-center flex flex-col items-center justify-center absolute top-1/2 inset-0 custom">
                {/* bus name */}
                <h1 className="font-montserrat font-bold text-[40px] text-[#FFFFFF] leading-[49px] airbnbml:text-xl">
                  {bus?.title}
                </h1>
                {/* bus Schedule */}
                <p
                  className={`font-montserrat font-normal text-base text-[#FFFFFF] mb-4 leading-5 w-[350px] mx-auto ms:mx-0 ${bus.title === "Private Bus" ? "w-[290px]" : "w-[350px]"
                    }`}
                >
                  {bus?.subTitle}
                </p>

                {/* navigate button  */}
                <button
                  onClick={() => handleSelectedBus(bus?.category)}
                  className="w-[122px] h-12 bg-[#FF8682] rounded font-montserrat font-medium text-sm text-[#112211] leading-4 flex items-center justify-center"
                >
                  <TbBus className="text-base mr-[5px] text-[#112211]"></TbBus>
                  {bus?.buttonTitle}
                </button>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
      {!show && <BusSearch bus={bus}></BusSearch>}
    </div>
  );
};

export default BusBanner;
<>
  {/* <Link className='w-full max-w-[300px] text-xl font-montserrat text-[#112211] bg-red-500 h-12' to={`/bus/schedules/${bus?.schedule}`}>
                            {bus?.title} Schedule</Link> */}
  {/* <p className='text-center mb-5 text-xl text-[#112211] font-montserrat'>
                            Check The Schedule Of {bus?.title}
                            <Link className=' font-montserrat text-xl underline text-blue-600 ml-2' to={`/bus/schedules/${bus?.schedule}`}>
                                Click Here</Link>
                        </p> */}

</>
