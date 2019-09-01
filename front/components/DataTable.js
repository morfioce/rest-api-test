import React from "react";
import DataPoint from "./DatatPoint";

const DataTable = ({ stocks, onChange }) => {
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

export default DataTable;
