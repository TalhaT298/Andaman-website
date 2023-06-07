import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";
import CardCompo from "../../../Component/CardCompo";
import Footer from "../../../Component/Footer/Footer";
import { list } from "../../../Data/Hotel-Section/cards-list";
import Navforwithout from "../../../Navforwithout";
import "../Cards/styles.css";

const HotelCard = () => {
  const location = useLocation();
  const { state } = location;
  const { id } = state;
  const singleData = list.find((item) => item.link === id);

  return (
    <>
      <Navforwithout />
      <section
        className="lg:mx-10 sm:mx-3 mx-[104px] sm:my-5 my-[60px] text-[#112211]"
        style={{ fontFamily: "Montserrat" }}
      >
        {/* -------------------Navigation---------------- */}
        <div className=" flex items-center  mb-[30px] gap-2">
          <a href={"/hotels"} className="text-[#FF8682] ">
            Hotels
          </a>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span className="text-[#112211] ">{singleData?.title}</span>
        </div>

        <CardCompo singleData={singleData} linkUrl={"/hotel-payment"} />
      </section>

      <Footer />
    </>
  );
};

export default HotelCard;
