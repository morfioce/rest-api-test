import React from "react";
import * as d3 from "d3";

const max = stocks => {
  let max = stocks[0].stocks;
  for (let stock of stocks) {
    if (stock.stocks > max) {
      max = stock.stocks;
    }
  }
  return max;
};

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
      .domain([0, 12])
      .range([height, 0]);
  }

  drawLinePath(stocks) {
    if (!this.svg) return;
    // define the line
    var valueline = d3
      .line()
      .x(d => {
        return this.x()(d.index) + 50;
      })
      .y(d => {
        return this.y()(d.stocks) + 25;
      });
    // Add the valueline path.
    setTimeout(() => {
      this.svg
        .append("path")
        .datum(stocks)
        .attr("class", "line")
        .attr("d", valueline);
    }, 0);
  }

  drawXAxis() {
    var margin = { top: 25, right: 25, bottom: 30, left: 50 };
    var height = this.props.height - margin.top - margin.bottom;
    if (!this.svg) return;

    // Add the X Axis
    this.svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(this.x()));
  }

  drawYAxis() {
    if (!this.svg) return;

    // Add the Y Axis
    this.svg
      .append("g")
      .call(d3.axisLeft(this.y()));
  }

  componentDidMount() {
    var margin = { top: 25, right: 25, bottom: 30, left: 50 },
      width = this.props.width - margin.left - margin.right,
      height = this.props.height - margin.top - margin.bottom;

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    this.svg = this.svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div id="chart">
        <svg
          style={{
            marginTop: 25,
            marginRight: 25,
            marginBottom: 30,
            marginLeft: 50
          }}
          ref={el => (this.svg = d3.select(el))}
        >
          {this.drawXAxis(this.props.stocks)}
          {this.drawYAxis(this.props.stocks)}
          {this.drawLinePath(this.props.stocks)}
        </svg>
      </div>
    );
  }
}

export default Chart;
