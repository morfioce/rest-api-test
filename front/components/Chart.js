import React from "react";

import * as d3 from "d3";
import { max } from "../utils/utils";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    const {
      top: marginTop,
      right: marginRight,
      bottom: marginBottom,
      left: marginLeft
    } = this.props.margin;
    this.innerWidth = this.props.width - marginLeft - marginRight;
    this.innerHeight = this.props.height - marginTop - marginBottom;
    // define the line
    this.valueline = d3
      .line()
      .x(d => {
        return this.x()(d.index);
      })
      .y(d => {
        return this.y()(d.stocks);
      });
  }

  x() {
    return d3
      .scaleLinear()
      .domain([0, 20])
      .range([0, this.innerWidth]);
  }

  y() {
    return d3
      .scaleLinear()
      .domain([0, Math.ceil(max(this.props.stocks))])
      .range([this.innerHeight, 0]);
  }

  drawLinePath = stocks => {
    if (!this.svg) return;
    // Add the valueline path.
    this.svg
      .append("path")
      .datum(stocks)
      .attr("class", "line")
      .attr("d", this.valueline);
  };

  drawXaxis() {
    if (!this.svg) return;
    // Add the X Axis
    this.svg
      .append("g")
      .attr("transform", "translate(0," + this.innerHeight + ")")
      .call(d3.axisBottom(this.x()));
  }

  drawYaxis() {
    if (!this.svg) return;
    // Add the Y Axis
    this.svg.append("g").call(d3.axisLeft(this.y()));
  }

  UNSAFE_componentWillUpdate(nextProps) {
    // Remove all elements withing the d3 line chart
    // This is because d3 update methods enter/update/remove are not decalarative
    const chart = document.querySelector("#chart-group");
    while (chart.hasChildNodes()) {
      chart.removeChild(chart.lastChild);
    }
  }

  render() {
    const {
      stocks,
      width,
      height,
      margin: {
        top: marginTop,
        right: marginRight,
        bottom: marginBottom,
        left: marginLeft
      }
    } = this.props;

    return (
      <div id="chart">
        <svg
          width={width}
          height={height}
          style={{
            marginTop,
            marginRight,
            marginBottom,
            marginLeft
          }}
        >
          <g
            id="chart-group"
            transform={`translate(${marginLeft}, ${marginTop})`}
            ref={el => (this.svg = d3.select(el))}
          ></g>
          {stocks && this.drawXaxis(stocks)}
          {stocks && this.drawYaxis(stocks)}
          {stocks && this.drawLinePath(stocks)}
        </svg>
      </div>
    );
  }
}

Chart.defaultProps = {
  width: "1000",
  height: "500",
  margin: {
    top: "25",
    right: "25",
    bottom: "30",
    left: "50"
  }
};

export default Chart;
