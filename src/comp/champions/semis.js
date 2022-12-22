import * as React from "react";
import { useState, useEffect } from "react";

import { NavLink, Link, withRouter } from "react-router-dom";
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
  Typography
} from "@material-ui/core";
import ChampionsButtons from "../componentes/champions-buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default (props) => {
  const url =
    "https://pirlotv3.herokuapp.com/full/app/estadisticas/json/champions-semis";
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
      <ChampionsButtons />

      <Typography variant="h5" component="h5">
        Semifinales
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/*<TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>*/}
          {!todos
            ? "Cargando..."
            : todos.map((todo, index) => {
                return (
                  <TableBody>
                    <TableRow key={index}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell>{todo.equipo1}</TableCell>
                      <TableCell>{todo.local1}</TableCell>
                      <TableCell>{todo.local2}</TableCell>
                      <TableCell>{todo.equipo2}</TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
        </Table>
      </TableContainer>
    </div>
  );
};
