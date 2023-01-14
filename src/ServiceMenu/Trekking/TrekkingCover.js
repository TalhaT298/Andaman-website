import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ActivityCover = (props) => {
  return (
    <div className='m-2 py-3 p-2 flex flex-col w-88'>
      <div className='max-w-80 items:center'>
        <a href={props.videoLink} target='_blank' rel='noreferrer'>
          <LazyLoadImage
            src={props.imageLink}
            alt={props.name}
            className='flex rounded-md w-88 h-64 drop-shadow-2xl shadow-black shadow-lg transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform'
          />
        </a>
      </div>
      <div className='flex flex-col justify-between m-auto py-3 p-1 text-center'>
        <p className=''>{props.name}</p>
        <p>{props.duration}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ActivityCover;
