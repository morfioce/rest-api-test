import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Chart from "../../components/Chart";
import stocks from "../stocks.json";

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
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,408.51682942031994)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">2</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,371.53365884063993)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">4</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,334.5504882609599)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">6</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,297.56731768127986)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">8</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,260.5841471015998)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">10</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,223.6009765219198)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">12</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,186.61780594223978)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">14</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,149.63463536255972)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">16</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,112.65146478287971)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">18</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,75.66829420319965)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">20</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,38.685123623519644)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">22</text>
            </g>
            <g class=\\"tick\\" opacity=\\"1\\" transform=\\"translate(0,1.7019530438395805)\\">
              <line stroke=\\"currentColor\\" x2=\\"-6\\"></line><text fill=\\"currentColor\\" x=\\"-9\\" dy=\\"0.32em\\">24</text>
            </g>
          </g>
          <path class=\\"line\\" d=\\"M0,0L46.25,70.76729690421774L92.5,115.01766050280497L138.75,88.92603365884065L185,16.32806981092881L231.25,2.49636401412846L277.5,39.146686058591285L323.75,83.19364221899025L370,87.39123207978395L416.25,171.86079368377312L462.5,101.70371909412012L508.75000000000006,157.45584874298777L555,199.00644088925827L601.25,131.84500311655933L647.5,158.50986910450865L693.75,158.38042800747974L740,53.82900477872431L786.25,194.88281736962395L832.5,213.6517764388116L878.75,82.26906295449828\\"></path>
        </g>
      </svg></div>"
  `);
});
