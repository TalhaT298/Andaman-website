import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";
import CardCompo from "../../../Component/CardCompo";
import Footer from "../../../Component/Footer/Footer";
import { datas } from "../../../Data/Hotel-Section/HotelsData/hotelsData";
import Navforwithout from "../../../Navforwithout";

const HotelSearchDetailsCard = () => {
  const location = useLocation();
  const { state } = location;
  const { id, searchState } = state;
  const singleData = datas?.find((item) => item.id === id);
  console.log(
    "🚀 ~ file: HotelSearchDetailsCard.js:8 ~ HotelSearchDetailsCard ~ state:",
    singleData
  );
  return (
    <>
      <Navforwithout />
      <section className="lg:mx-10 sm:mx-3 mx-[104px] sm:my-5 my-[60px] text-[#112211] font-montserrat">
        {/* -------------------Navigation---------------- */}
        <div className=" flex items-center  mb-[30px] gap-2">
          <a href={"/Hotels"} className="text-[#FF8682] ">
            Hotels
          </a>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span className="text-[#112211] ">{singleData?.title}</span>
        </div>

        <CardCompo
          singleData={singleData}
          searchState={searchState}
          linkUrl={"/PgContactForm"}
          hotelUrl={{ hotel: "/Hotels", details: "/hotel-details" }}
        />
      </section>

      <Footer />
    </>
  );
};

export default HotelSearchDetailsCard;
