
import { useEffect, useState } from 'react';
import { getData } from './data_services'

const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export { useData };
