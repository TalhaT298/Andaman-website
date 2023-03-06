import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { LazyLoadImage } from "react-lazy-load-image-component";

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
    "https://a0.muscache.com/im/pictures/1d256735-800a-4a9e-9c01-34056a4b2ca1.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/36959f0f-eed6-4aff-b233-2ea8b90135a8.jpg?im_w=1200",
    "https://w0.peakpx.com/wallpaper/90/109/HD-wallpaper-atlantis-hotel-dubai-uae-summer-sea-luxury-hotels.jpg"
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
            <LazyLoadImage
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
