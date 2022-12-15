import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetchCoin = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timePeriod, setTimePeriod] = useState('24h');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            timePeriod: timePeriod,
          },
          headers: {
            'X-RapidAPI-Key': Config.API_KEY,
            'X-RapidAPI-Host': Config.API_HOST,
          },
        });
        setData(response.data.data.coin);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timePeriod, url]);

  return [data, loading, error, timePeriod, setTimePeriod];
};

export default useFetchCoin;
