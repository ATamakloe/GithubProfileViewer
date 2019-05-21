import React from "react";
import App from "./App";
import Loading from "./components/Loading/Loading";
import TitleBar from "./components/TitleBar/TitleBar";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import RepoList from "./components/RepoList/RepoList";
import Error from "./components/Error/Error";
import { mount } from "enzyme";

const wrapper = mount(<App />);
const instance = wrapper.instance();

describe("App Component", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(App).exists()).toBe(true);
  });

  it("initial state values are empty/false", () => {
    expect(instance.state.error).toBeFalsy();
    expect(instance.state.name).toBe("");
    expect(instance.state.followers).toBe("");
    expect(instance.state.following).toBe("");
    expect(instance.state.bio).toBe("");
    expect(instance.state.login).toBe("");
    expect(instance.state.avatar).toBe("");
    expect(instance.state.isLoading).toBeFalsy();
    expect(instance.state.repos[0].name).toBe(
      "Search for a GitHub User to view their repositories"
    );
  });

  it("renders the TitleBar component", () => {
    expect(wrapper.find(TitleBar).exists()).toBe(true);
  });

  it("renders the Search component", () => {
    expect(wrapper.find(Search).exists()).toBe(true);
  });

  it("renders the Profile component", () => {
    expect(wrapper.find(Profile).exists()).toBe(true);
  });

  it("renders the RepoList component", () => {
    expect(wrapper.find(RepoList).exists()).toBe(true);
  });

  it("renders Loading component when isLoading is true", () => {
    wrapper.setState({ isLoading: true, error: false });
    expect(wrapper.find(Loading).exists()).toBe(true);
  });

  it("does not render Profile component when isLoading is true", () => {
    wrapper.setState({ isLoading: true, error: false });
    expect(wrapper.find(Profile).exists()).toBeFalsy();
  });

  it("does not render RepoList component when isLoading is true", () => {
    wrapper.setState({ isLoading: true, error: false });
    expect(wrapper.find(RepoList).exists()).toBeFalsy();
  });

  it("renders Error component when error is true", () => {
    wrapper.setState({ isLoading: false, error: true });
    expect(wrapper.find(Error).exists()).toBe(true);
  });

  it("does not render Profile component when error is true", () => {
    wrapper.setState({ isLoading: false, error: true });
    expect(wrapper.find(Profile).exists()).toBeFalsy();
  });

  it("does not render RepoList component when isLoading is true", () => {
    wrapper.setState({ isLoading: false, error: true });
    expect(wrapper.find(RepoList).exists()).toBeFalsy();
  });
});
