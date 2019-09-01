import React from "react";
import * as d3 from "d3";

import { max } from '../utils/utils';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.drawLinePath = this.drawLinePath.bind(this);
  }

  x() {
    var margin = { top: 25, right: 25, bottom: 30, left: 50 },
      width = this.props.width - margin.left - margin.right;

    return d3
      .scaleLinear()
      .domain([0, 20])
      .range([0, width]);
  }

  y() {
    var margin = { top: 25, right: 25, bottom: 30, left: 50 },
      height = this.props.height - margin.top - margin.bottom;

    return d3
      .scaleLinear()
      .domain([0, max(this.props.stocks)])
      .range([height, 0]);
  }

  drawLinePath(stocks) {
    if (!this.svg) return;

    // define the line
    var valueline = d3
      .line()
      .x(d => {
        return this.x()(d.index);
      })
      .y(d => {
        return this.y()(d.value);
      });
    // Add the valueline path.
      this.svg
        .append("path")
        .datum(stocks)
        .attr("class", "line")
        .attr("d", valueline);
  }

  drawXAxis() {
    if (!this.svg) return;

    var margin = { top: 25, right: 25, bottom: 30, left: 50 };
    var height = this.props.height - margin.top - margin.bottom;
    // Add the X Axis
    this.svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(this.x()));
  }

  drawYAxis() {
    if (!this.svg) return;

    // Add the Y Axis
    this.svg.append("g").call(d3.axisLeft(this.y()));
  }

  UNSAFE_componentWillUpdate(nextProps) {
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
          {this.drawXAxis(stocks)}
          {this.drawYAxis(stocks)}
          {this.drawLinePath(stocks)}
        </svg>
      </div>
    );
  }
}

export default Chart;
