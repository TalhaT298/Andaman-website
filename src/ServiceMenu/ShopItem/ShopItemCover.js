import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'react-modal';

// import { Link } from 'react-router-dom';

const ShopItemCover = (props) => {
  const [shopInfo, setShopInfo] = useState(false);

  return (
    <div className="m-2 py-3 p-2 flex flex-col w-88 xs:w-auto">
      <div
        className="max-w-80 items-center"
        onClick={() => {
          setShopInfo(!shopInfo);
        }}
      >
        {/* <Link to={props.link} target="_blank" rel="noreferrer"> */}
        <LazyLoadImage
          src={props.imageLink}
          alt={props.name}
          className="flex rounded-md h-60 w-88 xs:w-auto transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
        />
        {/* </Link> */}
      </div>
      <div className="flex-col justify-between py-3 p-1 text-start">
        <div className="flex justify-between">
          <p className="text-sm font-semibold text-start">{props.name}</p>
          <p className="text-sm font-bold text-end">{props.location}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-semibold text-start">{props.cuisine}</p>
          <p className="text-sm font-semibold text-end">{props.speciality}</p>
        </div>
      </div>
      <Modal
        isOpen={shopInfo}
        onRequestClose={() => setShopInfo(false)}
        overlayClassName="" // modal-overlay bg-black opacity
        className="" // modal-content w-auto h-auto
      >
        <div className="flex flex-col w-auto h-auto font-Nunito_Sans bg-slate-50 shadow-2xl shadow-slate-200 my-10">
          <div className="mx-auto">
            <span className="text-3xl font-bold text-slate-900 font-Nunito_Sans">
              Shop/Market Details
            </span>
          </div>
          <div className="flex flex-row justify-between pt-14 pb-0 mx-4">
            <span className="text-xl text- font-bold text-black">
              {props.name}
            </span>
            <button
              className="px-2 h-9 font-medium font-Nunito_Sans text-slate-400 hover:text-slate-800 text-2xl border-solid border-2"
              onClick={() => setShopInfo(false)}
            >
              X
            </button>
          </div>

          <div className="py-0 px-3 flex flex-col flex-wrap justify-between gap-x-10 mt-0">
            {/* <span className="text-xl text- font-bold text-black">
              {props.name}
            </span> */}

            <p className="py-0 mt-3 block md:flex md:flex-col">
              <LazyLoadImage
                className="h-72 w-98 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-5 sm:h-46 sm:w-auto rounded-sm pb-3 mt-1 mr-8 float-left"
                src={props.imageLink ? props.imageLink : '-'}
                alt="."
              />
              <div className="mt-2 flex-col py-3">
                <p className="text-slate-700 text-md font-semibold py-3">
                  {props.fullDescription}
                </p>
                <p className="text-slate-700 text-sm font-semibold py-3">
                  <span className='font-bold text-base text-black'>Location: </span>
                  {props.location}
                </p>
                <p className="text-slate-700 text-sm font-semibold py-3">
                  <span className='font-bold text-base text-black'>Timing: </span>
                  {props.timing}
                </p>
              </div>
            </p>

            {/* <div className='py-2 flex flex-row justify-between gap-x-10 mt-3 lg:flex-col lg:gap-y-8'>
              <LazyLoadImage
                  className='h-72 w-98 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-52 sm:w-auto rounded-sm pb-3 mt-1 '
                  src={props.imageLink ? props.imageLink : '-'}
                  alt='.'
                />  
                <div>
                <span className='text-slate-700 text-lg'>{props.fullDescription}</span>
                </div>      
              </div> */}
          </div>

          <div className="mx-auto pt-6 pb-7 mt-10">
            <button
              className="h-10 w-20 rounded-lg font-Nunito_Sans uppercase mx-auto border-2 bg-rose-600 text-slate-100 hover:bg-gradient-to-br hover:from-red-600 hover:via-red-500 hover:to-yellow-400"
              onClick={() => setShopInfo(false)}
            >
              Back
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ShopItemCover;
