import React from 'react';

const ShopItemCover = (props) => {
  return (
    <div className='m-2 py-3 p-2 mx-auto flex flex-col w-88 xs:w-auto'>
      <div className='flex flex-row xs:flex-col max-w-80 items:center'>
        <a href={props.videoLink} target='_blank' rel='noreferrer'>
          <img
            src={props.imageLink}
            alt={props.name}
            className='flex rounded-md w-88 h-64 drop-shadow-2xl shadow-black shadow-lg transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform'
          />
        </a>
      </div>
      <div className='flex flex-col justify-between m-auto py-3 p-1 text-center'>
        <p className=''>{props.name}</p>
        <p>{props.cuisine}</p>
        <p>{props.location}</p>
      </div>
    </div>
  );
};

export default ShopItemCover;
