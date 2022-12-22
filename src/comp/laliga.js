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
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
    "https://opensheet.elk.sh/14Qez5PEV-whvcwBvD81Q25f53086ZKs8uNunhE1giLA/LaLiga!A1:Z2074";
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
            Clasificación:
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "green", color: "white" }}
            >
              Champions League
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#f5f374", color: "black" }}
            >
              Europa League
            </Paper>
          </Grid>{" "}
          <Grid item xs={6} sm={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#e8d747", color: "black" }}
            >
              Conference League
            </Paper>
          </Grid>{" "}
          <Grid item xs={6} sm={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Descenso
            </Paper>
          </Grid>
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
                        {todo["#"] <= 4 ? (
                          <TableCell
                            style={{ backgroundColor: "green", color: "white" }}
                          >
                            {todo["#"]}
                          </TableCell>
                        ) : todo["#"] >= 5 && todo["#"] <= 6 ? (
                          <TableCell
                            style={{
                              backgroundColor: "#f5f374",
                              color: "black"
                            }}
                          >
                            {todo["#"]}
                          </TableCell>
                        ) : todo["#"] === "7" ? (
                          <TableCell
                            style={{
                              backgroundColor: "#e8d747",
                              color: "black"
                            }}
                          >
                            {todo["#"]}
                          </TableCell>
                        ) : todo["#"] >= 18 ? (
                          <TableCell
                            style={{ backgroundColor: "red", color: "white" }}
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
