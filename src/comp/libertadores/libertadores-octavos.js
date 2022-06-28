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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default (props) => {
  const url =
    "https://opensheet.elk.sh/1-cIOBiWukvyHioF-2dF7OUqIa7fs3JxaYva1cSiRn50/Octavos!A1:Z2074";
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {!todos
            ? "Cargando..."
            : todos.map((todo, index) => {
                return (
                  <TableBody>
                    <TableRow key={index}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell>{todo.LOCAL}</TableCell>
                      <TableCell>{todo.RLOCAL}</TableCell>
                      <TableCell>{todo.RVISITANTE}</TableCell>
                      <TableCell>{todo.VISITANTE}</TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
        </Table>
      </TableContainer>
    </div>
  );
};
