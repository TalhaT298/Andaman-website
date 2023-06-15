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
  const { hotelId, searchState } = state;

  const singleData = datas?.find((item) => item.id === hotelId);

  return (
    <>
      <Navforwithout />
      <section className="lg:px-10 ms:h-96 xs:h-[360px] sxs:h-[340px] lexs:h-[320px] ms:bg-[#FF8682] sm:px-3 px-[104px] sm:py-5 py-[60px] text-[#112211] font-montserrat">
        {/* -------------------Navigation---------------- */}
        <div className=" flex items-center ms:mb-4 ms:text-xs mb-[30px] gap-2">
          <a href={"/Hotels"} className="text-[#FF8682] ms:text-slate-100">
            Hotels
          </a>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span className="text-[#112211] ">{singleData?.title}</span>
        </div>

        <CardCompo
          singleData={singleData}
          payLink={"/hotel-payment"}
          searchState={searchState}
          linkUrl={"/PgContactForm"}
          hotelUrl={{ hotel: "/Hotels", details: "/hotel-search-details" }}
        />
      </section>

      <Footer />
    </>
  );
};

export default HotelSearchDetailsCard;
