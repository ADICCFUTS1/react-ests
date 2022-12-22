import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    "overflow-x": "scroll",

  }
}));

export default function MundialButtonGroup() {
  const classes = useStyles();
  let navigate = useNavigate();
  const Route = (route) => {
    let path = `/mundial/${route}`;
    navigate(path, { replace: true });
  };

  return (
    <div className={classes.root}>
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => Route("round")}>Octavos</Button>
        <Button onClick={() => Route("round2")}>Cuartos</Button>
        <Button onClick={() => Route("round3")}>Semis</Button>
        <Button onClick={() => Route("round4")}>3º puesto</Button>
        <Button onClick={() => Route("round5")}>Final</Button>
      </ButtonGroup>
    </div>
  );
}
