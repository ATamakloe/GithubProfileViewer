import React from "react";
import RepoList from "./RepoList";
import { mount } from "enzyme";

const baseProps = {
  repos: [
    { name: "1", url: "" },
    { name: "2", url: "" },
    { name: "3", url: "" },
    { name: "4", url: "" }
  ]
};

const wrapper = mount(<RepoList {...baseProps} />);

describe("Repo List", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(RepoList).exists()).toBe(true);
  });

  it("should show repos", () => {
    expect(wrapper.find("li")).toHaveLength(4);
  });
});
