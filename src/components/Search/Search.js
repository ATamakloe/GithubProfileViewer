import React from "react";
import { Button, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.4)",
    paddingLeft: 5
  },
  search: {
    backgroundColor: "rgba(255,255,255,0.1)"
  }
};

const Search = ({ name, classes, handleChange, onSubmit }) => {
  return (
    <form className={classes.form} onSubmit={e => onSubmit(e)}>
      <InputBase
        autoFocus={true}
        type="text"
        placeholder="Search for a GitHub user"
        value={name}
        className={classes.input}
        onChange={e => {
          handleChange(e);
        }}
      />
      <Button type="submit" className={classes.search} color="inherit">
        <SearchIcon />
      </Button>
    </form>
  );
};
export default withStyles(styles)(Search);
