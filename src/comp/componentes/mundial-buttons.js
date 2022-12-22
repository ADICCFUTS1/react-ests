import React, { useState, useEffect } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, IconButton } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import HomeIcon from "@material-ui/icons/Home";
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
  function refreshPage() {
    window.location.reload(false);
  }
  let navigate = useNavigate();
  const Calendar = () => {
    let path = `/mundial/calendario`;
    navigate(path, { replace: true });
  };
  const Grupos = () => {
    let path = `/mundial/grupos`;
    navigate(path, { replace: true });
  };
  const Rounds = () => {
    let path = `/mundial/round`;
    navigate(path, { replace: true });
  };

  return (
    <div>
      <div className={classes.root}>
        <IconButton
          onClick={refreshPage}
          aria-label="delete"
          className={classes.margin}
        >
          <RefreshIcon fontSize="small" />
        </IconButton>{" "}
        <IconButton
          href="https://adiccfuts1sv1.blogspot.com/2018/11/app.html"
          rel="noopener noreferrer"
          aria-label="delete"
          className={classes.margin}
        >
          <HomeIcon fontSize="small" />
        </IconButton>
        <Button
          style={{ textDecoration: "none" }}
          variant="outlined"
          onClick={Calendar}
        >
          Calendario
        </Button>
        <Button variant="outlined" onClick={Grupos}>
          Grupos
        </Button>
        <Button variant="outlined" onClick={Rounds}>
          Cuadro final
        </Button>
      </div>
    </div>
  );
};
export default Buttons;
