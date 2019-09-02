import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import DatatPoint from "../../components/DatatPoint";

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

  act(() => {
    render(<DatatPoint key="1" value="12.34" />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<input type=\\"text\\" value=\\"12.34\\">"`
  );
});
