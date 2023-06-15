import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";
import CardCompo from "../../../Component/CardCompo";
import Footer from "../../../Component/Footer/Footer";
import { list } from "../../../Data/Pg-Section/cards-list";
import Navforwithout from "../../../Navforwithout";
import "../Cards/styles.css";

const PgCard = () => {
  const location = useLocation();
  const { state } = location;
  const { id } = state;
  const singleData = list.find((item) => item.link === id);

  return (
    <>
      <Navforwithout />
      <section className="lg:px-10 sm:px-5 px-[104px] ms:h-96 xs:h-[360px] sxs:h-[340px] ms:bg-[#FF8682] sm:py-5 py-[60px] text-[#112211] font-montserrat">
        {/* -------------------Navigation---------------- */}
        <div className=" flex items-center ms:mb-3 mb-[30px] gap-2">
          <a
            href={"/Paying-Guest"}
            className="text-[#FF8682] ms:text-slate-100"
          >
            Paying Guest
          </a>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span className="text-[#112211] ">{singleData?.title}</span>
        </div>

        <CardCompo
          singleData={singleData}
          payLink={"/pg-payment"}
          linkUrl={"/PgContactForm"}
        />
      </section>

      <Footer />
    </>
  );
};

export default PgCard;
