import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import DatatPoint from "../components/DatatPoint";
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

it("renders DataPoint with or without props", () => {
  act(() => {
    render(<DatatPoint />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<input type=\\"text\\" value=\\"\\">"`
  );
});
