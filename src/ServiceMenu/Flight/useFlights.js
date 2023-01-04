import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { APIKEY, APIURL } from './ApiInfo';

const useFlights = () => {
  return useQuery({
    queryKey: ['flights'],
    queryFn: async () => {
      await axios
        .get(APIURL, {
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

export default useFlights;
