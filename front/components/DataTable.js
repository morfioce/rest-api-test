import React from "react";
import DataPoint from "./DatatPoint";

class DataTable extends React.Component {
  renderStocks(stocks) {
    return (
      <div id="data-table">
        <table>
          <thead>
            <tr>
              <td>Last 20 stock prices</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ width: "500", display: "flex", flexWrap: "wrap" }}>
              {stocks.map(stock => {
                return (
                  <td key={stock.index}>
                    <DataPoint
                      index={stock.index}
                      value={stock.value}
                      onChange={this.props.onChange}
                    />
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return this.renderStocks(this.props.stocks);
  }
}

export default DataTable;
