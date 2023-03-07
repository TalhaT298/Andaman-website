import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HotelImages = () => {
  const images = [
    "https://a0.muscache.com/im/pictures/b2235535-e382-4b88-af98-cb71bdfd3867.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/36be513b-519d-4f1b-9aa7-913f39c91de0.jpg?im_w=1440",
    "https://a0.muscache.com/im/pictures/b2235535-e382-4b88-af98-cb71bdfd3867.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/36be513b-519d-4f1b-9aa7-913f39c91de0.jpg?im_w=1440",
  ];

  return (
    <div className="card-box pt-12">
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
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imageUrl}
              alt={`Slide ${index}`}
              className="lg:w-full lg:h-full w-[1200px] h-[700px] cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelImages;
