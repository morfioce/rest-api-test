import React, { useState, useEffect, Fragment } from "react";
import reactDom from "react-dom";

import api from "./utils/api";
import Chart from "./components/Chart";
import DataTable from "./components/DataTable";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [source, setSource] = useState('server');
  const [error, setError] = useState(null);

  const onChange = (data, key) => {
    setStocks(
      stocks.map(stock => {
        if (stock.index === key) {
          return {
            index: key,
            value: data
          };
        }
        return stock;
      })
    );
  };

  useEffect(async () => {
    const [response, source] = await api();
    if (typeof response === "string") {
      setError(response);
    } else {
      setStocks(response);
    }
    setSource(source);
  }, []);

  return (
    <div id="container">
      {error ? (
        <div id="error">
          <h1>THE SERVICE IS TEMPORARILY UNAVAILABLE</h1>
        </div>
      ) : (
        <Fragment>
          <p>Data loaded from: {source}</p>
          <Chart
            width="950"
            height="500"
            margin={{ top: 25, right: 25, bottom: 30, left: 50 }}
            stocks={stocks}
          />
          <DataTable stocks={stocks} onChange={onChange} />
        </Fragment>
      )}
    </div>
  );
};

reactDom.render(<App />, document.querySelector("#react-app"));
