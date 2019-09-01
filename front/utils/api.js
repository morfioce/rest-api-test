import { sliceFromTail } from './utils';
import config from './config';

const fetchStocks = async () => {
    try {
      const response = await fetch(config.API_URL);
      const stocks = await response.json();
      localStorage.setItem('stocks', JSON.stringify(stocks));
      // console.log('FROM API SERVER');
      return [sliceFromTail(stocks, 20), 'server'];
    } catch(e) {
      const cache = localStorage.getItem('stocks')
      if (cache) {
        // console.log('FROM CACHE');
        return [sliceFromTail(JSON.parse(cache), 20), 'cache'];
      }
      return 'FILED_TO_FETCH'
    }
};

const api = (timeout=config.API_TIME_OUT) => {
  return Promise.race([
    fetchStocks(),
    new Promise((resolve) => { setTimeout(() => {
      resolve(['SERVER_TIMED_OUT', '']);
    }, timeout); })
  ]);
}

export default api;