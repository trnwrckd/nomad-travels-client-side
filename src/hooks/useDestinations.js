import { useEffect, useState } from 'react';
import { baseUrl } from '../utils/constants';

export const useDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  const url = `${baseUrl}/destinations`;

  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(data => setDestinations(data));
  }, [url]);

  return [destinations, setDestinations];
};
