import React, { useState, useEffect } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
const Buttons = () => {
  const classes = useStyles();
  return (
    <div>
      <NavLink
        className={classes.root}
        to="/liga-argentina"
        style={{ textDecoration: "none" }}
      >
        <Button variant="outlined">Tabla Torneo</Button>
      </NavLink>

      <NavLink
        className={classes.root}
        to="/liga-argentina/anual"
        style={{ textDecoration: "none" }}
      >
        <Button variant="outlined">Tabla anual</Button>
      </NavLink>

      <NavLink
        className={classes.root}
        to="/liga-argentina/promedios"
        style={{ textDecoration: "none" }}
      >
        <Button variant="outlined">Promedios</Button>
      </NavLink>

      {/*<NavLink
        className={classes.root}
        to="/champions-final"
        style={{ textDecoration: "none" }}
      >
        <Button variant="outlined">Final</Button>
      </NavLink>*/}
    </div>
  );
};
export default Buttons;
