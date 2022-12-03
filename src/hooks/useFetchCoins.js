import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetchCoins = (url, timePeriod) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: timePeriod,
          'tiers[0]': '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '50',
          offset: '0',
        },
        headers: {
          'X-RapidAPI-Key': Config.API_KEY,
          'X-RapidAPI-Host': Config.API_HOST,
        },
      });
      setData(response.data.data.coins);
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

export default useFetchCoins;
