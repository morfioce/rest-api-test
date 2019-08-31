import React from "react";

class DataTable extends React.Component {
  renderStocks(stocks) {
    return (
      <div id="data-table">
        <table>
          <thead>
            <tr>
              <td>Last 20 stock values</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{width:'500', display:'flex', flexWrap:'wrap'}}>
              {stocks.map(stock => {
                return (
                  <td>
                    <input type="text" value={stock.stocks} />
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
