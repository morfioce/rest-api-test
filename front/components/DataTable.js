import React from "react";

class DataTable extends React.Component {
  renderStocks(stocks) {
    return (
      <table>
        <thead>Last 20 stock values</thead>
        <tbody>
          <tr>
            {stocks.map(stock => {
              return <td key={stock.id}>
                  <input type="text" value={stock.stocks} />
                </td>;
            })}
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return this.renderStocks(this.props.stocks);
  }
}

export default DataTable;
