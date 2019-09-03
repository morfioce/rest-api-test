import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import DataTable from "../../components/DataTable";
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

it("renders with or without a name", () => {
  act(() => {
    render(<DataTable />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>Loading ...</h1>"`
  );

  act(() => {
    render(<DataTable stocks={[]} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>Loading ...</h1>"`
  );

  act(() => {
    render(
      <DataTable
        stocks={[{ index: 0, stocks: 12.9 }, { index: 1, stocks: 5.89 }]}
      />,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"data-table\\">
      <table>
        <thead>
          <tr>
            <td>Last 20 stock prices</td>
          </tr>
        </thead>
        <tbody>
          <tr style=\\"display: flex; flex-wrap: wrap;\\">
            <td><input type=\\"text\\" value=\\"12.9\\"></td>
            <td><input type=\\"text\\" value=\\"5.89\\"></td>
          </tr>
        </tbody>
      </table>
    </div>"
  `);

  act(() => {
    render(<DataTable stocks={mockStocks} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"data-table\\">
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
    </div>"
  `);
});
