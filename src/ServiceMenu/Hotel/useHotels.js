import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { APIKEY, APIURL } from './ApiInfo';
import { useContext } from 'react';
import { Params } from './Header';

const useHotels = () => {
  const { destination } = useContext(Params);
  const { date } = useContext(Params);

  return useQuery({
    queryKey: ['hotels', destination, date],
    queryFn: async (key, params) => {
      await axios
        .get(APIURL, {
          params: {
            destination: params.destination,
            date: params.destination,
          },
          headers: {
            'X-RapidAPI-Key': APIKEY,
          },
        })
        .then((res) => res.data)
        .catch((error) => {
          console.log(error);
        });
    },
  });
};

export default useHotels;
