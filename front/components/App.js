import React, { useState, useEffect, Fragment } from "react";

import api from "../utils/api";
import Chart from "./Chart";
import DataTable from "./DataTable";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [source, setSource] = useState("");
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const [response, source] = await api();
    if (typeof response === "string") {
      setError(response);
    } else {
      setStocks(response);
    }
    setSource(source);
  };

  const onChange = (data, key) => {
    setStocks(
      stocks.map(stock => {
        if (stock.index === key) {
          return {
            index: key,
            stocks: data
          };
        }
        return stock;
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {error ? (
        <h1>THE SERVICE IS TEMPORARILY UNAVAILABLE</h1>
      ) : (
        <Fragment>
          <p>Data loaded from: {source}</p>
          <Chart
            width="1000"
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

export default App;
