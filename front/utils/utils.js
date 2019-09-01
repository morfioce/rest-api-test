export const sliceFromTail = (stocks, n = 20) => {
  return stocks.slice(stocks.length - n).map((stock, i) => {
    return {
      index: i,
      value: parseFloat(stock.stocks)
    };
  });
};


export const max = stocks => {
  let max = stocks[0].value;
  for (let stock of stocks) {
    if (stock.value > max) {
      max = stock.value;
    }
  }
  return Math.ceil(max);
};