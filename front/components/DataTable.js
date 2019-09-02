import React from "react";
import DataPoint from "./DatatPoint";

const DataTable = ({ stocks, onChange }) => {
  if (!stocks.length) {
    return <h1>Loading ...</h1>
  }

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
            {stocks && stocks.map(stock => {
              return (
                <td key={stock.index}>
                  <DataPoint
                    index={stock.index}
                    value={stock.value}
                    onChange={onChange}
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DataTable.defaultProps = {
  stocks: []
};

export default DataTable;
