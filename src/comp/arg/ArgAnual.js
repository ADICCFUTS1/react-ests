import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableContainer,
  Paper,
  Button,
  Divider,
  IconButton
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import Typography from "@material-ui/core/Typography";
import ArgButtons from "../componentes/arg-buttons";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  customTableContainer: {
    overflowX: "initial"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));
export default (props) => {
  const classes = useStyles();

  const url =
    "https://opensheet.elk.sh/14Qez5PEV-whvcwBvD81Q25f53086ZKs8uNunhE1giLA/LPF!A31:J59";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={classes.root}>
      <ArgButtons />
      <div>
        <div className={classes.root}>
          <IconButton
            onClick={refreshPage}
            aria-label="delete"
            className={classes.margin}
          >
            <RefreshIcon fontSize="small" />
          </IconButton>
          <Typography variant="h5" component="h5">
            Tabla Anual (Clasificación a copas):
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#00af71", color: "white" }}
            >
              Conmebol Libertadores
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "green", color: "white" }}
            >
              Ya clasificado a Libertadores
            </Paper>
          </Grid>{" "}
          <Grid item xs={6} sm={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#f5f374", color: "black" }}
            >
              Conmebol Sudamericana
            </Paper>
          </Grid>{" "}
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Equipo</TableCell>
                <TableCell>Pts</TableCell>
                <TableCell>PJ</TableCell>
                <TableCell>PG</TableCell>
                <TableCell>PE</TableCell>
                <TableCell>PP</TableCell>
                <TableCell>GF</TableCell>
                <TableCell>GC</TableCell>
                <TableCell>DIF</TableCell>
              </TableRow>
            </TableHead>
            {!todos
              ? "Cargando..."
              : todos.map((todo, index) => {
                  return (
                    <TableBody>
                      <TableRow key={index}>
                        {todo["#"] <= 5 && todo.Equipo !== "Boca Juniors" ? (
                          <TableCell
                            style={{
                              backgroundColor: "#00af71",
                              color: "white"
                            }}
                          >
                            {todo["#"]}
                          </TableCell>
                        ) : todo["#"] >= 5 &&
                          todo["#"] <= 10 &&
                          todo.Equipo !== "Boca Juniors" ? (
                          <TableCell
                            style={{
                              backgroundColor: "#f5f374",
                              color: "black"
                            }}
                          >
                            {todo["#"]}
                          </TableCell>
                        ) : todo.Equipo === "Boca Juniors" ? (
                          <TableCell
                            style={{ backgroundColor: "green", color: "white" }}
                          >
                            {todo["#"]}
                          </TableCell>
                        ) : (
                          <TableCell>{todo["#"]}</TableCell>
                        )}
                        <TableCell>{todo.Equipo}</TableCell>
                        <TableCell>{todo.Pts}</TableCell>
                        <TableCell>{todo.PJ}</TableCell>
                        <TableCell>{todo.PG}</TableCell>
                        <TableCell>{todo.PE}</TableCell>
                        <TableCell>{todo.PP}</TableCell>
                        <TableCell>{todo.GF}</TableCell>
                        <TableCell>{todo.GC}</TableCell>
                        <TableCell>{todo.DIF}</TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })}

            <TableFooter />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
