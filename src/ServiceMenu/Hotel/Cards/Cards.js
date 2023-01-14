import React from 'react';
import './styles.css';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from 'react-router-dom';

function Card({ card }) {
  return (
    <div className='card-box'>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className='swiper-container drop-shadow-2xl shadow-lg shadow-black rounded-xl'
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <a href={card.link} target='_blank' rel='noreferrer'>
              <LazyLoadImage src={src} className='card-img bg-inherit' alt='hotel/room' />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='card-info-flex pt-2'>
        <h3 className='card-title pt-1 font-bold text-black'>
          {card.title}
        </h3>
        <div className='card-rating font-semibold text-black'>
          <StarRateRoundedIcon />
          <p>{card.rating}</p>
        </div>
      </div>
      <p
        style={{
          margin: 0,
          color: 'var(--font-grey)',
          font: 'Nunito-Sans, sans-serif',
        }}
      >
        {card.desc}
      </p>
      <p style={{ margin: 0, color: 'var(--font-grey)' }}>{card.date}</p>
      <p
        style={{
          margin: '0.2rem',
          fontSize: '1rem',
          color: 'black',
          fontWeight: '',
        }}
      >
        <span style={{ fontWeight: '700' }} className=''>
          ₹{card.price}
        </span>{' '}
        night
      </p>
    </div>
  );
}

export default Card;
