import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, getByTestId } from '@testing-library/react'

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

it("tests onChange event of DataPoint", () => {
  const onChange = jest.fn();
  act(() => {
    render(<DatatPoint data-testid="1" key="1" value="12.34" onChange={onChange} />, container);
  });
  const input = document.querySelector("input");
  
  act(() => {
    fireEvent.change(input, { target: { value: '500' } });
    fireEvent.change(input, { target: { value: 'abc' } });
    fireEvent.change(input, { target: { value: '600' } });
    fireEvent.change(input, { target: { value: '5fg' } });
    fireEvent.change(input, { target: { value: '320' } });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.change(input, { target: { value: 'clf' } });
  });

  expect(onChange).toHaveBeenCalledTimes(4);
});
