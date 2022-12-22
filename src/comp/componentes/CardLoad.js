import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  Load: {
    width: "100%"
  }
}));

export default function CardLoad() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div className={classes.Load}>
          <Skeleton />
          <Skeleton animation={false} />
          <Skeleton animation="wave" />
        </div>
      </CardContent>
    </Card>
  );
}
