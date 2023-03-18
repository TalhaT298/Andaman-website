import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'react-modal';

const TrekkingCover = (props) => {
  const [trekInfo, setTrekInfo] = useState(false);

  return (
    <div className="m-2 py-3 p-2 flex flex-col w-88">
      <div
        className="max-w-80 items:center"
        onClick={() => {
          setTrekInfo(!trekInfo);
        }}
      >
        <LazyLoadImage
          src={props.imageLink}
          alt={props.name}
          className="flex rounded-md w-88 h-64 transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
        />
      </div>
      <div className="flex flex-col justify-between py-3 p-1 gap-1">
        <div className="flex justify-between">
          <p className="text-sm font-bold">{props.name}</p>
          <p className="text-sm font-semibold">{props.duration}</p>
        </div>
        <div className="flex mx-auto">
          <p className="text-sm font-semibold">{props.location}</p>
        </div>
      </div>
      <Modal
        isOpen={trekInfo}
        onRequestClose={() => setTrekInfo(false)}
        overlayClassName="" // modal-overlay bg-black opacity
        className="" // modal-content w-auto h-auto
      >
        <div className="flex flex-col w-auto h-auto font-Nunito_Sans bg-slate-50 shadow-2xl shadow-slate-200 my-10">
          <div className="mx-auto">
            <span className="text-3xl font-bold text-slate-900 font-Nunito_Sans">
              Trek Details
            </span>
          </div>
          <div className="flex flex-row justify-between pt-10 pb-5 mx-4">
            <button className="px-2 h-10 font-semibold font-Nunito_Sans text-white bg-gradient-to-br rounded-md to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600 hover:text-white">
              Book Now
            </button>
            <button
              className="px-2 h-10 font-medium font-Nunito_Sans text-slate-400 hover:text-slate-800 text-2xl border-solid border-2"
              onClick={() => setTrekInfo(false)}
            >
              X
            </button>
          </div>

          <div className="py-0 px-3 flex flex-col flex-wrap justify-between gap-x-10 mt-5">
            <span className="text-xl text- font-bold text-black">
              {props.name}
            </span>

            <p className="py-2 mt-3 block md:flex md:flex-col">
              <LazyLoadImage
                className="h-72 w-98 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-5 sm:h-46 sm:w-auto rounded-sm pb-3 mt-1 mr-8 float-left"
                src={props.imageLink ? props.imageLink : '-'}
                alt="."
              />
              <div>
                <span className="text-slate-700 text-sm font-semibold">
                  {props.fullDescription}
                </span>
              </div>
            </p>
          </div>

          <div className="mx-auto pt-6 pb-7">
            <button
              className="h-10 w-20 rounded-lg font-Nunito_Sans uppercase mx-auto border-2 bg-rose-600 text-slate-100 hover:bg-gradient-to-br hover:from-red-600 hover:via-red-500 hover:to-yellow-400"
              onClick={() => setTrekInfo(false)}
            >
              Back
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TrekkingCover;
