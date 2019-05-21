import React from "react";
import TitleBar from "./TitleBar";
import { shallow, mount, render } from "enzyme";

const wrapper = mount(<TitleBar />);

describe("Title Component", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(TitleBar).exists()).toBe(true);
  });
});
