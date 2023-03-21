import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { data as FerriesData } from "./Data/FerriesData";
import { useParams } from "react-router-dom";
import classes from "./Schedule.module.css";

const ImageSection = ({ onCheckScheduleClick }) => {
  const { id } = useParams();
  const ferryId = FerriesData.find((ferry) => ferry.id === parseInt(id));
  const { name, Images } = ferryId;
  return (
    <>
      <h1
        className="font-bold text-4xl lg:text-3xl text-center"
        style={{ fontFamily: "Glook" }}
      >
        {name}
      </h1>

      <div className="pt-12">
        {Images.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            cssMode={true}
            mousewheel={true}
            pagination={{ clickable: true }}
            className="swiper-container drop-shadow-2xl shadow-lg shadow-black rounded-xl"
          >
            {Images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="object-cover w-[1500px] h-[610px] md:w-full md:h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No images found.</p>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={onCheckScheduleClick}
          type="button"
          className={classes.btn_donate}
        >
          Check Schedule
        </button>
      </div>
    </>
  );
};

export default ImageSection;
// className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br   shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
