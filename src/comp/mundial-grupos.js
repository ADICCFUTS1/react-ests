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
  Divider
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  customTableContainer: {
    overflowX: "initial"
  }
}));
export default (props) => {
  const url =
    "https://ptv-est1.herokuapp.com/full/app/estadisticas/json/mundialgrupos";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Button variant="outlined">Grupos</Button>

        <Button variant="outlined" disabled>
          Octavos
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Equipo</TableCell>
              <TableCell>PTS</TableCell>
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
                      {todo.numero <= 2 ? (
                        <TableCell
                          style={{ backgroundColor: "green", color: "white" }}
                        >
                          {todo.numero}
                        </TableCell>
                      ) : (
                        <TableCell>{todo.numero}</TableCell>
                      )}
                      <TableCell>{todo.equipo}</TableCell>
                      <TableCell>{todo.pts}</TableCell>
                      <TableCell>{todo.pj}</TableCell>
                      <TableCell>{todo.pg}</TableCell>
                      <TableCell>{todo.pe}</TableCell>
                      <TableCell>{todo.pp}</TableCell>
                      <TableCell>{todo.gf}</TableCell>
                      <TableCell>{todo.gc}</TableCell>
                      <TableCell>{todo.dif}</TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
          <TableFooter />
        </Table>
      </TableContainer>
      <Divider />
    </div>
  );
};
