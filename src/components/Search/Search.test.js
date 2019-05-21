import React from "react";
import Search from "./Search";
import { mount } from "enzyme";

const baseProps = {
  handleChange: jest.fn(),
  onSubmit: jest.fn()
};

const wrapper = mount(<Search {...baseProps} />);

describe("Search", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(Search).exists()).toBe(true);
  });

  it("calls onSubmit when form is submitted", () => {
    wrapper.find("form").simulate("submit");
    expect(baseProps.onSubmit).toHaveBeenCalled();
  });

  it("calls onChange when input text is changed", () => {
    wrapper.find("input").simulate("change");
    expect(baseProps.handleChange).toHaveBeenCalled();
  });
});
