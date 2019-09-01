import React from "react";

const DataPoint = ({onChange, value, index}) => {
  const _onChange = e => {
    if (/[0-9]+/.test(e.target.value)) {
        const input = e.target.value.trim() || 0;
        onChange(parseFloat(input), index);
    }
  };
  return <input type="text" value={value} onChange={_onChange} />;
};

export default DataPoint;
