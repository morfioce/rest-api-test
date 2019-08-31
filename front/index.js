import React from "react";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stocks: [] };
    this.onChange = this.onChange.bind(this);
  }

  onChange(data, key) {
    this.setState(prevState => {
      return {
        stocks: prevState.stocks.map(stock => {
          if (stock.index === key) {
            return {
              index: key,
              value: data
            };
          }
          return stock;
        })
      };
    });
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
        <Chart
          width="950"
          height="500"
          margin={{ top: 25, right: 25, bottom: 30, left: 50 }}
          stocks={this.state.stocks}
        />
        <DataTable stocks={this.state.stocks} onChange={this.onChange} />
      </div>
    );
  }
}

reactDom.render(<App />, document.querySelector("#react-app"));
