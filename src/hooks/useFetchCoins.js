import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetchCoins = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
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
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, loading, error];
};

export default useFetchCoins;
