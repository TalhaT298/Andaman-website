import React from 'react';
import { useState } from 'react';

function searchDining(searchFood) {
  const endpoint = 'https://example.com/api/food';
  const params = {
    searchFood: searchFood,
  };

  return fetch(endpoint + '?' + new URLSearchParams(params))
    .then((response) => response.json())
    .then((data) => {
      return data.dining;
    })
    .catch((error) => {
      console.error(error);
    });
}

const DiningSearch = () => {
  const [searchFood, setSearchFood] = useState('Murgh Sheekh Kabab🍗');
  const [dining, setDining] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchDining(searchFood).then((results) => {
      setDining(results);
    });
  };

  return (
    <div className='flex flex-col h-full w-2/4 xs:w-auto mx-auto my-6'>
      <form onSubmit={handleSubmit}>
        <div className='font-medium text-slate-800 flex h-auto w-full mb-2 mx-auto flex-row airbnbml:flex-col ml:w-auto airbnbml:w-96  xs:w-60'>
          <div className='bg-slate-300 h-auto w-full flex flex-col gap-y-1 px-4 mx-auto px-auto ml:w-auto airbnbml:w-96 xs:w-64 py-2 airbnbml:items-center airbnbml:border-b-transparent'>
            <input
              className='text-slate-700 text-base font-normal h-full w-full mx-auto text-center'
              placeholder='Search Your Food Here 🍉'
              value={searchFood}
              onChange={(event) => setSearchFood(event.target.value)}
            />
          </div>
          <div className='bg-gradient-to-br to-amber-400 from-pink-500 hover:bg-gradient-to-br hover:to-amber-600 hover:from-pink-600 hover:text-white h-auto w-full flex flex-col gap-y-3 border-solid border-2 border-slate-300 mx-auto px-2 px-auto ml:w-auto airbnbml:w-96  xs:w-64 py-2 airbnbml:items-center'>
            <button
              type='submit'
              className='text-center text-white text-xl font-medium font-Nunito_Sans mx-auto my-auto w-auto h-full'
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DiningSearch;
