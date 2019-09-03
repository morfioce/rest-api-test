export const sliceFromTail = (stocks, n = 20) => {
  if (!stocks) {
    throw new Error('Missing first param: array');
  }

  if (!Array.isArray(stocks)) {
    throw new TypeError('Invalid first param: should be of type array');
  }

  if (typeof n !== 'number') {
    throw new TypeError('Invalid second param: should be of type number');
  }

  if (n > stocks.length) return stocks;

  return stocks.slice(stocks.length - n).map((stock, i) => {
    return {
      index: i,
      stocks: parseFloat(stock.stocks)
    };
  });
};


export const max = stocks => {
  if (!stocks) {
    throw new Error('Missing param "stocks">: array');
  }

  if (!Array.isArray(stocks)) {
    throw new TypeError('Invalid param "stocks": should be of type array');
  }

  if (!stocks.length) return null;

  let max = stocks[0].stocks;
  for (let stock of stocks) {
    if (stock.stocks > max) {
      max = stock.stocks;
    }
  }
  return max;
};