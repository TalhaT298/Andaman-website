import React from 'react';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import dining from '../../../Data/Dining-Section/dining';
import { lazy } from 'react';
import Modal from 'react-modal';
import Options from '../Options';
const Navforwithout = lazy(() => import('../../../Navforwithout'));

export default function Tandoor(props) {
  const thi = dining.filter((item) => item.id === 1);
  const singleItem = thi[0];
  const { imageLink, location, name, speciality } = singleItem;
  const [openreserveInfo, setOpenReserveInfo] = useState(false);
  return (
    <>
      <Navforwithout />
      <div className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-300 mt-6 w-10/12 mx-auto p-10 flex lg:flex-col justify-between">
        <div className="flex xs:flex-col">
          <div className="w-60 mr-6">
            <LazyLoadImage src={imageLink} alt="" className="w-auto" />
          </div>
          <div>
            <h1 className="text-white text-5xl">{name}</h1>
            <p className="text-gray-300 text-base mt-2">{location}</p>
            <p className="text-gray-300 text-base mt-2">{speciality}</p>
          </div>
        </div>
        <div className="text-white pr-10 mt-10">
          <button
            onClick={() => {
              setOpenReserveInfo(true);
            }}
            className="bg-slate-800 hover:bg-slate-300 px-5 py-4"
          >
            Reserve Your Table
          </button>
        </div>
      </div>
      <Modal
        isOpen={openreserveInfo}
        onRequestClose={() => setOpenReserveInfo(false)}
        overlayClassName="" // modal-overlay bg-black opacity
        className="" // modal-content w-auto h-auto
      >
        <div className="flex flex-col w-auto h-auto font-Nunito_Sans bg-slate-50 shadow-2xl shadow-slate-200 my-10">
          <div className="mx-auto">
            <span className="text-3xl font-semibold text-slate-900 font-Ubuntu_Mono">
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
              src={imageLink ? imageLink : '-'}
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
      </Modal>
      <div className="w-10/12 flex mx-auto mt-6 xl:gap-4">
        <div className="mt-10 mx-auto">
          <ul className="text-right">
            <li className="hover:text-orange-300 focus:text-teal-600">
              <Link>Best Food Available</Link>
            </li>
            <li className="hover:text-orange-300 focus:text-teal-600">
              <Link>Best Mixed Items</Link>
            </li>
            <li className="hover:text-orange-300 focus:text-teal-600">
              <Link>Best Fish Items</Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <h3 className="font-bold text-2xl mb-3">Best Food Available</h3>
          <div className="flex justify-between items-center w-11/12 border p-7 lg:flex-col">
            <div className="text-center">
              <h2 className="font-bold text-green-500 text-2xl">Vagi</h2>
              <h2 className="font-bold">420</h2>
            </div>
            <div className="w-2/6 h-auto">
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-11/12 border p-7 lg:flex-col mt-2">
            <div className="text-center">
              <h2 className="font-bold text-green-500 text-2xl">Vagi</h2>
              <h2 className="font-bold">420</h2>
            </div>
            <div className="w-2/6 h-auto">
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-11/12 border p-7 lg:flex-col mt-2">
            <div className="text-center">
              <h2 className="font-bold text-green-500 text-2xl">Vagi</h2>
              <h2 className="font-bold">420</h2>
            </div>
            <div className="w-2/6 h-auto">
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { Suspense } from 'react';
