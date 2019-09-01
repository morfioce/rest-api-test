import { takeFromTail } from './utils'

const api = async () => {
    const STOCKS_URL = "http://localhost:3000/stocks";
    try {
      const response = await fetch(STOCKS_URL);
      const stocks = await response.json();
      localStorage.setItem('stocks', JSON.stringify(stocks));
      console.log('FROM API SERVER');
      return [takeFromTail(stocks, 20), 'server'];
    } catch(e) {
      const cache = localStorage.getItem('stocks')
      if (cache) {
        console.log('FROM CACHE');
        return [takeFromTail(JSON.parse(cache), 20), 'cache'];
      }
      return 'FILED_TO_FETCH'
    }
};

export default api;