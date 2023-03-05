import { lazy } from 'react';

const ReviewSection = lazy(() => import('./ReviewSection'));
const HotelMap = lazy(() => import('./HotelMap'));
const Features = lazy(() => import('./Features'));
const Navforwithout = lazy(() => import('../../../Navforwithout'));
const HotelImages = lazy(() => import('./Images'));
const SingleHotelHeader = lazy(() => import('./Header'));

const SinglePgHotel = () => {
  return (
    <>
      <Navforwithout />
      <div className="container py-16 px-44 lg:px-10">
        <SingleHotelHeader />
        <HotelImages />
        <Features />
        <ReviewSection />
        <HotelMap />
      </div>
    </>
  );
};

export default SinglePgHotel;
