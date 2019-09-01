import React, {useState, useEffect} from "react";
import reactDom from "react-dom";

import Chart from "./components/Chart";
import DataTable from "./components/DataTable";

const process = stocks => {
  return stocks.slice(stocks.length - 20).map((stock, i) => {
    return {
      index: i,
      value: parseFloat(stock.stocks)
    };
  });
};

const App = () => {
  const [stocks, setStocks] = useState([]);

  const onChange = (data, key) => {
    setStocks(stocks.map(stock => {
      if (stock.index === key) {
        return {
            index: key,
            value: data
        };
        }
        return stock;
      })
    )
  }

  useEffect(() => {
    fetch("http://localhost:3000/stocks", { cache: "no-cache" })
      .then(response => response.json())
      .then(stocks => {
        setStocks(process(stocks));
      })
      .catch(e => console.error(e));
  }, []);

  
  return (
    <div>
      <Chart
        width="950"
        height="500"
        margin={{ top: 25, right: 25, bottom: 30, left: 50 }}
        stocks={stocks}
      />
      <DataTable stocks={stocks} onChange={onChange} />
    </div>
  );
 
}

reactDom.render(<App />, document.querySelector("#react-app"));
