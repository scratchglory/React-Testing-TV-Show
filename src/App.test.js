// Must need our imports, react, render, and component to test
import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  wait
} from "@testing-library/react";
// import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

// test comes from the jest library, included with @testing-library
// create mock (before) setting up test
// jest.mock("./api/fetchShow.js");

// testing the rendering/mounting
test("App renders properly", () => {
  const mockGetData = jest.fn();
  render(<App getData={mockGetData} />);
});
