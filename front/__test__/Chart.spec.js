import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Chart from "../components/Chart";
import stocks from "./stocks.json";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders Chart with or without props", () => {
  act(() => {
    render(<Chart />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"chart\\"><svg width=\\"1000\\" height=\\"500\\">
        <g id=\\"chart-group\\" transform=\\"translate(50, 25)\\"></g>
      </svg></div>"
  `);

  act(() => {
    render(
      <Chart
        width="1500"
        height="750"
        margin={{ top: 30, right: 30, bottom: 35, left: 75 }}
      />,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"chart\\"><svg width=\\"1500\\" height=\\"750\\" style=\\"margin: 30px 30px 35px 75px;\\">
        <g id=\\"chart-group\\" transform=\\"translate(75, 30)\\"></g>
      </svg></div>"
  `);
  act(() => {
    render(
      <Chart
        width="1500"
        height="750"
        margin={{ top: 30, right: 30, bottom: 35, left: 75 }}
        stocks={stocks}
      />,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"chart\\"><svg width=\\"1500\\" height=\\"750\\" style=\\"margin: 30px 30px 35px 75px;\\">
        <g id=\\"chart-group\\" transform=\\"translate(75, 30)\\">
          <g transform=\\"translate(0,695)\\" fill=\\"none\\" font-size=\\"10\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\">
            <path class=\\"domain\\" stroke=\\"currentColor\\" d=\\"M0.5,6V0.5H1425.5V6\\"></path>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0.5,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">0</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(143,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">2</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(285.5,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">4</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(428,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">6</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(570.5,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">8</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(713,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">10</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(855.5,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">12</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(997.9999999999999,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">14</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(1140.5,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">16</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(1283,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">18</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(1425.5,0)\\">
              <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">20</text>
            </g>
          </g>
          <g fill=\\"none\\" font-size=\\"10\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\">
            <path class=\\"domain\\" stroke=\\"currentColor\\" d=\\"M-6,695.5H0.5V0.5H-6\\"></path>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,695.5)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">0</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,639.9)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">2</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,584.3)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">4</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,528.7)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">6</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,473.1)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">8</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,417.5)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">10</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,361.90000000000003)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">12</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,306.29999999999995)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">14</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,250.7)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">16</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,195.10000000000002)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">18</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,139.5)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">20</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,83.89999999999998)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">22</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,28.300000000000068)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">24</text>
            </g>
          </g>
          <path class=\\"line\\" d=\\"M0,25.992999999999938L71.25,132.3836L142.5,198.909L213.75,159.68319999999994L285,50.54039999999998L356.25,29.746000000000095L427.5,84.84559999999999L498.74999999999994,151.0652L570,157.37580000000003L641.25,284.3662L712.5,178.89300000000003L783.7500000000001,262.71L855,325.17659999999995L926.25,224.207L997.4999999999999,264.29459999999995L1068.75,264.1L1140,106.91880000000003L1211.25,318.97720000000004L1282.5,347.1942L1353.75,149.67520000000002\\"></path>
        </g>
      </svg></div>"
  `);
});
