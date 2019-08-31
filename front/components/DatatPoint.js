import React from "react";

const DataPoint = props => {
  const onChange = e => {
    if (/[0-9]+/.test(e.target.value)) {
        const input = e.target.value.trim() || 0;
        props.onChange(parseFloat(input), props.index);
    }
  };
  return <input type="text" value={props.value} onChange={onChange} />;
};

export default DataPoint;
