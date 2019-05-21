import React, { Component } from "react";
import { GraphQLClient } from "graphql-request";
import { Grid } from "@material-ui/core";
import TitleBar from "./components/TitleBar/TitleBar";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import RepoList from "./components/RepoList/RepoList";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
require("dotenv").config();

const token = `${process.env.REACT_APP_KEY}`;

class App extends Component {
  state = {
    isLoading: false,
    error: false,
    name: "",
    followers: "",
    following: "",
    bio: "",
    login: "",
    avatar: "",
    repos: [
      { name: "Search for a GitHub User to view their repositories", url: "" }
    ]
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.getProfile();
  };

  client = new GraphQLClient(
    "https://api.github.com/graphql",
    {
      headers: { Authorization: `Token ${token}` }
    },
    { name: this.state.name }
  );

  getProfile = async () => {
    const query = `query getProfile($name: String!) {
      user(login: $name ) {
        login
        bio
        avatarUrl
        followers {
          totalCount
        }
        following {
          totalCount
        }
        repositories(last: 5) {
          nodes {
            name
            url
          }
        }
      }
    }`;

    this.setState({ isLoading: true });
    this.client
      .request(query, { name: this.state.name })
      .then(data => {
        this.setState({
          avatar: data.user.avatarUrl,
          login: data.user.login,
          bio: data.user.bio,
          followers: data.user.followers.totalCount,
          following: data.user.following.totalCount,
          repos: data.user.repositories.nodes,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          error: true,
          avatar: "",
          login: "",
          bio: "",
          followers: "",
          following: "",
          repos: [],
          isLoading: false
        });
      });
  };

  deleteRepoItem = name => {
    this.setState(prevState => ({
      repos: prevState.repos.filter(repo => repo.name !== name)
    }));
  };

  render() {
    const {
      error,
      name,
      followers,
      following,
      bio,
      avatar,
      repos,
      login,
      isLoading
    } = this.state;

    let profileBody;
    let repoList;

    if (isLoading === true) {
      profileBody = <Loading />;
      repoList = <Loading />;
    } else if (error === true) {
      profileBody = <Error />;
      repoList = <Error />;
    } else {
      profileBody = (
        <Profile
          name={login}
          avatar={avatar}
          followers={followers}
          following={following}
          bio={bio}
        />
      );
      repoList = (
        <RepoList repos={repos} deleteRepoItem={this.deleteRepoItem} />
      );
    }

    return (
      <div className="App">
        <TitleBar />
        <Search
          name={name}
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
        />
        <Grid
          container
          direction="row"
          justify="center"
          spacing={40}
          style={{ maxWidth: "85vw", margin: "0 auto" }}
        >
          <Grid item xs={4}>
            {profileBody}
          </Grid>
          <Grid item xs={8}>
            {repoList}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
