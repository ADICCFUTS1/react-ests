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
import LibertadoresButtons from "../componentes/libertadores-buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default (props) => {
  const url =
    "https://opensheet.elk.sh/1nZfTRS2udvp15treTdFyURIlEISMX08338TGvomZi4U/LibertadoresEliminatorias!A1:E10";
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
      <LibertadoresButtons />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {!todos
            ? "Cargando..."
            : todos.map((todo, index) => {
                return (
                  <TableBody>
                    <TableRow key={index}>
                      {todo.Local === undefined || todo.Local === "" ? (
                        <div></div>
                      ) : (
                        <TableCell>{todo.Local}</TableCell>
                      )}
                      {/*<TableCell>{todo.RLOCAL}</TableCell>
                      <TableCell>{todo.RVISITANTE}</TableCell>*/}
                      {todo.Visitante === undefined || todo.Visitante === "" ? (
                        <div></div>
                      ) : (
                        <TableCell>{todo.Visitante}</TableCell>
                      )}
                    </TableRow>
                  </TableBody>
                );
              })}
        </Table>
      </TableContainer>
    </div>
  );
};
