import React, { useState } from 'react';
import TravelPackagePage from './TravelPackagePage';
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
        <img
          src={props.imageLink}
          alt={props.name}
          className='flex rounded-md w-88 h-64 drop-shadow-2xl shadow-black shadow-lg transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform'
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
            <span className='text-3xl font-semibold text-slate-900'>Package Details</span>
          </div>
          <div className='py-3'>
            <span className='text-xl text- font-semibold text-black'>{props.name}</span>
          </div>
          <div className='py-2'>
            <span className='text-slate-700 text-base'>{props.fullDescription1}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink1 ? props.imageLink1 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>{props.fullDescription2}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink2 ? props.imageLink2 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>{props.fullDescription3}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink3 ? props.imageLink3 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>{props.fullDescription4}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink4 ? props.imageLink4 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>{props.fullDescription5}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink5 ? props.imageLink5 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>{props.fullDescription6}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink6 ? props.imageLink6 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>{props.fullDescription7}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink7 ? props.imageLink7 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>{props.fullDescription8}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink8 ? props.imageLink8 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>{props.fullDescription9}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink9 ? props.imageLink9 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='py-3'>
            <span className='text-slate-700 text-base'>{props.fullDescription10}</span>
            <img className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto' src={props.imageLink10 ? props.imageLink10 : "https://images.indianexpress.com/2021/07/Nothing-logo.jpg"} alt="." />
          </div>
          <div className='mx-auto pt-10 pb-7'><button className='h-10 w-20 rounded-lg font-Nunito_Sans uppercase mx-auto border-2 bg-rose-600 text-slate-100 hover:bg-gradient-to-br hover:from-red-600 hover:via-red-500 hover:to-yellow-400' onClick={() => setOpenTripDetails(false)} >Back</button></div>
        </div>
      </Modal>
    </div>
  );
};

export default TravelPackageCover;
