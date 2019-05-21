import React from "react";
import RepoItem from "./RepoItem";
import { mount } from "enzyme";

const baseProps = {
  deleteRepoItem: jest.fn()
};

const wrapper = mount(<RepoItem {...baseProps} />);

describe("Repo Item", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(RepoItem).exists()).toBe(true);
  });

  it("calls deleteRepoItem when delete button is clicked", () => {
    wrapper.find("button").simulate("click");
    expect(baseProps.deleteRepoItem).toHaveBeenCalled();
  });
});
