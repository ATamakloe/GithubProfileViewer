import React from "react";
import { Typography, Card, CardContent, Avatar } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme =>
  console.log(theme) || {
    card: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3
    },
    info: {
      marginTop: 0,
      marginBottom: 0
    },
    break: {
      flexBasis: "100%"
    },
    avatarSize: {
      height: 80,
      width: 80,
      marginBottom: theme.spacing.unit * 2
    },
    textDeco: {
      textDecoration: "underline"
    }
  };

const Profile = ({ classes, followers, following, avatar, bio, name }) => {
  const bioBody = !bio ? " " : "Bio";
  return (
    <Card>
      <CardContent className={classes.card}>
        <Avatar
          aria-label="ProfilePicture"
          alt="githubprofilepicture"
          src={avatar}
          className={classes.avatarSize}
        >
          A
        </Avatar>
        <p className={classes.info}>
          <Typography className={classes.textDeco} gutterBottom>
            {name}
          </Typography>
          <Typography>Followers: {followers}</Typography>
          <Typography>Following: {following} </Typography>
        </p>
        <div className={classes.break} />
        <div>
          <Typography className={classes.textDeco}>{bioBody}</Typography>
          <Typography variant="subheading">{bio}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
export default withStyles(styles)(Profile);
