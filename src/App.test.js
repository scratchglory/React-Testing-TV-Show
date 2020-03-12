// Must need our imports, react, render, and component to test
import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  wait
} from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

// test comes from the jest library, included with @testing-library
// create mock (before) setting up test
jest.mock("./api/fetchShow.js");
const seasons = {
  data: [
    {
      id: 553946,
      url:
        "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
      name: "Chapter One: The Vanishing of Will Byers",
      season: 1,
      number: 1,
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
      },
      summary:
        "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>"
    }
  ]
};

// testing the rendering/mounting
test("App renders properly", () => {
  const mockGetData = jest.fn();
  render(<App getData={mockGetData} />);
});

test("Button works", async () => {
  mockFetchShow.mockResolvedValueOnce(seasons);
  const { getByText, queryAllByTestId } = render(<App />);
  const button = getByText(/Select an option/i);
  fireEvent.click(button);

  getByText(/fetching data/i);
  await wait();
  expect(queryAllByTestId("mission")).toHaveLength(1);
});
