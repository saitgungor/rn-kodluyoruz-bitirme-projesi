import {useEffect, useState} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetchNews = url => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [symbol, setSymbol] = useState('crypto');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${url}${symbol}`, {
          params: {
            apikey: Config.API_NEWS_KEY,
            ticker: symbol,
          },
        });
        setNews(response.data.news);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [symbol, url]);

  return [news, loading, error, setSymbol];
};

export default useFetchNews;
