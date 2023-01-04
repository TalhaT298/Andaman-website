const Featured = () => {
  return (
    <div className='flex flex-wrap items-center m-auto p-auto h-full'>
      <div className='m-2 py-3 p-2 flex flex-col w-88'>
        <div className='max-w-80 items:center'>
          <img
            src='https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o='
            alt=''
            className='flex rounded-md w-88 h-64 drop-shadow-2xl shadow-black shadow-lg'
          />
        </div>
        <div className='flex flex-col justify-between m-auto py-3 p-1 text-center'>
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className='m-2 py-3 p-2 flex flex-col w-88'>
        <div className='max-w-80 items:center'>
          <img
            src='https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o='
            alt=''
            className='flex rounded-md w-88 h-64 drop-shadow-2xl shadow-black shadow-lg'
          />
        </div>
        <div className='flex flex-col justify-between m-auto py-3 p-1 text-center'>
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className=''>
        <div className='max-w-80 items:center'>
          <img
            src='https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o='
            alt=''
            className='flex rounded-md w-88 h-64 drop-shadow-2xl shadow-black shadow-lg'
          />
        </div>
        <div className='flex flex-col justify-between m-auto py-3 p-1 text-center'>
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
