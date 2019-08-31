import React from "react";
import reactDom from "react-dom";

import Chart from "./components/Chart";
import DataTable from "./components/DataTable";

const process = stocks => {
  return stocks.slice(stocks.length - 20).map((stock, i) => {
    return {
      index: i,
      stocks: parseFloat(stock.stocks)
    };
  });
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stocks: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks", { cache: "no-cache" })
      .then(response => response.json())
      .then(stocks => {
        this.setState({ stocks: process(stocks) });
        console.log(process(stocks));
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div>
        <h1>Simple dashboard with Node, React and D3?</h1>
        <Chart width="1000" height="500" stocks={this.state.stocks} />
        <DataTable stocks={this.state.stocks} />
      </div>
    );
  }
}

reactDom.render(<App />, document.querySelector("#react-app"));
