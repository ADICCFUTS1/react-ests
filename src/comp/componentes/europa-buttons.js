import React, { useState, useEffect } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const EuropaButtons = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const Grupos = () => {
    let path = `/europa/grupos`;
    navigate(path, { replace: true });
  };
  const Rounds = () => {
    let path = `/europa/round`;
    navigate(path, { replace: true });
  };
  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={Grupos}>
        Grupos
      </Button>
      <Button variant="outlined" onClick={Rounds}>
        Cuadro final
      </Button>
    </div>
  );
};
export default EuropaButtons;
