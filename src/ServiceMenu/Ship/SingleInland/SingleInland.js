import React, { useRef } from "react";
import NavforWithout from "../../../Navforwithout";
import Schedule from "./Schedule";
import ImageSection from "./ImageSection";
import Features from "./Features";
import SeatMap from "./SeatMap";
const SingleInland = () => {
  const scheduleRef = useRef(null);
  const handleScrollToSchedule = () => {
    console.log(scheduleRef.current)
    scheduleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavforWithout />
      <div className=" pt-[3rem] px-44 lg:px-10">
        <ImageSection onCheckScheduleClick={handleScrollToSchedule} />
        <Features />
        <div >
          <Schedule ref={scheduleRef}/>
        </div>
        <div className="flex justify-center">
          <SeatMap />
        </div>
      </div>
    </>
  );
};

export default SingleInland;
