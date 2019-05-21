import React from "react";
import Loading from "./Loading";
import { mount } from "enzyme";

const wrapper = mount(<Loading />);

describe("Loading", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(Loading).exists()).toBe(true);
  });
});
