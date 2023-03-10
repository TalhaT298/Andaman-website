import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { datas } from "../../../Data/Hotel-Section/HotelsData/hotelsData";
import { useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const HotelImages = () => {
  const { id } = useParams(); // get the "id" parameter from the URL
  console.log(id)
  const data = datas.find((hotel) => hotel.id === parseInt(id)); // find the corresponding data object based on the "id"
  const images = data ? data.Images : []; 
  // extract the "Images" property from the data object or use an empty array if the data is not found
  console.log(images)

  return (
    <div className="card-box pt-12">
      {images.length > 0 ? (
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
};

export default HotelImages;
