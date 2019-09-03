import React from "react";

const DataPoint = ({onChange, value, index}) => {
  const _onChange = e => {
    const input = Number(e.target.value.trim());
    if (input || input == 0) {
        onChange(input, index);
    }
  };
  return <input type="text" value={value} onChange={_onChange} />;
};

export default DataPoint;
