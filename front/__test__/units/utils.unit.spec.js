import { sliceFromTail, max } from "../../utils/utils";

const mockStocks = [
  {
    index: 0,
    stocks: 19.3
  },
  {
    index: 1,
    stocks: 15.4
  },
  {
    index: 2,
    stocks: 10.34
  }
];

test("sliceFromTail with valid params", () => {
  expect(sliceFromTail(mockStocks, 0)).toEqual([]);
  expect(sliceFromTail(mockStocks, 1)).toEqual([
    {
      index: 0,
      stocks: 10.34
    }
  ]);
  expect(sliceFromTail(mockStocks, 2)).toEqual([
    {
      index: 0,
      stocks: 15.4
    },
    {
      index: 1,
      stocks: 10.34
    }
  ]);
  expect(sliceFromTail(mockStocks, 3)).toEqual(mockStocks);
});

test("sliceFromTail with invalid params", () => {
  expect(() => sliceFromTail()).toThrow();
  expect(() => sliceFromTail("1, 2, 3")).toThrow();
  expect(() => sliceFromTail(mockStocks, "1")).toThrow();
});

test("max with valid params", () => {
  expect(max(mockStocks)).toBe(19.3);
  expect(max([])).toBe(null);
});

test("max with invalid params", () => {
  expect(() => max()).toThrow();
  expect(() => max("1, 2, 3")).toThrow();
});
