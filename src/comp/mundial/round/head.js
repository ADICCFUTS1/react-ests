import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MundialButtons from "../../componentes/mundial-buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
    maxWidth: "100%",
    flexGrow: 1
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  logo: {
    float: "left"
  }
}));

export default function Head() {
  const classes = useStyles();

  return (
    <div>
      <MundialButtons />

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography>Cuadro del mundial:</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
