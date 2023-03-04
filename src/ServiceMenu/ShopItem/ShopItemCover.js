import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ShopItemCover = (props) => {
  const [openreserveInfo, setOpenReserveInfo] = useState(false);

  return (
    <div className="m-2 py-3 p-2 flex flex-col w-88 xs:w-auto">
      <div
        className="max-w-80 items-center"
        // onClick={() => {
        //   setOpenReserveInfo(!openreserveInfo);
        // }}
      >
        <Link to={props.link}>
          <LazyLoadImage
            src={props.imageLink}
            alt={props.name}
            className="flex rounded-md h-60 w-88 xs:w-auto transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
          />
        </Link>
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
      {/* <Modal
        isOpen={openreserveInfo}
        onRequestClose={() => setOpenReserveInfo(false)}
        overlayClassName="" // modal-overlay bg-black opacity
        className="" // modal-content w-auto h-auto
      >
        <div className="flex flex-col w-auto h-auto font-Nunito_Sans bg-slate-50 shadow-2xl shadow-slate-200 my-10">
          <div className="mx-auto">
            <span className="text-3xl font-semibold text-slate-900 font-mono">
              Reserve Your Table
            </span>
          </div>
          <div className="flex flex-row justify-between pt-6 pb-5 mx-4">
            <span className="text-xl font-semibold text-black">
              {props.name}
            </span>
            <button
              className="px-2 h-10 font-medium font-Nunito_Sans text-slate-400 hover:text-slate-800 text-2xl border-solid border-2"
              onClick={() => setOpenReserveInfo(false)}
            >
              X
            </button>
          </div>

          <div className="py-2 flex flex-wrap justify-evenly px-10 xs:flex-col">
            <LazyLoadImage
              className="h-64 w-auto lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-52 sm:w-auto lexs:h-40 lexs:w-auto rounded-sm pb-3"
              src={props.imageLink ? props.imageLink : '-'}
              alt="."
            />
            <Options />
          </div>

          <div className="flex flex-row pb-6 pt-10">
            <button className="mx-auto px-2 h-10 font-semibold font-Nunito_Sans text-white bg-gradient-to-br rounded-md to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600 hover:text-white">
              Book Now
            </button>
          </div>
        </div>
      </Modal> */}
    </div>
  );
};

export default ShopItemCover;
