import React from "react";
import { List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import RepoItem from "../../components/RepoItem/RepoItem";
import ListBackground from "../../imgs/milkyway.jpeg";

const styles = {
  list: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundImage: `url(${ListBackground})`,
    backgroundPosition: "center"
  }
};

const RepoList = ({ classes, deleteRepoItem, repos }) => {
  return (
    <List className={classes.list}>
      {repos.map((repo, i) => (
        <RepoItem
          key={i}
          title={repo.name}
          url={repo.url}
          deleteRepoItem={deleteRepoItem}
        />
      ))}
    </List>
  );
};
export default withStyles(styles)(RepoList);
