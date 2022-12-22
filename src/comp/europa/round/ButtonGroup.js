import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  buttonGroup: {
    "overflow-x": "scroll",
    "min-width": "262px",
  },
}));

export default function EuropaButtonGroup() {
  const classes = useStyles();
  let navigate = useNavigate();
  const Route = (route) => {
    let path = `/europa/${route}`;
    navigate(path, { replace: true });
  };

  return (
    <div className={classes.root}>
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => Route("round")}>16AVOS</Button>
        <Button onClick={() => Route("round2")} disabled={true}>Octavos</Button>
        <Button onClick={() => Route("round3")} disabled={true}>Cuartos</Button>
        <Button onClick={() => Route("round4")} disabled={true}>Semis</Button>
        <Button onClick={() => Route("round5")} disabled={true}>Final</Button>
      </ButtonGroup>
    </div>
  );
}
