import React, { useState, useEffect } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
const Buttons = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const Route = (route) => {
    let path = `/argentina/${route}`;
    navigate(path, { replace: true });
  };
  return (
    <div className={classes.root}>
        <Button variant="outlined"  onClick={() => Route("torneo")}>Tabla Torneo</Button>
        <Button variant="outlined"  onClick={() => Route("anual")}>Tabla anual</Button>
        <Button variant="outlined" onClick={() => Route("promedios")}>Promedios</Button>
    </div>
  );
};
export default Buttons;
