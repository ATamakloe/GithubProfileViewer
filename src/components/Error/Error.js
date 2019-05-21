import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

const Error = () => {
  return (
    <Card>
      <CardContent>
        <Typography color="error">Error: Github profile not found</Typography>
      </CardContent>
    </Card>
  );
};
export default Error;
