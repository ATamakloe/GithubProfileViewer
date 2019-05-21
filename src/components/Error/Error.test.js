import React from "react";
import Error from "./Error";
import { shallow, mount, render } from "enzyme";

const wrapper = mount(<Error />);

describe("Error Component", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(Error).exists()).toBe(true);
  });
});
