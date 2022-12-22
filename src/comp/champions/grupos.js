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
import ChampionsButtons from "../componentes/champions-buttons";
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
    "https://opensheet.elk.sh/1nZfTRS2udvp15treTdFyURIlEISMX08338TGvomZi4U/Champions!A1:J59";
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
      <ChampionsButtons />
      <div>
        <div className={classes.root}>
          <Typography variant="h5" component="h5">
            Champions League: Fase de grupos.
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#00af71", color: "white" }}
            >
              Octavos de final
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
                        {todo["#"] <= 2 ? (
                          <TableCell
                            style={{
                              backgroundColor: "#00af71",
                              color: "white"
                            }}
                          >
                            {todo["#"]}
                          </TableCell>
                        ) : todo["#"] === "3" && todo["#"] <= 10 ? (
                          <TableCell
                            style={{
                              backgroundColor: "#f5f374",
                              color: "black"
                            }}
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
