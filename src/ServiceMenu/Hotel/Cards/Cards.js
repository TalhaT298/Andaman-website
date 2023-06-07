import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import pgCardIcon from "../../../images/pg-card-icon.png";
import "./styles.css";

function Cards({ card }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/hotel-details", { state: { id } });
  };
  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={false}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container rounded-md"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            {/* <Link to={card.link} target="_blank" rel="noreferrer"> */}
              <LazyLoadImage
                src={src}
                className="card-img bg-inherit"
                alt="hotel/room"
              />
            {/* </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="px-4 bg-white">
        <div className="card-info-flex mt-2">
          <div className="">
            <h3 className="card-title pt-1 font-bold text-black">
              {card.title}
            </h3>
            <p
              className="text-sm text-gray-500"
              style={{
                margin: "0.3rem 0rem 0",
                color: "var(--font-grey)",
                font: "Nunito-Sans, sans-serif",
              }}
            >
              {card.location}
            </p>
            {/* <p style={{ margin: 0, color: 'var(--font-grey)' }}>{card.date}</p> */}
          </div>
          <div className="card-rating  font-semibold text-black flex-col">
            <div className="flex">
              <StarRateRoundedIcon style={{ color: "#FFD700" }} />
              <p className="pt-0.5">{card.rating}</p>
            </div>
            <div className="flex">
              <p
                style={{
                  margin: "0rem",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "",
                }}
              >
                <span style={{ fontWeight: "650" }} className="text-sm">
                  ₹{card.price}
                </span>{" "}
                night
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex  justify-center">
          <img src={pgCardIcon} alt="icon" className=" my-4 bg-white" />
        </div>
        <div className=" w-full flex justify-center mb-6 ">
          <button
            onClick={() => handleClick(card.link)}
            className="pg_card_btn"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
