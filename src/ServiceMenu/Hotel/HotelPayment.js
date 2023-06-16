import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import PaymentCard from "../../Component/PaymentCard";
import Navforwithout from "../../Navforwithout";
const HotelPayment = () => {
  const location = useLocation();
  const { state } = location;
  const { singleData, formValues, hotelUrl } = state;
  return (
    <>
      <Navforwithout />
      <section className="xl:px-10 sm:px-3 px-[104px] ms:h-96 ms:bg-[#FF8682] sm:py-5 py-[60px] text-[#112211] font-montserrat">
        {/* -------------------Navigation---------------- */}
        <div className=" flex items-center ms:mb-2 mb-[30px] ms:gap-0.5 gap-2">
          <a
            href={"/Hotels"}
            className="text-[#FF8682] ms:text-slate-100 ms:text-sm"
          >
            Hotels
          </a>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <Link
            to={hotelUrl?.details}
            state={{ id: singleData?.link, hotelId: singleData?.id }}
            className="text-[#FF8682] ms:text-slate-100 ms:text-sm"
          >
            {singleData.title}
          </Link>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <Link
            to={"/PgContactForm"}
            state={{ singleData: { ...singleData, ...formValues } }}
            className="text-[#FF8682] ms:text-slate-100 ms:text-sm"
          >
            Contact Form
          </Link>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span className="text-[#112211]  ms:text-sm">payment</span>
        </div>
        {/* Main Layout */}
        <PaymentCard singleData={singleData} formValues={formValues} />
      </section>
      <Footer />
    </>
  );
};

export default HotelPayment;
