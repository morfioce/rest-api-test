import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import App from "../../components/App";
import mockStocks from "../stocks.json";

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

it("renders Chart with or without props", async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockStocks)
    })
  );
  await act(async () => {
    render(<App />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"container\\">
      <p>Data loaded from: server</p>
      <div id=\\"chart\\"><svg width=\\"1000\\" height=\\"500\\" style=\\"margin: 25px 25px 30px 50px;\\">
          <g id=\\"chart-group\\" transform=\\"translate(50, 25)\\">
            <g transform=\\"translate(0,445)\\" fill=\\"none\\" font-size=\\"10\\" font-family=\\"sans-serif\\" text-anchor=\\"middle\\">
              <path class=\\"domain\\" stroke=\\"currentColor\\" d=\\"M0.5,6V0.5H925.5V6\\"></path>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0.5,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">0</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(93,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">2</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(185.5,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">4</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(278,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">6</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(370.5,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">8</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(463,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">10</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(555.5,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">12</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(648,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">14</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(740.5,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">16</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(833,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">18</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(925.5,0)\\">
                <line stroke=\\"currentColor\\" y2=\\"6\\"></line><text fill=\\"currentColor\\" y=\\"9\\" dy=\\"0.71em\\">20</text>
              </g>
            </g>
            <g fill=\\"none\\" font-size=\\"10\\" font-family=\\"sans-serif\\" text-anchor=\\"end\\">
              <path class=\\"domain\\" stroke=\\"currentColor\\" d=\\"M-6,445.5H0.5V0.5H-6\\"></path>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,445.5)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">0</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,409.9)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">2</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,374.3)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">4</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,338.7)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">6</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,303.1)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">8</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,267.5)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">10</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,231.9)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">12</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,196.29999999999998)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">14</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,160.7)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">16</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,125.10000000000002)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">18</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,89.5)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">20</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,53.89999999999998)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">22</text>
              </g>
              <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,18.30000000000001)\\">
                <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">24</text>
              </g>
            </g>
            <path class=\\"line\\" d=\\"M0,16.642999999999972L46.25,84.7636L92.5,127.35899999999998L138.75,102.2432L185,32.36040000000003L231.25,19.04600000000005L277.5,54.32560000000001L323.75,96.72519999999997L370,100.76580000000001L416.25,182.07619999999997L462.5,114.543L508.75000000000006,168.20999999999998L555,208.20659999999998L601.25,143.55700000000002L647.5,169.22459999999995L693.75,169.10000000000002L740,68.4588L786.25,204.2372L832.5,222.3042L878.75,95.83519999999999\\"></path>
          </g>
        </svg></div>
      <div id=\\"data-table\\">
        <table>
          <thead>
            <tr>
              <td>Last 20 stock prices</td>
            </tr>
          </thead>
          <tbody>
            <tr style=\\"display: flex; flex-wrap: wrap;\\">
              <td><input type=\\"text\\" value=\\"24.065\\"></td>
              <td><input type=\\"text\\" value=\\"20.238\\"></td>
              <td><input type=\\"text\\" value=\\"17.845\\"></td>
              <td><input type=\\"text\\" value=\\"19.256\\"></td>
              <td><input type=\\"text\\" value=\\"23.182\\"></td>
              <td><input type=\\"text\\" value=\\"23.93\\"></td>
              <td><input type=\\"text\\" value=\\"21.948\\"></td>
              <td><input type=\\"text\\" value=\\"19.566\\"></td>
              <td><input type=\\"text\\" value=\\"19.339\\"></td>
              <td><input type=\\"text\\" value=\\"14.771\\"></td>
              <td><input type=\\"text\\" value=\\"18.565\\"></td>
              <td><input type=\\"text\\" value=\\"15.55\\"></td>
              <td><input type=\\"text\\" value=\\"13.303\\"></td>
              <td><input type=\\"text\\" value=\\"16.935\\"></td>
              <td><input type=\\"text\\" value=\\"15.493\\"></td>
              <td><input type=\\"text\\" value=\\"15.5\\"></td>
              <td><input type=\\"text\\" value=\\"21.154\\"></td>
              <td><input type=\\"text\\" value=\\"13.526\\"></td>
              <td><input type=\\"text\\" value=\\"12.511\\"></td>
              <td><input type=\\"text\\" value=\\"19.616\\"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>"
  `);
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
