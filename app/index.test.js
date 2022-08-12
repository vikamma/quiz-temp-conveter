import { tryConvert } from "./index.js";

it("Convert between Celsius and Fahrenheit", () => {
  expect(tryConvert(100, "toFahrenheit")).toBe("212");
});

it("Convert between Fahrenheit and Celsius", () => {
  expect(tryConvert(50, "toCelsius")).toBe("10");
});

it("Convert to Celsius with non-numerical input", () => {
  expect(tryConvert("abc", "toCelsius")).toBe("");
});

it("Convert to Fahrenheit with non-numerical input", () => {
  expect(tryConvert("abc", "toCelsius")).toBe("");
});
