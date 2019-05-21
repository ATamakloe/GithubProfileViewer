import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme =>
  console.log(theme) || {
    listItem: {
      marginBottom: 20,
      backgroundColor: theme.palette.background.paper
    },
    linkStyle: {
      textDecoration: "none"
    }
  };

const RepoItem = ({ classes, deleteRepoItem, title, url }) => {
  return (
    <Paper>
      <ListItem
        button
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.listItem}
      >
        <ListItemText primary={title} secondary={url} />
        <ListItemSecondaryAction>
          <IconButton color="primary" onClick={() => deleteRepoItem(title)}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
};
export default withStyles(styles)(RepoItem);
