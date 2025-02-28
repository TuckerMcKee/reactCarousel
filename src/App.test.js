import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function() {
    render(<App />);
  })
  
  it("matches snapshot", function() {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  })