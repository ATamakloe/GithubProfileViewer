import React from "react";
import Profile from "./Profile";
import { mount } from "enzyme";

const wrapper = mount(<Profile />);

describe("Profile", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(Profile).exists()).toBe(true);
  });
});
