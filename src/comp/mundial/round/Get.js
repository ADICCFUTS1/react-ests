import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { PinDropSharp } from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  alignRight: {
    textAlign: "right",
  },
});

export default function Get(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.Fase}:
        </Typography>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6" component="h2">
              <img src={props.imgLocal} width="22" height="22" alt="" />{" "}
              {props.Local}
            </Typography>{" "}
            <Typography variant="h6" component="h2">
              <img src={props.imgVisitante} width="22" height="22" alt="" />{" "}
              {props.Visitante}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            container
            direction="column"
            justify="center"
            alignItems="flex-end"
          >
            <Divider orientation="vertical" />
            <Typography
              variant="h6"
              component="h2"
              className={classes.alignRight}
            >
              {props.RLocal}
            </Typography>{" "}
            <Typography
              variant="h6"
              component="h2"
              className={classes.alignRight}
            >
              {props.RVisitante}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
