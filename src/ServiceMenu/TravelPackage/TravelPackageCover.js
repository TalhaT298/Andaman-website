import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import TravelPackagePage from './TravelPackagePage';
import Modal from 'react-modal';

const TravelPackageCover = (props) => {
  const [openTripDetails, setOpenTripDetails] = useState(false);

  return (
    <div className='m-2 py-3 p-2 flex flex-col w-88'>
      <div
        onClick={() => {
          setOpenTripDetails(!openTripDetails);
        }}
        className='max-w-80 items:center'
      >
        <LazyLoadImage
          src={props.imageLink}
          alt={props.name}
          className='flex rounded-md w-88 h-64 transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform'
        />
      </div>
      <div className='flex flex-col justify-between m-auto py-3 p-1 text-center'>
        <p className=''>{props.name}</p>
        <p>{props.duration}</p>
        <p>{props.description}</p>
      </div>
      {/* <TravelPackagePage2 /> */}

      <Modal
        isOpen={openTripDetails}
        onRequestClose={() => setOpenTripDetails(false)}
        overlayClassName='' // modal-overlay bg-black opacity
        className='' // modal-content w-auto h-auto
      >
        <div className='flex flex-col w-auto h-auto font-Nunito_Sans bg-slate-50 shadow-2xl shadow-slate-200 my-10'>
          <div className='mx-auto'>
            <span className='text-3xl font-semibold text-slate-900'>
              Package Details
            </span>
          </div>
          <div className='flex flex-row justify-between py-3 mx-4'>
            <span className='text-2xl text- font-semibold text-black'>
              {props.name}
            </span>
            <button
              className='px-2 h-10 font-medium font-Nunito_Sans text-slate-400 hover:text-slate-800 text-2xl border-solid border-2'
              onClick={() => setOpenTripDetails(false)}
            >
              X
            </button>
          </div>
          <div className='flex flex-row pb-2'>
            <button className='mx-auto px-2 h-10 font-semibold font-Nunito_Sans text-white bg-gradient-to-br rounded-md to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600 hover:text-white'>
              Book Now
            </button>
          </div>
          <div className='py-2'>
            <span className='text-slate-700 text-base'>
              {props.fullDescription1}
            </span>
            <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-52 sm:w-auto'
              src={props.imageLink1 ? props.imageLink1 : '-'}
              alt='.'
            />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>
              {props.fullDescription2}
            </span>
            <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
              src={props.imageLink2 ? props.imageLink2 : '-'}
              alt='.'
            />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>
              {props.fullDescription3}
            </span>
            <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
              src={props.imageLink3 ? props.imageLink3 : '-'}
              alt='.'
            />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>
              {props.fullDescription4}
            </span>
            <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
              src={props.imageLink4 ? props.imageLink4 : '-'}
              alt='.'
            />
          </div>
          {props.fullDescription5 ? (
            <div className='py-3'>
              <span className='text-slate-700 text-base'>
                {props.fullDescription5}
              </span>
              <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink5 ? props.imageLink5 : '-'}
                alt='.'
              />
            </div>
          ) : (
            <div></div>
          )}
          {props.fullDescription6 ? (
            <div className='py-3'>
              <span className='text-slate-700 text-base'>
                {props.fullDescription6}
              </span>
              <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink6 ? props.imageLink6 : '-'}
                alt='.'
              />
            </div>
          ) : (
            <div></div>
          )}
          {props.fullDescription7 ? (
            <div className='py-3'>
              <span className='text-slate-700 text-base'>
                {props.fullDescription7}
              </span>
              <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink7 ? props.imageLink7 : '-'}
                alt='.'
              />
            </div>
          ) : (
            <div></div>
          )}
          {props.fullDescription8 ? (
            <div className='py-3'>
              <span className='text-slate-700 text-base'>
                {props.fullDescription8}
              </span>
              <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink8 ? props.imageLink8 : '-'}
                alt='.'
              />
            </div>
          ) : (
            <div></div>
          )}
          {props.fullDescription9 ? (
            <div className='py-3'>
              <span className='text-slate-700 text-base'>
                {props.fullDescription9}
              </span>
              <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink9 ? props.imageLink9 : '-'}
                alt='.'
              />
            </div>
          ) : (
            <div></div>
          )}
          {props.fullDescription10 ? (
            <div className='py-3'>
              <span className='text-slate-700 text-base'>
                {props.fullDescription10}
              </span>
              <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink10 ? props.imageLink10 : '-'}
                alt='.'
              />
            </div>
          ) : (
            <div></div>
          )}
          {props.fullDescription11 ? (
            <div className='py-3'>
              <span className='text-slate-700 text-base'>
                {props.fullDescription11}
              </span>
              <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink11 ? props.imageLink11 : '-'}
                alt='.'
              />
            </div>
          ) : (
            <div></div>
          )}
          <div className='mx-auto pt-10 pb-7'>
            <button
              className='h-10 w-20 rounded-lg font-Nunito_Sans uppercase mx-auto border-2 bg-rose-600 text-slate-100 hover:bg-gradient-to-br hover:from-red-600 hover:via-red-500 hover:to-yellow-400'
              onClick={() => setOpenTripDetails(false)}
            >
              Back
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TravelPackageCover;
