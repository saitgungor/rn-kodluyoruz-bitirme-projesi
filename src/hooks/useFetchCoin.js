import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetchCoin = (url, timePeriod) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          timePeriod: '24h',
        },
        headers: {
          'X-RapidAPI-Key': Config.API_KEY,
          'X-RapidAPI-Host': Config.API_HOST,
        },
      });
      setData(response.data.data.coin);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, loading, error];
};

export default useFetchCoin;
