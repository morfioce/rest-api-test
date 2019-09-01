import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import DataTable from "../components/DataTable";

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
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"data-table\\">
      <table>
        <thead>
          <tr>
            <td>Last 20 stock prices</td>
          </tr>
        </thead>
        <tbody>
          <tr style=\\"display: flex; flex-wrap: wrap;\\"></tr>
        </tbody>
      </table>
    </div>"
  `);

  act(() => {
    render(<DataTable stocks={[]} />, container);
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
          <tr style=\\"display: flex; flex-wrap: wrap;\\"></tr>
        </tbody>
      </table>
    </div>"
  `);

  act(() => {
    render(
      <DataTable
        stocks={[{ index: 0, value: 12.9 }, { index: 1, value: 5.89 }]}
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
    render(
      <DataTable
        stocks={[{ index: 0, value: 12.9 }, { index: 1, value: 5.89 }]}
        onChange={() => {}}
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
});
